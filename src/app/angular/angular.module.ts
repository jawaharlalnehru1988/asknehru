import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular/angular.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    HttpClientModule
  ],
  exports: [AngularComponent]
})
export class AngularModule { }
