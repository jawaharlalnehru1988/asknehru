import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { DsaRoutingModule } from './dsa-routing.module';
import { DsaComponent } from './dsa/dsa.component';
import { DsabasicsComponent } from './components/dsabasics/dsabasics.component';
import { DsacommonComponent } from './components/dsacommon/dsacommon.component';
import { LeetcodeComponent } from './components/leetcode/leetcode.component';
import { SecurityComponent } from './components/security/security.component';

@NgModule({
  declarations: [
    DsaComponent,
    DsabasicsComponent,
    DsacommonComponent,
    LeetcodeComponent,
    SecurityComponent
  ],
  imports: [
    DsaRoutingModule,
    SharedModule
  ]
})
export class DsaModule { }
