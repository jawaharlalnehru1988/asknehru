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
      title: 'Mastering Observable Creation in RxJS: A Complete Guide for Beginners',
      description: 'Learn everything you need to know about creating observables in RxJS! In this tutorial, we\'ll break down the Observable Creation function, explaining how to efficiently generate observables and the key concepts behind it. Whether you\'re just starting out or brushing up on your reactive programming skills, this guide has you covered. Dive into RxJS with clear examples, code snippets, and practical applications.',
      videoId: '5HV-WY2t_fw'
    },
    {
      title: 'RxJS Combination & Tap Operators Explained: Boost Your Reactive Programming Skills',
      description: 'Unlock the full potential of RxJS by mastering combination operators and the powerful tap operator! In this tutorial, we’ll explore how to use combination operators like combineLatest, merge, and forkJoin to handle multiple observable streams, along with the tap operator for debugging and side effects. Whether you\'re building complex applications or debugging your code, these operators are essential tools for any RxJS developer.',
      videoId: 'himwFEGtM8Y'
    },
    {
      title: 'RxJS Handlers & Unsubscribe: Managing Subscriptions Like a Pro',
      description: 'Master subscription management in RxJS with this detailed guide on handlers and the unsubscribe method! In this video, we\'ll explore the importance of managing observable subscriptions efficiently to prevent memory leaks. You\'ll learn how to use handlers to manage your streams and the proper way to unsubscribe when observables are no longer needed. Whether you\'re new to RxJS or improving your skills, this tutorial is essential for writing clean, efficient reactive code.',
      videoId: 'x1hrAZhrsxY'
    },
    {
      title: 'RxJS fromEvent Explained: Handle DOM Events with Reactive Programming',
      description: 'Learn how to use the powerful fromEvent operator in RxJS to efficiently handle DOM events with reactive programming! This tutorial will guide you through the basics of creating observables from DOM events, like clicks, key presses, and more. You\'ll see practical examples of how to integrate fromEvent into your web applications to streamline event handling and improve performance. Whether you\'re new to RxJS or just looking to sharpen your skills, this video has you covered.',
      videoId: '_7bWE6vPQFo'
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
