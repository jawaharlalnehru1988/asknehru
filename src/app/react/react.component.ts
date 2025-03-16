import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-react',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {

   reactTsTopics = [
    "Components",
    "JSX",
    "Functional Components",
    "Class Components",
    "Props and State",
    "Hooks",
    "Context API",
    "React Router",
    "Lifecycle Methods",
    "TypeScript with Props",
    "TypeScript with State",
    "TypeScript Interfaces",
    "TypeScript Generics",
    "Event Handling",
    "Forms and Form Validation",
    "Higher Order Components (HOC)",
    "Error Boundaries",
    "Performance Optimization",
    "Server-Side Rendering (SSR)",
    "Code Splitting",
    "Lazy Loading",
    "Testing"
  ];
  
  selectProject(project: string) {
    console.log(`Selected project: ${project}`);
  }

}
