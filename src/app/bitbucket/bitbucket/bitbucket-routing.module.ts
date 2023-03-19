import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitbucketComponent } from './bitbucket.component';

const routes: Routes = [
  {path: '', component: BitbucketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitbucketRoutingModule { }
