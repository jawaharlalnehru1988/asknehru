import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  expla:string = `<mat-grid-list cols="4" rowHeight="100px">\n <mat-grid-tile *ngFor="let tile of tiles"\n [colspan]="tile.cols"\n [rowspan]="tile.rows"\n [style.background]="tile.color">\n {{tile.text}}\n </mat-grid-tile>\n</mat-grid-list>`
  tsSyntax: string = `export class GridListDynamicExample {\n tiles: Tile[] = [\n {text: 'One', cols: 3, rows: 1, color: 'lightblue'},\n {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},\n {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},\n {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},\n ];\n}`
  firstExample: string = `<mat-grid-list cols="2" rowHeight="2:1">\n <mat-grid-tile>1</mat-grid-tile>\n <mat-grid-tile>2</mat-grid-tile>\n <mat-grid-tile>3</mat-grid-tile>\n <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>`;
firstHtml: string = `mat-grid-tile {\n background: lightblue;\n}`
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
