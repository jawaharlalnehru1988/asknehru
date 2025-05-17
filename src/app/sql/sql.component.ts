import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { SqlCommand, SqlTopics } from './sql';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sql',
  imports: [MatIcon],
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.scss'
})
export class SqlComponent extends SqlTopics{

  sideTopics: SqlCommand[] = this.sqlCommandTypes;
  sqlMainContent: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer){
    super();
    this.sqlMainContent = this.sanitizer.bypassSecurityTrustHtml(this.expandableTopics[0].content);
  }

  selectSideTopic(title:string){
    
    const selected = this.expandableTopics.find(content => content.short === title);
    if(selected){
      this.sqlMainContent = this.sanitizer.bypassSecurityTrustHtml(selected.content);
    } else {
      this.sqlMainContent = this.sanitizer.bypassSecurityTrustHtml(this.expandableTopics[0].content);
    }
  }
}
