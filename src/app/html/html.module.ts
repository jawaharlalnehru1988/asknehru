import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';


@NgModule({
  declarations: [
    HtmlComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
