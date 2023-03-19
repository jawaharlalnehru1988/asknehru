import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript/typescript.component';


@NgModule({
  declarations: [
    TypescriptComponent
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule
  ]
})
export class TypescriptModule { }
