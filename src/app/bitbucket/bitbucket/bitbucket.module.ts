import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitbucketRoutingModule } from './bitbucket-routing.module';
import { BitbucketComponent } from './bitbucket.component';


@NgModule({
  declarations: [BitbucketComponent],
  imports: [
    CommonModule,
    BitbucketRoutingModule
  ]
})
export class BitbucketModule { }
