import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface TsTopics {
  title: string;
  subtopics: { id: number; name: string }[];
}

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.scss',
})
export class TypescriptComponent {
  isSidebarOpen: boolean = false;

  typescriptTopics: TsTopics[] = [
    {
      title: 'Introduction to TypeScript',
      subtopics: [
        { id: 1, name: 'What are the key features of TypeScript' },
        { id: 2, name: 'What are the benefits of using TypeScript' },
        { id: 3, name: 'What are the drawbacks of using TypeScript' },
        { id: 4, name: 'What is the TypeScript compiler' },
      ],
    },
    {
      title: 'TypeScript Basics',
      subtopics: [
        { id: 5, name: 'Types Conversions' },
        { id: 6, name: 'for loops and while loops' },
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
      ],
    },
    {
      title: 'TypeScript functions',
      subtopics: [
        { id: 17, name: 'Basic Functions' },
        { id: 18, name: 'Arrow Functions ' },
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
      title: 'Typescript Code quality',
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
    {title: 'Array and Object Methods in Typescript',
      subtopics: [
        { id: 44, name: 'Array Methods' },
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
        {id: 60, name: 'sort methods'},
        {id: 61, name: 'reverse methods'},
        {id: 62, name: 'push methods'},
        {id: 63, name: 'pop methods'},
        {id: 64, name: 'Object Methods'},
        {id: 65, name: 'keys methods'},
        {id: 66, name: 'values methods'},
        {id: 67, name: 'entries methods'},
        {id: 68, name: 'assign methods'},
        {id: 69, name: 'spread methods'},
        {id: 70, name: 'Object.keys methods'},
        {id: 71, name: 'Object.values methods'},
        {id: 72, name: 'Object.entries methods'},
        {id: 73, name: 'Object.assign methods'},
        {id: 74, name: 'Object.fromEntries methods'},
        {id: 75, name: 'set methods'},
        {id: 76, name: 'get methods'},
        {id: 77, name: 'has methods'},
        {id: 78, name: 'delete methods'},
        {id: 79, name: 'Destructuring methods'},
        {id: 80, name: 'WeakMap methods'},
        {id: 81, name: 'WeakSet methods'},
        {id: 82, name: 'Proxy methods'},
        {id: 83, name: 'Reflect methods'},
        {id: 84, name: 'Symbol methods'},
        {id: 85, name: 'Promise methods'},
        {id: 86, name: 'Generator methods'},
        {id: 87, name: 'Async methods'},
        {id: 88, name: 'Async/await methods'},
        {id: 89, name: 'Async generators methods'},
        {id: 90, name: 'Async/await generators methods'},
        {id: 91, name: 'Async iterators methods'},
        {id: 92, name: 'Async/await iterators methods'},
        {id: 93, name: 'Json methods'},
        {id: 94, name: "Date and time methods"},
            ]
    },
    {
      title: 'Strings in Typescript',
      subtopics: [
        { id: 80, name: 'String Methods' },
        { id: 81, name: 'String Concatenation' },
        { id: 82, name: 'String Interpolation' },
        { id: 83, name: 'String Template Literals' },
        { id: 84, name: 'String Properties' },
        { id: 85, name: 'String Regular Expressions' },
      ]
    },
    
  ];
}
