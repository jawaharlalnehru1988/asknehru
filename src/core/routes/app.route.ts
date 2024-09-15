import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('../../app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../../app/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'typescript',
    loadComponent: () =>
      import('../../app/typescript/typescript.component').then(
        (m) => m.TypescriptComponent
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