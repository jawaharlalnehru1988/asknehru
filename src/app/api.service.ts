import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { signal } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  authApiUrl = environment.apiBaseUrl;

  private loginSubject = new Subject<boolean>();
  private signUpSubject = new Subject<boolean>();
  private selectedMainTopicSubject = new BehaviorSubject<string | null>(null);
  selectedMainTopic$ = this.selectedMainTopicSubject.asObservable();

  private authStateSubject = new BehaviorSubject<boolean>(this.checkToken());
  authState$ = this.authStateSubject.asObservable();

  private checkToken(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  // State caches
  private roadmapsListCache = signal<any[] | null>(null);
  private roadmapCache = signal<Map<number, any>>(new Map());
  private explainedSubtopicsCache = signal<number[] | null>(null);
  private conversationsCache = signal<any[] | null>(null);

  constructor(private http: HttpClient) {

  }



  getFormValues() {
    return this.http.get<any>('http://localhost:3000/Forms');
    // return this.http.get<any>('http://localhost:3000/Forms');
  }
  postFormValues(inputData: any) {
    return this.http.post<any>('http://localhost:3000/Forms', inputData);
  }
  updateFormData(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/Forms/' + id, data);
  }
  postFormValuesAndReturn(inputData: any) {
    return this.http.post<any>('http://localhost:3000/Forms', inputData);
  }
  updateFormDataAndReturn(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/Forms/' + id, data);
  }
  deleteFormData(id: number) {
    return this.http.delete<any>('http://localhost:3000/forms/' + id)
  }
  setLoginData(data: boolean) {
    this.loginSubject.next(data);
  }
  setSignUpData(data: boolean) {
    this.signUpSubject.next(data);
  }
  getLoginData() {
    return this.loginSubject.asObservable();
  }
  getSignUpData() {
    return this.signUpSubject.asObservable();
  }

  login(payload: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.authApiUrl}/api/auth/login`, payload);
  }

  register(payload: { fullName: string; phoneNumber?: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.authApiUrl}/api/auth/register`, payload);
  }

  refresh(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/auth/refresh`, payload);
  }

  logout(refreshToken: string): Observable<any> {
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.authApiUrl}/api/auth/logout`, { refreshToken }, { headers });
  }

  setAuthState(state: boolean) {
    this.authStateSubject.next(state);
  }

  globalLogout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
    this.setAuthState(false);
  }

  fetchData(): Observable<any> {
    const startTime = performance.now();
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Example endpoint

    return this.http.get(apiUrl).pipe(
      tap(response => {
        const endTime = performance.now();
        const loadingTime = endTime - startTime;

        console.log(`API loaded in ${loadingTime} milliseconds`);
      })
    );
  }

  getRoadmaps(): Observable<any[]> {
    const cached = this.roadmapsListCache();
    if (cached) {
      return of(cached);
    }
    return this.http.get<any[]>(`${this.authApiUrl}/api/roadmaps`).pipe(
      tap(data => this.roadmapsListCache.set(data))
    );
  }

  getRoadmapById(id: any): Observable<any> {
    const cachedMap = this.roadmapCache();
    const numericId = Number(id);
    if (cachedMap.has(numericId)) {
      return of(cachedMap.get(numericId));
    }
    return this.http.get<any>(`${this.authApiUrl}/api/roadmaps/${id}`).pipe(
      tap(data => {
        const newMap = new Map(this.roadmapCache());
        newMap.set(numericId, data);
        this.roadmapCache.set(newMap);
      })
    );
  }

  getConversations(): Observable<any[]> {
    const cached = this.conversationsCache();
    if (cached) {
      return of(cached);
    }
    return this.http.get<any[]>(`${this.authApiUrl}/api/conversations`).pipe(
      tap(data => this.conversationsCache.set(data))
    );
  }

  getExplainedSubtopics(): Observable<number[]> {
    const cached = this.explainedSubtopicsCache();
    if (cached) {
      return of(cached);
    }
    return this.http.get<number[]>(`${this.authApiUrl}/api/conversations/exists`).pipe(
      tap(data => this.explainedSubtopicsCache.set(data))
    );
  }

  explainSubtopic(subtopicId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.authApiUrl}/api/conversations/explain`, { subtopicId }, { headers }).pipe(
      tap(() => {
        const cached = this.explainedSubtopicsCache();
        if (cached && !cached.includes(subtopicId)) {
          this.explainedSubtopicsCache.set([...cached, subtopicId]);
        }
      })
    );
  }

  generateMcqs(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.authApiUrl}/api/conversations/${id}/mcq`, {}, { headers });
  }

  chatAboutSubtopic(subtopicId: number, question: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.authApiUrl}/api/conversations/chat`, { subtopicId, question }, { headers });
  }

  setMainTopic(topic: string | null) {
    this.selectedMainTopicSubject.next(topic);
  }

  saveScore(subtopicId: number, score: number, totalQuestions: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.authApiUrl}/api/conversations/${subtopicId}/scores`, { score, totalQuestions }, { headers });
  }

  getUserScores(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
    return this.http.get<any[]>(`${this.authApiUrl}/api/conversations/scores`, { headers });
  }

  uploadSubtopicAudio(conversationId: number, file: File): Observable<any> {
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : ''
      // No Content-Type — let browser set multipart boundary automatically
    });
    const formData = new FormData();
    formData.append('articleAudio', file, file.name);
    return this.http.post<any>(
      `${this.authApiUrl}/api/conversations/${conversationId}/audio`,
      formData,
      { headers }
    );
  }

  /** Returns true if the currently logged-in user is the super admin. */
  isSuperAdmin(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      // Decode JWT payload (base64url part between first and second dot)
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
      return decoded?.email === 'jawaharlalnehru@gmail.com';
    } catch {
      return false;
    }
  }
  // --- Coding / Interview API Methods ---
  
  getTopics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/topics`, { headers: this.getAuthHeaders() });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  startCodingTest(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/coding/start`, payload, { headers: this.getAuthHeaders() });
  }

  submitCodingApproach(interviewId: number, questionId: number, payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/coding/${interviewId}/question/${questionId}/approach`, payload, { headers: this.getAuthHeaders() });
  }

  submitCodingDirect(interviewId: number, questionId: number, payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/coding/${interviewId}/question/${questionId}/direct`, payload, { headers: this.getAuthHeaders() });
  }

  submitCodingCode(interviewId: number, questionId: number, payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/coding/${interviewId}/question/${questionId}/code`, payload, { headers: this.getAuthHeaders() });
  }

  getManipulationCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/manipulation-categories`, { headers: this.getAuthHeaders() });
  }

  getComplexityCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/complexity-categories`, { headers: this.getAuthHeaders() });
  }

  startComplexityQuestions(topic: string, category: string, previousQuestions?: string[]): Observable<any> {
    const payload = { topic, category, previousQuestions };
    return this.http.post<any>(`${this.authApiUrl}/api/coding/complexity/start`, payload, { headers: this.getAuthHeaders() });
  }

  evaluateComplexityAnswers(topic: string, category: string, questions: string[], answers: string[]): Observable<any> {
    const payload = { topic, category, questions, answers };
    return this.http.post<any>(`${this.authApiUrl}/api/coding/complexity/evaluate`, payload, { headers: this.getAuthHeaders() });
  }

  saveComplexityQuestionSet(topic: string, category: string, setName: string, questions: string[]): Observable<any> {
    const payload = { topic, category, setName, questions };
    return this.http.post<any>(`${this.authApiUrl}/api/coding/manipulation/saved-sets`, payload, { headers: this.getAuthHeaders() });
  }

  getSavedComplexityQuestionSets(topic: string, category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/coding/manipulation/saved-sets?topic=${topic}&category=${category}`, { headers: this.getAuthHeaders() });
  }

  saveManipulationQuestionSet(topic: string, category: string, setName: string, questions: {question: string, hint: string}[]): Observable<any> {
    const payload = { topic, category, setName, questions };
    return this.http.post<any>(`${this.authApiUrl}/api/coding/manipulation/saved-sets`, payload, { headers: this.getAuthHeaders() });
  }

  getSavedManipulationQuestionSets(topic: string, category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/coding/manipulation/saved-sets?topic=${topic}&category=${category}`, { headers: this.getAuthHeaders() });
  }

  getManipulationHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/coding/manipulation/history`, { headers: this.getAuthHeaders() });
  }

  addManipulationCategory(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/manipulation-categories`, payload, { headers: this.getAuthHeaders() });
  }

  startManipulationChallenge(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/coding/manipulation/start`, payload, { headers: this.getAuthHeaders() });
  }

  evaluateManipulationAnswers(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/api/coding/manipulation/evaluate`, payload, { headers: this.getAuthHeaders() });
  }

}

