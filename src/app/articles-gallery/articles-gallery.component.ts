import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-articles-gallery',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './articles-gallery.component.html',
  styleUrl: './articles-gallery.component.scss'
})
export class ArticlesGalleryComponent implements OnInit {
  articles: any[] = [];
  loading: boolean = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.selectedMainTopic$.subscribe(topic => {
      this.loadArticles(topic);
    });
  }

  loadArticles(topic: string | null) {
    this.loading = true;
    this.apiService.getConversations().subscribe({
      next: (data) => {
        if (topic) {
          this.articles = data.filter((item: any) => item.mainTopic === topic);
        } else {
          this.articles = data;
        }
        this.loading = false;
      },
      error: (e) => {
        console.error('Error loading articles', e);
        this.loading = false;
      }
    });
  }

  openDetails(id: number) {
    this.router.navigate(['/infodetails', id]);
  }
}
