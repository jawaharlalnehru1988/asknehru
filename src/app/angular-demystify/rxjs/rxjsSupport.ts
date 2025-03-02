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
                { topic: `Subscription`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding Subscription in RxJS</h2>

  <p>
    <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a powerful library for handling asynchronous operations using observable streams. 
    A key concept in RxJS is the **Subscription**, which represents the execution of an Observable. 
    In this article, we’ll explore what a Subscription is, how it works, and how to manage it effectively in your applications.
  </p>

  <h3 style="color: #dc3545;">What is a Subscription?</h3>
  <p>
    A **Subscription** is an object that represents a connection between an Observable and an Observer. 
    When you subscribe to an Observable, you create a Subscription that allows the Observer to receive values emitted by the Observable. 
    The Subscription also provides a way to **unsubscribe**, which stops the Observable from emitting further values and cleans up resources.
  </p>

  <h3 style="color: #17a2b8;">Creating a Subscription</h3>
  <p>
    To create a Subscription, you call the \`subscribe\` method on an Observable. This method takes an Observer (or callbacks) as an argument and returns a Subscription object.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    const subscription = myObservable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Observable completed')
    });
  </code>
  </pre>
  <p>
    In this example, the \`subscribe\` method returns a Subscription object (\`subscription\`). 
    This object can be used to manage the connection between the Observable and the Observer.
  </p>

  <h3 style="color: #17a2b8;">Managing Subscriptions</h3>
  <p>
    Subscriptions are essential for managing resources and preventing memory leaks. 
    Here are some key aspects of managing Subscriptions in RxJS:
  </p>

  <h4 style="color: #28a745;">1. Unsubscribing from an Observable</h4>
  <p>
    To stop receiving values from an Observable, you can call the \`unsubscribe\` method on the Subscription object. 
    This is particularly important for long-lived Observables (e.g., those created from DOM events or intervals).
  </p>
  <pre>
  <code class="language-javascript">
    import { interval } from 'rxjs';

    const intervalObservable = interval(1000); // Emits a value every second
    const subscription = intervalObservable.subscribe(value => console.log(value));

    // Unsubscribe after 5 seconds
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed!');
    }, 5000);
  </code>
  </pre>
  <p>
    In this example, the Subscription is unsubscribed after 5 seconds, stopping the Observable from emitting further values.
  </p>

  <h4 style="color: #28a745;">2. Multiple Subscriptions</h4>
  <p>
    You can create multiple Subscriptions to the same Observable. Each Subscription operates independently, and unsubscribing from one does not affect the others.
  </p>
  <pre>
  <code class="language-javascript">
    import { of } from 'rxjs';

    const observable = of(1, 2, 3);

    const subscription1 = observable.subscribe(value => console.log(\`Subscriber 1: \${value}\`));
    const subscription2 = observable.subscribe(value => console.log(\`Subscriber 2: \${value}\`));

    // Unsubscribe only subscription1
    subscription1.unsubscribe();
  </code>
  </pre>
  <p>
    Here, \`subscription1\` is unsubscribed, but \`subscription2\` continues to receive values.
  </p>

  <h4 style="color: #28a745;">3. Composite Subscriptions</h4>
  <p>
    RxJS provides a \`Subscription\` class that allows you to group multiple Subscriptions together. 
    This is useful for managing multiple Subscriptions as a single unit.
  </p>
  <pre>
  <code class="language-javascript">
    import { interval, Subscription } from 'rxjs';

    const subscription = new Subscription();

    const interval1 = interval(1000).subscribe(value => console.log(\`Interval 1: \${value}\`));
    const interval2 = interval(2000).subscribe(value => console.log(\`Interval 2: \${value}\`));

    // Add both Subscriptions to the composite Subscription
    subscription.add(interval1);
    subscription.add(interval2);

    // Unsubscribe both Subscriptions at once
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('All Subscriptions unsubscribed!');
    }, 5000);
  </code>
  </pre>
  <p>
    In this example, both \`interval1\` and \`interval2\` are unsubscribed simultaneously using the composite Subscription.
  </p>

  <h3 style="color: #17a2b8;">Example: Subscription in Angular</h3>
  <p>
    In Angular, Subscriptions are commonly used with Observables returned by services like \`HttpClient\`. 
    It’s important to unsubscribe in the \`ngOnDestroy\` lifecycle hook to avoid memory leaks.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit, OnDestroy } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent implements OnInit, OnDestroy {
      data: any;
      private subscription: Subscription;

      constructor(private http: HttpClient) {}

      ngOnInit() {
        this.subscription = this.http.get('https://api.example.com/data').subscribe(response => {
          this.data = response;
        });
      }

      ngOnDestroy() {
        this.subscription.unsubscribe(); // Clean up the Subscription
      }
    }
  </code>
  </pre>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Subscriptions are a critical part of working with RxJS and Observables. 
    They allow you to control the flow of data and manage resources effectively. 
    By understanding how to create, manage, and unsubscribe from Subscriptions, you can write **clean and efficient** reactive code in your applications.
  </p>
</div>` },
                { topic: `Subscriber`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding Subscriber in RxJS</h2>

  <p>
    <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a powerful library for handling asynchronous operations using observable streams. 
    A **Subscriber** is a key component in RxJS that acts as the bridge between an Observable and an Observer. 
    In this article, we’ll explore what a Subscriber is, how it works, and its role in the RxJS ecosystem.
  </p>

  <h3 style="color: #dc3545;">What is a Subscriber?</h3>
  <p>
    A **Subscriber** is an object that implements the \`Observer\` interface and is responsible for receiving and processing values emitted by an Observable. 
    It is created automatically when you call the \`subscribe\` method on an Observable. 
    The Subscriber handles the logic for \`next\`, \`error\`, and \`complete\` notifications, making it a central part of the Observable execution.
  </p>

  <h3 style="color: #17a2b8;">Role of a Subscriber</h3>
  <p>
    The Subscriber plays three main roles in RxJS:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Receives values:</strong> It listens to the values emitted by the Observable.</li>
    <li><strong>Handles errors:</strong> It processes any errors that occur during the Observable execution.</li>
    <li><strong>Handles completion:</strong> It executes logic when the Observable completes.</li>
  </ul>

  <h3 style="color: #17a2b8;">How a Subscriber Works</h3>
  <p>
    When you subscribe to an Observable, a Subscriber is created behind the scenes. 
    The Subscriber is responsible for executing the logic defined in the \`next\`, \`error\`, and \`complete\` callbacks.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    const subscriber = myObservable.subscribe({
      next: value => console.log(value), // Receives values
      error: err => console.error(err), // Handles errors
      complete: () => console.log('Observable completed') // Handles completion
    });
  </code>
  </pre>
  <p>
    In this example, the \`subscribe\` method creates a Subscriber that listens to the Observable and processes the emitted values.
  </p>

  <h3 style="color: #17a2b8;">Custom Subscribers</h3>
  <p>
    While Subscribers are typically created automatically, you can also create custom Subscribers by extending the \`Subscriber\` class. 
    This allows you to add custom logic for handling values, errors, and completion.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable, Subscriber } from 'rxjs';

    class CustomSubscriber extends Subscriber<any> {
      next(value: any) {
        console.log(\`Custom Subscriber received: \${value}\`);
      }

      error(err: any) {
        console.error(\`Custom Subscriber error: \${err}\`);
      }

      complete() {
        console.log('Custom Subscriber completed');
      }
    }

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    const customSubscriber = new CustomSubscriber();
    myObservable.subscribe(customSubscriber);
  </code>
  </pre>
  <p>
    In this example, a custom Subscriber is created by extending the \`Subscriber\` class. 
    This allows you to define custom behavior for handling notifications.
  </p>

  <h3 style="color: #17a2b8;">Subscriber and Subscription</h3>
  <p>
    A Subscriber is closely related to a **Subscription**. 
    When you subscribe to an Observable, the Subscriber is created, and a Subscription object is returned. 
    The Subscription represents the connection between the Observable and the Subscriber and provides a way to unsubscribe.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    const subscription = myObservable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Observable completed')
    });

    // Unsubscribe after 2 seconds
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed!');
    }, 2000);
  </code>
  </pre>
  <p>
    In this example, the \`subscribe\` method returns a Subscription object, which is used to unsubscribe the Subscriber from the Observable.
  </p>

  <h3 style="color: #17a2b8;">Example: Subscriber in Angular</h3>
  <p>
    In Angular, Subscribers are often used with Observables returned by services like \`HttpClient\`. 
    Here’s an example of how a Subscriber works in an Angular component:
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent implements OnInit {
      data: any;

      constructor(private http: HttpClient) {}

      ngOnInit() {
        this.http.get('https://api.example.com/data').subscribe({
          next: response => this.data = response, // Receives values
          error: err => console.error(err), // Handles errors
          complete: () => console.log('Request completed') // Handles completion
        });
      }
    }
  </code>
  </pre>
  <p>
    In this example, the \`subscribe\` method creates a Subscriber that processes the HTTP response.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    A Subscriber is a fundamental part of RxJS that connects Observables and Observers. 
    It handles the logic for receiving values, errors, and completion notifications, making it essential for reactive programming. 
    By understanding how Subscribers work, you can write **efficient and maintainable** code with RxJS.
  </p>
</div>` },
                { topic: `Observer`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding Observer in RxJS</h2>

  <p>
    <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a powerful library for handling asynchronous operations using observable streams. 
    At the heart of RxJS is the **Observer** pattern, which defines how values emitted by an Observable are consumed. 
    In this article, we’ll explore what an Observer is, how it works, and its role in the RxJS ecosystem.
  </p>

  <h3 style="color: #dc3545;">What is an Observer?</h3>
  <p>
    An **Observer** is an object that defines how to handle the values, errors, and completion notifications emitted by an Observable. 
    It acts as a consumer of the data stream and is responsible for processing the data emitted by the Observable. 
    An Observer typically implements three methods:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`next(value)\`</strong> – Handles the next value emitted by the Observable.</li>
    <li><strong>\`error(err)\`</strong> – Handles any errors that occur during the Observable execution.</li>
    <li><strong>\`complete()\`</strong> – Handles the completion notification when the Observable finishes emitting values.</li>
  </ul>

  <h3 style="color: #17a2b8;">How an Observer Works</h3>
  <p>
    When you subscribe to an Observable, you provide an Observer (or callbacks for \`next\`, \`error\`, and \`complete\`). 
    The Observable then uses the Observer to deliver values, errors, and completion notifications.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    const observer = {
      next: value => console.log(value), // Handles values
      error: err => console.error(err), // Handles errors
      complete: () => console.log('Observable completed') // Handles completion
    };

    myObservable.subscribe(observer);
  </code>
  </pre>
  <p>
    In this example, the \`observer\` object defines how to handle the values, errors, and completion notifications emitted by the Observable.
  </p>

  <h3 style="color: #17a2b8;">Using Partial Observers</h3>
  <p>
    You don’t need to implement all three methods (\`next\`, \`error\`, and \`complete\`) to create an Observer. 
    RxJS allows you to provide partial Observers or even individual callbacks.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    // Partial Observer with only \`next\`
    myObservable.subscribe(value => console.log(value));

    // Partial Observer with \`next\` and \`error\`
    myObservable.subscribe(
      value => console.log(value),
      err => console.error(err)
    );

    // Partial Observer with \`next\`, \`error\`, and \`complete\`
    myObservable.subscribe(
      value => console.log(value),
      err => console.error(err),
      () => console.log('Observable completed')
    );
  </code>
  </pre>
  <p>
    In these examples, the \`subscribe\` method accepts partial Observers or individual callbacks, making it flexible and easy to use.
  </p>

  <h3 style="color: #17a2b8;">Observer vs. Subscriber</h3>
  <p>
    While an **Observer** defines how to handle notifications, a **Subscriber** is the object that connects the Observer to the Observable. 
    When you subscribe to an Observable, a Subscriber is created internally to manage the connection and deliver notifications to the Observer.
  </p>
  <pre>
  <code class="language-javascript">
    import { Observable } from 'rxjs';

    const myObservable = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    const observer = {
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('Observable completed')
    };

    const subscription = myObservable.subscribe(observer);
  </code>
  </pre>
  <p>
    In this example, the \`subscribe\` method creates a Subscriber that connects the \`observer\` to the Observable.
  </p>

  <h3 style="color: #17a2b8;">Example: Observer in Angular</h3>
  <p>
    In Angular, Observers are commonly used with Observables returned by services like \`HttpClient\`. 
    Here’s an example of how an Observer works in an Angular component:
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent implements OnInit {
      data: any;

      constructor(private http: HttpClient) {}

      ngOnInit() {
        this.http.get('https://api.example.com/data').subscribe({
          next: response => this.data = response, // Handles values
          error: err => console.error(err), // Handles errors
          complete: () => console.log('Request completed') // Handles completion
        });
      }
    }
  </code>
  </pre>
  <p>
    In this example, the \`subscribe\` method uses an Observer to process the HTTP response.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    An Observer is a fundamental part of RxJS that defines how to handle values, errors, and completion notifications emitted by an Observable. 
    By understanding how Observers work, you can effectively consume data streams and write **clean and maintainable** reactive code. 
    Whether you’re working with simple Observables or complex asynchronous operations, Observers play a key role in the RxJS ecosystem.
  </p>
</div>` },
                { topic: `Scheduler`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding Scheduler in RxJS</h2>

  <p>
    <strong>RxJS (Reactive Extensions for JavaScript)</strong> is a powerful library for handling asynchronous operations using observable streams. 
    One of the advanced features of RxJS is the **Scheduler**, which controls when and how tasks are executed in an Observable. 
    In this article, we’ll explore what a Scheduler is, how it works, and its role in managing asynchronous tasks in RxJS.
  </p>

  <h3 style="color: #dc3545;">What is a Scheduler?</h3>
  <p>
    A **Scheduler** is a mechanism in RxJS that controls the execution context and timing of tasks in an Observable. 
    It determines when an Observable starts emitting values, how values are delivered, and on which thread or event loop the tasks are executed. 
    Schedulers are particularly useful for managing concurrency, delaying emissions, and controlling the order of execution.
  </p>

  <h3 style="color: #17a2b8;">Why Use a Scheduler?</h3>
  <p>
    Schedulers are used in RxJS for the following purposes:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Control timing:</strong> Delay the emission of values or schedule them at specific intervals.</li>
    <li><strong>Manage concurrency:</strong> Control how many tasks run simultaneously.</li>
    <li><strong>Change execution context:</strong> Execute tasks on a specific thread or event loop (e.g., asynchronous vs. synchronous).</li>
  </ul>

  <h3 style="color: #17a2b8;">Types of Schedulers in RxJS</h3>
  <p>
    RxJS provides several built-in Schedulers, each designed for specific use cases:
  </p>

  <h4 style="color: #28a745;">1. \`queueScheduler\`</h4>
  <p>
    The \`queueScheduler\` executes tasks synchronously but queues them to ensure they are executed in order. 
    It is useful for recursive operations where tasks need to be executed sequentially.
  </p>
  <pre>
  <code class="language-javascript">
    import { queueScheduler, of } from 'rxjs';

    of(1, 2, 3, queueScheduler).subscribe(value => console.log(value));
    // Output: 1, 2, 3 (executed synchronously in order)
  </code>
  </pre>

  <h4 style="color: #28a745;">2. \`asapScheduler\`</h4>
  <p>
    The \`asapScheduler\` schedules tasks to be executed asynchronously but as soon as possible. 
    It uses the microtask queue (similar to \`Promise.resolve\`) for scheduling.
  </p>
  <pre>
  <code class="language-javascript">
    import { asapScheduler, of } from 'rxjs';

    of(1, 2, 3, asapScheduler).subscribe(value => console.log(value));
    // Output: 1, 2, 3 (executed asynchronously but as soon as possible)
  </code>
  </pre>

  <h4 style="color: #28a745;">3. \`asyncScheduler\`</h4>
  <p>
    The \`asyncScheduler\` schedules tasks to be executed asynchronously using \`setTimeout\` or \`setInterval\`. 
    It is useful for delaying emissions or scheduling tasks at intervals.
  </p>
  <pre>
  <code class="language-javascript">
    import { asyncScheduler, of } from 'rxjs';

    of(1, 2, 3, asyncScheduler).subscribe(value => console.log(value));
    // Output: 1, 2, 3 (executed asynchronously with a delay)
  </code>
  </pre>

  <h4 style="color: #28a745;">4. \`animationFrameScheduler\`</h4>
  <p>
    The \`animationFrameScheduler\` schedules tasks to be executed before the next browser repaint. 
    It is ideal for animations or tasks that need to be synchronized with the browser’s rendering cycle.
  </p>
  <pre>
  <code class="language-javascript">
    import { animationFrameScheduler, interval } from 'rxjs';

    interval(0, animationFrameScheduler).subscribe(() => {
      console.log('Animation frame');
    });
    // Output: Logs on every animation frame
  </code>
  </pre>

  <h3 style="color: #17a2b8;">Using Schedulers with Operators</h3>
  <p>
    Schedulers can be passed as arguments to many RxJS operators to control the timing and execution context of tasks. 
    For example, the \`observeOn\` and \`subscribeOn\` operators allow you to specify a Scheduler for an Observable.
  </p>

  <h4 style="color: #ffc107;">a. \`observeOn\`</h4>
  <p>
    The \`observeOn\` operator specifies the Scheduler on which notifications are delivered to the Observer.
  </p>
  <pre>
  <code class="language-javascript">
    import { of, asyncScheduler, observeOn } from 'rxjs';

    of(1, 2, 3)
      .pipe(observeOn(asyncScheduler))
      .subscribe(value => console.log(value));
    // Output: 1, 2, 3 (delivered asynchronously)
  </code>
  </pre>

  <h4 style="color: #ffc107;">b. \`subscribeOn\`</h4>
  <p>
    The \`subscribeOn\` operator specifies the Scheduler on which the subscription to the Observable starts.
  </p>
  <pre>
  <code class="language-javascript">
    import { of, asyncScheduler, subscribeOn } from 'rxjs';

    of(1, 2, 3)
      .pipe(subscribeOn(asyncScheduler))
      .subscribe(value => console.log(value));
    // Output: 1, 2, 3 (subscription starts asynchronously)
  </code>
  </pre>

  <h3 style="color: #17a2b8;">Example: Scheduler in Angular</h3>
  <p>
    In Angular, Schedulers can be used to control the timing of HTTP requests or UI updates. 
    Here’s an example of using the \`asyncScheduler\` to delay an HTTP request:
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { asyncScheduler, scheduled } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent implements OnInit {
      data: any;

      constructor(private http: HttpClient) {}

      ngOnInit() {
        scheduled(this.http.get('https://api.example.com/data'), asyncScheduler)
          .subscribe(response => this.data = response);
      }
    }
  </code>
  </pre>
  <p>
    In this example, the HTTP request is scheduled to start asynchronously using the \`asyncScheduler\`.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Schedulers are a powerful feature in RxJS that allow you to control the timing and execution context of tasks in an Observable. 
    By using Schedulers, you can manage concurrency, delay emissions, and synchronize tasks with external events like browser rendering. 
    Whether you’re working with simple Observables or complex asynchronous workflows, Schedulers provide the tools you need to write **efficient and predictable** reactive code.
  </p>
</div>` },
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