import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor(private http: HttpClient) { }
  getHtmlData(){
    return this.http.get<any>('https://jawaharlalnehru1988.github.io/bookapi/html.json');
  }
}
