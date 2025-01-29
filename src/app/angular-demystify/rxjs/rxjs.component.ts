import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { combineLatest, interval, fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
interface Video{
  title: string;
  description: string;
  videoId: string;
}
@Component({
    selector: 'app-rxjs',
    imports: [YouTubePlayerModule],
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
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
    description: 'Master subscription management in RxJS with this detailed guide on handlers and the unsubscribe method! In this video, we\'ll explore the importance of managing observable subscriptions efficiently to prevent memory leaks. You\'ll learn how to use handlers to manage your streams and the proper way to unsubscribe when observables are no longer needed. Whether you\'re new to RxJS or improving your skills, this tutorial is essential for writing clean, efficient reactive code.',
    videoId: 'x1hrAZhrsxY'
  },
  {
    title: 'RxJS fromEvent Explained: Handle DOM Events with Reactive Programming',
    description: 'Learn how to use the powerful fromEvent operator in RxJS to efficiently handle DOM events with reactive programming! This tutorial will guide you through the basics of creating observables from DOM events, like clicks, key presses, and more. You\'ll see practical examples of how to integrate fromEvent into your web applications to streamline event handling and improve performance. Whether you\'re new to RxJS or just looking to sharpen your skills, this video has you covered.',
    videoId: '_7bWE6vPQFo'
  },
  {
    title: 'RxJS range Operator Explained: Efficiently Create Observable Sequence',
    description: 'Discover the power of the range creation function in RxJS for generating sequential numbers with ease! In this tutorial, you\'ll learn how the range operator works, how to use it to create observables, and practical scenarios where it\'s beneficial. Whether you\'re working on iterating over sequences or performing actions at specific intervals, the range function can streamline your code.',
    videoId: 'mQyDGiQmuR4'
  },
  {
    title: 'RxJS mergeMap Operator: Mastering Concurrent Observable Mapping',
    description: 'Unlock the power of the mergeMap operator in RxJS for handling concurrent observables like a pro! In this video, we’ll dive deep into how mergeMap works, allowing you to flatten and merge multiple inner observables. You’ll learn how to manage asynchronous operations more efficiently, especially when dealing with HTTP requests, streams, and complex data flows. This tutorial is perfect for both beginners and experienced developers looking to optimize their RxJS code.',
    videoId: 'fVZ1FBC0M7I'
  },
  {
    title: 'RxJS switchMap Operator Explained: Efficient Observable Switching',
    description: 'Learn how to use the powerful switchMap operator in RxJS to efficiently manage switching between observables! This tutorial will help you understand how switchMap cancels previous inner observables and only subscribes to the latest one, making it perfect for handling fast-changing data like search inputs, HTTP requests, and more. By the end of this video, you\'ll know when and how to apply switchMap in real-world scenarios for optimal reactive programming.',
    videoId: 'vlZ92x41zCE'
  },
  {
    title: 'RxJS concatMap Operator: Sequential Observable Mapping Explained',
    description: 'Master the concatMap operator in RxJS for sequentially handling multiple observables! In this tutorial, you\'ll learn how concatMap ensures that observables are processed one after the other, maintaining their order. It\'s perfect for scenarios where preserving sequence matters, such as processing API calls or event streams. This video breaks down how to use concatMap with practical examples, helping you integrate it into your reactive programming toolkit.',
    videoId: 'hlcs0_S9QRU'
  },
  {
    title: 'RxJS debounceTime Operator: Optimize Event Handling & Performance',
    description: 'Learn how to use the debounceTime operator in RxJS to optimize event handling and improve performance! This tutorial explains how debounceTime works by delaying values emitted by observables and only emitting the latest one after a specified time. It\'s ideal for scenarios like handling user inputs, search boxes, and preventing unnecessary API calls. By the end of this video, you\'ll be able to implement debounceTime to enhance the efficiency of your reactive applications.',
    videoId: 'b98AkDHDGzQ'
  },

]
selectedVideo:Video = this.videoObject[0];
isMobile = false;
screenWidth: number = 0;
screenHeight: number = 0;
constructor(private screenService: ScreenSizeService){
  this.checkScreenSize();
}
selectVideo(video:Video) {
  this.selectedVideo = video;
}

  ngAfterViewInit() {
    this.screenService.screenWidth$.pipe(map(num => num * 0.6)).subscribe(width => {
      this.screenWidth = width;
    });
  
    this.screenService.screenHeight$.pipe(map(num => num * 0.7)).subscribe(height => {
      this.screenHeight = height;
    });
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
