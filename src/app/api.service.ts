import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  authApiUrl = "https://api.asknehru.com";

  private loginSubject = new Subject<boolean>();
  private signUpSubject = new Subject<boolean>();
  private selectedMainTopicSubject = new BehaviorSubject<string | null>(null);
  selectedMainTopic$ = this.selectedMainTopicSubject.asObservable();
  constructor(private http: HttpClient) {

  }


  getCourses() {
    return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/course.json');
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

  login(payload: { usernameOrEmail: string; password: string }): Observable<any> {
    return this.http.post(`${this.authApiUrl}/api/auth/login`, payload);
  }

  register(payload: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.authApiUrl}/api/users`, payload);
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
    return this.http.get<any[]>(`${this.authApiUrl}/api/roadmaps`);
  }

  getRoadmapById(id: any): Observable<any> {
    return this.http.get<any>(`${this.authApiUrl}/api/roadmaps/${id}`);
  }

  getConversations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.authApiUrl}/api/conversations`);
  }

  setMainTopic(topic: string | null) {
    this.selectedMainTopicSubject.next(topic);
  }
}
