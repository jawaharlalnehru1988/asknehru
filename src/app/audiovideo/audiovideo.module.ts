import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { AudiovideoRoutingModule } from './audiovideo-routing.module';
import { AudiovideoComponent } from './audiovideo/audiovideo.component';


@NgModule({
  declarations: [
    AudiovideoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AudiovideoRoutingModule
  ]
})
export class AudiovideoModule { }
