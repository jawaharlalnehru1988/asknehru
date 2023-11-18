import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiovideoComponent } from './audiovideo/audiovideo.component';
import { SpotifyComponent } from '../spotify/spotify/spotify/spotify.component';
import { AngularComponent } from '../angular/angular/angular.component';

const routes: Routes = [
  {path: "", component: AudiovideoComponent},
  {path: "spotify", component : SpotifyComponent},
  {path: "angular", component: AngularComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiovideoRoutingModule { }
