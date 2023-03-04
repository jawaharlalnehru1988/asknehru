import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  gitCourses() {
   return this.http.get<any>("https://dark-puce-xerus-kit.cyclic.app/courses")
  }
}
