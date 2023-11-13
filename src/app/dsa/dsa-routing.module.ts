import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsaComponent } from './dsa/dsa.component';
import { DsabasicsComponent } from './components/dsabasics/dsabasics.component';
import { DsacommonComponent } from './components/dsacommon/dsacommon.component';
import { LeetcodeComponent } from './components/leetcode/leetcode.component';

const routes: Routes = [
  {path: "", component: DsaComponent},
  {path: "dsabasics", component: DsabasicsComponent},
  {path: "dsacommon", component: DsacommonComponent},
  {path: "leetcode", component: LeetcodeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsaRoutingModule { }
