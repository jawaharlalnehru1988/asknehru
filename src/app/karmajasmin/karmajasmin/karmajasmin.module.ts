import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KarmajasminRoutingModule } from './karmajasmin-routing.module';
import { KarmajasminComponent } from './karmajasmin.component';


@NgModule({
  declarations: [KarmajasminComponent],
  imports: [
    CommonModule,
    KarmajasminRoutingModule
  ]
})
export class KarmajasminModule { }
