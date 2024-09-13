import {  Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import { Router } from '@angular/router';

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
