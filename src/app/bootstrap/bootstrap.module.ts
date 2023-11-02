import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';


@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    SharedModule
  ]
})
export class BootstrapModule { }
