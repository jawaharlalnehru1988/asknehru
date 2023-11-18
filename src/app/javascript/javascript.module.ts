import { NgModule } from '@angular/core';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript/javascript.component';
import { SharedModule } from '../shared/shared/shared.module';
import { JscoreComponent } from './jscomponents/jscore/jscore.component';
import { TrickyjsComponent } from './jscomponents/trickyjs/trickyjs.component';
import { VideojsComponent } from './jscomponents/videojs/videojs.component';
import { JsaudioComponent } from './jscomponents/jsaudio/jsaudio.component';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    JavascriptComponent,
    JscoreComponent,
    TrickyjsComponent,
    VideojsComponent,
    JsaudioComponent  ],
  imports: [
    SharedModule,
    JavascriptRoutingModule
  ],
  exports: [JavascriptComponent]
})
export class JavascriptModule { }
