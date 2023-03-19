import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonComponent } from './python.component';

const routes: Routes = [
  {path: "", component: PythonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonRoutingModule { }
