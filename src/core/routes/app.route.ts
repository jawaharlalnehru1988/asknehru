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
    path: 'roadmaps',
    loadComponent: () => import('../../app/roadmaps/roadmaps.component').then((m) => m.RoadmapsComponent)
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
  {
    path: 'coding',
    loadComponent: () => import('../../app/coding-interview/coding-interview.component').then(m => m.CodingInterviewComponent),
    children: [
      { path: '', loadComponent: () => import('../../app/coding-interview/coding-setup/coding-setup.component').then(m => m.CodingSetupComponent) },
      { path: 'manipulation', loadComponent: () => import('../../app/coding-interview/manipulation/manipulation.component').then(m => m.ManipulationComponent) },
      { path: 'complexity', loadComponent: () => import('../../app/coding-interview/complexity/complexity.component').then(m => m.ComplexityComponent) },
      { path: 'super-easy', loadComponent: () => import('../../app/coding-interview/super-easy/super-easy.component').then(m => m.SuperEasyComponent) },
      { path: 'hard', loadComponent: () => import('../../app/coding-interview/hard/hard.component').then(m => m.HardComponent) },
      { path: 'harder', loadComponent: () => import('../../app/coding-interview/harder/harder.component').then(m => m.HarderComponent) }
    ]
  },
  { path: '**', redirectTo: '/home' },
];
