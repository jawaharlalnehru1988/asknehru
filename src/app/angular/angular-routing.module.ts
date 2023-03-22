import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgdetailComponent } from './agdetail/agdetail.component';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  {path: "", component: AngularComponent},
  {path: 'agdetail/:id', component: AgdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
