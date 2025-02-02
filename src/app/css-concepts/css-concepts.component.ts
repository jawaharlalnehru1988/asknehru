import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CssConcept, CssMainContent } from './cssConcept';

@Component({
  selector: 'app-css-concepts',
  imports: [],
  templateUrl: './css-concepts.component.html',
  styleUrl: './css-concepts.component.scss'
})
export class CssConceptsComponent extends CssConcept {
  
  cssMainContent: string[] = this.mainContent[0].list;
  cssCode: string = `
  // HTML
     <div class="simple-box">This is a simple square.</div>

  // CSS
    .simple-box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      padding: 20px;
      border: 2px solid navy;
    }
  `;

  inlineCssShape: string = `<div style="width: 100px; height: 100px; background-color: lightblue; padding: 20px; border: 2px solid navy;">This is a simple square.</div>`;

  projectedCSSShape: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.inlineCssShape);
  cssConcepts: string[] = [];

  constructor(private sanitizer: DomSanitizer){
    super();
  }

  ngOnInit(): void {
  this.cssConcepts  = this.mainContent.map(content => content.short);

  }

  selectSideTopic(title:string){  
    const selected = this.mainContent.find(content => content.short === title);
    if(selected){
      this.cssMainContent = selected.list;
    } else {
      this.cssMainContent = this.mainContent[0].list;
    }
  }

  selectSubTopic(title:string){
  console.log('title :', title);
    
  }

  

}
