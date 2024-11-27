import { NgClass } from '@javascript/common';
import { Component } from '@javascript/core';
import { ActivatedRoute, Router, RouterLink } from '@javascript/router';
import { YouTubePlayerModule } from '@javascript/youtube-player';
interface TsTopics {
  title: string;
  subtopics: { id: string; name: string }[];
}

interface javascriptTopics {
  title: string;
  titleId: string;
}

interface Video{
  title: string;
  description: string;
  videoId: string;
}
@Component({
  selector: 'javascript',
  standalone: true,
  imports: [RouterLink, NgClass, YouTubePlayerModule],
  templateUrl: './javascript.html',
  styleUrl: './javascript.scss'
})
export class AngularDemystifyComponent {
  isSidebarOpen: boolean = false;
  selectedTopic: string | null = null;
  sidebarTopics:javascriptTopics[] = [
    {title: 'Watch and learn Javascript', titleId: 'watch'},
    {title: 'Read and learn Javascript', titleId: 'read'},
    {title: 'Hear and learn Javascript', titleId: 'hear'},
  ]
  angularTopics: TsTopics[] = [
    {
      title: 'Read and learn Javascript',
      subtopics: [
        { id: "life-cycle-hooks", name: 'Javascript' },
        { id: "Angular_18_feature", name: 'Javascript Features: ' },
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
    
  

  ];
  isMobile = false;
  selectedVideo:Video = this.videoObject[0];

  audioContents: TsTopics[] = [
    {
      title: 'Hear and learn Javascript',
      subtopics: [
        { id: "javascript", name: 'Javascript A to Z videos' },
        
      ]
    },
    
    // Add more topics and subtopics as needed
  ];

  currentSection: string = 'Javascript tutorial';
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
