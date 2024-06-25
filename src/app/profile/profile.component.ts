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
    {id: 2, text: 'Contact'},
    {id: 3, text: 'Experience - Current'},
    {id: 4, text: 'Experience - 2022-23'},
    {id: 5, text: 'Experience - 2022'},
    {id: 6, text: 'Experience - 2021-22'},
    {id: 7, text: 'Experience - 2018-21'},
    {id: 8, text: 'Experience - 2014-18'},
    {id: 9, text: 'Experience - 2011-14'},
    {id: 10, text: 'Skills'},
    {id: 11, text: 'Certifications'},
    {id: 12, text: 'Github Repo & Output'},
    {id: 13, text: 'Education'},
    {id: 14, text: 'Resume Download'},
  ];

  socialMedia = [{
    imageLink: "1aYv_7mLgreOn_Ua6lFVRGxK5hPRJj-FM",
    mediaLink: "https://github.com/jawaharlalnehru1988",
    mediaName: "GitHub"
  },
  {
    imageLink: "1YDJ6WkVJwHMU7TCitsdIagXzbPYvJ0c0",
    mediaLink: "https://www.linkedin.com/in/jawaharlal-nehru-elumalai-96a64a216",
    mediaName: "LinkedIn"
  },
  {
    imageLink: "1OCMRBlx6X_FwUw2iHAC9bRjvwdfp2Uko",
    mediaLink: "+91 6382043976",
    mediaName: "Whatsapp"
  },
  {
    imageLink: "1M5IaI5kh-Akzm16ZeMzLV7LFdigB1R4w",
    mediaLink: "https://twitter.com/Jawahar58240946",
    mediaName: "Twitter"
  },
  {
    imageLink: "12qeABCTwCFg48Jm1FLuC_d6NzqIi_CTA",
    mediaLink: "+91 63820 43976",
    mediaName: "+91 63820 43976"
  },
];

certificatesImages: { name: string, caption: string }[]  = [ 
{name: "assets/image/AIworkshop.png", caption: 'AI Workshop'},
{name: "assets/image/angular.jpg", caption: 'Angular Complete course'},
{name: "assets/image/angularSecurity.jpg", caption: 'Angular Security'},
{name: "assets/image/dotNetSql.jpg", caption: 'dot net and Sql'},
{name: "assets/image/jscertificate.jpg", caption: 'Complete javascript'},
{name: "assets/image/unitTestcase.jpg", caption: 'Unit Test Case'},
]
  condition!: number;
  constructor() { }

  ngOnInit(): void {
  }
  profileTitle(titles:number){
  this.condition = titles;
  }
  downloadPdf() {
    // Define the path to your PDF file in the assets folder
    const pdfFilePath = 'assets/image/Jawaharlalnehru_resumePdf.pdf';
  
    // Create an anchor element
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = 'Jawaharlal_Resume.pdf';
  
    // Trigger a click event on the anchor element
    const event = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
    a.dispatchEvent(event);
  }
  downloadDoc(){
    const docFilePath = 'assets/image/Jawaharlalnehru_resume.docx';

    const a = document.createElement('a');
    a.href = docFilePath;
    a.download = 'Jawaharlal_Resume.docx';

    const event = new MouseEvent('click', {bubbles: true, cancelable: true, view: window});
    a.dispatchEvent(event);
  }


}
