import { NgModule } from '@angular/core';
import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';
import { HtmlDetailsComponent } from './html/html-details/html-details.component';
import { HtmldialogComponent } from './html/htmldialog/htmldialog.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    HtmlComponent,
    HtmlDetailsComponent,
    HtmldialogComponent
  ],
  imports: [
    HtmlRoutingModule,
    SharedModule
  ]
})
export class HtmlModule { }
