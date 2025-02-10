import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CssConcept, CssContent } from './cssConcept';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import Prism from 'prismjs';
import { PrismHighlightDirective } from 'src/core/directives/highlight.directive';
@Component({
  selector: 'app-css-concepts',
  standalone: true,
  templateUrl: './css-concepts.component.html',
  styleUrl: './css-concepts.component.scss',
  imports: [MatMenuModule, MatButtonModule],
})
export class CssConceptsComponent extends CssConcept {
  
  cssMainContent: string[] = this.mainContent[0].list;
  
  cssCode: string = ``;
  inlineCssShape: string = ``;
  
  projectedCSSShape: SafeHtml = ``;
  cssConcepts: string[] = [];
  
  constructor(public sanitizer: DomSanitizer){
    super();
    this.cssCode = this.displaySquareContent[0].cssCode;
    this.projectedCSSShape = this.sanitizer.bypassSecurityTrustHtml(this.displaySquareContent[0].projectedCSSShape);
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

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

}
