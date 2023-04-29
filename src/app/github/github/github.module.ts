import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [GithubComponent],
  imports: [
    CommonModule,
    SharedModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
