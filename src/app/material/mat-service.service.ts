import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatServiceService {

  constructor(private http: HttpClient) { }

  getCountryCode(){
    return this.http.get<any>("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json");
  }
  getMobileCode(){
    return this.http.get<any>("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json");
  }
}
