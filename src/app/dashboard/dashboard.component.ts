import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

export interface SubtopicScoreItem {
  id: number;
  subtopicId: number;
  subTopicName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  readiness: 'READY' | 'PRACTICING' | 'NEEDS_WORK';
  completedAt: string | Date;
  roadmapId: number;
  mainTopic: string;
  chapterName: string;
}

export interface ChapterScoreGroup {
  chapterName: string;
  subtopics: SubtopicScoreItem[];
  totalScore: number;
  totalQuestions: number;
  average: number;
}

export interface RoadmapScoreGroup {
  roadmapId: number | string;
  mainTopic: string;
  chapters: { [chapterName: string]: ChapterScoreGroup };
  chaptersList: ChapterScoreGroup[];
  totalScore: number;
  totalQuestions: number;
  average: number;
  subtopicsCount: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  scores: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  currentUser: any = null;
  isSuperAdmin: boolean = false;
  usersList: any[] = [];
  selectedUserId: number | null = null;
  selectedUserEmail: string = '';

  // Metric aggregates
  totalQuestionsAttempted: number = 0;
  totalQuestionsCorrect: number = 0;
  overallReadiness: number = 0;
  masteredSubtopicsCount: number = 0;
  roadmapsCount: number = 0;

  // Hierarchical grouped data
  roadmapScores: { [key: string]: RoadmapScoreGroup } = {};
  filteredRoadmapList: RoadmapScoreGroup[] = [];

  // Filters
  searchQuery: string = '';
  selectedRoadmapFilter: string = 'ALL';
  selectedReadinessFilter: string = 'ALL';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.currentUser = this.apiService.getCurrentUser();
    this.isSuperAdmin = this.apiService.isSuperAdmin();
    this.selectedUserEmail = this.currentUser?.email || '';

