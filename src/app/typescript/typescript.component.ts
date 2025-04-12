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
      title: 'Intro',
      subtopics: [
        { id: 1, name: 'key features' },
        { id: 2, name: 'Benefits' },
        { id: 3, name: 'Drawbacks' },
        { id: 4, name: 'Compiler' },
      ],
    },
    {
      title: 'Basics',
      subtopics: [
        { id: 5, name: 'Types Conversions' },
        { id: 6, name: 'Loops' },
        { id: 7, name: 'Basic Operators, Maths' },
        { id: 8, name: 'The Switch Statement' },
        { id: 9, name: 'The Ternary Operator' },
        { id: 10, name: 'Type Assertions' },
        { id: 11, name: 'Type Aliases' },
        { id: 12, name: 'Interfaces' },
        { id: 13, name: 'Classes' },
        { id: 14, name: 'Modules' },
        { id: 15, name: 'Generics' },
        { id: 16, name: 'Namespaces' },
        { id: 17, name: 'Enums' },
        { id: 18, name: 'Type Guards' },

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
        { id: 27, name: 'Mixins' },
        { id: 28, name: 'Composition' },
        { id: 29, name: 'Aggregation' },
        { id: 30, name: 'Association' },
        { id: 31, name: 'Dependency' },
        { id: 32, name: 'Inversion of Control' },
        { id: 33, name: 'Dependency Injection' },
        { id: 34, name: 'Singleton' },
        { id: 35, name: 'Factory' },
        { id: 36, name: 'Builder' },
        { id: 37, name: 'Prototype' },
        { id: 38, name: 'Adapter' },
        { id: 39, name: 'Bridge' },
        { id: 40, name: 'Composite' },
        { id: 41, name: 'Decorator' },
        { id: 42, name: 'Facade' },
        { id: 43, name: 'Flyweight' },
        { id: 44, name: 'Proxy' },
        { id: 45, name: 'Chain of Responsibility' },
        { id: 46, name: 'Command' },
        { id: 47, name: 'Interpreter' },
        { id: 48, name: 'Iterator' },
        { id: 49, name: 'Mediator' },
        { id: 50, name: 'Memento' },
        { id: 51, name: 'Observer' },
        { id: 52, name: 'State' },
        { id: 53, name: 'Strategy' },
        { id: 54, name: 'Template Method' },
        { id: 55, name: 'Visitor' },
      ]
    },
    {
      title: 'Functions',
      subtopics: [
        { id: 18, name: 'Basic Functions' },
        { id: 19, name: 'Arrow Functions ' },
        { id: 19, name: 'Rest Parameters' },
        { id: 20, name: 'Spread Operator' },
        { id: 21, name: 'Default Parameters' },
        { id: 22, name: 'Optional Parameters' },
        { id: 23, name: 'Named Parameters' },
        { id: 24, name: 'Function expressions' },
        { id: 25, name: 'Anonymous Functions' },
        { id: 26, name: 'Function Types' },
        { id: 27, name: 'Function Overloading' },
        { id: 28, name: 'Function Overriding' },
        { id: 29, name: 'Nullish coalescing operator' },
        { id: 30, name: 'Optional chaining' },
        { id: 31, name: 'Optional nullish coalescing operator' },
        { id: 32, name: 'Type narrowing' },
        { id: 33, name: 'Type predicates' },
      ],
    },
    {
      title: 'Code quality',
      subtopics: [
        { id: 34, name: 'Code Styles' },
        { id: 35, name: 'Linting' },
        { id: 36, name: 'Formatting' },
        { id: 37, name: 'Static analysis' },
        { id: 38, name: 'Code coverage' },
        { id: 39, name: 'Code quality issues' },
        { id: 40, name: 'Code quality tools' },
        { id: 41, name: 'polyfills and transpilers' },
        { id: 42, name: 'Automated Testing with Jasmine and Karma' },
        { id: 43, name: 'Debugging with Chrome DevTools' },
      ],
    },
    {title: 'Array Methods',
      subtopics: [
        {id: 44, name: 'Array Methods' },
        {id: 45, name: 'for methods'},
        {id: 46, name: 'forEach methods'},
        {id: 47, name: 'map methods'},
        {id: 48, name: 'filter methods'},
        {id: 49, name: 'some methods'},
        {id: 50, name: 'every methods'},
        {id: 51, name: 'find methods'},
        {id: 52, name: 'findIndex methods'},
        {id: 53, name: 'reduce methods'},
        {id: 54, name: 'reduceRight methods'},
        {id: 55, name: 'sort methods'},
        {id: 56, name: 'reverse methods'},
        {id: 57, name: 'push methods'},
        {id: 58, name: 'pop methods'},
        {id: 59, name: 'Object Methods'},
        {id: 60, name: 'keys methods'},
        {id: 61, name: 'values methods'},
        {id: 62, name: 'entries methods'},
        {id: 63, name: 'assign methods'},
        {id: 64, name: 'spread methods'},
        {id: 69, name: 'Object.fromEntries methods'},
        {id: 70, name: 'set methods'},
        {id: 71, name: 'get methods'},
        {id: 72, name: 'has methods'},
        {id: 73, name: 'delete methods'},
        {id: 74, name: 'Destructuring methods'},
        {id: 75, name: 'WeakMap methods'},
        {id: 76, name: 'WeakSet methods'},
        {id: 77, name: 'Proxy methods'},
        {id: 78, name: 'Reflect methods'},
        {id: 79, name: 'Symbol methods'},
        {id: 80, name: 'Promise methods'},
        {id: 81, name: 'Generator methods'},
        {id: 88, name: 'Json methods'},
        {id: 89, name: "Date and time methods"},
            ]
    },
    {
      title: 'Async Methods',
      subtopics: [
        { id: 60, name: 'Promise Methods' },
        { id: 61, name: 'Generator Methods' },
        { id: 62, name: 'Async Methods' },
        { id: 63, name: 'Async/Await Methods' },
        { id: 64, name: 'Async Generators Methods' },
        { id: 65, name: 'Async/Await Generators Methods' },
        { id: 66, name: 'Async Iterators Methods' },
        { id: 67, name: 'Async/Await Iterators Methods' },
        { id: 68, name: 'Json Methods' },
        { id: 69, name: 'Date and Time Methods' },
      ]
    },
    {
      title: 'Object Methods',
      subtopics: [
        {id: 65, name: 'Object.keys methods'},
        {id: 66, name: 'Object.values methods'},
        {id: 67, name: 'Object.entries methods'},
        {id: 68, name: 'Object.assign methods'},
        {id: 69, name: 'Object.fromEntries methods'},
        {id: 64, name: 'spread methods'},
        {id: 74, name: 'Destructuring methods'},
      ]
    },
    {
      title: 'Numbers',
      subtopics: [
        { id: 90, name: 'Number Methods' },
        { id: 91, name: 'Number Properties' },
        { id: 92, name: 'Number Conversions' },
        { id: 93, name: 'Number Regular Expressions' },
      ]
    },
    {
      title: 'Strings in Typescript',
      subtopics: [
        { id: 90, name: 'String Methods' },
        { id: 91, name: 'String Concatenation' },
        { id: 92, name: 'String Interpolation' },
        { id: 93, name: 'String Template Literals' },
        { id: 94, name: 'String Properties' },
        { id: 95, name: 'String Regular Expressions' },
      ]
    },
    
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
