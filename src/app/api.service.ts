import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCourses() {
  //  return this.http.get<any>("http://localhost:3000/courses");
   return this.http.get<any>("https://jawaharlalnehru1988.github.io/bookapi/course.json");
  }
  getFormValues(){
    return this.http.get<any>('http://localhost:3000/Forms');
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
