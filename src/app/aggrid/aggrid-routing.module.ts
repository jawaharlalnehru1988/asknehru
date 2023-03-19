import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggridComponent } from './aggrid/aggrid.component';

const routes: Routes = [
  {path: "", component: AggridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AggridRoutingModule { }
