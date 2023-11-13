import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyRoutingModule } from './spotify-routing.module';
import { SpotifyComponent } from './spotify/spotify.component';


@NgModule({
  declarations: [
    SpotifyComponent
  ],
  imports: [
    CommonModule,
    SpotifyRoutingModule
  ]
})
export class SpotifyModule { }
