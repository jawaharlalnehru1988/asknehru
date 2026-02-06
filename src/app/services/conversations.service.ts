import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Conversation {
  id: number;
  topicCategory: string;
  question: string;
  answer: string;
  criticalConversation: string;
  audio: string | null;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  private apiUrl = 'https://api.asknehru.com/api/conversations';

  constructor(private http: HttpClient) { }

  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.apiUrl);
  }

  getConversation(id: number): Observable<Conversation> {
    return this.http.get<Conversation>(`${this.apiUrl}/${id}`);
  }
}
