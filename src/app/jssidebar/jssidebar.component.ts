
import { NgClass, NgFor } from '@angular/common';
import { Component, Input, output} from '@angular/core';


@Component({
  selector: 'app-jssidebar',
  imports: [NgFor, NgClass],
  templateUrl: './jssidebar.component.html',
  styleUrl: './jssidebar.component.scss'
})
export class JssidebarComponent {
  topics = ['Javascript Basics', 'Javascript DSA', 'Javascript OOP'];
  @Input() toggleValue :boolean = false;
  passTopic =  output<string>();

  onTopicClick(topic: string) { 
    this.passTopic.emit(topic);
  }


  getIconForTopic(topic: string): string { 
    switch (topic) { 
      case 'Javascript Basics': return '📚';
      case 'Javascript DSA': return '📅'; 
      case 'Javascript OOP': return '⭕'; 
      default: return '❓'; } }
}
