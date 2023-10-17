import { Component, OnInit } from '@angular/core';
export interface Tile {
  id: number;
  text: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  tiles: Tile[] = [
    {id: 1, text: 'About'},
    {id: 2, text: 'Experience'},
    {id: 3, text: 'Skills'},
    {id: 4, text: 'Education'},
    {id: 5, text: 'Certifications'},
    {id: 5, text: 'Interests'},
    {id: 6, text: 'Github Repositories'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
