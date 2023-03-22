import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http: HttpClient) { }


  getAgcourse(){
  return this.http.get<any>('https://dark-puce-xerus-kit.cyclic.app/courses/7');
  }
  getAngular(titleid:any){
    return this.http.get<any>('https://dark-puce-xerus-kit.cyclic.app/Angular/'+titleid)
  }
}
