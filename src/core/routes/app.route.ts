import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../../app/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'home',
    loadComponent: () =>
      import('../../app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'toolbar',

    loadComponent: () =>
      import('../../app/toolbar/toolbar.component').then(
        (m) => m.ToolbarComponent
      ),
  },

  {
    path: 'project/:id',
    loadComponent: () => import('../../app/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'articles-gallery',
    loadComponent: () => import('../../app/articles-gallery/articles-gallery.component').then(m => m.ArticlesGalleryComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../../app/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  { path: '**', redirectTo: '/home' },
];
