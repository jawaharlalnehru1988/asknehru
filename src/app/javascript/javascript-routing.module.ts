import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  {path: "", component: JavascriptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
