import { NgModule } from '@angular/core';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript/typescript.component';



@NgModule({
  declarations: [
    TypescriptComponent
  ],
  imports: [
    TypescriptRoutingModule,
  ]
})
export class TypescriptModule { }
