import { Component, OnInit } from '@angular/core';
import { CssService } from '../css.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  cssDatas: any;
  allSubtopics: string[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  constructor(private cssService: CssService) { }

  ngOnInit(): void {
// this.getDataCss();
this.getCssDataGithub();
this.filteredOptions = this.myControl.valueChanges.pipe(
  startWith(''),
  map(value => this._filter(value || '')),
);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSubtopics.filter(option => option.toLowerCase().includes(filterValue));
  }
getDataCss(){
  
  this.cssService.getCssData().subscribe({
next:(res)=>{
  this.cssDatas = res;
  console.log('this.cssDatas :', this.cssDatas);
 this.allSubtopics =  res.flatMap((topic:any) => topic.subtopics)
 console.log('allSubtopics :', this.allSubtopics);
// console.log('res :', res);  

}
  }
  )
}
getCssDataGithub(){
  this.cssService.getCssFromGitHub().subscribe({
    next:(res)=>{
    this.cssDatas =  res.cssTopics;
    this.allSubtopics =  res.cssTopics.flatMap((topic:any) => topic.subtopics);
    }
  })
}
openDetail(item:any){
console.log('item :', item);

}
}
