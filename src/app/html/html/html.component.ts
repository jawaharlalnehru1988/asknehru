import { Component, OnInit } from '@angular/core';
import { HtmlService } from './html.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { HtmldialogComponent } from './htmldialog/htmldialog.component';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {
  htmlDatas: any;
  topicValue: any;

  constructor(private apiHtml: HtmlService, public dialog: MatDialog) { }

  ngOnInit(): void {
this.apiHtml.getHtmlData().subscribe({
  next:(res)=>{
    this.htmlDatas = res.htmlTopics;
    console.log("this.htmlDatas", this.htmlDatas);
    
  }
});

  }
  openDetail(item:any){
  this.topicValue = item;
  
  const element = document.getElementById('myTag');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  }
  goback(){
    const element = document.getElementById('teen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
