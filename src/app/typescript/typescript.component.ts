import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Topic, TypescriptSub } from './typscriptSub';
import Prism from 'prismjs';


interface TsTopics {
  title: string;
  subtopics: { id: number; name: string }[];
}

@Component({
    selector: 'app-typescript',
    imports: [],
    templateUrl: './typescript.component.html',
    styleUrl: './typescript.component.scss'
})
export class TypescriptComponent extends TypescriptSub {
  isSidebarOpen: boolean = false;
 
  typescriptTopics: TsTopics[] = [
    {
      title: 'Basic Types',
      subtopics: [
        { id: 1, name: 'String' },
        { id: 2, name: 'Number' },
        { id: 3, name: 'Boolean' },
        { id: 4, name: 'Null' },
        { id: 5, name: 'Any' },
        { id: 6, name: 'Void' },
        { id: 7, name: 'Never' },
        { id: 8, name: 'Object' },
        { id: 9, name: 'Tuple' },
        { id: 10, name: 'Array' },
        { id: 11, name: 'Interface' },
        { id: 12, name: 'Enum' },
        {id: 13, name: 'unknown' },
        {id: 14, name: 'undefined' },
        {id: 15, name: 'Class' },
      ],
    },
    {
      title: 'Type Assertions',
      subtopics: [
        { id: 16, name: 'Type Assertions' },
        { id: 17, name: 'Type Guards' },
        { id: 18, name: 'Type Aliases' },
        { id: 19, name: 'Type Inference' },
        { id: 20, name: 'Type Compatibility' },
        { id: 21, name: 'Type Casting' },
        { id: 22, name: 'Type Checking' },
        { id: 23, name: 'Type Narrowing' },
        { id: 24, name: 'Type Predicates' },
        { id: 25, name: 'Non-null assertion' },
        { id: 26, name: 'Type Assertion Syntax' },
        { id: 27, name: 'Type Assertion with as' },
        { id: 28, name: 'Type Assertion with angle brackets' },
        { id: 29, name: 'Type Assertion with keyof' },
        { id: 30, name: 'Type Assertion with typeof' },
        { id: 31, name: 'Type Assertion with in' },
        { id: 32, name: 'Type Assertion with instanceof' },

      ],
    },
    {
      title: 'OOP Concepts',
      subtopics: [
        { id: 19, name: 'Classes' },
        { id: 20, name: 'Inheritance' },
        { id: 21, name: 'Polymorphism' },
        { id: 22, name: 'Encapsulation' },
        { id: 23, name: 'Abstraction' },
        { id: 24, name: 'Access Modifiers' },
        { id: 25, name: 'Abstract Classes' },
        { id: 26, name: 'Interfaces' },
        { id: 27, name: 'Static Members' },
        { id: 28, name: 'Getters and Setters' },
        { id: 29, name: 'Method Overloading' },
        { id: 30, name: 'Method Overriding' },
        { id: 31, name: 'Constructor Overloading' },
        { id: 32, name: 'Constructor Overriding' },
        { id: 33, name: 'Constructor Chaining' },
        { id: 34, name: 'Object Composition' },
      ]
    },
    {
      title: 'Utility Types',
      subtopics: [
        { id: 35, name: 'Partial' },
        { id: 36, name: 'Required' },
        { id: 37, name: 'Readonly' },
        { id: 38, name: 'Record' },
        { id: 39, name: 'Pick' },
        { id: 40, name: 'Omit' },
        { id: 41, name: 'Exclude' },
        { id: 42, name: 'Extract' },
        { id: 43, name: 'NonNullable' },
        { id: 44, name: 'ReturnType' },
        { id: 45, name: 'InstanceType' },
        { id: 46, name: 'ThisType' },
        { id: 47, name: 'Parameters' },
        { id: 48, name: 'ConstructorParameters' },
        { id: 49, name: 'Awaited' },
        { id: 50, name: 'Uppercase' },
        { id: 51, name: 'Lowercase' },
        { id: 52, name: 'Capitalize' },
        { id: 53, name: 'Uncapitalize' },
      ]
    },
    {
      title: 'Decorators',
      subtopics: [
        { id: 54, name: 'Class Decorators' },
        { id: 55, name: 'Method Decorators' },
        { id: 56, name: 'Accessor Decorators' },
        { id: 57, name: 'Property Decorators' },
        { id: 58, name: 'Parameter Decorators' },
        { id: 59, name: 'Decorator Factories' },
        { id: 60, name: 'Decorator Composition' },
        { id: 61, name: 'Decorator Metadata' },
        { id: 62, name: 'Decorator Reflection' },
      ]
    },
   {
    title: 'Best Practices',
    subtopics: [
      { id: 63, name: 'Code Organization' },
      { id: 64, name: 'Code Readability' },
      { id: 65, name: 'Code Reusability' },
      { id: 66, name: 'Code Performance' },
      { id: 67, name: 'Code Maintainability' },
      { id: 68, name: 'Code Scalability' },
      { id: 69, name: 'Code Testing' },
      { id: 70, name: 'Code Debugging' },
      { id: 71, name: 'Code Documentation' },
    ] 
   }

    
  ];

  subTopicArray = this.typescriptTopics[0].subtopics;
  projectedContent: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.storedContent[0].content);
constructor(private sanitizer: DomSanitizer) { 
  super();
}
  ngAfterViewInit(): void {
    Prism.highlightAll();
     }

  selectNavTopic(subTopic:{ id: number; name: string }[]){
    console.log(subTopic);
    this.subTopicArray = subTopic;
  }
  selectContentTopic(topicTitle: string){
    console.log(topicTitle);
    const contentObj = this.storedContent.find((topic: Topic) => topic.title === topicTitle); 
    if (contentObj) {
        this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(contentObj.content);
    }
    else{
        this.projectedContent = this.sanitizer.bypassSecurityTrustHtml("<p>No content found</p>");
    }                        
  }
}
