import { NgModule } from '@angular/core';
import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css/css.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CssdialogComponent } from './css/cssdialog/cssdialog.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    CssComponent,
    CssdialogComponent
  ],
  imports: [
    SharedModule,
    CssRoutingModule,
    OverlayModule,
    A11yModule
  ]
})
export class CssModule { }
