import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { DsaRoutingModule } from './dsa-routing.module';
import { DsaComponent } from './dsa/dsa.component';

@NgModule({
  declarations: [
    DsaComponent
  ],
  imports: [
    DsaRoutingModule,
    SharedModule
  ]
})
export class DsaModule { }
