import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular/public-api';
import { CellClickedEvent, ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Observable, map } from 'rxjs';
import { AggridService } from '../aggrid.service';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.scss']
})
export class AggridComponent implements OnInit {
  
   // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make', checkboxSelection: true},
    { field: 'model'},
    { field: 'price' },
    {field: 'city'}
  ];
 // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

   // For accessing the Grid's API
 @ViewChild('agGrid') agGrid!: AgGridAngular;
  rowDatas!: any[];
  public modifiedRowDatas$!: Observable<any[]>;
  public gridOptions: GridOptions = {
    rowData: this.rowDatas,
    defaultColDef: this.defaultColDef,
    pagination: true,
    rowSelection:'multiple',
    columnDefs: this.columnDefs,
    headerHeight: 36,
    onRowClicked: event => console.log('A row was clicked'),
  }
  constructor(private http: HttpClient, private agService: AggridService) { }
 // Example load data from server
 ngOnInit(): void {
  
  }
  onGridReady(params: GridReadyEvent) {
   this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json').subscribe(response =>{
    this.rowDatas = response;
    this.rowDatas.forEach((data, index) => {
      data.city =  index +1; });
   })
 }
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
   // Example using Grid's API
 clearSelection(): void {
  this.agGrid.api.deselectAll();
}

rowSelected(value:any){
console.log('value :', value);

}
}
