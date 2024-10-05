import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Prism from 'prismjs';
import { PrismHighlightDirective } from 'src/core/directives/highlight.directive';

@Component({
  selector: 'app-typescript-details',
  standalone: true,
  imports: [PrismHighlightDirective],
  templateUrl: './typescript-details.component.html',
  styleUrl: './typescript-details.component.scss'
})
export class TypescriptDetailsComponent {
  topicId: number = 0;
code = `@NgModule({
  declarations: [
    AppComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})`
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicId = +params.get('id')!; // Get the topic ID from the route
      console.log('this.topicId :', this.topicId);
      // You can now fetch the details of the topic using the topicId
    });
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
     }
}
