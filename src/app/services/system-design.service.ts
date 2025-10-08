import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SystemDesignTopic {
  _id?: string;
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  sectionLink: string;
  audioUrl: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class SystemDesignService {
  private readonly API_BASE_URL = 'https://asknehru-backend.vercel.app';
  
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Bypass-Tunnel-Reminder': 'true'
    })
  };

  constructor(private http: HttpClient) {}

  // Get all system design topics (sorted by _id in ascending order)
  // Endpoint: GET /systemdesign
  getAllTopics(): Observable<SystemDesignTopic[]> {
    return this.http.get<SystemDesignTopic[]>(`${this.API_BASE_URL}/systemdesign`, this.httpOptions).pipe(
      map(topics => topics.sort((a, b) => {
        if (!a._id || !b._id) return 0;
        return a._id.localeCompare(b._id);
      }))
    );
  }

  // Get topic by MongoDB ObjectId
  // Endpoint: GET /systemdesign/:id
  getTopicById(id: string): Observable<SystemDesignTopic> {
    return this.http.get<SystemDesignTopic>(`${this.API_BASE_URL}/systemdesign/${id}`, this.httpOptions);
  }

  // Search system design topics by keyword
  // Endpoint: GET /systemdesign/search?q=keyword
  searchTopics(query: string): Observable<SystemDesignTopic[]> {
    return this.http.get<SystemDesignTopic[]>(
      `${this.API_BASE_URL}/systemdesign/search?q=${encodeURIComponent(query)}`, 
      this.httpOptions
    ).pipe(
      map(topics => topics.sort((a, b) => {
        if (!a._id || !b._id) return 0;
        return a._id.localeCompare(b._id);
      }))
    );
  }

  // Get topics by category
  // Endpoint: GET /systemdesign/category/:category
  getTopicsByCategory(category: string): Observable<SystemDesignTopic[]> {
    return this.http.get<SystemDesignTopic[]>(
      `${this.API_BASE_URL}/systemdesign/category/${encodeURIComponent(category)}`, 
      this.httpOptions
    ).pipe(
      map(topics => topics.sort((a, b) => {
        if (!a._id || !b._id) return 0;
        return a._id.localeCompare(b._id);
      }))
    );
  }

  // Get topic by section link (URL-friendly identifier)
  // Endpoint: GET /systemdesign/section/:sectionLink
  getTopicBySectionLink(sectionLink: string): Observable<SystemDesignTopic> {
    return this.http.get<SystemDesignTopic>(
      `${this.API_BASE_URL}/systemdesign/section/${encodeURIComponent(sectionLink)}`, 
      this.httpOptions
    );
  }

  // Create new topic
  // Endpoint: POST /systemdesign
  createTopic(topic: SystemDesignTopic): Observable<SystemDesignTopic> {
    return this.http.post<SystemDesignTopic>(`${this.API_BASE_URL}/systemdesign`, topic, this.httpOptions);
  }

  // Update existing topic by MongoDB ObjectId (uses PATCH)
  // Endpoint: PATCH /systemdesign/:id
  updateTopic(id: string, topic: Partial<SystemDesignTopic>): Observable<SystemDesignTopic> {
    return this.http.patch<SystemDesignTopic>(`${this.API_BASE_URL}/systemdesign/${id}`, topic, this.httpOptions);
  }

  // Delete topic by MongoDB ObjectId
  // Endpoint: DELETE /systemdesign/:id
  // Returns: { message: 'Systemdesign deleted successfully' }
  deleteTopic(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.API_BASE_URL}/systemdesign/${id}`, this.httpOptions);
  }
}
