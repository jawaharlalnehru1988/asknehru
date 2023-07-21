import { NgModule } from '@angular/core';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material/material.component';
import { SharedModule } from '../shared/shared/shared.module';
import { AutocompleteComponent } from './material/autocomplete/autocomplete.component';
@NgModule({
  declarations: [
    MaterialComponent,
    AutocompleteComponent
  ],
  imports: [
    MaterialRoutingModule,
    SharedModule
  ]
})
export class MaterialModule { }
