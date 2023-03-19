import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [
  {path: "", component: TypescriptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptRoutingModule { }
