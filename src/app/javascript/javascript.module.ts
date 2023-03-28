import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JavascriptComponent } from './javascript/javascript.component';
import { MatButtonModule } from '@angular/material/button';
import { HighlightOptions } from 'highlight.js';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { JsDetailsComponent } from './js-details/js-details.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    JavascriptComponent,
    JsDetailsComponent  ],
  imports: [
    CommonModule,
    MatTabsModule,
    JavascriptRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [JavascriptComponent]
})
export class JavascriptModule { }
