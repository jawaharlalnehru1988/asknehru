import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TutorialContent {
  id?: number;
  title: string;
  description: string;
  duration?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  thumbnail?: string;
  url?: string;
  content?: string;
  publishDate: string;
  type?: 'article' | 'audio' | 'video';
}

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private readonly API_BASE_URL = 'https://aksharekrishna.loca.lt/api';
  
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Bypass-Tunnel-Reminder': 'true'
    })
  };

  constructor(private http: HttpClient) {}

  // Get all tutorials
  getAllTutorials(): Observable<TutorialContent[]> {
    return this.http.get<TutorialContent[]>(`${this.API_BASE_URL}/tutorials`, this.httpOptions);
  }

  // Get tutorial by ID
  getTutorialById(id: number): Observable<TutorialContent> {
    return this.http.get<TutorialContent>(`${this.API_BASE_URL}/tutorials/${id}`, this.httpOptions);
  }

  // Create new tutorial
  createTutorial(tutorial: TutorialContent): Observable<TutorialContent> {
    return this.http.post<TutorialContent>(`${this.API_BASE_URL}/tutorials`, tutorial, this.httpOptions);
  }

  // Update existing tutorial
  updateTutorial(id: number, tutorial: TutorialContent): Observable<TutorialContent> {
    return this.http.put<TutorialContent>(`${this.API_BASE_URL}/tutorials/${id}`, tutorial, this.httpOptions);
  }

  // Delete tutorial
  deleteTutorial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/tutorials/${id}`, this.httpOptions);
  }

  // Get tutorials by type
  getTutorialsByType(type: 'article' | 'audio' | 'video'): Observable<TutorialContent[]> {
    return this.http.get<TutorialContent[]>(`${this.API_BASE_URL}/tutorials?type=${type}`, this.httpOptions);
  }

  // Search tutorials
  searchTutorials(query: string): Observable<TutorialContent[]> {
    return this.http.get<TutorialContent[]>(`${this.API_BASE_URL}/tutorials?search=${encodeURIComponent(query)}`, this.httpOptions);
  }

  // Get tutorials by difficulty
  getTutorialsByDifficulty(difficulty: 'Beginner' | 'Intermediate' | 'Advanced'): Observable<TutorialContent[]> {
    return this.http.get<TutorialContent[]>(`${this.API_BASE_URL}/tutorials?difficulty=${difficulty}`, this.httpOptions);
  }
}
