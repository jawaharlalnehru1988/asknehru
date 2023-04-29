import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmajasminService {

  constructor(private http: HttpClient) { }
  getjasminData(){
    return this.http.get<any>("https://jawaharlalnehru1988.github.io/bookapi/karmajasmin.json");
  }
}
