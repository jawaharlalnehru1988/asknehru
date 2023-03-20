import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';
import { JsDetailsComponent } from './js-details/js-details.component';

const routes: Routes = [
  {path: "", component: JavascriptComponent},
  {path:'js-details/:id', component:JsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
