import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  // {path:"**", component: PagenotfoundComponent},
  {path: "javascript", loadChildren: ()=>import('./javascript/javascript.module').then(m => m.JavascriptModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
