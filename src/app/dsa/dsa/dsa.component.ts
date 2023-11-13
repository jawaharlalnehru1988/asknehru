import { Component, OnInit } from '@angular/core';
import { DsaService } from './dsa.service';
export interface Project {
  PName: string;
  routerLink : string;
  PImage: string;
  intro: string;
}
@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.scss']
})
export class DsaComponent implements OnInit {
  blogArticleData: Project[] = [
    {
      PName: "DSA Basics",
      PImage: "assets/image/dsabasics.png",
      routerLink: "/dsa/dsabasics",
      intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
    {
      PName: "Common Challenges",
      PImage: "assets/image/dsacommon.png",
      routerLink: "/dsa/dsacommon",
      intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
    {
      PName: "leetcode Challenges",
      PImage: "assets/image/leetcode.png",
      routerLink: "/dsa/leetcode",
      intro:"Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
  ]
 
  constructor(private dsaService: DsaService) { }

  ngOnInit(): void {
  }
}
