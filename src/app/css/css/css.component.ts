import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { CssService } from '../css.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CssdialogComponent } from './cssdialog/cssdialog.component';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit(): void {
   
  }
  
}
