import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export interface Project {
  PName: string;
  routerLink : string;
  PImage: string;
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

projectData: Project[] =[
  {
    PName : "Portfolio",
    PImage :  "assets/image/portfolio.png",
    routerLink: "/profile"
  },
  {
    PName: "Javascript",
    PImage: "https://64.media.tumblr.com/064ec507f6eaaa47474fb2b8c785a258/tumblr_inline_pg37yqq3Pq1sliaqe_1280.png",
    routerLink: "/javascript"
  },
  {
    PName: "Podcast for Softskill",
    PImage: "assets/image/spotifymylogo.png",
    routerLink: "/dsa"
  },
  {
    PName: "E-commerce",
    PImage : "https://img.freepik.com/free-psd/e-commerce-discounts-landing-page-template_23-2149965971.jpg",
    routerLink : "/ecommerce"
  },
  // {
  //   PName: "Task Management",
  //   PImage: "https://cdn.dribbble.com/users/7782319/screenshots/16958653/media/880d412eaaddbb8103c699410d34996c.png?resize=400x300&vertical=center",
  //   routerLink: "/taskManagement"
  // },
  // {
  //   PName: "To do List",
  //   PImage: "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-14/d2480830-3df5-11eb-9513-43e7f40c9d54.jpg",
  //   routerLink: "/toDoList"
  // },
  // {
  //   PName: "Whether APP",
  //   PImage: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
  //   routerLink: "/weatherapp"
  // },
 

]
  constructor(private api: ApiService) { }

  ngOnInit() {
    
    this.api.setLoginData(true);
  }

}
