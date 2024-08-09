import { NgModule } from '@angular/core';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript/typescript.component';
import { CommonModule } from '@angular/common'; // Import CommonModule


@NgModule({
  declarations: [
    TypescriptComponent
  ],
  imports: [
    TypescriptRoutingModule,
    CommonModule 
  ]
})
export class TypescriptModule { }
