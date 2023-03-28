import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularService } from '../angular.service';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddcontentComponent } from 'src/app/addcontent/addcontent.component';
import { ApiService } from 'src/app/api.service';


hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);
@Component({
  selector: 'app-agdetail',
  templateUrl: './agdetail.component.html',
  styleUrls: ['./agdetail.component.scss']
})
export class AgdetailComponent implements OnInit {
  subObj: any;
  types: any;
  highlightedCode = '';
  code = '';
  formattedText: any;
  highlightedStr: any;
  constructor(private route: ActivatedRoute, private api: AngularService, public dialog: MatDialog, private appService: ApiService) { }

  ngOnInit(): void {
    this.highlightedCode = hljs.highlight('typescript', this.code).value;
    let routerId = this.route.snapshot.params['id'];
    this.getAngularSub();
    this.getFormsDetails();
    const originalStr = "My name is Ram ubstring. Finally, it constructs a new string by concatenating the original string sliced before and after the substring  Kumar and I live in Bangalore";
this.highlightedStr = this.highlightSubstring(originalStr, "Ram", "Kumar", "yellow");
  }

  getAngularSub(){
    this.api.getAngular().subscribe({
      next:(res)=>{
        this.subObj = res[0];
      },
      error: (err)=>{
        // console.log(err);
        alert("some error occured");
      }
    });
  }
  getFormsDetails(){
    this.appService.getFormValues().subscribe({
      next:(res)=>{
        this.types = res;    
        // console.log(this.types[3].description);
        
        // this.formattedText = this.highlightCodeWithBackgroundColor(this.types[3].description, "yellow");
      },
      error: (res)=>{
        alert("check whether the proper path is given or not");
        
      }
    })
  }
  topicClicked(type:any){
    console.log(type);
    this.openDialog(type);
  }
  openDialog(type:any){
    this.dialog.open(AddcontentComponent, {
      width: "780px",
      data: type
    }).afterClosed().subscribe(res=>{
      this.getFormsDetails();
    })
  }
  deleteDate(type:any){
    this.appService.deleteFormData(type.id).subscribe({
      next:(res)=>{
        alert("forms deleted successfully");
        this.getFormsDetails();
      },
      error:()=>{
        alert('Could not deleted, Check the error');
      }
    })
  }
  highlightSubstring(str:string, startStr:string, endStr:string, bgColor:any) {
    const start = str.toLowerCase().indexOf(startStr.toLowerCase()) + startStr.length;
    const end = str.toLowerCase().indexOf(endStr.toLowerCase());
    if (start === -1 || end === -1) {
      // Start or end substring not found, return original string
      return str;
    }
    return `${str.slice(0, start)}<span style="background-color:${bgColor}">${str.slice(start, end)}</span>${str.slice(end)}`;
  }
  
  
}
