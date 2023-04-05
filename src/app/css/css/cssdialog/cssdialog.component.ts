import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CssService } from '../../css.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-cssdialog',
  templateUrl: './cssdialog.component.html',
  styleUrls: ['./cssdialog.component.scss']
})
export class CssdialogComponent implements OnInit {
  cssContent!:FormGroup;
  displayOnly: boolean = false;
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private cssService: CssService, @Inject(MAT_DIALOG_DATA) public incomedata:any) { }

  ngOnInit(): void {
    this.cssContent = this.fb.group({
    
      id:[""],
      title: [""],
      description:[""]
    })
    this.displayOnly = this.incomedata.titleid === "displayonly";
  }
  submitValues(){
this.cssService.postCssValue(this.cssContent.value).subscribe({
  next:(res)=>{
    alert("Content Added Successfully");
  },
  error:()=>{
    alert("Database connectivity issue");
  }
})
  }
  get yourJsonString(): SafeHtml {
    const jsonString = '{"code": "<pre><code class=\'custom-code\'>Some string...</code></pre>"}'; // Replace with your actual JSON string and add the custom CSS class to the <code> element
    const json = JSON.parse(jsonString);
    const codeContent = this.sanitizer.bypassSecurityTrustHtml(json.code); // Use DomSanitizer to bypass security and get the safe HTML
    return codeContent;
  }
}
