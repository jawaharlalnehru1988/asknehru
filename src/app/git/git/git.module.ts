import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitRoutingModule } from './git-routing.module';
import { GitComponent } from './git.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [GitComponent],
  imports: [
    CommonModule,
    GitRoutingModule,
    SharedModule
  ]
})
export class GitModule { }
