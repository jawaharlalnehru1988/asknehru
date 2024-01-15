import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 apiUrl = "https://sheetdb.io/api/v1/8yxcpd7w4hy4y";
 getUrl = "https://script.google.com/macros/s/AKfycbysfcraS4_qdipktKPs9blVZ-fJFSEDupkvHKmFI7oKWBUjA6qMjvjrDXJUd_GMlvrB/exec";
 private usersDataSubject = new BehaviorSubject<any[]>([]);
 usersData$: Observable<any[]> = this.usersDataSubject.asObservable();
 private loginSubject = new Subject<boolean>();
private signUpSubject = new Subject<boolean>();
 constructor(private http: HttpClient) {
   this.loadUsersData();
 }

 private loadUsersData() {
   this.http.get<any[]>(this.getUrl).subscribe((data) => {
     this.usersDataSubject.next(data);
   });
 }

 getUserData(): Observable<any>{
return this.http.get<any[]>(this.getUrl);
 }
  postUser(input:any){
    return this.http.post(this.apiUrl, input);
  }

   // Function to delete a record by ID
   deleteRecordById(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/id/${id}`;
    
    // Send a DELETE request to the deleteUrl
    return this.http.delete(deleteUrl);
  }
  // Method to send a PATCH request
  updateData(id: number, updateData: any): Observable<any> {
    const patchUrl = `${this.apiUrl}/id/${id}`;

    // Send a PATCH request with the provided data
    return this.http.patch(patchUrl, updateData);
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
  setLoginData(data: boolean) {
    this.loginSubject.next(data);
  }
setSignUpData(data: boolean){
 this.signUpSubject.next(data);
}
  getLoginData() {
    return this.loginSubject.asObservable();
  }
  getSignUpData(){
    return this.signUpSubject.asObservable();
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
}
