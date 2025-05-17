import { Component } from '@angular/core';
import { GitContent } from './gitContent';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import Prism from 'prismjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-git-commands',
  imports: [MatIconModule, NgClass],
  templateUrl: './git-commands.component.html',
  styleUrl: './git-commands.component.scss'
})
export class GitCommandsComponent extends GitContent{
selectedTopic = this.gitContent[0].title;
projectedContent: SafeHtml = ``;

constructor(private sanitizer: DomSanitizer){
  super();
  this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.topicExplained[0].explain);
}

selectHeader(topic: string){
const selectedTopic = this.topicExplained.find((obj: any) => obj.topic === topic);
if (selectedTopic) {
  this.selectedTopic = selectedTopic.topic;
  this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(selectedTopic.explain);
}  
}


 ngAfterViewInit(): void {
        Prism.highlightAll();
    }

    ngAfterViewChecked(): void {
        Prism.highlightAll();
    }
}
