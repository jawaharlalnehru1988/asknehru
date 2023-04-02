import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CssService {

  constructor(private http: HttpClient) { }
  getCssData(){
    return this.http.get<any>("http://localhost:3000/cssTopics");
  }
  getCssFromGitHub(){
    return this.http.get<any>("https://jawaharlalnehru1988.github.io/bookapi/css.json")
  }
}
