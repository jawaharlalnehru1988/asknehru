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
                { topic: `Intro`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Introduction to RxJS</h2>

  <p>
    <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a powerful library for handling asynchronous operations using observable streams. 
    It is widely used in **Angular** for managing HTTP requests, event handling, and reactive programming.
  </p>

  <h3 style="color: #dc3545;">Why Use RxJS?</h3>
  <ul style="padding-left: 20px;">
    <li>Handles **asynchronous operations** like API calls, user input, and event streams.</li>
    <li>Provides **powerful operators** for data transformation and event handling.</li>
    <li>Helps in writing **clean and maintainable** reactive code.</li>
    <li>Works seamlessly with **Angular's HTTPClient and Forms**.</li>
  </ul>

  <h3 style="color: #17a2b8;">Core Concepts in RxJS</h3>

  <h4 style="color: #28a745;">1. Observables</h4>
  <p>An **Observable** represents a data stream that emits values over time. It can be subscribed to receive these values.</p>
   <pre >
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
        observer.next('Hello');
        observer.next('RxJS');
        observer.complete();
    });

    myObservable.subscribe(value => console.log(value));
  </code>
  </pre>

  <h4 style="color: #28a745;">2. Observers & Subscribers</h4>
  <p>**Observers** consume data emitted by an observable, and **subscribers** listen to these events.</p>

  <h4 style="color: #28a745;">3. Operators</h4>
  <p>Operators help modify or transform data streams. Some commonly used operators are:</p>
  <ul>
    <li><strong>map()</strong> – Transforms emitted values.</li>
    <li><strong>filter()</strong> – Filters out specific values.</li>
    <li><strong>mergeMap()</strong> – Flattens multiple observables.</li>
    <li><strong>debounceTime()</strong> – Limits frequent emissions.</li>
  </ul>

  <h3 style="color: #17a2b8;">Example: Using RxJS in Angular</h3>
  <p>Here’s how you can use RxJS with Angular’s **HttpClient**:</p>
  <pre >
  <code class="language-javascript">
    import { HttpClient } from '@angular/common/http';
    import { Component } from '@angular/core';
    import { Observable } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent {
      data$: Observable<any>;

      constructor(private http: HttpClient) {
        this.data$ = this.http.get('https://api.example.com/data');
      }
    }
  </code>
  </pre>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>RxJS is a fundamental part of **modern Angular development**. Understanding Observables and operators helps in writing **efficient and scalable** applications.</p>
</div>
` },
                { topic: `Creating Observables`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Creating Observables using RxJS</h2>

  <p>
    <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a powerful library for handling asynchronous operations using observable streams. 
    One of the core features of RxJS is the ability to create **Observables**, which are the foundation of reactive programming. 
    In this article, we’ll explore how to create Observables in RxJS and understand their usage in real-world scenarios.
  </p>

  <h3 style="color: #dc3545;">What is an Observable?</h3>
  <p>
    An **Observable** is a data stream that can emit multiple values over time. It can represent anything from user input events to HTTP requests or even custom data streams. 
    Observables are lazy, meaning they only start emitting values when you **subscribe** to them.
  </p>

  <h3 style="color: #17a2b8;">Creating Observables in RxJS</h3>

  <h4 style="color: #28a745;">1. Using the \`Observable\` Constructor</h4>
  <p>
    The most basic way to create an Observable is by using the \`Observable\` constructor. 
    This allows you to define a custom data stream and control how values are emitted.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const customObservable = new Observable(observer => {
      observer.next('First value');
      observer.next('Second value');
      observer.complete(); // Marks the end of the stream
    });

    customObservable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Observable completed')
    });
  </code>
  </pre>
  <p>
    In this example, the Observable emits two values (\`'First value'\` and \`'Second value'\`) and then completes. 
    The \`subscribe\` method is used to listen to these emissions.
  </p>

  <h4 style="color: #28a745;">2. Using RxJS Creation Functions</h4>
  <p>
    RxJS provides several **creation functions** to simplify the process of creating Observables. 
    These functions are designed for common use cases like emitting a single value, a sequence of values, or values at intervals.
  </p>

  <h5 style="color: #ffc107;">a. \`of()\`</h5>
  <p>
    The \`of()\` function creates an Observable that emits a sequence of values and then completes.
  </p>
  <pre>
  <code class="language-javascript">
    import { of } from 'rxjs';

    const observable = of(1, 2, 3);

    observable.subscribe(value => console.log(value));
    // Output: 1, 2, 3
  </code>
  </pre>

  <h5 style="color: #ffc107;">b. \`from()\`</h5>
  <p>
    The \`from()\` function creates an Observable from an array, promise, or iterable.
  </p>
  <pre>
  <code class="language-javascript">
    import { from } from 'rxjs';

    const arrayObservable = from([10, 20, 30]);
    arrayObservable.subscribe(value => console.log(value));
    // Output: 10, 20, 30

    const promiseObservable = from(Promise.resolve('Hello RxJS'));
    promiseObservable.subscribe(value => console.log(value));
    // Output: Hello RxJS
  </code>
  </pre>

  <h5 style="color: #ffc107;">c. \`interval()\`</h5>
  <p>
    The \`interval()\` function creates an Observable that emits sequential numbers at a specified interval.
  </p>
  <pre>
  <code class="language-javascript">
    import { interval } from 'rxjs';

    const intervalObservable = interval(1000); // Emits a value every second
    intervalObservable.subscribe(value => console.log(value));
    // Output: 0, 1, 2, 3, ... (every second)
  </code>
  </pre>

  <h5 style="color: #ffc107;">d. \`fromEvent()\`</h5>
  <p>
    The \`fromEvent()\` function creates an Observable from DOM events or other event sources.
  </p>
  <pre>
  <code class="language-javascript">
    import { fromEvent } from 'rxjs';

    const button = document.querySelector('button');
    const clickObservable = fromEvent(button, 'click');

    clickObservable.subscribe(event => console.log('Button clicked!', event));
  </code>
  </pre>

  <h3 style="color: #17a2b8;">Example: Combining Observables</h3>
  <p>
    Observables can be combined using operators like \`merge\`, \`concat\`, or \`combineLatest\` to create more complex data streams.
  </p>
  <pre>
  <code class="language-javascript">
    import { of, interval, combineLatest } from 'rxjs';

    const observable1 = of('A', 'B', 'C');
    const observable2 = interval(1000);

    const combinedObservable = combineLatest([observable1, observable2]);

    combinedObservable.subscribe(([value1, value2]) => 
      console.log(\`Combined: \${value1}, \${value2}\`)
    );
    // Output: Combined: C, 0, Combined: C, 1, Combined: C, 2, ...
  </code>
  </pre>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Creating Observables is a fundamental skill in RxJS and reactive programming. 
    Whether you use the \`Observable\` constructor or RxJS creation functions, Observables provide a flexible and powerful way to handle asynchronous data streams. 
    By mastering these techniques, you can build **efficient and scalable** applications with RxJS.
  </p>
</div>` },
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