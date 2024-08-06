import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  number:number[] = [1, 2, 3, 4, 5, 6];
  fruits:string[] = ["Banana", "Mango", "Jackfruit"];
  mixedArray:any[] = ["Banana", true, 78, null, undefined, {name: "hi"}];

  constructor() { }

  ngOnInit(): void {
    this.fruits.pop();
 
    this.fruits.push("Orange");
    this.fruits.shift();
    this.fruits.unshift("Apple");
    console.log('this.fruits :', this.fruits);
  }

}
