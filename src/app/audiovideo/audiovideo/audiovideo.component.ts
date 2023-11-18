import { Component, OnInit } from '@angular/core';
export interface Project {
  PName: string;
  routerLink : string;
  PImage: string;
  intro: string;
}
@Component({
  selector: 'app-audiovideo',
  templateUrl: './audiovideo.component.html',
  styleUrls: ['./audiovideo.component.scss']
})
export class AudiovideoComponent implements OnInit {
  blogArticleData: Project[] = [
    {
      PName: "Javascript Q & A Audio",
      PImage: "assets/image/jscore.png",
      routerLink: "/javascript/jsaudio",
      intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
    {
      PName: "Angular Q & A Audio",
      PImage: "assets/image/angularpodcast.png",
      routerLink: "/audiovideo/angular",
      intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
    {
      PName: "Softskill Podcast",
      PImage: "assets/image/softskillpodcast.png",
      routerLink: "/audiovideo/spotify",
      intro:"Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
