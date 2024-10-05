import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Prism from 'prismjs';
import { PrismHighlightDirective } from 'src/core/directives/highlight.directive';

@Component({
  selector: 'app-angular-blogs',
  standalone: true,
  imports: [PrismHighlightDirective],
  templateUrl: './angular-blogs.component.html',
  styleUrl: './angular-blogs.component.scss'
})
export class AngularBlogsComponent {
  id!: string | null;


firstcode:string = `// app.module.ts
  
  import { NgModule, APP_INITIALIZER } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { ConfigService } from './config.service';
  
  export function initializeApp(configService: ConfigService) {
    return () => configService.loadConfig();
  }
  
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [ConfigService],
        multi: true,
      },
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;

  secondCode:string = `// config.service.ts
  
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  
  @Injectable({ providedIn: 'root' })
  export class ConfigService {
    private configData: any;
  
    constructor(private http: HttpClient) {}
  
    loadConfig() {
      return this.http
        .get('/api/config')
        .toPromise()
        .then(data => {
          this.configData = data;
        });
    }
  
    getConfig() {
      return this.configData;
    }
  }`;

  testCaseCode:string = `// Example Test for a Component in Angular 18
          import { TestBed } from '@angular/core/testing';
          import { StandaloneComponent } from './standalone.component';
          
          describe('StandaloneComponent', () => {
            beforeEach(async () => {
              await TestBed.configureTestingModule({
                imports: [StandaloneComponent],
              }).compileComponents();
            });
          
            it('should create the component', () => {
              const fixture = TestBed.createComponent(StandaloneComponent);
              const component = fixture.componentInstance;
              expect(component).toBeTruthy();
            });
          });`;

  stanaloneCode:string = `// Example of a standalone component
          import { Component } from '@angular/core';
          
          @Component({
            selector: 'app-standalone',
            standalone: true,
            template: \`<h1>Standalone Component</h1>\',
          })
          export class StandaloneComponent {}`;

    ngOninitCode:string = `// ngOnInit example in a component
          import { Component, OnInit } from '@angular/core';
          
          @Component({
            selector: 'app-lifecycle',
            templateUrl: './lifecycle.component.html',
            styleUrls: ['./lifecycle.component.css']
          })
          export class LifecycleComponent implements OnInit {
          
            data: any;
          
            ngOnInit() {
              // Fetch or initialize data here
              this.data = { message: 'Component Initialized!' };
            }
          }
            `;
    ngOnChangesCode: string = `// ngOnChanges example in a component
          import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
          
          @Component({
            selector: 'app-child',
            templateUrl: './child.component.html',
            styleUrls: ['./child.component.css']
          })
          export class ChildComponent implements OnChanges {
          
            @Input() message: string;
          
            ngOnChanges(changes: SimpleChanges) {
              // React to changes in input properties
              console.log('Input changed:', changes.message.currentValue);
            }
          }`;


    ngAfterViewInitCode:string = `// ngAfterViewInit example in a component
          import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
          
          @Component({
            selector: 'app-view-child',
            template: '<div #childDiv>View Child Example</div>',
            styleUrls: ['./view-child.component.css']
          })
          export class ViewChildComponent implements AfterViewInit {
          
            @ViewChild('childDiv') childDiv: ElementRef;
          
            ngAfterViewInit() {
              // Access the child element
              const childElement = this.childDiv.nativeElement;
              console.log('Child element:', childElement);
            }
          }`;

    ngOnDestroyCode:string = `// ngOnDestroy example in a component
          import { Component, OnDestroy } from '@angular/core';
          
          @Component({
            selector: 'app-lifecycle',
            templateUrl: './lifecycle.component.html',
            styleUrls: ['./lifecycle.component.css']
          })
          export class LifecycleComponent implements OnDestroy {
          
            data: any;
          
            ngOnDestroy() {
              // Clean up any resources here
              this.data = null;
            }
          }`;
          constructor(private route: ActivatedRoute){}
          ngOnInit(): void {
            this.id = this.route.snapshot.paramMap.get('id');
          }
          ngAfterViewInit(): void {
         Prism.highlightAll();
          }
}
