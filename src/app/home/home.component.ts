import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { Homejson, Project } from './homejson';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';


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
    this.loadRoadmaps();
  }

  loadRoadmaps() {
    this.loading = true;
    this.apiService.getRoadmaps().subscribe({
      next: (roadmaps) => {
        this.blogArticleData = roadmaps.map(roadmap => ({
          id: roadmap.id,
          PName: roadmap.mainTopic,
          routerLink: `/project/${roadmap.id}`,
          PImage: roadmap.imageUrl ? `${environment.apiBaseUrl}${roadmap.imageUrl}` : 'assets/image/default.png',
          intro: roadmap.intro,
          syllabus: roadmap.syllabus
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading roadmaps:', err);
        this.loading = false;
      }
    });
  }
}

