import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Project {
  PName: string;
  routerLink : string;
  PImage: string;
  intro: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isContentLoading: boolean = false;
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
blogArticleData: Project[] = [
  {
    PName: "Practice DSA with Typescript",
    PImage: "assets/image/typscriptdsa.jpg",
    routerLink: "/typescript",
    intro: "Welcome to my DSA Typescript Coding tutorial. Here you can find many coding concepts with insights into them. There are multiple data structures in programming and solving various problems by traversing throught the data structures are really challenging"
  },
  {
    PName: "Audios/Videos",
    PImage: "assets/image/podcastbanner.png",
    routerLink: "/audiovideo",
    intro:"Welcome to my podcast website. Here you can find audio tutorials I have recorded for you by which you can learn programming, that are really inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
]
staticWebsites: Project[] = [
  {
    PName : "Gym",
    PImage :  "assets/image/gym.png",
    routerLink: "/gymwebpage",
    intro:"Welcome to my gym website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Yoga",
    PImage :  "assets/image/yoga.png",
    routerLink: "/yoga",
    intro:"Welcome to my yoga website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Shop",
    PImage :  "assets/image/shop.png",
    routerLink: "/productshop",
    intro:"Welcome to my Shopping website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Food",
    PImage :  "assets/image/food.png",
    routerLink: "/food",
    intro:"Welcome to my food website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Tech Expert",
    PImage :  "assets/image/tecxprt.png",
    routerLink: "/techexpert",
    intro:"Welcome to my Tech Expert website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Fashion",
    PImage :  "assets/image/fashion.png",
    routerLink: "/fashion",
    intro:"Welcome to my fashion Product website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
 
];
projectData: Project[] =[
  {
    PName : "Portfolio",
    PImage :  "assets/image/portfolio.png",
    routerLink: "/profile",
    intro: "Welcome to my portfolio website. I am Jawaharlal, a web developer who loves Angular. Here you can see my webpage I have created using TypeScript, HTML, CSS, and other technologies. I hope you enjoy my work and contact me for any inquiries."
  },
  // {
  //   PName: "Articles/Essays",
  //   PImage: "assets/image/article.png",
  //   routerLink: "/articles",
  //   intro: "Explore articles covering Data Structures, Algorithms, prominent Angular features, Unit Testing, Java Spring Boot REST APIs, and various other technology stacks. Dive into these topics, enjoy the read, and feel free to share your thoughts."
  // }
];

techStacks = {
  rebit: [
    {imgsrc: "assets/image/angular.png", techName: "Angular 16+" },
    {imgsrc: "assets/image/jasmine.png", techName: "Jasmine" },
    {imgsrc: "assets/image/karma.png", techName: "Karma" },
    {imgsrc: "assets/image/oracledb.png", techName: "Oracle DB" },
    {imgsrc: "assets/image/sql.png", techName: "SQL" },
    {imgsrc: "assets/image/agile.png", techName: "Agile Workflow" },
  ]
}
projects = {
  rebit: [
    {pjtName: "MDMS", pjtDetails: "This Application is meant to maintain master datas which will be available for all other applications ReBIT. Here I developed new modules to manage Resilience alerts and maintained other modules for feature enhancements"},
    {pjtName: "EFD-MIS Report", pjtDetails: "This application generates MIS - reports based on data given in the forms. I have helped in Developing complex forms with form arrays of reactive form modules"},
    {pjtName: "NGCB-GPX", pjtDetails: "In this application I have integrated APIs and developed CBDT flow with complex functionalities."},
  ]
}
webTechs: string[] =["Gym", "Yoga", "Shop", "Food", "Tech Expert", "Fashion"];

  constructor(private api: ApiService, private fb: FormBuilder, private el: ElementRef, private renderer: Renderer2) {
   }

  experience: {
    years: number;
    days: number;
    hours: number;
    months: number;
    minutes: number;
  } = {
    years: 0,
    months:0,
    days: 0,
    hours: 0,
    minutes: 0,
  };

  currentDate: Date = new Date();
  startDate: Date = new Date('2021-09-10T12:30:00'); 
  ngOnInit() {
    
    
    this.api.setLoginData(true);
    this.getDataTime();
    
  }

  getDataTime(){
    const diffMilliseconds = this.currentDate.getTime() - this.startDate.getTime();
    const diffSeconds = diffMilliseconds / 1000;
    const diffMinutes = diffSeconds / 60;
    const diffHours = diffMinutes / 60;
    const diffDays = diffHours / 24;

    this.experience.years = Math.floor(diffDays / 365);
    this.experience.days = Math.floor(diffDays % 365);
    this.experience.hours = Math.floor(diffHours % 24);
    this.experience.minutes = Math.floor(diffMinutes % 60);
  }


  calculateDateDifference(dateString:string) {
    const inputDate:any = new Date(dateString);
    const currentDate:any = new Date();
    const timeDifference = currentDate - inputDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const result =  `${years} years, ${months} months, ${days % 30} days`;
    return result;
  }

  
}
