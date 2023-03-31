import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HtmlComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class HtmlModule { }
