import { NgModule } from '@angular/core';
import { FxlayoutRoutingModule } from './fxlayout-routing.module';
import { FxlayoutComponent } from './fxlayout/fxlayout.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    FxlayoutComponent
  ],
  imports: [
    FxlayoutRoutingModule,
    SharedModule
  ]
})
export class FxlayoutModule { }
