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
  styleUrl: './typescript.component.scss'
})
export class TypescriptComponent {
  isSidebarOpen: boolean = false;

  typescriptTopics: TsTopics[] = [
    {
      title: 'Introduction to TypeScript',
      subtopics: [
        { id: 1, name: 'What is TypeScript?' },
        { id: 2, name: 'Installing TypeScript' }
      ]
    },
    {
      title: 'TypeScript Basics',
      subtopics: [
        { id: 3, name: 'Types in TypeScript' },
        { id: 4, name: 'Interfaces and Classes' }
      ]
    },
    {
      title: 'Advanced TypeScript',
      subtopics: [
        { id: 5, name: 'Generics' },
        { id: 6, name: 'Modules and Namespaces' }
      ]
    }
    // Add more topics and subtopics as needed
  ];
}
