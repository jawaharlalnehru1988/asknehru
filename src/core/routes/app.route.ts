import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () =>import('../../app/home/home.component').then((m) => m.HomeComponent)},
  {
    path: 'home',
    loadComponent: () =>
      import('../../app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'angular-demystified',
    loadChildren: () =>
      import('../../core/routes/angular.route').then((m) => m.routes),
  },
  {
    path: 'angular-topic/:id',
    loadComponent: () =>
      import(
        '../../app/angular-demystify/angular-blogs/angular-blogs.component'
      ).then((m) => m.AngularBlogsComponent),
  },
  {
    path: 'angular-audio/:id',
    loadComponent: () =>
      import(
        '../../app/angular-demystify/angular-audio/angular-audio.component'
      ).then((m) => m.AngularAudioComponent),
  },
  {
    path: 'typescript',
    loadComponent: () =>import('../../app/typescript/typescript.component').then((m) => m.TypescriptComponent),
  },
  {
    path: 'tstopic/:id',
    loadComponent: () =>
      import('../../app/typescript-details/typescript-details.component').then(
        (m) => m.TypescriptDetailsComponent
      ),
  },
  {
    path: 'rxjs', loadComponent: () => import('../../app/angular-demystify/rxjs/rxjs.component').then((m) => m.RxjsComponent),
  },
  {
    path: 'toolbar',

    loadComponent: () =>
      import('../../app/toolbar/toolbar.component').then(
        (m) => m.ToolbarComponent
      ),
  },
  {
    path:'java', loadComponent: ()=> import('../../app/java/java.component').then(c => c.JavaComponent)
  },
  {
    path:'jasmine', loadComponent: ()=> import('../../app/jasmine/jasmine.component').then(c => c.JasmineComponent)
  },
  {
    path:'springboot', loadComponent: ()=> import('../../app/springboot/springboot.component').then(c => c.SpringbootComponent)
  },
  {
    path:'sql', loadComponent: ()=> import('../../app/sql/sql.component').then(c => c.SqlComponent)
  },
  {
    path:'git', loadComponent: ()=> import('../../app/git-commands/git-commands.component').then(c => c.GitCommandsComponent)
  },
  {
    path: 'css', loadComponent: () => import('../../app/css-concepts/css-concepts.component').then((m) => m.CssConceptsComponent)
  },
  {
    path: 'react', loadComponent: () => import('../../app/react/react.component').then((m) => m.ReactComponent)
  },
  {
    path: 'agentic-ai', loadComponent: () => import('../../app/agentic-ai/agentic-ai.component').then((m) => m.AgenticAiComponent)
  },
  {
    path: 'systemdesign', loadComponent: () => import('../../app/system-design/system-design.component').then((m) => m.SystemDesignComponent)
  },
  {
    path: 'mcq-training/:topic', loadComponent: () => import('../../app/mcq-training/mcq-training.component').then((m) => m.McqTrainingComponent)
  },
  {
    path: 'spotify',
    loadChildren: () =>
      import('../../core/routes/spotify.route').then((m) => m.spotifyRoute),
  },
  {
    path: 'jsconcepts', loadComponent:() => import('../../app/javascript/javascript/javascript.component').then((m) => m.JavascriptComponent)
  },
  { path: '**', redirectTo: '/home' },
];
