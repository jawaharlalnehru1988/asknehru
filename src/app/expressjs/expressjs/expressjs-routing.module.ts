import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressjsComponent } from './expressjs.component';

const routes: Routes = [
  {path: "", component: ExpressjsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressjsRoutingModule { }
