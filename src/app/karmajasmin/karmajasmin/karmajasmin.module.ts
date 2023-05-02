import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { KarmajasminRoutingModule } from './karmajasmin-routing.module';
import { KarmajasminComponent } from './karmajasmin.component';
import { KeyValuePipe } from '@angular/common';
@NgModule({
  declarations: [KarmajasminComponent],
  imports: [
    KarmajasminRoutingModule,
    SharedModule
  ],
  providers: [KeyValuePipe]
})
export class KarmajasminModule { }
