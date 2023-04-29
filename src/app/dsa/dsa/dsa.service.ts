import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DsaService {

  constructor(private http:HttpClient) { }
  getDsaData(){
    return this.http.get<any>("https://jawaharlalnehru1988.github.io/bookapi/dsa.json");
  }
}
