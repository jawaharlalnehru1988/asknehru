import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 apiUrl = "https://sheetdb.io/api/v1/8yxcpd7w4hy4y";
 getUrl = "https://script.google.com/macros/s/AKfycbysfcraS4_qdipktKPs9blVZ-fJFSEDupkvHKmFI7oKWBUjA6qMjvjrDXJUd_GMlvrB/exec";
 private usersDataSubject = new BehaviorSubject<any[]>([]);
 usersData$: Observable<any[]> = this.usersDataSubject.asObservable();

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
}
