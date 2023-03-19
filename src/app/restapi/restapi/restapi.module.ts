import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestapiRoutingModule } from './restapi-routing.module';
import { RestapiComponent } from './restapi.component';


@NgModule({
  declarations: [RestapiComponent],
  imports: [
    CommonModule,
    RestapiRoutingModule
  ]
})
export class RestapiModule { }
