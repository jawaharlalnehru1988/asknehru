export interface NgConcepts{
  mainTopic: string
  subTopics: NgTopic[]
}

export interface NgTopic{
  topic: string,
  content: string
}
export class Blog {

    angularConcepts: NgConcepts[] = [
        {
          mainTopic: `components`, subTopics: [
            { topic: `Intro to Components`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Introduction to Angular Components</h2>

  <p>
    <strong>Angular</strong> is a popular front-end framework for building dynamic, single-page applications (SPAs). 
    One of the core building blocks of Angular is the **Component**, which defines the structure, behavior, and appearance of a part of the user interface. 
    In this article, we’ll explore what Angular Components are, how they work, and how to create and use them in your applications.
  </p>

  <h3 style="color: #dc3545;">What is an Angular Component?</h3>
  <p>
    An Angular **Component** is a reusable and self-contained piece of the user interface. 
    It consists of three main parts:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Template:</strong> Defines the HTML structure and layout of the component.</li>
    <li><strong>Class:</strong> Contains the logic and data for the component, written in TypeScript.</li>
    <li><strong>Metadata:</strong> Provides additional information about the component, such as its selector, styles, and more.</li>
  </ul>
  <p>
    Components are the building blocks of Angular applications, and they work together to create a complete user interface.
  </p>

  <h3 style="color: #17a2b8;">Creating an Angular Component</h3>
  <p>
    Angular provides the Angular CLI (Command Line Interface) to simplify the process of creating components. 
    To create a new component, you can use the following command:
  </p>
  <pre>
  <code class="language-javascript">
    ng generate component component-name
  </code>
  </pre>
  <p>
    This command generates a new component with the following files:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`component-name.component.ts\`</strong> – The TypeScript class for the component.</li>
    <li><strong>\`component-name.component.html\`</strong> – The HTML template for the component.</li>
    <li><strong>\`component-name.component.css\`</strong> – The CSS styles for the component.</li>
    <li><strong>\`component-name.component.spec.ts\`</strong> – The unit tests for the component.</li>
  </ul>

  <h3 style="color: #17a2b8;">Structure of an Angular Component</h3>
  <p>
    Let’s break down the structure of an Angular component using an example:
  </p>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-example', // The custom HTML tag for the component
      templateUrl: './example.component.html', // Path to the HTML template
      styleUrls: ['./example.component.css'] // Path to the CSS styles
    })
    export class ExampleComponent {
      title = 'Hello, Angular!'; // Property for data binding
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@Component\`:</strong> This decorator defines the metadata for the component, including its selector, template, and styles.</li>
    <li><strong>\`selector\`:</strong> This is the custom HTML tag used to include the component in other templates (e.g., \`<app-example></app-example>\`).</li>
    <li><strong>\`templateUrl\`:</strong> This points to the HTML file that defines the component’s layout.</li>
    <li><strong>\`styleUrls\`:</strong> This points to the CSS files that define the component’s styles.</li>
    <li><strong>\`ExampleComponent\`:</strong> This is the TypeScript class that contains the component’s logic and data.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using a Component in Angular</h3>
  <p>
    Once a component is created, you can use it in other components or templates by including its selector. 
    For example, if you have a component with the selector \`app-example\`, you can use it like this:
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- app.component.html --&gt;
    &lt;h1&gt;My Angular App&lt;/h1&gt;
    &lt;app-example&gt;&lt;/app-example&gt;
  </code>
  </pre>
  <p>
    When the application runs, Angular will render the \`ExampleComponent\` wherever the \`<app-example>\` tag is used.
  </p>

  <h3 style="color: #17a2b8;">Data Binding in Components</h3>
  <p>
    Angular provides powerful data binding features to connect the component’s class with its template. 
    Here are the main types of data binding:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Interpolation:</strong> Displays component data in the template using \`{{ }}\`.</li>
    <li><strong>Property Binding:</strong> Binds component data to an HTML element property using \`[]\`.</li>
    <li><strong>Event Binding:</strong> Listens for user events (e.g., clicks) and calls component methods using \`()\`.</li>
    <li><strong>Two-Way Binding:</strong> Combines property and event binding to synchronize data between the component and the template using \`[()]\`.</li>
  </ul>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;p&gt;{{ title }}&lt;/p&gt; &lt;!-- Interpolation --&gt;
    &lt;button [disabled]="isDisabled"&gt;Click Me&lt;/button&gt; &lt;!-- Property Binding --&gt;
    &lt;button (click)="onClick()"&gt;Click Me&lt;/button&gt; &lt;!-- Event Binding --&gt;
    &lt;input [(ngModel)]="name" placeholder="Enter your name" /&gt; &lt;!-- Two-Way Binding --&gt;
  </code>
  </pre>

  <h3 style="color: #17a2b8;">Lifecycle Hooks in Components</h3>
  <p>
    Angular components have a lifecycle that you can tap into using **lifecycle hooks**. 
    These hooks allow you to execute code at specific stages of the component’s lifecycle, such as initialization, changes, and destruction. 
    Some commonly used lifecycle hooks are:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`ngOnInit\`:</strong> Called after the component is initialized.</li>
    <li><strong>\`ngOnChanges\`:</strong> Called when input properties change.</li>
    <li><strong>\`ngOnDestroy\`:</strong> Called before the component is destroyed.</li>
  </ul>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent implements OnInit {
      ngOnInit() {
        console.log('Component initialized');
      }
    }
  </code>
  </pre>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Angular Components are the foundation of Angular applications, providing a way to create reusable and modular UI elements. 
    By understanding how to create, use, and manage components, you can build **scalable and maintainable** applications. 
    Whether you’re working on a small project or a large enterprise application, Angular Components help you organize your code and deliver a great user experience.
  </p>
</div>` },
            { topic: `Templates`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Introduction to Angular Templates</h2>

  <p>
    <strong>Angular</strong> is a powerful framework for building dynamic web applications, and one of its key features is the use of **templates**. 
    Angular templates define the structure and layout of a component’s view using HTML combined with Angular-specific syntax. 
    In this article, we’ll explore what Angular templates are, how they work, and how to use them effectively in your applications.
  </p>

  <h3 style="color: #dc3545;">What is an Angular Template?</h3>
  <p>
    An Angular **template** is an HTML file that defines the user interface for a component. 
    It uses a combination of standard HTML and Angular-specific syntax to create dynamic and interactive views. 
    Templates are tightly coupled with the component’s class, allowing you to bind data and handle user interactions seamlessly.
  </p>

  <h3 style="color: #17a2b8;">Key Features of Angular Templates</h3>
  <p>
    Angular templates come with several powerful features that make them highly flexible and dynamic:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Data Binding:</strong> Connects the component’s data to the template.</li>
    <li><strong>Directives:</strong> Extends HTML with custom attributes and elements.</li>
    <li><strong>Pipes:</strong> Transforms data before displaying it in the template.</li>
    <li><strong>Event Handling:</strong> Listens for user interactions and triggers component methods.</li>
  </ul>

  <h3 style="color: #17a2b8;">Data Binding in Angular Templates</h3>
  <p>
    Data binding is one of the most important features of Angular templates. 
    It allows you to connect the component’s data to the template and keep them in sync. 
    Angular supports several types of data binding:
  </p>

  <h4 style="color: #28a745;">1. Interpolation</h4>
  <p>
    Interpolation is used to display component data in the template. 
    It uses double curly braces \`{{ }}\` to embed expressions.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;p&gt;{{ title }}&lt;/p&gt;
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    // example.component.ts
    export class ExampleComponent {
      title = 'Hello, Angular!';
    }
  </code>
  </pre>
  <p>
    In this example, the value of the \`title\` property is displayed in the template.
  </p>

  <h4 style="color: #28a745;">2. Property Binding</h4>
  <p>
    Property binding is used to bind component data to an HTML element’s property. 
    It uses square brackets \`[]\` to bind a property.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;img [src]="imageUrl" alt="Angular Logo"&gt;
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    // example.component.ts
    export class ExampleComponent {
      imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
    }
  </code>
  </pre>
  <p>
    In this example, the \`src\` attribute of the \`<img>\` tag is bound to the \`imageUrl\` property.
  </p>

  <h4 style="color: #28a745;">3. Event Binding</h4>
  <p>
    Event binding is used to listen for user interactions (e.g., clicks, input) and trigger component methods. 
    It uses parentheses \`()\` to bind an event.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;button (click)="onClick()"&gt;Click Me&lt;/button&gt;
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    // example.component.ts
    export class ExampleComponent {
      onClick() {
        console.log('Button clicked!');
      }
    }
  </code>
  </pre>
  <p>
    In this example, the \`onClick\` method is called when the button is clicked.
  </p>

  <h4 style="color: #28a745;">4. Two-Way Binding</h4>
  <p>
    Two-way binding combines property and event binding to synchronize data between the component and the template. 
    It uses the \`[(ngModel)]\` directive.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;input [(ngModel)]="name" placeholder="Enter your name"&gt;
    &lt;p&gt;Hello, {{ name }}!&lt;/p&gt;
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    // example.component.ts
    export class ExampleComponent {
      name = '';
    }
  </code>
  </pre>
  <p>
    In this example, the \`name\` property is updated whenever the user types in the input field, and the template reflects the changes instantly.
  </p>

  <h3 style="color: #17a2b8;">Directives in Angular Templates</h3>
  <p>
    Directives are special markers in the template that tell Angular to perform specific actions. 
    There are three types of directives:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Component Directives:</strong> Define custom HTML elements (e.g., \`<app-example>\`).</li>
    <li><strong>Structural Directives:</strong> Modify the DOM layout by adding or removing elements (e.g., \`*ngIf\`, \`*ngFor\`).</li>
    <li><strong>Attribute Directives:</strong> Change the appearance or behavior of an element (e.g., \`ngClass\`, \`ngStyle\`).</li>
  </ul>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;div *ngIf="isVisible"&gt;This is visible&lt;/div&gt;
    &lt;ul&gt;
      &lt;li *ngFor="let item of items"&gt;{{ item }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div [ngClass]="{'active': isActive}"&gt;Dynamic Class&lt;/div&gt;
  </code>
  </pre>

  <h3 style="color: #17a2b8;">Pipes in Angular Templates</h3>
  <p>
    Pipes are used to transform data before displaying it in the template. 
    Angular provides built-in pipes like \`date\`, \`uppercase\`, and \`currency\`, and you can also create custom pipes.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- example.component.html --&gt;
    &lt;p&gt;{{ currentDate | date:'fullDate' }}&lt;/p&gt;
    &lt;p&gt;{{ message | uppercase }}&lt;/p&gt;
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    // example.component.ts
    export class ExampleComponent {
      currentDate = new Date();
      message = 'Hello, Angular!';
    }
  </code>
  </pre>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Angular templates are a powerful way to define the user interface of your application. 
    By combining HTML with Angular-specific syntax like data binding, directives, and pipes, you can create dynamic and interactive views. 
    Whether you’re building a simple form or a complex dashboard, Angular templates provide the tools you need to create a seamless user experience.
  </p>
</div>` },
            { topic: `Class`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding Classes in Angular</h2>

  <p>
    <strong>Angular</strong> is a robust framework for building dynamic web applications, and one of its core concepts is the use of **classes**. 
    In Angular, classes are used to define the logic and behavior of components, services, directives, and more. 
    In this article, we’ll explore what classes are in Angular, how they work, and how to use them effectively in your applications.
  </p>

  <h3 style="color: #dc3545;">What is a Class in Angular?</h3>
  <p>
    A **class** in Angular is a TypeScript construct that defines the properties and methods for a specific part of your application. 
    Classes are used to encapsulate data and behavior, making your code modular and reusable. 
    In Angular, classes are typically used for:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>Components:</strong> Define the logic and data for a part of the user interface.</li>
    <li><strong>Services:</strong> Provide reusable functionality, such as data fetching or business logic.</li>
    <li><strong>Directives:</strong> Add custom behavior to DOM elements.</li>
    <li><strong>Pipes:</strong> Transform data before displaying it in templates.</li>
  </ul>

  <h3 style="color: #17a2b8;">Structure of a Class in Angular</h3>
  <p>
    A class in Angular is defined using the \`class\` keyword in TypeScript. 
    It can contain properties, methods, and a constructor. 
    Here’s an example of a simple class:
  </p>
  <pre>
  <code class="language-javascript">
    export class ExampleClass {
      // Properties
      title: string = 'Hello, Angular!';

      // Constructor
      constructor() {
        console.log('Class initialized');
      }

      // Method
      greet() {
        console.log(this.title);
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`title\`:</strong> A property that stores a string value.</li>
    <li><strong>\`constructor\`:</strong> A special method that is called when an instance of the class is created.</li>
    <li><strong>\`greet\`:</strong> A method that logs the value of the \`title\` property.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using Classes in Angular Components</h3>
  <p>
    In Angular, a component is defined as a class decorated with the \`@Component\` decorator. 
    The class contains the logic and data for the component, while the decorator provides metadata like the template and styles.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent {
      title: string = 'Hello, Angular!';

      constructor() {
        console.log('Component initialized');
      }

      onClick() {
        console.log('Button clicked!');
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@Component\`:</strong> The decorator that marks the class as an Angular component.</li>
    <li><strong>\`selector\`:</strong> The custom HTML tag used to include the component in templates.</li>
    <li><strong>\`templateUrl\`:</strong> The path to the HTML template for the component.</li>
    <li><strong>\`styleUrls\`:</strong> The paths to the CSS files for the component.</li>
    <li><strong>\`ExampleComponent\`:</strong> The class that defines the component’s logic and data.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using Classes in Angular Services</h3>
  <p>
    Services in Angular are defined as classes and are used to share data or functionality across components. 
    They are typically decorated with the \`@Injectable\` decorator.
  </p>
  <pre>
  <code class="language-javascript">
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root'
    })
    export class ExampleService {
      getData() {
        return ['Data1', 'Data2', 'Data3'];
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@Injectable\`:</strong> The decorator that marks the class as an Angular service.</li>
    <li><strong>\`providedIn\`:</strong> Specifies that the service is provided at the root level.</li>
    <li><strong>\`ExampleService\`:</strong> The class that defines the service’s logic.</li>
  </ul>

  <h3 style="color: #17a2b8;">Lifecycle Hooks in Angular Classes</h3>
  <p>
    Angular components have a lifecycle that you can tap into using **lifecycle hooks**. 
    These are methods defined in the component class that are called at specific stages of the component’s lifecycle. 
    Some commonly used lifecycle hooks are:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`ngOnInit\`:</strong> Called after the component is initialized.</li>
    <li><strong>\`ngOnChanges\`:</strong> Called when input properties change.</li>
    <li><strong>\`ngOnDestroy\`:</strong> Called before the component is destroyed.</li>
  </ul>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html'
    })
    export class ExampleComponent implements OnInit {
      ngOnInit() {
        console.log('Component initialized');
      }
    }
  </code>
  </pre>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Classes are a fundamental part of Angular and are used to define the logic and behavior of components, services, directives, and more. 
    By understanding how to create and use classes in Angular, you can build **modular, reusable, and maintainable** applications. 
    Whether you’re working on a small project or a large enterprise application, classes provide the structure and organization you need to write clean and efficient code.
  </p>
</div>` },
            { topic: `Lifecycle Hooks`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding Lifecycle Hooks in Angular</h2>

  <p>
    <strong>Angular</strong> is a powerful framework for building dynamic web applications, and one of its key features is the use of **lifecycle hooks**. 
    Lifecycle hooks are methods that allow you to tap into specific moments in the lifecycle of a component or directive. 
    In this article, we’ll explore what lifecycle hooks are, how they work, and how to use them effectively in your Angular applications.
  </p>

  <h3 style="color: #dc3545;">What are Lifecycle Hooks?</h3>
  <p>
    **Lifecycle hooks** are methods that Angular calls at specific stages of a component or directive’s lifecycle. 
    They allow you to execute custom logic at these stages, such as when a component is initialized, when its data changes, or when it is destroyed. 
    Lifecycle hooks are essential for managing resources, reacting to changes, and performing cleanup tasks.
  </p>

  <h3 style="color: #17a2b8;">Angular Component Lifecycle</h3>
  <p>
    Angular components go through a series of stages from creation to destruction. 
    The lifecycle of a component includes the following key phases:
  </p>
  <ol style="padding-left: 20px;">
    <li><strong>Creation:</strong> The component is created and initialized.</li>
    <li><strong>Change Detection:</strong> Angular checks for changes in the component’s data and updates the view.</li>
    <li><strong>Destruction:</strong> The component is removed from the DOM and destroyed.</li>
  </ol>
  <p>
    Lifecycle hooks allow you to hook into these phases and execute custom logic.
  </p>

  <h3 style="color: #17a2b8;">Key Lifecycle Hooks in Angular</h3>
  <p>
    Angular provides several lifecycle hooks that you can implement in your component classes. 
    Here are the most commonly used ones:
  </p>

  <h4 style="color: #28a745;">1. \`ngOnChanges\`</h4>
  <p>
    The \`ngOnChanges\` hook is called whenever an input property of the component changes. 
    It receives a \`SimpleChanges\` object that contains the current and previous values of the input properties.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`&lt;p&gt;{{ value }}&lt;/p&gt;\`
    })
    export class ExampleComponent implements OnChanges {
      @Input() value: string;

      ngOnChanges(changes: SimpleChanges) {
        console.log('Input changed:', changes);
      }
    }
  </code>
  </pre>
  <p>
    In this example, \`ngOnChanges\` logs the changes whenever the \`value\` input property changes.
  </p>

  <h4 style="color: #28a745;">2. \`ngOnInit\`</h4>
  <p>
    The \`ngOnInit\` hook is called once, after Angular has initialized the component and set its input properties. 
    It is commonly used for initialization logic, such as fetching data from a server.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ExampleComponent implements OnInit {
      message: string;

      ngOnInit() {
        this.message = 'Component initialized!';
        console.log(this.message);
      }
    }
  </code>
  </pre>
  <p>
    In this example, \`ngOnInit\` sets the \`message\` property and logs it to the console.
  </p>

  <h4 style="color: #28a745;">3. \`ngDoCheck\`</h4>
  <p>
    The \`ngDoCheck\` hook is called during every change detection cycle. 
    It allows you to implement custom change detection logic.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, DoCheck } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`&lt;p&gt;{{ counter }}&lt;/p&gt;\`
    })
    export class ExampleComponent implements DoCheck {
      counter = 0;

      ngDoCheck() {
        this.counter++;
        console.log('Change detection cycle:', this.counter);
      }
    }
  </code>
  </pre>
  <p>
    In this example, \`ngDoCheck\` increments the \`counter\` property and logs it during every change detection cycle.
  </p>

  <h4 style="color: #28a745;">4. \`ngAfterContentInit\`</h4>
  <p>
    The \`ngAfterContentInit\` hook is called after Angular projects external content into the component’s view (e.g., using \`ng-content\`).
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, AfterContentInit } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`&lt;ng-content&gt;&lt;/ng-content&gt;\`
    })
    export class ExampleComponent implements AfterContentInit {
      ngAfterContentInit() {
        console.log('Content initialized!');
      }
    }
  </code>
  </pre>
  <p>
    In this example, \`ngAfterContentInit\` logs a message after the content is projected into the component.
  </p>

  <h4 style="color: #28a745;">5. \`ngAfterViewInit\`</h4>
  <p>
    The \`ngAfterViewInit\` hook is called after Angular initializes the component’s view and child views.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, AfterViewInit } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ExampleComponent implements AfterViewInit {
      message = 'View initialized!';

      ngAfterViewInit() {
        console.log(this.message);
      }
    }
  </code>
  </pre>
  <p>
    In this example, \`ngAfterViewInit\` logs a message after the component’s view is initialized.
  </p>

  <h4 style="color: #28a745;">6. \`ngOnDestroy\`</h4>
  <p>
    The \`ngOnDestroy\` hook is called just before Angular destroys the component. 
    It is used for cleanup tasks, such as unsubscribing from observables or detaching event handlers.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, OnDestroy } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ExampleComponent implements OnDestroy {
      message = 'Component destroyed!';

      ngOnDestroy() {
        console.log(this.message);
      }
    }
  </code>
  </pre>
  <p>
    In this example, \`ngOnDestroy\` logs a message before the component is destroyed.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    Lifecycle hooks are a powerful feature in Angular that allow you to execute custom logic at specific stages of a component’s lifecycle. 
    By understanding and using lifecycle hooks like \`ngOnInit\`, \`ngOnChanges\`, and \`ngOnDestroy\`, you can manage resources, react to changes, and perform cleanup tasks effectively. 
    Whether you’re building a simple component or a complex application, lifecycle hooks provide the tools you need to write **clean and efficient** code.
  </p>
</div>` },
            { topic: `@Input()`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding @Input() in Angular</h2>

  <p>
    <strong>Angular</strong> is a powerful framework for building dynamic web applications, and one of its key features is the ability to pass data between components. 
    The **@Input()** decorator is a fundamental part of this process, allowing parent components to pass data to child components. 
    In this article, we’ll explore what @Input() is, how it works, and how to use it effectively in your Angular applications.
  </p>

  <h3 style="color: #dc3545;">What is @Input()?</h3>
  <p>
    The **@Input()** decorator is used to define an input property in a child component. 
    It allows a parent component to pass data to the child component, enabling communication between components. 
    The @Input() decorator is part of Angular’s data binding system and is essential for creating reusable and modular components.
  </p>

  <h3 style="color: #17a2b8;">How @Input() Works</h3>
  <p>
    When you mark a property with the @Input() decorator in a child component, it becomes an input property. 
    The parent component can then bind to this property using property binding syntax (\`[]\`). 
    Here’s a simple example:
  </p>

  <h4 style="color: #28a745;">1. Child Component</h4>
  <p>
    In the child component, define an input property using the @Input() decorator.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Input } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ChildComponent {
      @Input() message: string; // Input property
    }
  </code>
  </pre>
  <p>
    In this example, the \`message\` property is marked as an input property using the @Input() decorator.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    In the parent component, bind data to the child component’s input property using property binding.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;app-child [message]="parentMessage"&gt;&lt;/app-child&gt;
      \`
    })
    export class ParentComponent {
      parentMessage = 'Hello from Parent!'; // Data to pass to child
    }
  </code>
  </pre>
  <p>
    In this example, the \`parentMessage\` property in the parent component is bound to the \`message\` input property in the child component.
  </p>

  <h3 style="color: #17a2b8;">Using @Input() with Default Values</h3>
  <p>
    You can provide a default value for an input property in case the parent component does not pass any data.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Input } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ChildComponent {
      @Input() message: string = 'Default Message'; // Default value
    }
  </code>
  </pre>
  <p>
    In this example, if the parent component does not provide a value for \`message\`, the child component will display "Default Message".
  </p>

  <h3 style="color: #17a2b8;">Using @Input() with Setters and Getters</h3>
  <p>
    You can use setters and getters with @Input() to execute custom logic when the input property changes.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Input } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`&lt;p&gt;{{ internalMessage }}&lt;/p&gt;\`
    })
    export class ChildComponent {
      private _message: string;
      internalMessage: string;

      @Input()
      set message(value: string) {
        this._message = value;
        this.internalMessage = \`Message: \${value}\`;
      }

      get message(): string {
        return this._message;
      }
    }
  </code>
  </pre>
  <p>
    In this example, the \`message\` input property uses a setter to update the \`internalMessage\` property whenever the input changes.
  </p>

  <h3 style="color: #17a2b8;">Using @Input() with ngOnChanges</h3>
  <p>
    You can use the \`ngOnChanges\` lifecycle hook to react to changes in input properties.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ChildComponent implements OnChanges {
      @Input() message: string;

      ngOnChanges(changes: SimpleChanges) {
        if (changes.message) {
          console.log('Message changed:', changes.message.currentValue);
        }
      }
    }
  </code>
  </pre>
  <p>
    In this example, the \`ngOnChanges\` hook logs the new value of the \`message\` input property whenever it changes.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    The **@Input()** decorator is a powerful feature in Angular that enables communication between parent and child components. 
    By using @Input(), you can pass data from a parent component to a child component, making your components more reusable and modular. 
    Whether you’re working with simple data binding or complex logic, @Input() provides the tools you need to build **scalable and maintainable** applications.
  </p>
</div>` },
            { topic: `@Output()`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding @Output() in Angular</h2>

  <p>
    <strong>Angular</strong> is a powerful framework for building dynamic web applications, and one of its key features is the ability to communicate between components. 
    While the **@Input()** decorator allows parent components to pass data to child components, the **@Output()** decorator enables child components to send data or events back to their parent components. 
    In this article, we’ll explore what @Output() is, how it works, and how to use it effectively in your Angular applications.
  </p>

  <h3 style="color: #dc3545;">What is @Output()?</h3>
  <p>
    The **@Output()** decorator is used to define an output property in a child component. 
    It allows the child component to emit custom events to the parent component using Angular’s event binding syntax (\`()\`). 
    The @Output() decorator is typically used in conjunction with the \`EventEmitter\` class to create and emit events.
  </p>

  <h3 style="color: #17a2b8;">How @Output() Works</h3>
  <p>
    When you mark a property with the @Output() decorator in a child component, it becomes an output property. 
    The child component can then emit events using the \`EventEmitter\` class, and the parent component can listen to these events using event binding. 
    Here’s a simple example:
  </p>

  <h4 style="color: #28a745;">1. Child Component</h4>
  <p>
    In the child component, define an output property using the @Output() decorator and emit an event using \`EventEmitter\`.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`
        &lt;button (click)="sendMessage()"&gt;Send Message&lt;/button&gt;
      \`
    })
    export class ChildComponent {
      @Output() messageEvent = new EventEmitter&lt;string&gt;(); // Output property

      sendMessage() {
        this.messageEvent.emit('Hello from Child!'); // Emit an event
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@Output()\`:</strong> Marks the \`messageEvent\` property as an output property.</li>
    <li><strong>\`EventEmitter\`:</strong> Used to create and emit custom events.</li>
    <li><strong>\`sendMessage()\`:</strong> Emits an event with a message when the button is clicked.</li>
  </ul>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    In the parent component, listen to the child component’s output event using event binding.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;p&gt;{{ message }}&lt;/p&gt;
        &lt;app-child (messageEvent)="receiveMessage($event)"&gt;&lt;/app-child&gt;
      \`
    })
    export class ParentComponent {
      message: string;

      receiveMessage($event: string) {
        this.message = $event; // Handle the event
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`(messageEvent)\`:</strong> Listens to the \`messageEvent\` output property from the child component.</li>
    <li><strong>\`receiveMessage($event)\`:</strong> Handles the event and updates the \`message\` property in the parent component.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using @Output() with Custom Data</h3>
  <p>
    You can use @Output() to emit custom data, such as objects or arrays, from the child component to the parent component.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`
        &lt;button (click)="sendData()"&gt;Send Data&lt;/button&gt;
      \`
    })
    export class ChildComponent {
      @Output() dataEvent = new EventEmitter&lt;{ name: string, age: number }&gt;(); // Output property with custom data

      sendData() {
        this.dataEvent.emit({ name: 'John', age: 30 }); // Emit custom data
      }
    }
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;p&gt;Name: {{ data?.name }}&lt;/p&gt;
        &lt;p&gt;Age: {{ data?.age }}&lt;/p&gt;
        &lt;app-child (dataEvent)="receiveData($event)"&gt;&lt;/app-child&gt;
      \`
    })
    export class ParentComponent {
      data: { name: string, age: number };

      receiveData($event: { name: string, age: number }) {
        this.data = $event; // Handle the custom data
      }
    }
  </code>
  </pre>
  <p>
    In this example, the child component emits an object containing \`name\` and \`age\`, and the parent component receives and displays the data.
  </p>

  <h3 style="color: #17a2b8;">Using @Output() with Multiple Events</h3>
  <p>
    You can define multiple output properties in a child component to emit different types of events.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`
        &lt;button (click)="sendMessage()"&gt;Send Message&lt;/button&gt;
        &lt;button (click)="sendAlert()"&gt;Send Alert&lt;/button&gt;
      \`
    })
    export class ChildComponent {
      @Output() messageEvent = new EventEmitter&lt;string&gt;(); // Output property for messages
      @Output() alertEvent = new EventEmitter&lt;string&gt;(); // Output property for alerts

      sendMessage() {
        this.messageEvent.emit('Hello from Child!'); // Emit a message
      }

      sendAlert() {
        this.alertEvent.emit('Alert from Child!'); // Emit an alert
      }
    }
  </code>
  </pre>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;p&gt;{{ message }}&lt;/p&gt;
        &lt;p&gt;{{ alert }}&lt;/p&gt;
        &lt;app-child 
          (messageEvent)="receiveMessage($event)" 
          (alertEvent)="receiveAlert($event)"&gt;
        &lt;/app-child&gt;
      \`
    })
    export class ParentComponent {
      message: string;
      alert: string;

      receiveMessage($event: string) {
        this.message = $event; // Handle the message event
      }

      receiveAlert($event: string) {
        this.alert = $event; // Handle the alert event
      }
    }
  </code>
  </pre>
  <p>
    In this example, the child component emits two different types of events, and the parent component handles them separately.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    The **@Output()** decorator is a powerful feature in Angular that enables child components to communicate with their parent components by emitting custom events. 
    By using @Output() with \`EventEmitter\`, you can create flexible and reusable components that interact seamlessly with each other. 
    Whether you’re building simple event handlers or complex data-sharing mechanisms, @Output() provides the tools you need to build **scalable and maintainable** applications.
  </p>
</div>` },
            { topic: `ViewChild`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding @ViewChild in Angular</h2>

  <p>
    <strong>Angular</strong> is a powerful framework for building dynamic web applications, and one of its key features is the ability to interact with the DOM and child components directly. 
    The **@ViewChild** decorator is a powerful tool that allows a parent component to access a child component, directive, or DOM element. 
    In this article, we’ll explore what @ViewChild is, how it works, and how to use it effectively in your Angular applications.
  </p>

  <h3 style="color: #dc3545;">What is @ViewChild?</h3>
  <p>
    The **@ViewChild** decorator is used to query and access a child component, directive, or DOM element from a parent component. 
    It provides a way to interact with the child component’s properties and methods or manipulate the DOM element directly. 
    @ViewChild is particularly useful when you need to:
  </p>
  <ul style="padding-left: 20px;">
    <li>Access a child component’s properties or methods.</li>
    <li>Manipulate a DOM element directly.</li>
    <li>Interact with Angular directives.</li>
  </ul>

  <h3 style="color: #17a2b8;">How @ViewChild Works</h3>
  <p>
    The @ViewChild decorator takes two arguments:
  </p>
  <ol style="padding-left: 20px;">
    <li><strong>Selector:</strong> The name of the child component, directive, or a template reference variable.</li>
    <li><strong>Options (optional):</strong> Configuration options, such as \`static\` or \`read\`.</li>
  </ol>
  <p>
    Once the child component or element is queried, it can be accessed in the parent component’s class.
  </p>

  <h3 style="color: #17a2b8;">Using @ViewChild with Child Components</h3>
  <p>
    You can use @ViewChild to access a child component’s properties and methods. 
    Here’s an example:
  </p>

  <h4 style="color: #28a745;">1. Child Component</h4>
  <p>
    Define a child component with a method or property that the parent component will access.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ChildComponent {
      message = 'Hello from Child!';

      updateMessage(newMessage: string) {
        this.message = newMessage;
      }
    }
  </code>
  </pre>
  <p>
    In this example, the child component has a \`message\` property and an \`updateMessage\` method.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    Use @ViewChild in the parent component to access the child component and call its method.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, ViewChild } from '@angular/core';
    import { ChildComponent } from './child.component';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;button (click)="updateChildMessage()"&gt;Update Child Message&lt;/button&gt;
        &lt;app-child&gt;&lt;/app-child&gt;
      \`
    })
    export class ParentComponent {
      @ViewChild(ChildComponent) child: ChildComponent; // Query the child component

      updateChildMessage() {
        this.child.updateMessage('Message updated by Parent!'); // Call child's method
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@ViewChild(ChildComponent)\`:</strong> Queries the child component.</li>
    <li><strong>\`child\`:</strong> Holds a reference to the child component.</li>
    <li><strong>\`updateChildMessage()\`:</strong> Calls the child component’s \`updateMessage\` method.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using @ViewChild with DOM Elements</h3>
  <p>
    You can also use @ViewChild to access and manipulate DOM elements directly. 
    Here’s an example:
  </p>

  <h4 style="color: #28a745;">1. Template Reference Variable</h4>
  <p>
    Add a template reference variable to the DOM element in the parent component’s template.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- parent.component.html --&gt;
    &lt;h1&gt;Parent Component&lt;/h1&gt;
    &lt;p #myParagraph&gt;This is a paragraph.&lt;/p&gt;
    &lt;button (click)="changeText()"&gt;Change Text&lt;/button&gt;
  </code>
  </pre>
  <p>
    In this example, \`#myParagraph\` is a template reference variable attached to the \`<p>\` element.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    Use @ViewChild to query the DOM element and manipulate it.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, ViewChild, ElementRef } from '@angular/core';

    @Component({
      selector: 'app-parent',
      templateUrl: './parent.component.html'
    })
    export class ParentComponent {
      @ViewChild('myParagraph') paragraph: ElementRef; // Query the DOM element

      changeText() {
        this.paragraph.nativeElement.textContent = 'Text changed by Parent!'; // Manipulate the DOM
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@ViewChild('myParagraph')\`:</strong> Queries the DOM element with the template reference variable.</li>
    <li><strong>\`paragraph\`:</strong> Holds a reference to the DOM element.</li>
    <li><strong>\`changeText()\`:</strong> Updates the text content of the DOM element.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using @ViewChild with Directives</h3>
  <p>
    @ViewChild can also be used to interact with Angular directives. 
    Here’s an example:
  </p>

  <h4 style="color: #28a745;">1. Custom Directive</h4>
  <p>
    Create a custom directive that modifies the behavior of a DOM element.
  </p>
  <pre>
  <code class="language-javascript">
    import { Directive, ElementRef, Renderer2 } from '@angular/core';

    @Directive({
      selector: '[appHighlight]'
    })
    export class HighlightDirective {
      constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
      }
    }
  </code>
  </pre>
  <p>
    In this example, the directive changes the background color of the element to yellow.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    Use @ViewChild to query the directive and interact with it.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, ViewChild, AfterViewInit } from '@angular/core';
    import { HighlightDirective } from './highlight.directive';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;p appHighlight #highlight&gt;This is a highlighted paragraph.&lt;/p&gt;
      \`
    })
    export class ParentComponent implements AfterViewInit {
      @ViewChild(HighlightDirective) highlight: HighlightDirective; // Query the directive

      ngAfterViewInit() {
        console.log('Directive applied:', this.highlight);
      }
    }
  </code>
  </pre>
  <p>
    In this example, the parent component queries the \`HighlightDirective\` and logs it after the view is initialized.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    The **@ViewChild** decorator is a powerful feature in Angular that allows you to interact with child components, DOM elements, and directives. 
    By using @ViewChild, you can access and manipulate these elements directly, making your components more dynamic and interactive. 
    Whether you’re working with child components, DOM manipulation, or custom directives, @ViewChild provides the tools you need to build **scalable and maintainable** applications.
  </p>
</div>` },
            { topic: `ViewChildren`, content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">Understanding @ViewChildren in Angular</h2>

  <p>
    <strong>Angular</strong> is a powerful framework for building dynamic web applications, and one of its key features is the ability to interact with multiple child components or DOM elements. 
    While the **@ViewChild** decorator allows you to access a single child component or element, the **@ViewChildren** decorator enables you to query and access multiple child components, directives, or DOM elements. 
    In this article, we’ll explore what @ViewChildren is, how it works, and how to use it effectively in your Angular applications.
  </p>

  <h3 style="color: #dc3545;">What is @ViewChildren?</h3>
  <p>
    The **@ViewChildren** decorator is used to query and access multiple child components, directives, or DOM elements from a parent component. 
    It returns a \`QueryList\` of the queried elements, which you can iterate over or manipulate. 
    @ViewChildren is particularly useful when you need to:
  </p>
  <ul style="padding-left: 20px;">
    <li>Access multiple child components or directives.</li>
    <li>Manipulate multiple DOM elements.</li>
    <li>React to changes in the list of queried elements.</li>
  </ul>

  <h3 style="color: #17a2b8;">How @ViewChildren Works</h3>
  <p>
    The @ViewChildren decorator takes two arguments:
  </p>
  <ol style="padding-left: 20px;">
    <li><strong>Selector:</strong> The name of the child component, directive, or a template reference variable.</li>
    <li><strong>Options (optional):</strong> Configuration options, such as \`read\`.</li>
  </ol>
  <p>
    Once the child components or elements are queried, they are returned as a \`QueryList\`, which is an iterable collection that updates dynamically as the DOM changes.
  </p>

  <h3 style="color: #17a2b8;">Using @ViewChildren with Child Components</h3>
  <p>
    You can use @ViewChildren to access multiple instances of a child component. 
    Here’s an example:
  </p>

  <h4 style="color: #28a745;">1. Child Component</h4>
  <p>
    Define a child component with a method or property that the parent component will access.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: \`&lt;p&gt;{{ message }}&lt;/p&gt;\`
    })
    export class ChildComponent {
      message = 'Hello from Child!';

      updateMessage(newMessage: string) {
        this.message = newMessage;
      }
    }
  </code>
  </pre>
  <p>
    In this example, the child component has a \`message\` property and an \`updateMessage\` method.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    Use @ViewChildren in the parent component to access multiple instances of the child component and call their methods.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, ViewChildren, QueryList } from '@angular/core';
    import { ChildComponent } from './child.component';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;button (click)="updateChildMessages()"&gt;Update Child Messages&lt;/button&gt;
        &lt;app-child&gt;&lt;/app-child&gt;
        &lt;app-child&gt;&lt;/app-child&gt;
        &lt;app-child&gt;&lt;/app-child&gt;
      \`
    })
    export class ParentComponent {
      @ViewChildren(ChildComponent) children: QueryList&lt;ChildComponent&gt;; // Query multiple child components

      updateChildMessages() {
        this.children.forEach(child => {
          child.updateMessage('Message updated by Parent!'); // Call each child's method
        });
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@ViewChildren(ChildComponent)\`:</strong> Queries all instances of the child component.</li>
    <li><strong>\`children\`:</strong> Holds a \`QueryList\` of the child components.</li>
    <li><strong>\`updateChildMessages()\`:</strong> Calls the \`updateMessage\` method on each child component.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using @ViewChildren with DOM Elements</h3>
  <p>
    You can also use @ViewChildren to access and manipulate multiple DOM elements. 
    Here’s an example:
  </p>

  <h4 style="color: #28a745;">1. Template Reference Variable</h4>
  <p>
    Add a template reference variable to the DOM elements in the parent component’s template.
  </p>
  <pre>
  <code class="language-html">
    &lt;!-- parent.component.html --&gt;
    &lt;h1&gt;Parent Component&lt;/h1&gt;
    &lt;p #myParagraph&gt;This is paragraph 1.&lt;/p&gt;
    &lt;p #myParagraph&gt;This is paragraph 2.&lt;/p&gt;
    &lt;p #myParagraph&gt;This is paragraph 3.&lt;/p&gt;
    &lt;button (click)="changeText()"&gt;Change Text&lt;/button&gt;
  </code>
  </pre>
  <p>
    In this example, \`#myParagraph\` is a template reference variable attached to multiple \`<p>\` elements.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    Use @ViewChildren to query the DOM elements and manipulate them.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

    @Component({
      selector: 'app-parent',
      templateUrl: './parent.component.html'
    })
    export class ParentComponent {
      @ViewChildren('myParagraph') paragraphs: QueryList&lt;ElementRef&gt;; // Query multiple DOM elements

      changeText() {
        this.paragraphs.forEach(paragraph => {
          paragraph.nativeElement.textContent = 'Text changed by Parent!'; // Manipulate each DOM element
        });
      }
    }
  </code>
  </pre>
  <p>
    In this example:
  </p>
  <ul style="padding-left: 20px;">
    <li><strong>\`@ViewChildren('myParagraph')\`:</strong> Queries all DOM elements with the template reference variable.</li>
    <li><strong>\`paragraphs\`:</strong> Holds a \`QueryList\` of the DOM elements.</li>
    <li><strong>\`changeText()\`:</strong> Updates the text content of each DOM element.</li>
  </ul>

  <h3 style="color: #17a2b8;">Using @ViewChildren with Directives</h3>
  <p>
    @ViewChildren can also be used to interact with multiple instances of an Angular directive. 
    Here’s an example:
  </p>

  <h4 style="color: #28a745;">1. Custom Directive</h4>
  <p>
    Create a custom directive that modifies the behavior of a DOM element.
  </p>
  <pre>
  <code class="language-javascript">
    import { Directive, ElementRef, Renderer2 } from '@angular/core';

    @Directive({
      selector: '[appHighlight]'
    })
    export class HighlightDirective {
      constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
      }
    }
  </code>
  </pre>
  <p>
    In this example, the directive changes the background color of the element to yellow.
  </p>

  <h4 style="color: #28a745;">2. Parent Component</h4>
  <p>
    Use @ViewChildren to query the directive and interact with it.
  </p>
  <pre>
  <code class="language-javascript">
    import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
    import { HighlightDirective } from './highlight.directive';

    @Component({
      selector: 'app-parent',
      template: \`
        &lt;h1&gt;Parent Component&lt;/h1&gt;
        &lt;p appHighlight&gt;This is a highlighted paragraph.&lt;/p&gt;
        &lt;p appHighlight&gt;This is another highlighted paragraph.&lt;/p&gt;
      \`
    })
    export class ParentComponent implements AfterViewInit {
      @ViewChildren(HighlightDirective) highlights: QueryList&lt;HighlightDirective&gt;; // Query multiple directives

      ngAfterViewInit() {
        console.log('Directives applied:', this.highlights);
      }
    }
  </code>
  </pre>
  <p>
    In this example, the parent component queries all instances of the \`HighlightDirective\` and logs them after the view is initialized.
  </p>

  <h3 style="color: #6f42c1;">Conclusion</h3>
  <p>
    The **@ViewChildren** decorator is a powerful feature in Angular that allows you to interact with multiple child components, DOM elements, or directives. 
    By using @ViewChildren, you can access and manipulate these elements dynamically, making your components more flexible and interactive. 
    Whether you’re working with multiple child components, DOM manipulation, or custom directives, @ViewChildren provides the tools you need to build **scalable and maintainable** applications.
  </p>
</div>` },
            { topic: `ContentChild`, content: `` },
            { topic: `Dynamic Components`, content: `` },
            { topic: `HostBinding `, content: `` },
            { topic: `HostListener`, content: `` },
            { topic: `View Encapsulation`, content: `` },
            { topic: `Component Styling`, content: `` },
            { topic: `Lazy Loading Components`, content: `` },
            { topic: `Component Testing Strategies`, content: `` },
          ]
          
        },
        {
          mainTopic: `directives`, subTopics: [
            { topic: `Intro to Directives`, content: `` },
            { topic: `Types of Directives`, content: `` },
            { topic: `Custom Directive`, content: `` },
            { topic: `Attribute Directives`, content: `` },
            { topic: `Structural Directives`, content: `` },
            { topic: `@Directive Decorator`, content: `` },
            { topic: `Using Renderer2`, content: `` },
            { topic: `Using ElementRef`, content: `` },
            { topic: `Passing Data using @Input()`, content: `` },
            { topic: `Communicating using @Output()`, content: `` },
            { topic: `Testing Custom Directives`, content: `` },
          ]          
        },
        {
          mainTopic: `services`, subTopics:[
            { topic: `Introduction`, content: `` },
            { topic: `Creating Services`, content: `` },
            { topic: `Injectable Decorator`, content: `` },
            { topic: `Dependency Injection`, content: `` },
            { topic: `Singleton Services`, content: `` },
            { topic: `Providing Services`, content: `` },
            { topic: `ProvidedIn Root`, content: `` },
            { topic: `ProvidedIn Module`, content: `` },
            { topic: `ProvidedIn Component`, content: `` },
            { topic: `HTTP Services`, content: `` },
            { topic: `Observables`, content: `` },
            { topic: `RxJS in Services`, content: `` },
            { topic: `Subject & BehaviorSubject`, content: `` },
            { topic: `Handling API Calls`, content: `` },
            { topic: `Error Handling`, content: `` },
            { topic: `Interceptors`, content: `` },
            { topic: `Mock Services`, content: `` },
            { topic: `Testing Services`, content: `` },
          ]          
        },
        {
          mainTopic: `Modules`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `NgModule`, content: `` },
            { topic: `Declarations`, content: `` },
            { topic: `Imports`, content: `` },
            { topic: `Exports`, content: `` },
            { topic: `Providers`, content: `` },
            { topic: `Bootstrap`, content: `` },
            { topic: `Feature Modules`, content: `` },
            { topic: `Shared Modules`, content: `` },
            { topic: `Lazy Loading`, content: `` },
            { topic: `Eager Loading`, content: `` },
            { topic: `Routing Modules`, content: `` },
            { topic: `forRoot()`, content: `` },
            { topic: `forChild()`, content: `` },
            { topic: `Service Scope`, content: `` },
            { topic: `Standalone Components`, content: `` },
            { topic: `Module Hierarchy`, content: `` },
            { topic: `Testing Modules`, content: `` },
          ]          
        },
        {
          mainTopic: `routing`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `RouterModule`, content: `` },
            { topic: `Routes Configuration`, content: `` },
            { topic: `RouterOutlet`, content: `` },
            { topic: `RouterLink`, content: `` },
            { topic: `RouterLinkActive`, content: `` },
            { topic: `Route Parameters`, content: `` },
            { topic: `Query Parameters`, content: `` },
            { topic: `Child Routes`, content: `` },
            { topic: `Lazy Loading`, content: `` },
            { topic: `Guards`, content: `` },
            { topic: `CanActivate`, content: `` },
            { topic: `CanDeactivate`, content: `` },
            { topic: `Resolve`, content: `` },
            { topic: `Redirect Routes`, content: `` },
            { topic: `Wildcard Route`, content: `` },
            { topic: `Navigation Methods`, content: `` },
            { topic: `Router Events`, content: `` },
            { topic: `Route Reuse`, content: `` },
            { topic: `Testing Routes`, content: `` },
          ]                   
        },
        {
          mainTopic: `pipes`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `Built-in Pipes`, content: `` },
            { topic: `Custom Pipes`, content: `` },
            { topic: `Pure vs Impure`, content: `` },
            { topic: `Pipe Transform`, content: `` },
            { topic: `Chaining Pipes`, content: `` },
            { topic: `Async Pipe`, content: `` },
            { topic: `Date Pipe`, content: `` },
            { topic: `Currency Pipe`, content: `` },
            { topic: `Decimal Pipe`, content: `` },
            { topic: `Percent Pipe`, content: `` },
            { topic: `Uppercase & Lowercase`, content: `` },
            { topic: `Slice Pipe`, content: `` },
            { topic: `JSON Pipe`, content: `` },
            { topic: `Custom Pipe Example`, content: `` },
            { topic: `Parameterizing Pipes`, content: `` },
            { topic: `Performance Considerations`, content: `` },
            { topic: `Testing Pipes`, content: `` },
          ]
          
        },
        {
          mainTopic: `Change Detection`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `Change Detection Mechanism`, content: `` },
            { topic: `Default Strategy`, content: `` },
            { topic: `OnPush Strategy`, content: `` },
            { topic: `Zone.js`, content: `` },
            { topic: `DetectChanges()`, content: `` },
            { topic: `MarkForCheck()`, content: `` },
            { topic: `ApplicationRef.tick()`, content: `` },
            { topic: `Immutable Data`, content: `` },
            { topic: `Async Pipe Impact`, content: `` },
            { topic: `Event Binding Impact`, content: `` },
            { topic: `Component Hierarchy`, content: `` },
            { topic: `Performance Optimization`, content: `` },
            { topic: `Change Detection in Directives`, content: `` },
            { topic: `Change Detection in Pipes`, content: `` },
            { topic: `Testing Change Detection`, content: `` },
          ]
          
        },
        {
          mainTopic: `forms`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `FormsModule`, content: `` },
            { topic: `ReactiveFormsModule`, content: `` },
            { topic: `FormBuilder`, content: `` },
            { topic: `FormControl`, content: `` },
            { topic: `FormGroup`, content: `` },
            { topic: `FormArray`, content: `` },
            { topic: `Validators`, content: `` },
            { topic: `Custom Validators`, content: `` },
            { topic: `Async Validators`, content: `` },
            { topic: `Form Events`, content: `` },
            { topic: `Template Driven Forms`, content: `` },
            { topic: `Reactive Forms`, content: `` },
            { topic: `Form Validation`, content: `` },
            { topic: `Form Submission`, content: `` },
            { topic: `Form Reset`, content: `` },
            { topic: `Form Status`, content: `` },
            { topic: `Form Errors`, content: `` },
            { topic: `Form Array`, content: `` },
            { topic: `Form Control Value Accessor`, content: `` },
          ]
        },
        {
          mainTopic: `HTTP`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `HttpClientModule`, content: `` },
            { topic: `HttpClient`, content: `` },
            { topic: `HttpHeaders`, content: `` },
            { topic: `HttpErrorResponse`, content: `` },
            { topic: `HttpRequest`, content: `` },
            { topic: `HttpEvent`, content: `` },
            { topic: `HttpParams`, content: `` },]
        },
        {
          mainTopic: `Testing`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `Angular Testing Framework`, content: `` },
            { topic: `TestBed`, content: `` },
            { topic: `Component Testing`, content: `` },
            { topic: `Component Fixture`, content: `` },
            { topic: `Component Instance`, content: `` },]
        },
        {
          mainTopic: `Signals`, subTopics: [
            { topic: `Introduction`, content: `` },
            { topic: `What is a Signal?`, content: `` },
            { topic: `Creating Signals`, content: `` },
            { topic: `Reading Signals`, content: `` },
            { topic: `Updating Signals`, content: `` },
            { topic: `Effects in Signals`, content: `` },
            { topic: `Computed Signals`, content: `` },
            { topic: `Signal vs BehaviorSubject`, content: `` },
            { topic: `Signal vs State Management`, content: `` },
            { topic: `Signals with Components`, content: `` },
            { topic: `Signals with Services`, content: `` },
            { topic: `Signals and Change Detection`, content: `` },
            { topic: `Performance Optimization`, content: `` },
            { topic: `Best Practices`, content: `` },
            { topic: `Testing Signals`, content: `` },
          ]
          
        }
    ]
}