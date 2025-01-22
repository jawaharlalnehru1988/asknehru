import { Component } from '@angular/core';
import { JssidebarComponent } from "../../jssidebar/jssidebar.component";
import { NgClass, NgFor } from '@angular/common';
import { JsModel, Jstopics } from './jstopics';
import { MatIconModule } from '@angular/material/icon';
import * as Prism from 'prismjs';
import { PrismHighlightDirective } from 'src/core/directives/highlight.directive';


@Component({
    selector: 'app-javascript',
    standalone: true,
    imports: [JssidebarComponent, NgFor, MatIconModule],
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
    isArrowActive = false;
    jstopic: string = "";
    mainTopicAppear: boolean = false;

   jstopics = new Jstopics();
   topics = this.jstopics.categorisedTopics;
    subTopicTitle: any;
    subTopicArray: any;

    articleTitle = 'Understanding Primitive Data Types in JavaScript';
  introduction =
    'JavaScript is a versatile language, and understanding its primitive data types is fundamental to writing efficient and bug-free code. In this article, we will explore the six primitive data types in JavaScript.';

  primitiveTypes = [
    { name: 'String', description: 'Represents textual data. Example: "Hello, World!"' },
    { name: 'Number', description: 'Represents numeric values. Example: 42 or 3.14' },
    { name: 'Boolean', description: 'Represents true or false. Example: true or false' },
    { name: 'Null', description: 'Represents an intentional absence of value. Example: null' },
    { name: 'Undefined', description: 'Represents a variable that has not been assigned a value. Example: undefined' },
    { name: 'Symbol', description: 'Represents a unique identifier. Example: Symbol("id")' }
  ];

  keyPoints = [
    'Primitive data types are immutable.',
    'Each primitive data type has its own unique characteristics.',
    'Primitive values are compared by value rather than by reference.'
  ];

  exampleCode = `
// Example of Primitive Data Types
let name = "John"; // String
let age = 30;      // Number
let isActive = true; // Boolean
let nothing = null;  // Null
let notDefined;      // Undefined
let uniqueId = Symbol("id"); // Symbol

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof nothing); // "object" (special case)
console.log(typeof notDefined); // "undefined"
console.log(typeof uniqueId); // "symbol"
`;

  conclusion =
    'Primitive data types are the building blocks of JavaScript programming. Understanding their behavior and characteristics is crucial for writing clean, effective, and maintainable code.';


    toggleArrow(): void {
      this.isArrowActive = !this.isArrowActive;
    }

    receiveTopic(topic: string){
    this.jstopic = topic;

    }

    clickTopic(topic: any){
        this.subTopicTitle = topic.title;
        this.subTopicArray = topic.topics;     
        this.mainTopicAppear = true;                                                                                                                                             
    }

    subTopicClicked(subTopic:any){
        console.log('subTopic :', subTopic);
    }
    backToMainTopic(){
        this.mainTopicAppear = false;
    }

      ngAfterViewInit(): void {
        Prism.highlightAll();
         }
}
