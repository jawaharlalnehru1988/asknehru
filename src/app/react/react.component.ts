import { Component, OnInit, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { ReactLearningService, ReactLearningSection, ReactTopic } from '../services/react-learning.service';

@Component({
  selector: 'app-react',
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule
  ],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent implements OnInit {
  // Loading states
  isLoading = false;
  loadingError: string | null = null;

  // Search and filter
  searchQuery = '';
  selectedLevels: string[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Professional'];
  availableLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Professional'];

  // Signals from service
  reactLearningPath = computed(() => this.reactLearningService.filteredLearningPath());
  stats = computed(() => this.reactLearningService.stats());

  constructor(public reactLearningService: ReactLearningService) {
    // Auto-sync search query
    effect(() => {
      this.reactLearningService.setSearchQuery(this.searchQuery);
    });

    // Auto-sync level filters
    effect(() => {
      this.reactLearningService.setLevelFilters(this.selectedLevels);
    });
  }

  ngOnInit(): void {
    this.loadLearningSections();
  }

  // Load all learning sections from API
  loadLearningSections(): void {
    this.isLoading = true;
    this.loadingError = null;

    this.reactLearningService.getAllLearningSections().subscribe({
      next: (sections) => {
        console.log('✅ Loaded React learning sections:', sections.length);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Error loading React sections:', error);
        this.loadingError = 'Failed to load learning content. Please try again.';
        this.isLoading = false;
      }
    });
  }

  // Get sections by specific level
  loadSectionsByLevel(level: string): void {
    this.isLoading = true;
    this.reactLearningService.getSectionsByLevel(level).subscribe({
      next: (sections) => {
        console.log(`✅ Loaded ${level} sections:`, sections.length);
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`❌ Error loading ${level} sections:`, error);
        this.isLoading = false;
      }
    });
  }

  // Computed properties using signals
  get totalTopics(): number {
    return this.stats().totalTopics;
  }

  get completedTopics(): number {
    return this.stats().completedTopics;
  }

  get progressPercentage(): number {
    return this.stats().progressPercentage;
  }

  // Toggle section expansion
  toggleSection(sectionId: string): void {
    this.reactLearningService.toggleSectionExpansion(sectionId);
  }

  // Toggle topic completion (also syncs with backend)
  toggleTopicCompletion(section: ReactLearningSection, topic: ReactTopic, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevent section toggle
    }

    // Use id for local state, topicId for API calls
    const localTopicId = topic.id || topic.topicId;
    const apiTopicId = topic.topicId || topic.id;
    const sectionMongoId = section._id;

    if (!localTopicId || !apiTopicId || !sectionMongoId) {
      console.warn('Missing topic or section ID', { localTopicId, apiTopicId, sectionMongoId });
      return;
    }

    // Optimistic update (local state)
    this.reactLearningService.toggleTopicCompletion(localTopicId);

    // If marking as completed, sync with backend
    if (!this.reactLearningService.isTopicCompleted(localTopicId)) {
      return; // Already completed, no backend call needed
    }

    // Sync with backend (use MongoDB _id and topicId)
    this.reactLearningService.markTopicAsCompleted(sectionMongoId, apiTopicId).subscribe({
      next: (updatedSection) => {
        console.log('✅ Topic marked as completed:', apiTopicId);
      },
      error: (error) => {
        console.error('❌ Error marking topic as completed:', error);
        // Revert optimistic update on error
        this.reactLearningService.toggleTopicCompletion(localTopicId);
        alert('Failed to save progress. Please try again.');
      }
    });
  }

  // Get section progress
  getSectionProgress(section: ReactLearningSection): number {
    const sectionKey = section.id || section.sectionId;
    return sectionKey ? this.reactLearningService.getSectionProgress(sectionKey) : 0;
  }

  // View topic details
  viewTopicDetails(section: ReactLearningSection, topic: ReactTopic, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    const sectionId = section._id;
    const topicId = topic.topicId || topic.id;

    if (!sectionId || !topicId) {
      console.warn('Missing section or topic ID');
      return;
    }

    // Fetch full topic details with HTML content and MCQs
    this.reactLearningService.getTopic(sectionId, topicId).subscribe({
      next: (fullTopic) => {
        console.log('📖 Topic Details:', fullTopic);
        // TODO: Open modal or navigate to topic detail page
        // You can show fullTopic.htmlContent in a modal
        // And display fullTopic.mcqContent for quizzes
        alert(`Topic: ${fullTopic.title}\n\nHTML Content Available: ${!!fullTopic.htmlContent}\nMCQ Questions: ${fullTopic.mcqContent?.length || 0}`);
      },
      error: (error) => {
        console.error('❌ Error loading topic details:', error);
        alert('Failed to load topic details.');
      }
    });
  }

  // Search functionality
  onSearchChange(): void {
    this.reactLearningService.setSearchQuery(this.searchQuery);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.reactLearningService.clearSearch();
  }

  // Filter by level
  onLevelFilterChange(): void {
    this.reactLearningService.setLevelFilters(this.selectedLevels);
  }

  toggleLevelFilter(level: string): void {
    const index = this.selectedLevels.indexOf(level);
    if (index > -1) {
      this.selectedLevels.splice(index, 1);
    } else {
      this.selectedLevels.push(level);
    }
    this.onLevelFilterChange();
  }

  // Reset all filters
  resetFilters(): void {
    this.searchQuery = '';
    this.selectedLevels = [...this.availableLevels];
    this.reactLearningService.resetFilters();
  }

  // Expand/Collapse all sections
  expandAll(): void {
    this.reactLearningService.expandAllSections();
  }

  collapseAll(): void {
    this.reactLearningService.collapseAllSections();
  }

  // Reset all progress
  resetProgress(): void {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      this.reactLearningService.resetProgress();
      alert('Progress has been reset.');
    }
  }

  // Export progress
  exportProgress(): void {
    const progressJson = this.reactLearningService.exportProgress();
    const blob = new Blob([progressJson], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `react-learning-progress-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  // Get estimated time remaining
  getEstimatedTimeRemaining(): string {
    const minutes = this.reactLearningService.getEstimatedTimeRemaining();
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) {
      return `${mins} minutes`;
    } else if (mins === 0) {
      return `${hours} hours`;
    } else {
      return `${hours}h ${mins}m`;
    }
  }

  // Get next incomplete topic
  getNextTopic(): void {
    const next = this.reactLearningService.getNextIncompleteTopic();
    if (next) {
      alert(`Next topic: ${next.topic.title} in ${next.section.title}`);
      // TODO: Navigate to topic or expand section
      this.reactLearningService.toggleSectionExpansion(next.section.sectionId);
    } else {
      alert('🎉 All topics completed!');
    }
  }

  // Menu actions
  loadBeginner(): void {
    this.selectedLevels = ['Beginner'];
    this.onLevelFilterChange();
  }

  loadIntermediate(): void {
    this.selectedLevels = ['Intermediate'];
    this.onLevelFilterChange();
  }

  loadAdvanced(): void {
    this.selectedLevels = ['Advanced'];
    this.onLevelFilterChange();
  }

  loadAll(): void {
    this.selectedLevels = [...this.availableLevels];
    this.onLevelFilterChange();
  }

  // Refresh data from server
  refreshData(): void {
    this.loadLearningSections();
  }
}
