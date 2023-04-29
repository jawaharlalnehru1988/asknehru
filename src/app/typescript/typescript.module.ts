import { NgModule } from '@angular/core';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript/typescript.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    TypescriptComponent
  ],
  imports: [
    TypescriptRoutingModule,
    SharedModule
  ]
})
export class TypescriptModule { }
