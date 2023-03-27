import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.scss']
})
export class AddcontentComponent implements OnInit {
  contentForm! : FormGroup;
  actionBtn: string = "";
  constructor(private fb: FormBuilder, 
     @Inject(MAT_DIALOG_DATA) public editDate: any,
    private api: ApiService, private dialogRef: MatDialogRef<AddcontentComponent>) {
    
   }

  ngOnInit(): void {
    this.actionBtn = "Submit"
    this.contentForm = this.fb.group({
      description : [''],
      title: [''],
      id: [''],
      exampleCode:['']
    });
    if (this.editDate !== null) {
      this.contentForm.get('description')?.setValue(this.editDate.description);
      this.contentForm.get('title')?.setValue(this.editDate.title);
      this.contentForm.get('id')?.setValue(this.editDate.id);
      this.contentForm.get('exampleCode')?.setValue(this.editDate.exampleCode);
      this.actionBtn = "Update";
    }
    
  }
  submitValue(){
    if (!this.editDate) {
      this.api.postFormValues(this.contentForm.value).subscribe({
        next:(res)=>{
          alert('content added successfully');
          this.contentForm.reset();
          this.dialogRef.close();
          console.log(res);
        },
        error: (err)=>{
          alert('check whether the relevent server connected or not')
        }
      });
    } else {
this.updateProduct();
    }
  }

  updateProduct(){
    this.api.updateFormData(this.contentForm.value, this.editDate.id).subscribe({
      next:(res)=>{
        console.log(res);
        alert('Forms Updated Successfully');
        this.contentForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert('error while updating the record')
      }
    })
  }
}
