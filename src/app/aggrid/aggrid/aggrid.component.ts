import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular/public-api';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AggridService } from '../aggrid.service';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.scss']
})
export class AggridComponent implements OnInit {
   // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];
 // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

   // For accessing the Grid's API
//  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, private agService: AggridService) { }
 // Example load data from server
 onGridReady(params: GridReadyEvent) {
  this.rowData$ = this.http
    .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
}
  ngOnInit(): void {
    this.agService.getData().subscribe({
      next:(res)=>{
      console.log('res :', res);
        
      }
    })
  }
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
   // Example using Grid's API
 clearSelection(): void {
  // this.agGrid.api.deselectAll();
}
}
