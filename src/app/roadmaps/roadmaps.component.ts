import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Project } from '../home/homejson';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';
import { forkJoin } from 'rxjs';
import Fuse, { IFuseOptions } from 'fuse.js';

@Component({
  selector: 'app-roadmaps',
  templateUrl: './roadmaps.component.html',
  styleUrls: ['./roadmaps.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ]
})
export class RoadmapsComponent implements OnInit {
  blogArticleData: Project[] = [];
  technicalRoadmaps: Project[] = [];
  nonTechnicalRoadmaps: Project[] = [];
  commonRoadmaps: Project[] = [];
  loading: boolean = true;

  // Fuse.js search state
  searchQuery: string = '';
  fuseInstance: Fuse<Project> | null = null;
  isSearching: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.authState$.subscribe(() => {
      this.loadRoadmaps();
    });
  }

  initFuse() {
    const options: IFuseOptions<Project> = {
      keys: [
        { name: 'PName', weight: 0.45 },
        { name: 'chapterTitles', weight: 0.3 },
        { name: 'subtopicTitles', weight: 0.2 },
        { name: 'intro', weight: 0.05 }
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2
    };
    this.fuseInstance = new Fuse(this.blogArticleData, options);
  }

  onSearchChange(query: string) {
    const trimmed = (query || '').trim();
    this.searchQuery = trimmed;

    if (!trimmed) {
      this.isSearching = false;
      this.groupRoadmaps();
      return;
    }

    this.isSearching = true;
    if (this.fuseInstance) {
      const results = this.fuseInstance.search(trimmed);
      const matched = results.map(r => r.item);
      this.technicalRoadmaps = matched.filter(r => r.category === 'TECHNICAL');
      this.nonTechnicalRoadmaps = matched.filter(r => r.category === 'NON_TECHNICAL');
      this.commonRoadmaps = matched.filter(r => r.category === 'COMMON');
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.isSearching = false;
    this.groupRoadmaps();
  }

  get searchResultsCount(): number {
    return this.technicalRoadmaps.length + this.nonTechnicalRoadmaps.length + this.commonRoadmaps.length;
  }

  groupRoadmaps() {
    const sorted = [...this.blogArticleData].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    this.technicalRoadmaps = sorted.filter(r => r.category === 'TECHNICAL');
    this.nonTechnicalRoadmaps = sorted.filter(r => r.category === 'NON_TECHNICAL');
    this.commonRoadmaps = sorted.filter(r => r.category === 'COMMON');
  }

  loadRoadmaps() {
    this.loading = true;
    this.apiService.getRoadmaps().subscribe({
      next: (roadmaps) => {
        const token = localStorage.getItem('token');
        let isSuperAdmin = false;
        if (token) {
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const email = payload.email || payload.sub;
            if (email === 'jawaharlalnehru@gmail.com' || payload.role === 'Super Admin') {
              isSuperAdmin = true;
            }
          } catch (e) {}
        }

        let filteredRoadmaps = roadmaps;
        if (!isSuperAdmin) {
          filteredRoadmaps = roadmaps.filter((r: any) => r.userAssignedRoadmap === true);
        }
        
        // Fetch all conversations and explained subtopics
        forkJoin({
          conversations: this.apiService.getConversations(),
          explainedSubtopics: this.apiService.getExplainedSubtopics()
        }).subscribe({
          next: ({ conversations, explainedSubtopics }) => {
            this.blogArticleData = filteredRoadmaps.map((roadmap: any) => {
              let chaptersCount = roadmap.chapters ? roadmap.chapters.length : 0;
              let subtopicsCount = 0;
              let roadmapSubtopicIds: number[] = [];
              let chapterTitles: string[] = [];
              let subtopicTitles: string[] = [];
              
              if (roadmap.chapters) {
                 roadmap.chapters.forEach((ch: any) => {
                   if (ch.title) {
                     chapterTitles.push(ch.title);
                   }
                   if (ch.subtopics) {
                     subtopicsCount += ch.subtopics.length;
                     ch.subtopics.forEach((sub: any) => {
                       roadmapSubtopicIds.push(sub.id);
                       if (sub.title) {
                         subtopicTitles.push(sub.title);
                       }
                     });
                   }
                 });
              }
              
              const explainedSubtopicsCount = roadmapSubtopicIds.filter(id => explainedSubtopics.includes(id)).length;
              
              const roadmapConversations = conversations.filter((conv: any) => roadmapSubtopicIds.includes(conv.subtopicId));
              let generatedMcqsCount = 0;
              roadmapConversations.forEach((conv: any) => {
                try {
                  const mcqs = JSON.parse(conv.mcqs || '[]');
                  generatedMcqsCount += mcqs.length;
                } catch (e) {
                  console.error('Error parsing MCQs', e);
                }
              });
              
              return {
                id: roadmap.id,
                PName: roadmap.mainTopic,
                routerLink: `/project/${roadmap.id}`,
                PImage: roadmap.imageUrl ? `${environment.apiBaseUrl}${roadmap.imageUrl}` : 'assets/image/default.png',
                intro: roadmap.intro,
                syllabus: roadmap.syllabus,
                chaptersCount,
                subtopicsCount,
                chapterTitles,
                subtopicTitles,
                explainedSubtopicsCount,
                generatedMcqsCount,
                category: roadmap.category || 'TECHNICAL',
                displayOrder: roadmap.displayOrder !== undefined ? roadmap.displayOrder : 0
              };
            });

            if (token) {
               this.apiService.getUserScores().subscribe({
                 next: (scores) => {
                    this.blogArticleData.forEach(blog => {
                       let blogScores = scores.filter((s: any) => s.roadmapId === blog.id);
                       blog.totalScore = blogScores.reduce((acc: number, s: any) => acc + (s.score || 0), 0);
                       blog.totalAttemptedQuestions = blogScores.reduce((acc: number, s: any) => acc + (s.totalQuestions || 0), 0);
                    });
                    this.groupRoadmaps();
                    this.initFuse();
                    this.loading = false;
                 },
                 error: (err) => {
                    console.error('Error fetching scores:', err);
                    this.groupRoadmaps();
                    this.initFuse();
                    this.loading = false;
                 }
               });
            } else {
               this.blogArticleData.forEach(blog => {
                 blog.totalScore = undefined;
                 blog.totalAttemptedQuestions = undefined;
               });
               this.groupRoadmaps();
               this.initFuse();
               this.loading = false;
            }
          },
          error: (err) => {
            console.error('Error loading conversations or explained subtopics:', err);
            this.loading = false;
          }
        });
      },
      error: (err) => {
        console.error('Error loading roadmaps:', err);
        this.loading = false;
      }
    });
  }
}
