import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressjsRoutingModule } from './expressjs-routing.module';
import { ExpressjsComponent } from './expressjs.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ExpressjsComponent],
  imports: [
    CommonModule,
    ExpressjsRoutingModule,
    SharedModule
  ]
})
export class ExpressjsModule { }
