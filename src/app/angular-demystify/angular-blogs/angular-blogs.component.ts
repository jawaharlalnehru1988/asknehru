import { Component } from '@angular/core';
import { PrismHighlightDirective } from 'src/core/directives/highlight.directive';

@Component({
  selector: 'app-angular-blogs',
  standalone: true,
  imports: [PrismHighlightDirective],
  templateUrl: './angular-blogs.component.html',
  styleUrl: './angular-blogs.component.scss'
})
export class AngularBlogsComponent {
firstcode = `// app.module.ts
  
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

  secondCode = `// config.service.ts
  
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
  }`
}
