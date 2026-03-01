import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MarkdownModule } from 'ngx-markdown';

export interface Conversation {
  id: number;
  mainTopic: string;
  subTopic: string;
  article: string;
  positiveConversation: string;
  negativeConversation: string;
  articleAudio: string;
  conversationAudio: string | null;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-infodetails',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './infodetails.component.html',
  styleUrl: './infodetails.component.scss'
})
export class InfodetailsComponent implements OnInit {
  details: Conversation | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getConversations().subscribe((data: any[]) => {
        this.details = data.find((item: Conversation) => item.id == Number(id));
      });
    }
  }

  getAudioUrl(path: string | null): string {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return this.apiService.authApiUrl + path;
  }
}
