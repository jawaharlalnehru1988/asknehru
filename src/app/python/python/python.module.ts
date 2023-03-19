import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PythonRoutingModule } from './python-routing.module';
import { PythonComponent } from './python.component';


@NgModule({
  declarations: [PythonComponent],
  imports: [
    CommonModule,
    PythonRoutingModule
  ]
})
export class PythonModule { }
