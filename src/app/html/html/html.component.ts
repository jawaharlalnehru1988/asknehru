import { Component, OnInit } from '@angular/core';
import { HtmlService } from './html.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {
  htmlDatas: any;

  constructor(private apiHtml: HtmlService) { }

  ngOnInit(): void {
this.apiHtml.getHtmlData().subscribe({
  next:(res)=>{
    console.log(res.htmlTopics);
    this.htmlDatas = res.htmlTopics
  }
})
  }

}
