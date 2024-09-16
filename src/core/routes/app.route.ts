import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
    path: 'typescript',
    loadComponent: () =>
      import('../../app/typescript/typescript.component').then(
        (m) => m.TypescriptComponent
      ),
  },
  {
    path: 'tstopic/:id',
    loadComponent: () =>
      import('../../app/typescript-details/typescript-details.component').then(
        (m) => m.TypescriptDetailsComponent
      ),
  },
  {
    path: 'toolbar',

    loadComponent: () =>
      import('../../app/toolbar/toolbar.component').then(
        (m) => m.ToolbarComponent
      ),
  },
  {
    path: 'spotify',
    loadChildren: () =>
      import('../../core/routes/spotify.route').then((m) => m.spotifyRoute),
  },
  { path: '**', redirectTo: '/home' },
];
