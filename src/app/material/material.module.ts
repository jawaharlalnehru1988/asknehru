import { NgModule } from '@angular/core';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material/material.component';
import { SharedModule } from '../shared/shared/shared.module';
@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    MaterialRoutingModule,
    SharedModule
  ]
})
export class MaterialModule { }
