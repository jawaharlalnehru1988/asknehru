import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AgenticAITopic {
  _id?: string;
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  sectionLink: string;
  audioUrl?: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AgenticAiService {
  private API_BASE_URL = 'http://localhost:4000';

  // HTTP headers with tunnel bypass
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Bypass-Tunnel-Reminder': 'true'
    })
  };

  constructor(private http: HttpClient) {}

  // Get all agentic AI topics (sorted by _id in ascending order)
  // Endpoint: GET /agentic-ai
  getAllTopics(): Observable<AgenticAITopic[]> {
    return this.http.get<AgenticAITopic[]>(`${this.API_BASE_URL}/agentic-ai`, this.httpOptions).pipe(
      map(topics => topics.sort((a, b) => {
        if (!a._id || !b._id) return 0;
        return a._id.localeCompare(b._id);
      }))
    );
  }

  // Get topic by MongoDB ObjectId
  // Endpoint: GET /agentic-ai/:id
  getTopicById(id: string): Observable<AgenticAITopic> {
    return this.http.get<AgenticAITopic>(`${this.API_BASE_URL}/agentic-ai/${id}`, this.httpOptions);
  }

  // Search agentic AI topics by keyword
  // Endpoint: GET /agentic-ai/search?q=keyword
  searchTopics(query: string): Observable<AgenticAITopic[]> {
    return this.http.get<AgenticAITopic[]>(
      `${this.API_BASE_URL}/agentic-ai/search?q=${encodeURIComponent(query)}`, 
      this.httpOptions
    ).pipe(
      map(topics => topics.sort((a, b) => {
        if (!a._id || !b._id) return 0;
        return a._id.localeCompare(b._id);
      }))
    );
  }

  // Get topics by category
  // Endpoint: GET /agentic-ai/category/:category
  getTopicsByCategory(category: string): Observable<AgenticAITopic[]> {
    return this.http.get<AgenticAITopic[]>(
      `${this.API_BASE_URL}/agentic-ai/category/${encodeURIComponent(category)}`, 
      this.httpOptions
    ).pipe(
      map(topics => topics.sort((a, b) => {
        if (!a._id || !b._id) return 0;
        return a._id.localeCompare(b._id);
      }))
    );
  }

  // Get topic by section link (URL-friendly identifier)
  // Endpoint: GET /agentic-ai/section/:sectionLink
  getTopicBySectionLink(sectionLink: string): Observable<AgenticAITopic> {
    return this.http.get<AgenticAITopic>(
      `${this.API_BASE_URL}/agentic-ai/section/${encodeURIComponent(sectionLink)}`, 
      this.httpOptions
    );
  }

  // Create new topic
  // Endpoint: POST /agentic-ai
  createTopic(topic: AgenticAITopic): Observable<AgenticAITopic> {
    return this.http.post<AgenticAITopic>(`${this.API_BASE_URL}/agentic-ai`, topic, this.httpOptions);
  }

  // Update existing topic by MongoDB ObjectId (uses PATCH)
  // Endpoint: PATCH /agentic-ai/:id
  updateTopic(id: string, topic: Partial<AgenticAITopic>): Observable<AgenticAITopic> {
    return this.http.patch<AgenticAITopic>(`${this.API_BASE_URL}/agentic-ai/${id}`, topic, this.httpOptions);
  }

  // Delete topic by MongoDB ObjectId
  // Endpoint: DELETE /agentic-ai/:id
  // Returns: { message: 'Agentic AI topic deleted successfully' }
  deleteTopic(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.API_BASE_URL}/agentic-ai/${id}`, this.httpOptions);
  }
}
