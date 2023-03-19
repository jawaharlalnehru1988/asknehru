import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KarmajasminComponent } from './karmajasmin.component';

const routes: Routes = [
  {path: '', component: KarmajasminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KarmajasminRoutingModule { }
