import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular/angular.component';
import { AgdetailComponent } from './agdetail/agdetail.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    AngularComponent,
    AgdetailComponent
  ],
  imports: [
    SharedModule,
    AngularRoutingModule
  ],
  exports: [AngularComponent]
})
export class AngularModule { }