    if (this.isSuperAdmin) {
      this.loadUsersList();
    }
    this.loadScores();
  }

  loadUsersList() {
    this.apiService.getUsers().subscribe({
      next: (users) => {
        this.usersList = users || [];
      },
      error: (err) => {
        console.warn('Failed to fetch user list for admin switcher:', err);
      }
    });
  }

  onUserSelect(event: any) {
    const val = event.target.value;
    const userId = val ? +val : null;
    this.selectedUserId = userId;
    if (userId) {
      const u = this.usersList.find(x => x.id === userId);
      this.selectedUserEmail = u ? (u.email || u.username) : `User #${userId}`;
    } else {
      this.selectedUserEmail = this.currentUser?.email || 'Current User';
    }
    this.loadScores(this.selectedUserId || undefined);
  }

  loadScores(targetUserId?: number) {
    this.loading = true;
    this.error = null;
    this.apiService.getUserScores(targetUserId).subscribe({
      next: (data) => {
        this.scores = data || [];
        this.aggregateScores();
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching scores:', err);
        this.error = 'Failed to load scoreboard data. Please ensure you are signed in.';
        this.loading = false;
      }
    });
  }

  aggregateScores() {
    this.roadmapScores = {};
    this.totalQuestionsAttempted = 0;
    this.totalQuestionsCorrect = 0;
    this.masteredSubtopicsCount = 0;

    for (const score of this.scores) {
      const roadmapId = score.roadmapId || 0;
      const mainTopic = score.mainTopic || 'General Roadmap';
      const chapterName = score.chapterName || 'General Topics';
      const subTopicName = score.subTopicName || 'General Subtopic';
      const totalQ = score.totalQuestions || 1;
      const scoreVal = score.score || 0;
      const pct = Math.round((scoreVal / totalQ) * 100);

      this.totalQuestionsAttempted += totalQ;
      this.totalQuestionsCorrect += scoreVal;
      if (pct >= 80) {
        this.masteredSubtopicsCount++;
      }

      let readiness: 'READY' | 'PRACTICING' | 'NEEDS_WORK' = 'NEEDS_WORK';
      if (pct >= 80) readiness = 'READY';
      else if (pct >= 50) readiness = 'PRACTICING';

      const item: SubtopicScoreItem = {
        id: score.id,
        subtopicId: score.subtopicId,
        subTopicName,
        score: scoreVal,
        totalQuestions: totalQ,
        percentage: pct,
        readiness,
        completedAt: score.completedAt,
        roadmapId,
        mainTopic,
        chapterName
      };

      if (!this.roadmapScores[roadmapId]) {
        this.roadmapScores[roadmapId] = {
          roadmapId,
          mainTopic,
          chapters: {},
          chaptersList: [],
          totalScore: 0,
          totalQuestions: 0,
          average: 0,
          subtopicsCount: 0
        };
      }

      const rmGroup = this.roadmapScores[roadmapId];
      rmGroup.totalScore += scoreVal;
      rmGroup.totalQuestions += totalQ;
      rmGroup.subtopicsCount++;

      if (!rmGroup.chapters[chapterName]) {
        rmGroup.chapters[chapterName] = {
          chapterName,
          subtopics: [],
          totalScore: 0,
          totalQuestions: 0,
          average: 0
        };
      }

      const chGroup = rmGroup.chapters[chapterName];
      chGroup.subtopics.push(item);
      chGroup.totalScore += scoreVal;
      chGroup.totalQuestions += totalQ;
    }

    // Compute averages
    for (const rId in this.roadmapScores) {
      const rm = this.roadmapScores[rId];
      rm.average = rm.totalQuestions > 0 ? Math.round((rm.totalScore / rm.totalQuestions) * 100) : 0;
      rm.chaptersList = Object.values(rm.chapters);
      for (const ch of rm.chaptersList) {
        ch.average = ch.totalQuestions > 0 ? Math.round((ch.totalScore / ch.totalQuestions) * 100) : 0;
      }
    }

    this.roadmapsCount = Object.keys(this.roadmapScores).length;
    this.overallReadiness = this.totalQuestionsAttempted > 0
      ? Math.round((this.totalQuestionsCorrect / this.totalQuestionsAttempted) * 100)
      : 0;
  }

  applyFilters() {
    let list: RoadmapScoreGroup[] = Object.values(this.roadmapScores);

    // Filter by Roadmap
    if (this.selectedRoadmapFilter !== 'ALL') {
      list = list.filter(rm => String(rm.roadmapId) === this.selectedRoadmapFilter);
    }

    // Filter by Readiness or search within subtopics
    const query = this.searchQuery.trim().toLowerCase();
    const readinessFilter = this.selectedReadinessFilter;

    if (query || readinessFilter !== 'ALL') {
      list = list.map(rm => {
        const filteredChapters: ChapterScoreGroup[] = [];
        for (const ch of rm.chaptersList) {
          const matchedSubtopics = ch.subtopics.filter(sub => {
            const matchesQuery = !query ||
              sub.subTopicName.toLowerCase().includes(query) ||
              ch.chapterName.toLowerCase().includes(query) ||
              rm.mainTopic.toLowerCase().includes(query);

            const matchesReadiness = readinessFilter === 'ALL' ||
              (readinessFilter === 'READY' && sub.percentage >= 80) ||
              (readinessFilter === 'PRACTICING' && sub.percentage >= 50 && sub.percentage < 80) ||
              (readinessFilter === 'NEEDS_WORK' && sub.percentage < 50);

            return matchesQuery && matchesReadiness;
          });

          if (matchedSubtopics.length > 0) {
            filteredChapters.push({
              ...ch,
              subtopics: matchedSubtopics
            });
          }
        }

        return {
          ...rm,
          chaptersList: filteredChapters
        };
      }).filter(rm => rm.chaptersList.length > 0);
    }

    this.filteredRoadmapList = list;
  }

  getReadinessBadge(percentage: number): { label: string; class: string; desc: string } {
    if (percentage >= 80) {
      return {
        label: 'Senior / Production Ready',
        class: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
        desc: 'Interview Ready'
      };
    } else if (percentage >= 65) {
      return {
        label: 'Mid-Senior / Solid Ground',
        class: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
        desc: 'Practicing & Strong'
      };
    } else if (percentage >= 50) {
      return {
        label: 'Developing / Revise Details',
        class: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
        desc: 'Needs Practice'
      };
    } else {
      return {
        label: 'Needs Fundamental Review',
        class: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
        desc: 'Needs Attention'
      };
    }
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
