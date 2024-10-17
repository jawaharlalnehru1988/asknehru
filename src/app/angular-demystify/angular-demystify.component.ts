import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
interface TsTopics {
  title: string;
  subtopics: { id: string; name: string }[];
}

interface AngularTopics {
  title: string;
  titleId: string;
}

interface Video{
  title: string;
  description: string;
  videoId: string;
}
@Component({
  selector: 'app-angular-demystify',
  standalone: true,
  imports: [RouterLink, NgClass, YouTubePlayerModule],
  templateUrl: './angular-demystify.component.html',
  styleUrl: './angular-demystify.component.scss'
})
export class AngularDemystifyComponent {
  isSidebarOpen: boolean = false;
  selectedTopic: string | null = null;
  sidebarTopics:AngularTopics[] = [
    {title: 'Read and learn Angular', titleId: 'read'},
    {title: 'Hear and learn Angular', titleId: 'hear'},
    {title: 'Watch and learn Angular', titleId: 'watch'},
  ]
  angularTopics: TsTopics[] = [
    {
      title: 'Read and learn Angular',
      subtopics: [
        { id: "life-cycle-hooks", name: 'Understanding Angular Component Lifecycle Hooks' },
        { id: "Angular_18_feature", name: 'Angular 18 Features: What\'s New and Improved' },
        { id: 'App-initializer', name: 'What is APP_INITIALIZER?' },
      ]
    },
    
    // Add more topics and subtopics as needed
  ];

  videoObject: Video[] = [
    {
      title: 'How to Create a New Angular App: Step-by-Step Guide for Beginners PART 1',
      description: 'Want to build your first Angular application? In this beginner-friendly tutorial, I’ll guide you through the entire process of creating a new Angular app from scratch. You\'ll learn how to set up your development environment, generate a new Angular project, and run it on your local machine. Perfect for beginners and those looking to get started with Angular quickly and easily.',
      videoId: 'zOTrfCNQEPc'
    },
    
    {
      title: 'How to Create a Component in Angular 18: Quick and Easy Tutorial PART 2',
      description: 'Learn how to create components in Angular 18 with this step-by-step guide! In this tutorial, I\'ll walk you through the process of generating, configuring, and using Angular components. Whether you’re new to Angular or just getting started with version 18, this video will help you understand the core concepts behind component-based development and how to integrate them into your projects.',
      videoId: 'uQ3DYqroc9E'
    },
    {
      title: 'How to Push an Angular 18 Project to GitHub: Complete Guide for Beginners PART 3',
      description: ' Learn how to push your Angular 18 project to GitHub with this step-by-step guide! In this tutorial, I’ll show you how to set up version control for your Angular 18 app, connect it to GitHub, and push your code for easy collaboration and backup. Whether you\'re new to Angular or GitHub, this guide will help you seamlessly integrate your project with GitHub.',
      videoId: 'N-bxHQUo0U8'
    },
   
    {
      title: 'How to Add PrimeNG NavBar and SideBar in Angular: Complete Guide',
      description: 'Learn how to integrate PrimeNG’s powerful NavBar and SideBar components into your Angular application! In this tutorial, I’ll walk you through setting up the PrimeNG library, adding a responsive NavBar and SideBar, and customizing them for your project’s needs. PrimeNG makes it easy to create modern, user-friendly navigation in your Angular apps. Perfect for developers looking to enhance their UI with PrimeNG components!',
      videoId: 'TxeAyS_fg4o'
    },
    
  
    
  ];
  isMobile = false;
  selectedVideo:Video = this.videoObject[0];

  audioContents: TsTopics[] = [
    {
      title: 'Hear and learn Angular',
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
  sidebarTitle: string = 'read';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentSection = url[0].path;
    });
  }

  displayTopic(topicId: string) {
  console.log('topicId :', topicId);
    this.sidebarTitle = topicId;
    this.selectedTopic = topicId;
  }
  onKeyPress(event: KeyboardEvent, topicId: string) {
  this.displayTopic(topicId)
  }

  selectVideo(video:Video) {
    this.selectedVideo = video;
  }
}
