import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular/angular.component';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { AgdetailComponent } from './agdetail/agdetail.component';
import {MatTabsModule} from '@angular/material/tabs'; 
@NgModule({
  declarations: [
    AngularComponent,
    AgdetailComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    HttpClientModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [AngularComponent]
})
export class AngularModule { }
