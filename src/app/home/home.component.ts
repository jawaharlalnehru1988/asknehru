import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { Homejson, Project } from './homejson';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardContent]
})
export class HomeComponent extends Homejson implements OnInit {
  override blogArticleData: Project[] = [];

  constructor(private apiService: ApiService) {
    super();
  }

  ngOnInit() {
    this.loadRoadmaps();
  }

  loadRoadmaps() {
    this.apiService.getRoadmaps().subscribe({
      next: (roadmaps) => {
        this.blogArticleData = roadmaps.map(roadmap => ({
          id: roadmap.id,
          PName: roadmap.mainTopic,
          routerLink: `/project/${roadmap.id}`,
          PImage: roadmap.imageUrl ? `https://api.asknehru.com${roadmap.imageUrl}` : 'assets/image/default.png',
          intro: roadmap.intro,
          syllabus: roadmap.syllabus
        }));
      },
      error: (err) => {
        console.error('Error loading roadmaps:', err);
      }
    });
  }
}
