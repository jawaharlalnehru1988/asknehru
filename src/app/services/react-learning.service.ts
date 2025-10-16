import { Injectable, signal, computed, effect } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// Interfaces matching NestJS MongoDB schema
export interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ReactTopic {
  topicId?: string; // MongoDB uses topicId
  id?: string; // For frontend compatibility
  title: string;
  description: string;
  estimatedTime?: string;
  isCompleted?: boolean;
  htmlContent?: string;
  mcqContent?: MCQQuestion[];
}

export interface ReactLearningSection {
  _id?: string; // MongoDB ObjectId
  sectionId: string; // Custom section identifier
  id?: string; // For frontend compatibility
  level: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
  gradient: string;
  topics: ReactTopic[];
  expanded?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LevelStats {
  level: string;
  totalSections: number;
  totalTopics: number;
  completedTopics: number;
  progressPercentage: number;
  sections: Array<{
    sectionId: string;
    title: string;
    totalTopics: number;
    completedTopics: number;
  }>;
}

export interface UserProgress {
  userId?: string;
  completedTopics: string[]; // Array of topic IDs
  lastUpdated: Date;
  totalTimeSpent?: number; // in minutes
}

export interface LearningStats {
  totalTopics: number;
  completedTopics: number;
  progressPercentage: number;
  sectionProgress: Map<string, number>;
}

@Injectable({
  providedIn: 'root'
})
export class ReactLearningService {
  private apiUrl = `${environment.apiBaseUrl}/react-learning`;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Bypass-Tunnel-Reminder': 'true'
    })
  };

  // Signals for reactive state management
  private learningPathSignal = signal<ReactLearningSection[]>([]);
  private completedTopicsSignal = signal<Set<string>>(new Set());
  private searchQuerySignal = signal<string>('');
  private selectedLevelsSignal = signal<Set<string>>(new Set(['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Professional']));

  // Computed signals
  readonly learningPath = this.learningPathSignal.asReadonly();
  readonly completedTopics = this.completedTopicsSignal.asReadonly();
  readonly searchQuery = this.searchQuerySignal.asReadonly();
  readonly selectedLevels = this.selectedLevelsSignal.asReadonly();

  // Computed statistics
  readonly stats = computed<LearningStats>(() => {
    const sections = this.learningPathSignal();
    const completed = this.completedTopicsSignal();
    
    const totalTopics = sections.reduce((sum, section) => sum + section.topics.length, 0);
    const completedCount = completed.size;
    const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    
    const sectionProgress = new Map<string, number>();
    sections.forEach(section => {
      const sectionCompleted = section.topics.filter(t => t.id && completed.has(t.id)).length;
      const percentage = section.topics.length > 0 
        ? Math.round((sectionCompleted / section.topics.length) * 100) 
        : 0;
      const sectionKey = section.id || section.sectionId;
      if (sectionKey) {
        sectionProgress.set(sectionKey, percentage);
      }
    });

    return {
      totalTopics,
      completedTopics: completedCount,
      progressPercentage,
      sectionProgress
    };
  });

  // Filtered learning path based on search and level filters
  readonly filteredLearningPath = computed<ReactLearningSection[]>(() => {
    const sections = this.learningPathSignal();
    const query = this.searchQuerySignal().toLowerCase().trim();
    const levels = this.selectedLevelsSignal();

    if (!query && levels.size === 5) {
      return sections;
    }

    return sections
      .filter(section => levels.has(section.level))
      .map(section => {
        if (!query) {
          return section;
        }

        // Filter topics based on search query
        const filteredTopics = section.topics.filter(topic => 
          topic.title.toLowerCase().includes(query) ||
          topic.description.toLowerCase().includes(query) ||
          section.title.toLowerCase().includes(query)
        );

        // If section title matches or has matching topics, include it
        if (section.title.toLowerCase().includes(query) || 
            section.description.toLowerCase().includes(query) ||
            filteredTopics.length > 0) {
          return {
            ...section,
            topics: filteredTopics.length > 0 ? filteredTopics : section.topics,
            expanded: filteredTopics.length > 0 // Auto-expand if topics match
          };
        }

        return null;
      })
      .filter(section => section !== null) as ReactLearningSection[];
  });

  // LocalStorage key for progress persistence
  private readonly STORAGE_KEY = 'react-learning-progress';
  private readonly STORAGE_EXPIRY_DAYS = 365;

  constructor(private http: HttpClient) {
    // Load progress from localStorage on initialization
    this.loadProgressFromStorage();

    // Auto-save progress whenever completed topics change
    effect(() => {
      const completed = this.completedTopicsSignal();
      this.saveProgressToStorage(Array.from(completed));
    });
  }

  // ============================================
  // API Methods (NestJS + MongoDB Backend)
  // ============================================

  /**
   * 1. Get all learning sections
   * GET /react-learning
   */
  getAllLearningSections(): Observable<ReactLearningSection[]> {
    return this.http.get<ReactLearningSection[]>(this.apiUrl, this.httpOptions)
      .pipe(
        tap(sections => {
          // Normalize data for frontend compatibility (preserve _id for API calls)
          const normalized = sections.map(s => ({
            ...s,
            _id: s._id,  // Preserve MongoDB _id for API calls
            id: s.sectionId || s._id,  // Use sectionId as id, fallback to _id
            topics: s.topics.map(t => ({ 
              ...t, 
              topicId: t.topicId,  // Preserve topicId for API calls
              id: t.topicId || t.id 
            }))
          }));
          this.learningPathSignal.set(normalized);
        })
      );
  }

  /**
   * 2. Get sections by level
   * GET /react-learning/level/:level
   */
  getSectionsByLevel(level: string): Observable<ReactLearningSection[]> {
    return this.http.get<ReactLearningSection[]>(
      `${this.apiUrl}/level/${level}`, 
      this.httpOptions
    ).pipe(
      map(sections => sections.map(s => ({
        ...s,
        _id: s._id,  // Preserve MongoDB _id
        id: s.sectionId || s._id,
        topics: s.topics.map(t => ({ 
          ...t, 
          topicId: t.topicId,  // Preserve topicId
          id: t.topicId || t.id 
        }))
      })))
    );
  }

  /**
   * 3. Get level statistics
   * GET /react-learning/level/:level/stats
   */
  getLevelStats(level: string): Observable<LevelStats> {
    return this.http.get<LevelStats>(
      `${this.apiUrl}/level/${level}/stats`, 
      this.httpOptions
    );
  }

  /**
   * 4. Get section by sectionId
   * GET /react-learning/section/:sectionId
   */
  getSectionBySectionId(sectionId: string): Observable<ReactLearningSection> {
    return this.http.get<ReactLearningSection>(
      `${this.apiUrl}/section/${sectionId}`, 
      this.httpOptions
    ).pipe(
      map(section => ({
        ...section,
        _id: section._id,
        id: section.sectionId || section._id,
        topics: section.topics.map(t => ({ 
          ...t, 
          topicId: t.topicId,
          id: t.topicId || t.id 
        }))
      }))
    );
  }

  /**
   * 5. Get section by MongoDB ObjectId
   * GET /react-learning/:id
   */
  getSectionById(id: string): Observable<ReactLearningSection> {
    return this.http.get<ReactLearningSection>(
      `${this.apiUrl}/${id}`, 
      this.httpOptions
    ).pipe(
      map(section => ({
        ...section,
        _id: section._id,
        id: section.sectionId || section._id,
        topics: section.topics.map(t => ({ 
          ...t, 
          topicId: t.topicId,
          id: t.topicId || t.id 
        }))
      }))
    );
  }

  /**
   * 6. Get all topics in a section
   * GET /react-learning/:id/topics
   */
  getAllTopicsInSection(sectionId: string): Observable<ReactTopic[]> {
    return this.http.get<ReactTopic[]>(
      `${this.apiUrl}/${sectionId}/topics`, 
      this.httpOptions
    ).pipe(
      map(topics => topics.map(t => ({ 
        ...t, 
        topicId: t.topicId,
        id: t.topicId || t.id 
      })))
    );
  }

  /**
   * 7. Get specific topic with content
   * GET /react-learning/:id/topics/:topicId
   */
  getTopic(sectionId: string, topicId: string): Observable<ReactTopic> {
    return this.http.get<ReactTopic>(
      `${this.apiUrl}/${sectionId}/topics/${topicId}`, 
      this.httpOptions
    ).pipe(
      map(topic => ({ 
        ...topic, 
        topicId: topic.topicId,
        id: topic.topicId || topic.id 
      }))
    );
  }

  /**
   * 8. Mark topic as completed
   * PATCH /react-learning/:id/topics/:topicId/complete
   */
  markTopicAsCompleted(sectionId: string, topicId: string): Observable<ReactLearningSection> {
    return this.http.patch<ReactLearningSection>(
      `${this.apiUrl}/${sectionId}/topics/${topicId}/complete`, 
      {}, 
      this.httpOptions
    ).pipe(
      tap(section => {
        // Update local signal state
        this.markTopicCompleted(topicId);
      }),
      map(section => ({
        ...section,
        _id: section._id,
        id: section.sectionId || section._id,
        topics: section.topics.map(t => ({ 
          ...t, 
          topicId: t.topicId,
          id: t.topicId || t.id 
        }))
      }))
    );
  }

  /**
   * 9. Update learning section
   * PATCH /react-learning/:id
   */
  updateSection(sectionId: string, updateData: Partial<ReactLearningSection>): Observable<ReactLearningSection> {
    return this.http.patch<ReactLearningSection>(
      `${this.apiUrl}/${sectionId}`, 
      updateData, 
      this.httpOptions
    ).pipe(
      map(section => ({
        ...section,
        _id: section._id,
        id: section.sectionId || section._id,
        topics: section.topics.map(t => ({ 
          ...t, 
          topicId: t.topicId,
          id: t.topicId || t.id 
        }))
      }))
    );
  }

  /**
   * Fetch user progress from backend (if you have user progress endpoint)
   */
  fetchUserProgress(userId: string): Observable<UserProgress> {
    return this.http.get<UserProgress>(`${this.apiUrl}/progress/${userId}`, this.httpOptions)
      .pipe(
        tap(progress => {
          this.completedTopicsSignal.set(new Set(progress.completedTopics));
        })
      );
  }

  /**
   * Save user progress to backend (if you have user progress endpoint)
   */
  saveUserProgress(userId: string, completedTopics: string[]): Observable<UserProgress> {
    const progress: UserProgress = {
      userId,
      completedTopics,
      lastUpdated: new Date()
    };
    
    return this.http.post<UserProgress>(`${this.apiUrl}/progress`, progress, this.httpOptions);
  }

  // ============================================
  // Local State Management Methods
  // ============================================

  /**
   * Set the learning path data
   */
  setLearningPath(sections: ReactLearningSection[]): void {
    this.learningPathSignal.set(sections);
  }

  /**
   * Toggle topic completion status
   */
  toggleTopicCompletion(topicId: string): void {
    const completed = new Set(this.completedTopicsSignal());
    
    if (completed.has(topicId)) {
      completed.delete(topicId);
    } else {
      completed.add(topicId);
    }
    
    this.completedTopicsSignal.set(completed);
  }

  /**
   * Mark topic as completed
   */
  markTopicCompleted(topicId: string): void {
    const completed = new Set(this.completedTopicsSignal());
    completed.add(topicId);
    this.completedTopicsSignal.set(completed);
  }

  /**
   * Mark topic as incomplete
   */
  markTopicIncomplete(topicId: string): void {
    const completed = new Set(this.completedTopicsSignal());
    completed.delete(topicId);
    this.completedTopicsSignal.set(completed);
  }

  /**
   * Check if a topic is completed
   */
  isTopicCompleted(topicId: string): boolean {
    return this.completedTopicsSignal().has(topicId);
  }

  /**
   * Reset all progress
   */
  resetProgress(): void {
    this.completedTopicsSignal.set(new Set());
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Toggle section expansion
   */
  toggleSectionExpansion(sectionId: string): void {
    const sections = this.learningPathSignal();
    const updatedSections = sections.map(section => 
      section.id === sectionId 
        ? { ...section, expanded: !section.expanded }
        : section
    );
    this.learningPathSignal.set(updatedSections);
  }

  /**
   * Expand all sections
   */
  expandAllSections(): void {
    const sections = this.learningPathSignal();
    const updatedSections = sections.map(section => ({ ...section, expanded: true }));
    this.learningPathSignal.set(updatedSections);
  }

  /**
   * Collapse all sections
   */
  collapseAllSections(): void {
    const sections = this.learningPathSignal();
    const updatedSections = sections.map(section => ({ ...section, expanded: false }));
    this.learningPathSignal.set(updatedSections);
  }

  // ============================================
  // Search & Filter Methods
  // ============================================

  /**
   * Set search query
   */
  setSearchQuery(query: string): void {
    this.searchQuerySignal.set(query);
  }

  /**
   * Clear search query
   */
  clearSearch(): void {
    this.searchQuerySignal.set('');
  }

  /**
   * Toggle level filter
   */
  toggleLevelFilter(level: string): void {
    const levels = new Set(this.selectedLevelsSignal());
    
    if (levels.has(level)) {
      levels.delete(level);
    } else {
      levels.add(level);
    }
    
    this.selectedLevelsSignal.set(levels);
  }

  /**
   * Set level filters
   */
  setLevelFilters(levels: string[]): void {
    this.selectedLevelsSignal.set(new Set(levels));
  }

  /**
   * Reset filters to show all
   */
  resetFilters(): void {
    this.searchQuerySignal.set('');
    this.selectedLevelsSignal.set(new Set(['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Professional']));
  }

  // ============================================
  // LocalStorage Persistence Methods
  // ============================================

  /**
   * Save progress to localStorage
   */
  private saveProgressToStorage(completedTopics: string[]): void {
    try {
      const progress: UserProgress = {
        completedTopics,
        lastUpdated: new Date()
      };

      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + this.STORAGE_EXPIRY_DAYS);

      const storageData = {
        progress,
        expiry: expiryDate.toISOString()
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storageData));
    } catch (error) {
      console.error('Error saving progress to localStorage:', error);
    }
  }

  /**
   * Load progress from localStorage
   */
  private loadProgressFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      
      if (!stored) {
        return;
      }

      const storageData = JSON.parse(stored);
      
      // Check expiry
      const expiryDate = new Date(storageData.expiry);
      if (expiryDate < new Date()) {
        localStorage.removeItem(this.STORAGE_KEY);
        return;
      }

      const progress: UserProgress = storageData.progress;
      this.completedTopicsSignal.set(new Set(progress.completedTopics));
      
      console.log(`Loaded ${progress.completedTopics.length} completed topics from localStorage`);
    } catch (error) {
      console.error('Error loading progress from localStorage:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Export progress as JSON
   */
  exportProgress(): string {
    const completed = Array.from(this.completedTopicsSignal());
    const stats = this.stats();
    
    const exportData = {
      completedTopics: completed,
      stats,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };

    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Import progress from JSON
   */
  importProgress(jsonData: string): boolean {
    try {
      const importData = JSON.parse(jsonData);
      
      if (!importData.completedTopics || !Array.isArray(importData.completedTopics)) {
        throw new Error('Invalid progress data format');
      }

      this.completedTopicsSignal.set(new Set(importData.completedTopics));
      console.log(`Imported ${importData.completedTopics.length} completed topics`);
      
      return true;
    } catch (error) {
      console.error('Error importing progress:', error);
      return false;
    }
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * Get section progress percentage
   */
  getSectionProgress(sectionId: string): number {
    return this.stats().sectionProgress.get(sectionId) || 0;
  }

  /**
   * Get next incomplete topic
   */
  getNextIncompleteTopic(): { section: ReactLearningSection; topic: ReactTopic } | null {
    const sections = this.learningPathSignal();
    const completed = this.completedTopicsSignal();

    for (const section of sections) {
      for (const topic of section.topics) {
        const topicId = topic.id || topic.topicId;
        if (topicId && !completed.has(topicId)) {
          return { section, topic };
        }
      }
    }

    return null;
  }

  /**
   * Get completion rate by difficulty level
   */
  getCompletionByLevel(): Map<string, { completed: number; total: number; percentage: number }> {
    const sections = this.learningPathSignal();
    const completed = this.completedTopicsSignal();
    const levelStats = new Map<string, { completed: number; total: number; percentage: number }>();

    sections.forEach(section => {
      if (!levelStats.has(section.level)) {
        levelStats.set(section.level, { completed: 0, total: 0, percentage: 0 });
      }

      const stats = levelStats.get(section.level)!;
      stats.total += section.topics.length;
      stats.completed += section.topics.filter(t => {
        const topicId = t.id || t.topicId;
        return topicId && completed.has(topicId);
      }).length;
      stats.percentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
    });

    return levelStats;
  }

  /**
   * Get estimated time remaining (in minutes)
   */
  getEstimatedTimeRemaining(): number {
    const sections = this.learningPathSignal();
    const completed = this.completedTopicsSignal();
    let totalMinutes = 0;

    sections.forEach(section => {
      section.topics.forEach(topic => {
        const topicId = topic.id || topic.topicId;
        if (topicId && !completed.has(topicId) && topic.estimatedTime) {
          // Parse time string like "2 hours", "30 min", "1.5 hours"
          const timeStr = topic.estimatedTime.toLowerCase();
          const hours = timeStr.match(/(\d+\.?\d*)\s*hour/);
          const mins = timeStr.match(/(\d+)\s*min/);

          if (hours) {
            totalMinutes += parseFloat(hours[1]) * 60;
          } else if (mins) {
            totalMinutes += parseInt(mins[1]);
          }
        }
      });
    });

    return totalMinutes;
  }
}
