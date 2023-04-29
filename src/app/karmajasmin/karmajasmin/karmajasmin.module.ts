import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { KarmajasminRoutingModule } from './karmajasmin-routing.module';
import { KarmajasminComponent } from './karmajasmin.component';


@NgModule({
  declarations: [KarmajasminComponent],
  imports: [
    KarmajasminRoutingModule,
    SharedModule
  ]
})
export class KarmajasminModule { }
