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
    {title: 'Watch and learn Angular', titleId: 'watch'},
    {title: 'Read and learn Angular', titleId: 'read'},
    {title: 'Hear and learn Angular', titleId: 'hear'},
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
      title: 'How to Add PrimeNG NavBar and SideBar in Angular: Complete Guide PART 4' ,
      description: 'Learn how to integrate PrimeNG’s powerful NavBar and SideBar components into your Angular application! In this tutorial, I’ll walk you through setting up the PrimeNG library, adding a responsive NavBar and SideBar, and customizing them for your project’s needs. PrimeNG makes it easy to create modern, user-friendly navigation in your Angular apps. Perfect for developers looking to enhance their UI with PrimeNG components!',
      videoId: 'TxeAyS_fg4o'
    },
    
   
    {
      title: 'Single File vs Multi-File Components in Angular 18: Key Differences Explained PART 5',
      description: 'Learn the difference between single file and multi-file components in Angular 18 with this detailed guide! In this tutorial, I’ll show you how to create both types of components and explain when to use each one. Discover the best practices for organizing your Angular components and how these different approaches impact your app’s scalability and maintainability.',
      videoId: 'eMiO22UZj50'
    },
    {
      title: 'Understanding View Encapsulation in Angular: Styling and Scoping Explained PART 6',
      description: 'Master the concept of View Encapsulation in Angular with this in-depth tutorial! In this video, I’ll explain what View Encapsulation is, the different modes available (Emulated, Shadow DOM, and None), and how it affects the styling and scoping of your Angular components. By the end, you’ll know how to control CSS behavior within your components and apply best practices for component styling in Angular.',
      videoId: 'XxmiBap-1JY'
    },
    
    {
      title: 'Text Interpolation in Angular 18: Display Dynamic Data Easily PART 7',
      description: 'Learn how to use text interpolation in Angular 18 to display dynamic data directly within your HTML templates! In this beginner-friendly tutorial, I’ll show you how to bind data to your views using interpolation, making it easy to reflect changes in your Angular components. This is an essential feature for anyone getting started with Angular or looking to understand its powerful data-binding capabilities.',
      videoId: '1Q0_VdMA1ao'
    },
    
    {
      title: 'API Integration with Text Interpolation in Angular: Display Data Dynamically PART 8',
      description: 'Learn how to integrate APIs with Angular and display data dynamically using text interpolation! In this tutorial, I’ll show you how to fetch data from an API and bind it directly to your HTML views with Angular’s powerful text interpolation feature. This step-by-step guide is perfect for developers looking to connect external data sources to their Angular applications and present real-time information in the UI.',
      videoId: 'PXNsEaZnlQ8'
    },
    
    {
      title: 'Master Property Binding in Angular 18: Dynamic UI Updates Made Easy PART 9',
      description: 'how to use property binding in Angular 18 to dynamically update your user interface! In this tutorial, I’ll show you how to bind data from your Angular components directly to your HTML properties, allowing for seamless dynamic updates. This guide is perfect for beginners who want to understand the power of Angular property binding and how to use it to create interactive, responsive web applications.',
      videoId: 'F7e-npUBoeE'
    },
    
    {
      title: 'Attribute Binding in Angular 18: Bind HTML Attributes Dynamically PART 10',
      description: 'Learn how to use attribute binding in Angular 18 to dynamically bind values to HTML attributes! In this tutorial, I’ll explain the concept of attribute binding, show you how to implement it in your Angular applications, and highlight the differences between attribute binding and property binding. This video is perfect for Angular developers looking to create more flexible and dynamic UIs.',
      videoId: 'CCrPbOtfzOI'
    },
    {
      title: 'Master Event Binding and One-Way Data Binding in Angular 18: Full Guide PART 11',
      description: 'Learn how to implement event binding and one-way data binding in Angular 18 to create interactive, responsive applications! In this tutorial, I’ll explain how Angular’s one-way data binding works and show you how to handle user events with event binding. These are essential concepts for building dynamic Angular applications that react to user input and trigger updates efficiently.',
      videoId: 'NRmNJG10coc'
    },
    
    {
      title: 'In-Depth Guide to Two-Way Data Binding in Angular 18: Master Data Syncing PART 12',
      description: ' Dive deep into two-way data binding in Angular 18 with this comprehensive guide! In this video, I’ll explain the fundamentals and mechanics of two-way data binding, show you how to use ngModel effectively, and discuss common scenarios and best practices for implementing this powerful feature. Perfect for developers who want to gain a full understanding of data syncing between components and views in Angular applications.',
      videoId: 'wGOy41FbB3Y'
    },
    
    {
      title: 'Data Transfer from Parent to Child Component in Angular 18: A Complete Guide part 13',
      description: 'Learn how to pass data from a parent component to a child component in Angular 18! In this tutorial, I’ll cover the essentials of data transfer between components, focusing on using @Input to send data from parent to child. This guide is perfect for Angular developers looking to understand component communication and build more dynamic, organized applications.',
      videoId: 'ShkQufvzdIQ'
    },
    
    {
      title: 'Transform Property in Input Decorator in Angular 18: Enhance Data Passing PART 14',
      description: 'how to use the transform property with the @Input decorator in Angular 18 to control and modify data passed from a parent component! In this tutorial, I’ll explain how you can transform input data in real-time, ensuring cleaner, more predictable data flow in your Angular applications. This guide is ideal for developers looking to refine component communication and enhance data handling in Angular.',
      videoId: 'urU2gcTk-ww'
    },
    {
      title: 'Child to Parent Data Transfer in Angular 18: Emitting Data with @Output  PART 15',
      description: 'Learn how to send data from a child component to a parent component in Angular 18 using the @Output decorator and EventEmitter! In this tutorial, I’ll walk you through the steps to set up child-to-parent data transfer, providing examples and best practices to keep your components connected and maintain data flow in your Angular applications.',
      videoId: 'aclsXPxBVHI'
    },
    {
      title: 'Using the New Output Function in Angular 18: Simplify Component Communication PART 16',
      description: 'Discover the latest features of Angular 18\'s new Output function and learn how it enhances component communication! In this tutorial, I’ll explain how to set up and use the new Output function to pass data and events from child components to parent components easily and efficiently. Perfect for Angular developers looking to stay updated on the latest features!',
      videoId: 'KkH-FQ2EDJg'
    },
    {
      title: 'Control Flow in Angular 17+: Mastering *ngIf for Conditional Rendering PART 17',
      description: 'how to use the *ngIf directive in Angular 17 for controlling the flow and conditionally rendering components! In this tutorial, I’ll explain how the *ngIf directive works, demonstrate practical examples, and show you how to structure your components with conditional statements for efficient and clean UIs.',
      videoId: 'Nmsg5RUlfmA'
    },
    {
      title: 'Switch Control Flow in Angular 18: Mastering ngSwitch for Dynamic Rendering PART 18',
      description: 'Explore the power of the ngSwitch directive in Angular 18 to control flow and render views dynamically based on conditions! In this tutorial, I’ll guide you through using ngSwitch, ngSwitchCase, and ngSwitchDefault to handle complex UI scenarios. Perfect for developers looking to manage component views based on multiple conditions!',
      videoId: 'yUOC_EP3HCs'
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
  sidebarTitle: string = 'watch';

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
