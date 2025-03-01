import { NgConcepts } from "../angular-blogs/blog";

export interface Video{
  title: string;
  description: string;
  videoId: string;
}

export interface Topics{
    title: string;
    subTopics: string[] | Subtopic[];
}

export interface Subtopic{
    topic: string;
    subtopics: string[];
}

export class RxjsSupport {
    constructor() { }
    topicsClassified: NgConcepts[] = [
        {
            mainTopic: 'Observables',
            subTopics: [
                { topic: `Intro`, content: `` },
                { topic: `Creating Observables`, content: `` },
                { topic: `Subscription`, content: `` },
                { topic: `Subscriber`, content: `` },
                { topic: `Observer`, content: `` },
                { topic: `Scheduler`, content: `` },
            ]
        }, {
            mainTopic: "Creation Operators", subTopics: [
                { topic: `ajax`, content: `` },
                { topic: `bindCallback`, content: `` },
                { topic: `bindNodeCallback`, content: `` },
                { topic: `defer`, content: `` },
                { topic: `empty`, content: `` },
                { topic: `from`, content: `` },
                { topic: `fromEvent`, content: `` },
                { topic: `fromEventPattern`, content: `` },
                { topic: `generate`, content: `` },
                { topic: `interval`, content: `` },
                { topic: `of`, content: `` },
                { topic: `range`, content: `` },
                { topic: `throwError`, content: `` },
                { topic: `timer`, content: `` },
                { topic: `iif`, content: `` }
            ]
        },
        {
            mainTopic: "Join Creation Operators",
            subTopics: [
                { topic: `combineLatest`, content: `` },
                { topic: `concat`, content: `` },
                { topic: `forkJoin`, content: `` },
                { topic: `merge`, content: `` },
                { topic: `partition`, content: `` },
                { topic: `race`, content: `` },
                { topic: `zip`, content: `` }
            ]
        },
        {
            mainTopic: "Transformation Operators", subTopics: [
                { topic: `buffer`, content: `` },
                { topic: `bufferCount`, content: `` },
                { topic: `bufferTime`, content: `` },
                { topic: `bufferToggle`, content: `` },
                { topic: `bufferWhen`, content: `` },
                { topic: `concatMap`, content: `` },
                { topic: `concatMapTo`, content: `` },
                { topic: `exhaust`, content: `` },
                { topic: `exhaustMap`, content: `` },
                { topic: `expand`, content: `` },
                { topic: `groupBy`, content: `` },
                { topic: `map`, content: `` },
                { topic: `mapTo`, content: `` },
                { topic: `mergeMap`, content: `` },
                { topic: `mergeMapTo`, content: `` },
                { topic: `mergeScan`, content: `` },
                { topic: `pairwise`, content: `` },
                { topic: `partition`, content: `` },
                { topic: `pluck`, content: `` },
                { topic: `scan`, content: `` },
                { topic: `switchScan`, content: `` },
                { topic: `switchMap`, content: `` },
                { topic: `switchMapTo`, content: `` },
                { topic: `window`, content: `` },
                { topic: `windowCount`, content: `` },
                { topic: `windowTime`, content: `` },
                { topic: `windowToggle`, content: `` },
                { topic: `windowWhen`, content: `` }
            ]
        },
        {
            mainTopic: "Filtering Operators",
            subTopics: [
                { topic: `audit`, content: `` },
                { topic: `auditTime`, content: `` },
                { topic: `debounce`, content: `` },
                { topic: `debounceTime`, content: `` },
                { topic: `distinct`, content: `` },
                { topic: `distinctUntilChanged`, content: `` },
                { topic: `distinctUntilKeyChanged`, content: `` },
                { topic: `elementAt`, content: `` },
                { topic: `filter`, content: `` },
                { topic: `first`, content: `` },
                { topic: `ignoreElements`, content: `` },
                { topic: `last`, content: `` },
                { topic: `sample`, content: `` },
                { topic: `sampleTime`, content: `` },
                { topic: `single`, content: `` },
                { topic: `skip`, content: `` },
                { topic: `skipLast`, content: `` },
                { topic: `skipUntil`, content: `` },
                { topic: `skipWhile`, content: `` },
                { topic: `take`, content: `` },
                { topic: `takeLast`, content: `` },
                { topic: `takeUntil`, content: `` },
                { topic: `takeWhile`, content: `` },
                { topic: `throttle`, content: `` },
                { topic: `throttleTime`, content: `` }
            ]

        },
        {
            mainTopic: "Join Operators",
            subTopics: [
                { topic: `combineLatestAll`, content: `` },
                { topic: `combineAll`, content: `` },
                { topic: `exhaustAll`, content: `` },
                { topic: `mergeAll`, content: `` },
                { topic: `switchAll`, content: `` },
                { topic: `startWith`, content: `` },
                { topic: `withLatestFrom`, content: `` }
            ]
        },
        {
            mainTopic: "Multicasting Operators",
            subTopics: [
                { topic: `multicast`, content: `` },
                { topic: `publish`, content: `` },
                { topic: `publishBehavior`, content: `` },
                { topic: `publishLast`, content: `` },
                { topic: `publishReplay`, content: `` },
                { topic: `share`, content: `` }
            ]

        },
        {
            mainTopic: "Error Handling Operators",
            subTopics: [
                { topic: `catchError`, content: `` },
                { topic: `retry`, content: `` },
                { topic: `retryWhen`, content: `` }
            ]
        },
        {
            mainTopic: "Utility Operators",
            subTopics: [
                { topic: `tap`, content: `` },
                { topic: `delay`, content: `` },
                { topic: `delayWhen`, content: `` },
                { topic: `dematerialize`, content: `` },
                { topic: `materialize`, content: `` },
                { topic: `observeOn`, content: `` },
                { topic: `subscribeOn`, content: `` },
                { topic: `timeInterval`, content: `` },
                { topic: `timeout`, content: `` },
                { topic: `timeoutWith`, content: `` },
                { topic: `timestamp`, content: `` },
                { topic: `toArray`, content: `` }
            ]
        },
        {
            mainTopic: "Conditional Operators",
            subTopics: [
                { topic: `defaultIfEmpty`, content: `` },
                { topic: `every`, content: `` },
                { topic: `find`, content: `` },
                { topic: `findIndex`, content: `` },
                { topic: `isEmpty`, content: `` }
            ]

        },
        {
            mainTopic: "Mathematical and Aggregate Operators",
            subTopics: [
                { topic: `count`, content: `` },
                { topic: `max`, content: `` },
                { topic: `min`, content: `` },
                { topic: `reduce`, content: `` }
            ]
        },
        {
            mainTopic: "Debugging Operators",
            subTopics: [
                { topic: `do`, content: `` },
                { topic: `tap`, content: `` },
                { topic: `finalize`, content: `` }
            ]
        },
        {
            mainTopic: "Custom Operators",
            subTopics: [
                { topic: `let`, content: `` },
                { topic: `lift`, content: `` },
                { topic: `pipe`, content: `` }
            ]
        },
        {
            mainTopic: 'Subjects',
            subTopics: [
                { topic: `Subject`, content: `` },
                { topic: `BehaviorSubject`, content: `` },
                { topic: `ReplaySubject`, content: `` },
                { topic: `AsyncSubject`, content: `` },
                { topic: `void Subject`, content: `` }
            ]
        },
        {
            mainTopic: 'Schedulers',
            subTopics: [
                { topic: `Introduction`, content: `` },
                { topic: `Scheduler`, content: `` },
                { topic: `AsyncScheduler`, content: `` },
                { topic: `QueueScheduler`, content: `` },
                { topic: `AsapScheduler`, content: `` },
                { topic: `AnimationFrameScheduler`, content: `` },
                { topic: `VirtualTimeScheduler`, content: `` },
            ]
        },
        {
            mainTopic: 'Testing',
            subTopics: [
                { topic: `Introduction`, content: `` },
                { topic: `TestScheduler`, content: `` },
                { topic: `TestMessage`, content: `` },
                { topic: `SubscriptionLog`, content: `` },
                { topic: `SubscriptionLoggable`, content: `` },
                { topic: `HotObservable`, content: `` },
                { topic: `ColdObservable`, content: `` },
                { topic: `TimeFrame`, content: `` },
                { topic: `TimeInterval`, content: `` },
                { topic: `Notification`, content: `` },
            ]
        },
        {
            mainTopic: 'Videos',
            subTopics: [
                { topic: `Basic`, content: `` },
                { topic: `Creation`, content: `` },
            ]
        }
    ];

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
  
  ];
  

}