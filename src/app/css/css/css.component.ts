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
  cssDatas: any;
  isOpen = false;
  allSubtopics: string[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  itemValue: any;
  content: any;
  constructor(private cssService: CssService, private dialog: MatDialog) { }
  ngAfterViewInit() {
  }
  ngOnInit(): void {
    // this.getDataCss();
    this.getCssDataGithub();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.getContentCss();
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSubtopics.filter(option => option.toLowerCase().includes(filterValue));
  }
  getDataCss() {

    this.cssService.getCssData().subscribe({
      next: (res) => {
        this.cssDatas = res;
        this.allSubtopics = res.flatMap((topic: any) => topic.subtopics)
      }
    }
    )
  }
  getContentCss(){
    this.cssService.getCssContent().subscribe({
      next:(res)=>{
        console.log(res);
         this.content = res
      },
      error:()=>{
        alert("Database Connectivity issue")
      }
    })
  }
  getCssDataGithub() {
    this.cssService.getCssFromGitHub().subscribe({
      next: (res) => {
        this.cssDatas = res.cssTopics;
        this.allSubtopics = res.cssTopics.flatMap((topic: any) => topic.subtopics);
      }
    })
  }
  openDetail(item: any) {
    console.log('item :', item);

  }
  openOverlay(item: string){
  const descriptionValue = this.content.find((value:any)=> value.title === item);
  descriptionValue["titleid"] = 'displayonly';
    this.itemValue = descriptionValue.description;
    this.itemValue;
    this.isOpen = !this.isOpen;
    this.dialog.open(CssdialogComponent,{
      width: "750px",
      data: descriptionValue
    })
  }

  CloseBtn(){
    this.isOpen = false;
  }
  addContent(){
this.dialog.open(CssdialogComponent,{
  width: "80vw"
})
  }
}
