import { Component, OnInit, ElementRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { JscriptService } from '../jscript.service';
export interface Project {
  PName: string;
  routerLink : string;
  PImage: string;
  intro: string;
}

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  blogArticleData: Project[] = [
    {
      PName: "Javascript Core",
      PImage: "assets/image/jscore.png",
      routerLink: "/javascript/jscore",
      intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
    {
      PName: "Tricky JS Q & A",
      PImage: "assets/image/trickyjs.png",
      routerLink: "/javascript/trickyjs",
      intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
    {
      PName: "Video Lessons",
      PImage: "assets/image/videojs.png",
      routerLink: "/javascript/videojs",
      intro:"Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
    },
  ]
constructor() { }

  ngOnInit(): void {
  }

}
