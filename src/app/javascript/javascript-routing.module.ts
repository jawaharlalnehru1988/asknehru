import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';
import { JscoreComponent } from './jscomponents/jscore/jscore.component';
import { TrickyjsComponent } from './jscomponents/trickyjs/trickyjs.component';
import { VideojsComponent } from './jscomponents/videojs/videojs.component';

const routes: Routes = [
  {path: "", component: JavascriptComponent},
  {path: "jscore", component: JscoreComponent},
  {path: "trickyjs", component: TrickyjsComponent},
  {path: "videojs", component: VideojsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
