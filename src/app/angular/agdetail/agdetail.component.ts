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
  constructor(private route: ActivatedRoute, private api: AngularService, public dialog: MatDialog, private appService: ApiService) { }

  ngOnInit(): void {
    this.highlightedCode = hljs.highlight('typescript', this.code).value;
    console.log(this.route.snapshot.params['id']);
    let routerId = this.route.snapshot.params['id'];
    this.getAngularSub();
    this.getFormsDetails();
  }

  getAngularSub(){
    this.api.getAngular().subscribe({
      next:(res)=>{
        console.log(res);
        this.subObj = res[0];
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }
  getFormsDetails(){
    this.appService.getFormValues().subscribe({
      next:(res)=>{
        console.log(res);
        this.types = res;    
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
        console.log(res);
        alert("forms deleted successfully");
        this.getFormsDetails();
      },
      error:()=>{
        alert('Could not deleted, Check the error');
      }
    })
  }
}
