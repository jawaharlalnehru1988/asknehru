import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HtmlService } from '../html.service';

@Component({
  selector: 'app-htmldialog',
  templateUrl: './htmldialog.component.html',
  styleUrls: ['./htmldialog.component.scss']
})
export class HtmldialogComponent implements OnInit {
  htmlContent!: FormGroup
  constructor(private fb: FormBuilder, private api:HtmlService, @Inject(MAT_DIALOG_DATA) public incomeData: any, private dialogRef: MatDialogRef<HtmldialogComponent>) { }

  ngOnInit(): void {
    this.htmlContent = this.fb.group({
      id:[""],
      title:[""],
      description:[""]
    })
    // console.log("this.incomeData", this.incomeData);
    if (this.incomeData) {
      this.htmlContent.controls['id'].setValue(this.incomeData.id);
      this.htmlContent.controls['title'].setValue(this.incomeData.title);
      this.htmlContent.controls['description'].setValue(this.incomeData.description);
    }
  }
  submitValue(){
    if (!this.incomeData) {
      this.api.postData(this.htmlContent.value).subscribe({
        next:(res)=>{
          alert("Your Data added Successfully");
          this.htmlContent.reset();
      this.dialogRef.close();
        }
      });
    } else {
this.updateDate(this.htmlContent.value, this.incomeData.id)
    }
  }
  updateDate(data:any, id:number){
  this.api.updateData(data, id).subscribe({
    next:(res)=>{
      alert("your data updated successfully");
      this.htmlContent.reset();
      this.dialogRef.close();
    },
    error:()=>{
      alert("Database connectivity issue")
    }
  })
  }
}
