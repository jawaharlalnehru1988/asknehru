import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { combineLatest, interval, fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
interface Video{
  title: string;
  description: string;
  videoId: string;
}
@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'], // Corrected property name
})
export class RxjsComponent {

videoObject: Video[] = [
  {
    title: 'Basic Syntax and Operators in RxJS Programming: A Beginner\'s Guide',
    description: 'New to RxJS? This beginner-friendly tutorial covers the essential syntax and operators you need to know to start reactive programming. We’ll explore core concepts like how observables work, the basic syntax for creating and managing streams, and commonly used operators. By the end of this video, you\'ll have a solid foundation to build reactive applications with RxJS',
    videoId: 'McoCpxwSuuA'
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
    description: 'Master subscription management in RxJS with this detailed guide on handlers and the unsubscribe method! In this video, we’ll explore the importance of managing observable subscriptions efficiently to prevent memory leaks. You\'ll learn how to use handlers to manage your streams and the proper way to unsubscribe when observables are no longer needed. Whether you\'re new to RxJS or improving your skills, this tutorial is essential for writing clean, efficient reactive code.',
    videoId: 'x1hrAZhrsxY'
  },
  {
    title: 'RxJS fromEvent Explained: Handle DOM Events with Reactive Programming',
    description: 'Learn how to use the powerful fromEvent operator in RxJS to efficiently handle DOM events with reactive programming! This tutorial will guide you through the basics of creating observables from DOM events, like clicks, key presses, and more. You\'ll see practical examples of how to integrate fromEvent into your web applications to streamline event handling and improve performance. Whether you\'re new to RxJS or just looking to sharpen your skills, this video has you covered.',
    videoId: '_7bWE6vPQFo'
  },

]
selectedVideo:Video = this.videoObject[0];
isMobile = false;
constructor(){
  this.checkScreenSize();
}
selectVideo(video:Video) {
  this.selectedVideo = video;
}

  ngAfterViewInit() {

  }

  ngOnDestroy() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
