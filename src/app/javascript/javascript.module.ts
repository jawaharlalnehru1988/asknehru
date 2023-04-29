import { NgModule } from '@angular/core';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript/javascript.component';
import { JsDetailsComponent } from './js-details/js-details.component'; 
import { SharedModule } from '../shared/shared/shared.module';
@NgModule({
  declarations: [
    JavascriptComponent,
    JsDetailsComponent  ],
  imports: [
    SharedModule,
    JavascriptRoutingModule
  ],
  exports: [JavascriptComponent]
})
export class JavascriptModule { }
