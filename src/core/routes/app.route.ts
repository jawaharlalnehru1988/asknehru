import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../../app/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'home',
    loadComponent: () =>
      import('../../app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'typescript',
    loadComponent: () => import('../../app/typescript/typescript.component').then((m) => m.TypescriptComponent),
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
    path: 'jasmine', loadComponent: () => import('../../app/jasmine/jasmine.component').then(c => c.JasmineComponent)
  },
  {
    path: 'springboot', loadComponent: () => import('../../app/springboot/springboot.component').then(c => c.SpringbootComponent)
  },
  {
    path: 'sql', loadComponent: () => import('../../app/sql/sql.component').then(c => c.SqlComponent)
  },
  {
    path: 'git', loadComponent: () => import('../../app/git-commands/git-commands.component').then(c => c.GitCommandsComponent)
  },
  {
    path: 'css', loadComponent: () => import('../../app/css-concepts/css-concepts.component').then((m) => m.CssConceptsComponent)
  },
  {
    path: 'react', loadComponent: () => import('../../app/react/react.component').then((m) => m.ReactComponent)
  },
  {
    path: 'systemdesign', loadComponent: () => import('../../app/system-design/system-design.component').then((m) => m.SystemDesignComponent)
  },
  {
    path: 'officecommunication', loadComponent: () => import('../../app/officecommunication/officecommunication.component').then((m) => m.OfficecommunicationComponent)
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
    path: 'project/:id',
    loadComponent: () => import('../../app/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'articles-gallery',
    loadComponent: () => import('../../app/articles-gallery/articles-gallery.component').then(m => m.ArticlesGalleryComponent)
  },
  {
    path: 'infodetails/:id',
    loadComponent: () => import('../../app/infodetails/infodetails.component').then(m => m.InfodetailsComponent)
  },
  { path: '**', redirectTo: '/home' },
];
