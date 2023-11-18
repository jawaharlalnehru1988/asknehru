import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { Router } from '@angular/router';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
 

  constructor(private agServie: AngularService, private router: Router) { }

  ngOnInit(): void {
    
    } 
   
}
