import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsaComponent } from './dsa/dsa.component';

const routes: Routes = [
  {path: "", component: DsaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsaRoutingModule { }
