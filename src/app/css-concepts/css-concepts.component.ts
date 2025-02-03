import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CssConcept, CssContent } from './cssConcept';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-css-concepts',
  standalone: true,
  templateUrl: './css-concepts.component.html',
  styleUrl: './css-concepts.component.scss',
  imports: [MatMenuModule, MatButtonModule],
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

  constructor(public sanitizer: DomSanitizer){
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

  selectSubTopic(contentObj:CssContent){
  this.projectedCSSShape = this.sanitizer.bypassSecurityTrustHtml(contentObj.projectedCSSShape);
  this.cssCode = contentObj.cssCode;
  }

  

}
