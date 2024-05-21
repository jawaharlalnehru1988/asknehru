import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';
import { HtmlDetailsComponent } from './html/html-details/html-details.component';
import { HtmldialogComponent } from './html/htmldialog/htmldialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HtmlComponent,
    HtmlDetailsComponent,
    HtmldialogComponent
  ],
  imports: [
    HtmlRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HtmlModule { }
