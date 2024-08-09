import { Component, OnInit } from '@angular/core';
export interface Name{
  name: string,
  id?: number
}
@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})

export class TypescriptComponent implements OnInit {

  number:number[] = [1, 2, 3, 4, 5, 6];
  fruits:string[] = ["Banana", "Mango", "Jackfruit"];
  isEnable:boolean[] = [true, false, false, true];
  mixedArray:any[] = ["Banana", true, 78, null, undefined, {name: "hi"}];
  ArrayOfObjects:Name[] = [{name: "how", id: 12}, {name: "are"}, {name: "you"}, {name: "Krishna"}, {name: "Balaram"}];

  constructor() { }

  ngOnInit(): void {
    this.fruits.pop();
    this.fruits.push("Orange");
    this.fruits.shift();
    this.fruits.unshift("Apple");
    console.log('this.fruits :', this.fruits);
  }
  push(fruit:string){
    this.fruits.push(fruit);
  }
  pop(){
    this.fruits.pop();
  }
  shift(){
    this.fruits.shift();
  }

  unshift(){
    this.fruits.unshift("first fruit");
  }
}
