import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { JscriptService } from '../jscript.service';

@Component({
  selector: 'app-js-details',
  templateUrl: './js-details.component.html',
  styleUrls: ['./js-details.component.scss']
})
export class JsDetailsComponent implements OnInit {
  jsIntro: any;

  constructor(private route: ActivatedRoute, private api: JscriptService) { }

  ngOnInit(): void {
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
