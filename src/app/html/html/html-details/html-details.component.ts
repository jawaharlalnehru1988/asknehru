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
    console.log(this.topicValue);
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
}
