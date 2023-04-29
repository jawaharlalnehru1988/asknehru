import { Component, OnInit } from '@angular/core';
import { DsaService } from './dsa.service';

@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.scss']
})
export class DsaComponent implements OnInit {
  dsaData:any;
 arrayTraversing = [  

  {    method: "Using a for loop",    
  explanation: "The simplest way to traverse an array is to use a for loop. You can use the length property of the array to determine the number of elements and access each element by its index.",    example: `let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`
  },
  {
    method: "Using forEach() method",
    explanation: "The forEach() method is a built-in method of arrays in JavaScript that allows you to iterate over each element of the array.",
    example: `let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
  console.log(element);
});`
  },
  {
    method: "Using for...in loop",
    explanation: "The for...in loop is another way to traverse an array. It loops through the properties of an object, including the indices of an array.",
    example: `let arr = [1, 2, 3, 4, 5];
for (let index in arr) {
  console.log(arr[index]);
}`
  },
  {
    method: "Using for...of loop",
    explanation: "The for...of loop is a new addition to JavaScript and provides a simpler way to iterate over arrays. It allows you to loop through the values of an array directly.",
    example: `let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
  console.log(element);
}`
  }
];
  constructor(private dsaService: DsaService) { }

  ngOnInit(): void {
    this.getDsaData();
  }
getDsaData(){
this.dsaService.getDsaData().subscribe({
  next:(res)=>{
  console.log('res :', res);
  this.dsaData = res.DSA;

  }
})
}
}
