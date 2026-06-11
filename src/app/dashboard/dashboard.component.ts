import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  scores: any[] = [];
  loading: boolean = true;
  error: string | null = null;
  roadmapScores: { [key: string]: { scores: any[], average: number, mainTopic: string } } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadScores();
  }

  loadScores() {
    this.apiService.getUserScores().subscribe({
      next: (data) => {
        this.scores = data;
        this.aggregateScores();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching scores:', err);
        this.error = 'Failed to load dashboard data. Please make sure you are logged in.';
        this.loading = false;
      }
    });
  }

  aggregateScores() {
    this.roadmapScores = {};
    for (const score of this.scores) {
      const roadmapId = score.roadmapId || 'unknown';
      if (!this.roadmapScores[roadmapId]) {
        this.roadmapScores[roadmapId] = {
          scores: [],
          average: 0,
          mainTopic: score.mainTopic || 'Unknown Roadmap'
        };
      }
      this.roadmapScores[roadmapId].scores.push(score);
    }

    for (const key in this.roadmapScores) {
      const group = this.roadmapScores[key];
      let totalPercent = 0;
      for (const s of group.scores) {
        totalPercent += (s.score / s.totalQuestions) * 100;
      }
      group.average = Math.round(totalPercent / group.scores.length);
    }
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
