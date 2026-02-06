import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conversation, ConversationsService } from '../services/conversations.service';

@Component({
  selector: 'app-officecommunication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officecommunication.component.html',
  styleUrls: ['./officecommunication.component.scss']
})
export class OfficecommunicationComponent implements OnInit {
  conversations: Conversation[] = [];
  loading: boolean = true;
  error: string = '';
  selectedConversation: Conversation | null = null;

  constructor(private conversationsService: ConversationsService) { }

  ngOnInit(): void {
    this.loadConversations();
  }

  loadConversations(): void {
    this.conversationsService.getConversations().subscribe({
      next: (data) => {
        this.conversations = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load conversations. Please try again later.';
        this.loading = false;
        console.error('Error loading conversations:', err);
      }
    });
  }

  selectConversation(conversation: Conversation): void {
    this.selectedConversation = conversation;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backToList(): void {
    this.selectedConversation = null;
  }

  formatText(text: string): string[] {
    if (!text) return [];
    return text.split('\n').filter(line => line.trim() !== '');
  }

  isQuestion(line: string): boolean {
    return line.trim().endsWith('?');
  }

  isSectionTitle(line: string): boolean {
    return !line.includes(' ') || /^[0-9]+\./.test(line);
  }
}
