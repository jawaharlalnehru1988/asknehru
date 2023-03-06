import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JscriptService {

  constructor(private http: HttpClient) { }
  getJscript(){
    return this.http.get<any>('https://dark-puce-xerus-kit.cyclic.app/javascript');
  }
}
