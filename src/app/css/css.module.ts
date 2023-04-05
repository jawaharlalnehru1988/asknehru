import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css/css.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {OverlayModule} from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CssdialogComponent } from './css/cssdialog/cssdialog.component';


@NgModule({
  declarations: [
    CssComponent,
    CssdialogComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatAutocompleteModule,
    OverlayModule,
    A11yModule
  ]
})
export class CssModule { }
