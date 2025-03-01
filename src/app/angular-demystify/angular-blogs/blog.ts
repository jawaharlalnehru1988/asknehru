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
            { topic: `Intro to Components`, content: `` },
            { topic: `Templates`, content: `` },
            { topic: `Class`, content: `` },
            { topic: `Lifecycle Hooks`, content: `` },
            { topic: `Component Interaction`, content: `` },
            { topic: `@Input()`, content: `` },
            { topic: `@Output()`, content: `` },
            { topic: `ViewChild`, content: `` },
            { topic: `ContentChild`, content: `` },
            { topic: `Dynamic Components`, content: `` },
            { topic: `HostBinding and HostListener`, content: `` },
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