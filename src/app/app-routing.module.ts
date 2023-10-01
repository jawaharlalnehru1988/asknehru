import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "javascript", loadChildren: ()=>import('./javascript/javascript.module').then(m => m.JavascriptModule)},
  {path: "angular", loadChildren: ()=>import('./angular/angular.module').then(m => m.AngularModule) },
  {path: "dsa", loadChildren: ()=>import('./dsa/dsa.module').then(m => m.DsaModule) },
  {path: 'html', loadChildren: ()=>import('./html/html.module').then(m=>m.HtmlModule)},
  {path: 'css', loadChildren: ()=>import('./css/css.module').then(m=> m.CssModule)},
  {path: 'bootstrap', loadChildren: ()=> import('./bootstrap/bootstrap.module').then(m=> m.BootstrapModule)},
  {path: 'typescript', loadChildren: ()=> import('./typescript/typescript.module').then(m => m.TypescriptModule)},
  {path: 'materialAngular', loadChildren: ()=> import('./material/material.module').then(m => m.MaterialModule)},
  {path: 'nodejs', loadChildren: ()=> import('./nodejs/nodejs.module').then(m => m.NodejsModule)},
  {path: 'fxlayout', loadChildren: ()=> import('./fxlayout/fxlayout.module').then(m => m.FxlayoutModule)},
  {path: 'aggrid', loadChildren: ()=> import('./aggrid/aggrid.module').then(m=>m.AggridModule)},
  {path: 'rxjs', loadChildren: ()=> import('./rxjs/rxjs.module').then(m => m.RxjsModule)},
  {path: 'restapi', loadChildren: ()=>import('./restapi/restapi/restapi.module').then(m => m.RestapiModule)},
  {path: 'git', loadChildren: ()=>import('./git/git/git.module').then(m => m.GitModule)},
  {path: 'bitbucket', loadChildren: ()=> import('./bitbucket/bitbucket/bitbucket.module').then(m => m.BitbucketModule)},
  {path: 'python', loadChildren: ()=> import('./python/python/python.module').then(m => m.PythonModule)},
  {path: 'karmajasmine', loadChildren: ()=> import('./karmajasmin/karmajasmin/karmajasmin.module').then(m => m.KarmajasminModule)},
  {path: 'express', loadChildren: ()=> import('./expressjs/expressjs/expressjs.module').then(m=> m.ExpressjsModule)},
  {path: 'mongo', loadChildren: ()=> import('./mongodb/mongodb/mongodb.module').then(m => m.MongodbModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
