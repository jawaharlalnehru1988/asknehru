import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FxlayoutComponent } from './fxlayout/fxlayout.component';

const routes: Routes = [
  {path: "", component: FxlayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FxlayoutRoutingModule { }
