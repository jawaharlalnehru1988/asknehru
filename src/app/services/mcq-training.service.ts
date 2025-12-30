import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// Interfaces
export interface MCQChoice {
  id: string;
  text: string;
  _id?: string;
}

export interface MCQQuestion {
  _id: string;
  topic: string;
  level: number;
  question: string;
  choices: MCQChoice[];
  correctAnswer?: string;  // Only included in response, not sent to frontend during quiz
  explanation?: string;    // Only shown after answering
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface LevelInfo {
  level: number;
  count: number;
  maxPoints?: number;
  difficulties?: {
    easy?: number;
    medium?: number;
    hard?: number;
  };
}

export interface TopicStats {
  topic: string;
  totalQuestions: number;
  levels: LevelInfo[];
  difficultyBreakdown?: {
    easy?: number;
    medium?: number;
    hard?: number;
  };
}

export interface TopicWithStats {
  topic: string;
  totalQuestions: number;
  levels: LevelInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class McqTrainingService {
  private apiUrl = `${environment.apiBaseUrl}/mcq-training`;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Bypass-Tunnel-Reminder': 'true'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * Get all MCQ questions (Admin only)
   * @returns Observable<MCQQuestion[]>
   */
  getAllQuestions(): Observable<MCQQuestion[]> {
    return this.http.get<MCQQuestion[]>(this.apiUrl, this.httpOptions);
  }

  /**
   * Get all available topics
   * @returns Observable<string[]>
   */
  getTopics(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/topics`, this.httpOptions);
  }

  /**
   * Get all topics with their statistics grouped
   * @returns Observable<TopicWithStats[]>
   */
  getTopicsWithStats(): Observable<TopicWithStats[]> {
    return this.http.get<TopicWithStats[]>(`${this.apiUrl}/topics-with-stats`, this.httpOptions);
  }

  /**
   * Get detailed statistics for a specific topic
   * @param topic - The topic name (e.g., 'agentic-ai', 'react')
   * @returns Observable<TopicStats>
   */
  getTopicStats(topic: string): Observable<TopicStats> {
    return this.http.get<TopicStats>(`${this.apiUrl}/topics/${topic}/stats`, this.httpOptions);
  }

  /**
   * Get available levels for a specific topic with details
   * @param topic - The topic name (e.g., 'agentic-ai', 'react')
   * @returns Observable<LevelInfo[]>
   */
  getTopicLevels(topic: string): Observable<LevelInfo[]> {
    return this.http.get<LevelInfo[]>(`${this.apiUrl}/topics/${topic}/levels`, this.httpOptions);
  }

  /**
   * Get all MCQ questions for a specific topic and level
   * @param topic - The topic name (e.g., 'agentic-ai', 'react')
   * @param level - The level number (1, 2, 3, etc.)
   * @returns Observable<MCQQuestion[]>
   */
  getQuestionsByTopicAndLevel(topic: string, level: number): Observable<MCQQuestion[]> {
    return this.http.get<MCQQuestion[]>(
      `${this.apiUrl}/topics/${topic}/level/${level}`, 
      this.httpOptions
    );
  }

  /**
   * Get count of questions for a specific topic and level
   * @param topic - The topic name (e.g., 'agentic-ai', 'react')
   * @param level - The level number (1, 2, 3, etc.)
   * @returns Observable<number>
   */
  getQuestionCount(topic: string, level: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/topics/${topic}/level/${level}/count`, 
      this.httpOptions
    );
  }

  /**
   * Shuffle array (useful for randomizing questions and choices)
   */
  shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
