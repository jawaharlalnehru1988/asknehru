import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { Homejson, Project } from './homejson';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardContent]
})
export class HomeComponent extends Homejson implements OnInit {
  override blogArticleData: Project[] = [];
  loading: boolean = true;

  constructor(private apiService: ApiService) {
    super();
  }

  ngOnInit() {
    this.apiService.authState$.subscribe(() => {
      this.loadRoadmaps();
    });
  }

  loadRoadmaps() {
    this.loading = true;
    this.apiService.getRoadmaps().subscribe({
      next: (roadmaps) => {
        const token = localStorage.getItem('token');
        
        // Fetch all conversations and explained subtopics
        forkJoin({
          conversations: this.apiService.getConversations(),
          explainedSubtopics: this.apiService.getExplainedSubtopics()
        }).subscribe({
          next: ({ conversations, explainedSubtopics }) => {
            this.blogArticleData = roadmaps.map(roadmap => {
              let chaptersCount = roadmap.chapters ? roadmap.chapters.length : 0;
              let subtopicsCount = 0;
              let roadmapSubtopicIds: number[] = [];
              
              if (roadmap.chapters) {
                 roadmap.chapters.forEach((ch: any) => {
                   if (ch.subtopics) {
                     subtopicsCount += ch.subtopics.length;
                     ch.subtopics.forEach((sub: any) => roadmapSubtopicIds.push(sub.id));
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
                explainedSubtopicsCount,
                generatedMcqsCount
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
                    this.loading = false;
                 },
                 error: (err) => {
                    console.error('Error fetching scores:', err);
                    this.loading = false;
                 }
               });
            } else {
               this.blogArticleData.forEach(blog => {
                 blog.totalScore = undefined;
                 blog.totalAttemptedQuestions = undefined;
               });
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

