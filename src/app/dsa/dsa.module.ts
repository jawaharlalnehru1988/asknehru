import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsaRoutingModule } from './dsa-routing.module';
import { DsaComponent } from './dsa/dsa.component';


@NgModule({
  declarations: [
    DsaComponent
  ],
  imports: [
    CommonModule,
    DsaRoutingModule
  ]
})
export class DsaModule { }
