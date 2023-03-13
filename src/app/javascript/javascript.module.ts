import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JavascriptComponent } from './javascript/javascript.component';
import { MatButtonModule } from '@angular/material/button';
import { HighlightOptions } from 'highlight.js';
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  declarations: [
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [JavascriptComponent]
})
export class JavascriptModule { }
