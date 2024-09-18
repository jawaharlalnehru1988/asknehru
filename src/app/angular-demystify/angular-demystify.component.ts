import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  audioContents: TsTopics[] = [
    {
      title: 'Demystifying Angular\'s core topics ',
      subtopics: [
        { id: "angular-feature", name: 'What is angular and what are its key features' },
        { id: "angularJs", name: 'What are the differences between AngularJs and Angular?' },
        { id: "angular-routing", name: 'What is the concept of routing in angular?' },
        { id: "Angular_modules", name: 'What is Angular Modules and What are its key features?' },
        { id: 'App-cli', name: 'What is the Purpose of Angular CLI?' },
        { id: 'App-directives', name: 'What is Directives in angular?' },
        { id: 'App-data-bindings', name: 'What is Databindings in angular?' },
        { id: 'life-cycle', name: 'What is Angualar Component Lifecycle hooks?' },
      ]
    },
    
    // Add more topics and subtopics as needed
  ];

  currentSection: string = 'Angular tutorial';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentSection = url[0].path;
    });
  }
}
