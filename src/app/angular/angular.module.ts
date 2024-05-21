import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular/angular.component';
import { AgdetailComponent } from './agdetail/agdetail.component';



@NgModule({
  declarations: [
    AngularComponent,
    AgdetailComponent
  ],
  imports: [
    AngularRoutingModule,
  ],
  exports: [AngularComponent]
})
export class AngularModule { }
