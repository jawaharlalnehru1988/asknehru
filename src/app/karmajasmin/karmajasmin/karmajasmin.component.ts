import { Component, OnInit } from '@angular/core';
import { KarmajasminService } from './karmajasmin.service';

@Component({
  selector: 'app-karmajasmin',
  templateUrl: './karmajasmin.component.html',
  styleUrls: ['./karmajasmin.component.scss']
})
export class KarmajasminComponent implements OnInit {
ksData:any
  constructor(private kjservice: KarmajasminService) { }

  ngOnInit(): void {
    this.getkjData();
  }
getkjData(){
  this.kjservice.getjasminData().subscribe({
    next:(res)=>{
    console.log('res :', res.jasmine);
    this.ksData = res.jasmine;

    }
  })
}
}
