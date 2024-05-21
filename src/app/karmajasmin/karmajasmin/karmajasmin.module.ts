import { NgModule } from '@angular/core';
import { KarmajasminRoutingModule } from './karmajasmin-routing.module';
import { KarmajasminComponent } from './karmajasmin.component';
import { KeyValuePipe } from '@angular/common';
@NgModule({
  declarations: [KarmajasminComponent],
  imports: [
    KarmajasminRoutingModule,
  ],
  providers: [KeyValuePipe]
})
export class KarmajasminModule { }
