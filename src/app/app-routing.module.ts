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
  {path: 'aggrid', loadChildren: ()=> import('./aggrid/aggrid.module').then(m=>m.AggridModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
