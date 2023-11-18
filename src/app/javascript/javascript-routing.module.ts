import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';
import { JscoreComponent } from './jscomponents/jscore/jscore.component';
import { TrickyjsComponent } from './jscomponents/trickyjs/trickyjs.component';
import { VideojsComponent } from './jscomponents/videojs/videojs.component';
import { JsaudioComponent } from './jscomponents/jsaudio/jsaudio.component';

const routes: Routes = [
  {path: "", component: JavascriptComponent},
  {path: "jscore", component: JscoreComponent},
  {path: "trickyjs", component: TrickyjsComponent},
  {path: "videojs", component: VideojsComponent},
  {path: "jsaudio", component: JsaudioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
