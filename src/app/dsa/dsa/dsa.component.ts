import { Component, OnInit } from '@angular/core';
import { DsaService } from './dsa.service';

@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.scss']
})
export class DsaComponent implements OnInit {
  dsaData:any;

 
  constructor(private dsaService: DsaService) { }

  ngOnInit(): void {
  }
}
