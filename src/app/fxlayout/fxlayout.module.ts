import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FxlayoutRoutingModule } from './fxlayout-routing.module';
import { FxlayoutComponent } from './fxlayout/fxlayout.component';


@NgModule({
  declarations: [
    FxlayoutComponent
  ],
  imports: [
    CommonModule,
    FxlayoutRoutingModule
  ]
})
export class FxlayoutModule { }
