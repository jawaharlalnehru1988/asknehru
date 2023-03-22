import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularService } from '../angular.service';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);
@Component({
  selector: 'app-agdetail',
  templateUrl: './agdetail.component.html',
  styleUrls: ['./agdetail.component.scss']
})
export class AgdetailComponent implements OnInit {
  title: any;
  types: any;
  highlightedCode = '';
  code = '';
  constructor(private route: ActivatedRoute, private api: AngularService) { }

  ngOnInit(): void {
    this.highlightedCode = hljs.highlight('typescript', this.code).value;
    console.log(this.route.snapshot.params['id']);
    let routerId = this.route.snapshot.params['id'];
this.api.getAngular(routerId).subscribe({
  next:(res)=>{
    console.log(res);
    this.title = res;
    this.types = res.subtopic;    
  }
})
  }

}
