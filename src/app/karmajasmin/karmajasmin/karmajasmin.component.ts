import { Component, OnInit } from '@angular/core';
import { KarmajasminService } from './karmajasmin.service';
@Component({
  selector: 'app-karmajasmin',
  templateUrl: './karmajasmin.component.html',
  styleUrls: ['./karmajasmin.component.scss']
})
export class KarmajasminComponent implements OnInit {

  constructor(private kjservice: KarmajasminService) { }

  ngOnInit(): void {
   
  }
 
}

