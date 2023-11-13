import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { DsaRoutingModule } from './dsa-routing.module';
import { DsaComponent } from './dsa/dsa.component';
import { DsabasicsComponent } from './components/dsabasics/dsabasics.component';
import { DsacommonComponent } from './components/dsacommon/dsacommon.component';
import { LeetcodeComponent } from './components/leetcode/leetcode.component';

@NgModule({
  declarations: [
    DsaComponent,
    DsabasicsComponent,
    DsacommonComponent,
    LeetcodeComponent
  ],
  imports: [
    DsaRoutingModule,
    SharedModule
  ]
})
export class DsaModule { }
