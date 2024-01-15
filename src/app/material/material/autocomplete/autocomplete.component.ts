import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  result?: number;
 
  constructor() { }
  
  ngOnInit(): void {
    
  }
 
add(a: number, b: number): number {
  this.result = a + b;
  return this.result;
}

subtract(a: number, b: number): number {
  this.result = a - b;
  return this.result;
}
}
