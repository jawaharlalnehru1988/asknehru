import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressjsRoutingModule } from './expressjs-routing.module';
import { ExpressjsComponent } from './expressjs.component';


@NgModule({
  declarations: [ExpressjsComponent],
  imports: [
    CommonModule,
    ExpressjsRoutingModule
  ]
})
export class ExpressjsModule { }
