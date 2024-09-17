import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface TsTopics {
  title: string;
  subtopics: { id: string; name: string }[];
}
@Component({
  selector: 'app-angular-demystify',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './angular-demystify.component.html',
  styleUrl: './angular-demystify.component.scss'
})
export class AngularDemystifyComponent {
  isSidebarOpen: boolean = false;

  angularTopics: TsTopics[] = [
    {
      title: 'Demystifying Angular\'s core topics ',
      subtopics: [
        { id: "life-cycle-hooks", name: 'Understanding Angular Component Lifecycle Hooks' },
        { id: "Angular_18_feature", name: 'Angular 18 Features: What\'s New and Improved' },
        { id: 'App-initializer', name: 'What is APP_INITIALIZER?' },
      ]
    },
    
    // Add more topics and subtopics as needed
  ];
}
