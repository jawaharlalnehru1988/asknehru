import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http: HttpClient) { }


  getAgcourse(){
  return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/course.json');
  }
  getAngular(){
    // return this.http.get<any>('http://localhost:3000/Angular');
    return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/angular.json');
  }
  
}
