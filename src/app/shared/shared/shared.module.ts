import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatCommonModule,MatRippleModule} from '@angular/material/core'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatRadioModule} from '@angular/material/radio'; 
 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSliderModule} from '@angular/material/slider'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatTreeModule} from '@angular/material/tree'; 
import { ToolbarComponent } from 'src/app/toolbar/toolbar.component';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ]
})
export class SharedModule { }
