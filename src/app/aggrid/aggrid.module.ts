import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggridRoutingModule } from './aggrid-routing.module';
import { AggridComponent } from './aggrid/aggrid.component';


@NgModule({
  declarations: [
    AggridComponent
  ],
  imports: [
    CommonModule,
    AggridRoutingModule
  ]
})
export class AggridModule { }
