import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JscriptService } from '../javascript/jscript.service';

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.scss']
})
export class AddcontentComponent implements OnInit {
  contentForm! : FormGroup;
  actionBtn: string = "";
  constructor(private fb: FormBuilder, 
     @Inject(MAT_DIALOG_DATA) public editData: any,
     private jsService: JscriptService,
    private api: ApiService, private dialogRef: MatDialogRef<AddcontentComponent>) {
    
   }

  ngOnInit(): void {
    this.actionBtn = "Submit";
    console.log("incomeData",this.editData);
    
    this.contentForm = this.fb.group({
      description : [''],
      title: [''],
      id: [''],
      exampleCode:['']
    });
    if (this.editData !== null) {
      this.contentForm.get('description')?.setValue(this.editData.description);
      this.contentForm.get('title')?.setValue(this.editData.title);
      this.contentForm.get('id')?.setValue(this.editData.id);
      this.contentForm.get('exampleCode')?.setValue(this.editData.exampleCode);
      this.actionBtn = "Update";
    }
    
  }
  submitValue(income:any){
    switch (income.routerPath) {
      case "js-details":
        this.jsService.postJsTopic(this.contentForm.value).subscribe({
          next:(res)=>{
            alert('successfully posted inthe javascript database');
          },
          error:()=>{
            alert("not connected properly")
          }
        });
        break;
    
      default:
        console.log("path does not match");
        
        break;
    }
    
//     if (!this.editData) {
//       this.api.postFormValues(this.contentForm.value).subscribe({
//         next:(res)=>{
//           alert('content added successfully');
//           this.contentForm.reset();
//           this.dialogRef.close();
//         },
//         error: (err)=>{
//           alert('check whether the relevent server connected or not')
//         }
//       });
//     } else {
// this.updateProduct();
//     }
  }

  updateProduct(){
    this.api.updateFormData(this.contentForm.value, this.editData.id).subscribe({
      next:(res)=>{
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
