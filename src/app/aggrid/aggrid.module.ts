import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggridRoutingModule } from './aggrid-routing.module';
import { AggridComponent } from './aggrid/aggrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AggridComponent
  ],
  imports: [
    CommonModule,
    AggridRoutingModule,
    AgGridModule,
    HttpClientModule
  ]
})
export class AggridModule { }
