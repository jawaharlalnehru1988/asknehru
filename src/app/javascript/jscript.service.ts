import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JscriptService {

  constructor(private http: HttpClient) { }
  getCourse(){
    return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/course.json');
    // return this.http.get<any>('http://localhost:3000/courses');
  }
  getJscript(){
    // return this.http.get<any>('http://localhost:3000/javascript');
    return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/course.json');
  }
  getJsCourse(){
    // return this.http.get<any>('https://dark-puce-xerus-kit.cyclic.app/javascript/'+param);
    return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/javascript.json');
  }
  postJsTopic(topic:any){
return this.http.post<any>('http://localhost:3000/javascript', topic);
  }
  updateTopic(data:any, id:number){
return this.http.put<any>('http://localhost:3000/javascript/'+id, data);
  }
  deleteTopic(id:number){
return this.http.delete<any>('http://localhost:3000/javascript/'+id)
  }
}
