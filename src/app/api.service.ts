import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 apiUrl = "https://sheetdb.io/api/v1/8yxcpd7w4hy4y";
 private usersDataSubject = new BehaviorSubject<any[]>([]);
 usersData$: Observable<any[]> = this.usersDataSubject.asObservable();

 constructor(private http: HttpClient) {
   this.loadUsersData();
 }

 private loadUsersData() {
   this.http.get<any[]>(this.apiUrl).subscribe((data) => {
     this.usersDataSubject.next(data);
   });
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
