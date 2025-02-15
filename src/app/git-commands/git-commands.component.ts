import { Component } from '@angular/core';
import { GitContent } from './gitContent';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-git-commands',
  imports: [MatIconModule, NgClass],
  templateUrl: './git-commands.component.html',
  styleUrl: './git-commands.component.scss'
})
export class GitCommandsComponent extends GitContent{
  gitSubContent = this.gitContent[0].topics;
selectedTopic = this.gitContent[0].title;

selectHeader(topic: string){

const selectedTopic = this.gitContent.find((obj: any) => obj.title === topic);
if (selectedTopic) {
  this.gitSubContent = selectedTopic.topics;
  this.selectedTopic = selectedTopic.title;
}  
}

selectSubHeader(topic: string){
console.log('topic :', topic);
const selectedTopic = this.gitContent.find((topic: any) => topic.title === topic);
if (selectedTopic) {

  this.gitSubContent = selectedTopic.topics;
}  
}
}
