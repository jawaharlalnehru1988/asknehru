import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 apiUrl = "https://script.google.com/macros/s/AKfycbxZZQWEfYE4MZaXvj3Q-FPQweL_hhsWQp1E0XdgxUri8keVH6MCpAtE6ni57mmBC3r_0w/exec";
  constructor(private http: HttpClient) { }

  // getCourses() {
  //   if (window.location.hostname === 'localhost') {
  //     return this.http.get<any>('http://localhost:3000/courses');
  //   } else {
  //     return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/course.json');
  //   }
  // }
  getUser(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  postUser(input:any){
return this.http.post(this.apiUrl, input);
  }
  getCourses() {
      return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/course.json');
  }
  getFormValues(){
    return this.http.get<any>('http://localhost:3000/Forms');
    // return this.http.get<any>('http://localhost:3000/Forms');
  }
  postFormValues(inputData:any){
    return this.http.post<any>('http://localhost:3000/Forms', inputData);
  }
  updateFormData(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/Forms/'+id, data);
  }
  deleteFormData(id:number){
    return this.http.delete<any>('http://localhost:3000/forms/'+id)
  }
}
