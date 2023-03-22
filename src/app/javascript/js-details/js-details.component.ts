import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { JscriptService } from '../jscript.service';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

@Component({
  selector: 'app-js-details',
  templateUrl: './js-details.component.html',
  styleUrls: ['./js-details.component.scss']
})
export class JsDetailsComponent implements OnInit {
  jsIntro: any;
  code = 'console.log("Hello, world!");';
  highlightedCode = '';

  constructor(private route: ActivatedRoute, private api: JscriptService) { }

  ngOnInit(): void {
    this.highlightedCode = hljs.highlight('javascript', this.code).value;
    console.log(this.route.snapshot.params['id']);
    let routeId = this.route.snapshot.params['id'];
    let detail = this.api.getJsCourse(routeId).subscribe({
      next:(res)=>{
        console.log(res);    
        this.jsIntro = res;
      }
    })
  }
  

}
