import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CssConcept } from './cssConcept';

@Component({
  selector: 'app-css-concepts',
  imports: [],
  templateUrl: './css-concepts.component.html',
  styleUrl: './css-concepts.component.scss'
})
export class CssConceptsComponent extends CssConcept {
  
  cssMainContent: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer){
    super();
    // this.cssMainContent = this.sanitizer.bypassSecurityTrustHtml(this.mainContent[0].content);
  }

  selectSideTopic(title:string){  
    const selected = this.mainContent.find(content => content.short === title);
    // if(selected){
    //   this.cssMainContent = this.sanitizer.bypassSecurityTrustHtml(selected.content);
    // } else {
    //   this.cssMainContent = this.sanitizer.bypassSecurityTrustHtml(this.mainContent[0].content);
    // }
  }


}
