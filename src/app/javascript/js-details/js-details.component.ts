import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JscriptService } from '../jscript.service';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { MatDialog } from '@angular/material/dialog';
import { AddcontentComponent } from 'src/app/addcontent/addcontent.component';

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
  routerPath!: string;

  constructor(private route: ActivatedRoute, private api: JscriptService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.highlightedCode = hljs.highlight('javascript', this.code).value;
    console.log(this.route.snapshot.url[0].path)
    this.routerPath = this.route.snapshot.url[0].path;
    let routeId = this.route.snapshot.params['id'];
    let detail = this.api.getJsCourse().subscribe({
      next:(res)=>{ 
        console.log(res.javascript[0]);
        
        this.jsIntro = res.javascript[0];
      }
    })
  }
  
  openDialog(edit:any){
this.dialog.open(AddcontentComponent,{
  width: "70vw",
  data: edit
})
  }
}
