import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface TsTopics {
  title: string;
  subtopics: { id: number; name: string }[];
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
        { id: 1, name: 'What is APP_INITIALIZER?' },
        // { id: 2, name: 'Installing TypeScript' }
      ]
    },
    
    // Add more topics and subtopics as needed
  ];
}
