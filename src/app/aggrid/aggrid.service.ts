import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AggridService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>("https://www.ag-grid.com/example-assets/row-data.json");
  }
}
