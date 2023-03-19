import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestapiComponent } from './restapi.component';

const routes: Routes = [
  {path: "", component: RestapiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestapiRoutingModule { }
