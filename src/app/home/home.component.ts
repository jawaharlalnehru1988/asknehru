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
blogArticleData: Project[] = [
  {
    PName: "Javascript",
    PImage: "assets/image/javascript.png",
    routerLink: "/javascript"
  },
  {
    PName: "Podcast for Softskill",
    PImage: "assets/image/spotifymylogo.png",
    routerLink: "/dsa"
  },
]
staticWebData: Project[] = [
  {
    PName : "Gym website",
    PImage :  "assets/image/gym.png",
    routerLink: "/gymwebpage"
  },
  {
    PName : "Yoga website",
    PImage :  "assets/image/yoga.png",
    routerLink: "/yoga"
  },
  {
    PName : "Shop Products",
    PImage :  "assets/image/shop.png",
    routerLink: "/productshop"
  },
  {
    PName : "Food website",
    PImage :  "assets/image/food.png",
    routerLink: "/food"
  },
  {
    PName : "Tech Expert",
    PImage :  "assets/image/tecxprt.png",
    routerLink: "/techexpert"
  },
  {
    PName : "Fashion website",
    PImage :  "assets/image/fashion.png",
    routerLink: "/fashion"
  },
  {
    PName : "Project Studio",
    PImage :  "assets/image/pjstudio.png",
    routerLink: "/projectStudio"
  },
];
projectData: Project[] =[
  {
    PName : "Portfolio",
    PImage :  "assets/image/portfolio.png",
    routerLink: "/profile"
  },
  {
    PName: "Client Hare Krishna",
    PImage: "assets/image/goudiya.png",
    routerLink: "/harekrishna"
  },
  {
    PName: "E-commerce",
    PImage : "https://img.freepik.com/free-psd/e-commerce-discounts-landing-page-template_23-2149965971.jpg",
    routerLink : "/ecommerce"
  },
]
  constructor(private api: ApiService) { }

  ngOnInit() {
    
    this.api.setLoginData(true);
  }

}
