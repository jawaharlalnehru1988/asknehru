import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JscriptService } from '../jscript.service';
import { MatDialog } from '@angular/material/dialog';
import { AddcontentComponent } from 'src/app/addcontent/addcontent.component';
@Component({
  selector: 'app-js-details',
  templateUrl: './js-details.component.html',
  styleUrls: ['./js-details.component.scss']
})
export class JsDetailsComponent implements OnInit {
  
  highlightedCode = '';
  routerPath!: string;
  jsTopic: any;
  titleName: any;

  constructor(private route: ActivatedRoute, private api: JscriptService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.url[0].path)
    this.routerPath = this.route.snapshot.url[0].path;
    this.getJavaScriptCourse();
  }
  
  getJavaScriptCourse(){
    this.api.getJsCourse().subscribe({
      next:(res)=>{ 
        console.log(res.javascript);
        this.jsTopic = res.javascript;
      }
    });

  }
  addContent(addDetails:any){
    addDetails["clickedBtn"]= "addBtn";
    addDetails['routerPath'] = this.routerPath;
    
  this.dialog.open(AddcontentComponent,{
  width: "70vw",
  data: addDetails
  });
  }

  deleteBtn(routerPath:any){
  routerPath["clickedBtn"] = "deleteBtn";
  }

  openDialog(edit:any){
    edit['routerPath'] = this.routerPath;
    edit['clickedBtn'] = "EditBtn";
    this.dialog.open(AddcontentComponent,{
      width: "70vw",
      data: edit
    })
  }

  formatText(inputText:string) {
    return inputText.replace(/\n/g, "<br>");
  }
}
