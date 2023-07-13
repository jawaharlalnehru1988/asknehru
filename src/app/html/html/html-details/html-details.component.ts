import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HtmlService } from '../html.service';
import { HtmldialogComponent } from '../htmldialog/htmldialog.component';

@Component({
  selector: 'app-html-details',
  templateUrl: './html-details.component.html',
  styleUrls: ['./html-details.component.scss']
})
export class HtmlDetailsComponent implements OnInit {
  @Input() topicValue:any;
  htmlSubject: any;
  topicTitle: any;
  topicDescription: any;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private htmlService: HtmlService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
    if (this.topicValue && this.topicValue !== undefined) {
      this.getResponseData(); 
    }
  }
  getResponseData(){
    this.htmlService.getHtmlData().subscribe({
      next:(res)=>{
          this.htmlSubject = res.topicDetails.find((obj:any) => obj.title == this.topicValue);
            this.topicTitle = this.htmlSubject.title;
          this.topicDescription = this.htmlSubject.description; 
      }
    })
  }
getFromLocal(){
  this.htmlService.getDataFromLocalhost().subscribe({
    next:(res)=>{
      console.log(res.find((obj:any) => obj.title == this.topicValue));
      this.htmlSubject = res.find((obj:any) => obj.title == this.topicValue);
      this.topicTitle = this.htmlSubject.title;
      this.topicDescription = this.htmlSubject.description; 
    },
    error:()=>{
      alert("now localhost connection is lost. So connected from github host");
      // this.getResponseData(); 
    }
  })
}
  addContent(){
  this.dialog.open(HtmldialogComponent,{
  width: "54vw"
  });
  }

  editContent(){
// console.log(topic);
this.dialog.open(HtmldialogComponent,{
  width: "54vw",
  data: this.htmlSubject
})

  }
  formatText(inputText:string) {
    return inputText.replace(/\n/g, "<br>");
  }
}
