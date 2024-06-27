import { Component, OnInit } from '@angular/core';
export interface Tile {
  id: number;
  text: string;
}

export interface Person {
  name: string;
  age: number;
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
    {id: 10, text: 'Skills and Techstacks'},
    {id: 11, text: 'Certifications'},
    {id: 12, text: 'Github Repo & Output'},
    {id: 13, text: 'Education'},
    {id: 14, text: 'Resume Download'},
  ];
  technicalSkills = [
    {
      category: 'Front End',
      skills: [
        'FrameWork: Angular (Can able to work on Versions From 8 to 17th)',
        'Layout and UI Frameworks: Angular Material, Primeng, Bootstrap 5 and CDK',
        'Programming Languages: Typescript, JavaScript',
        'Unit Testing: Jasmine, Jest and Karma',
        'Designing Languages: HTML5, CSS3, SCSS preprocessor, Flex Layout, Ag Grid',
        'Asynchronous Libraries: RxJS, NGRx'
      ]
    },
    {
      category: 'Back End',
      skills: [
        'Framework: Springboot',
        'DataBases: Oracle DB, MySQL',
        'Programming Languages: Core Java with DSA, SQL',
        'API testing Tools: Postman and swagger'
      ]
    },
    {
      category: 'Additional Skills and Experience',
      skills: [
        'Sound Experience on Git Commands with Cloud repositories such as GitLab, Bitbucket and Github',
        'Coding Best Practices: Code Scanning with SonarQube and Coverity Bugfix Standards',
        'Debugging Skills and Error Handling Skills',
        'Responsive Web Design for various Devices',
        'Cross Browser Testing & Debugging',
        'Ability to work on Agile methodology Environment and used PM tools like Jira and Nimble'
      ]
    }
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
    const pdfFilePath = 'assets/image/Jawaharlalnehru_Resume.pdf';
  
    // Create an anchor element
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = 'Jawaharlal_Resume.pdf';
  
    // Trigger a click event on the anchor element
    const event = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
    a.dispatchEvent(event);
  }
 
  calculateAverageAge(people: Person[]): number {
    if (people.length === 0) {
      return 0; // Return 0 for an empty array (or you can throw an error)
    }
  
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
  }

}
