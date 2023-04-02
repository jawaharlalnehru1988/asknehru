import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';
import {MatCardModule} from '@angular/material/card';
import { HtmlDetailsComponent } from './html/html-details/html-details.component';
import { HtmldialogComponent } from './html/htmldialog/htmldialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HtmlComponent,
    HtmlDetailsComponent,
    HtmldialogComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HtmlModule { }
