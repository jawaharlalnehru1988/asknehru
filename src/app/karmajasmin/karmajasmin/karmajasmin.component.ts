import { Component, OnInit } from '@angular/core';
import { KarmajasminService } from './karmajasmin.service';
@Component({
  selector: 'app-karmajasmin',
  templateUrl: './karmajasmin.component.html',
  styleUrls: ['./karmajasmin.component.scss']
})
export class KarmajasminComponent implements OnInit {
  result: number = 0;

  constructor(private kjservice: KarmajasminService) { }

  ngOnInit(): void {
   
  }
  performAddition() {
    const num1 = 5;
    const num2 = 3;
    this.result = num1 + num2;
  }
}

