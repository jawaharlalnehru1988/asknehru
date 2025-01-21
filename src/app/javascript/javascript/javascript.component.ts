import { Component } from '@angular/core';
import { JssidebarComponent } from "../../jssidebar/jssidebar.component";
import { NgClass } from '@angular/common';
import { JsModel, Jstopics } from './jstopics';

@Component({
    selector: 'app-javascript',
    standalone: true,
    imports: [JssidebarComponent, NgClass],
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
    isArrowActive = false;
    jstopic: string = "";

   jstopics = new Jstopics();
   topics = this.jstopics.topics;

    toggleArrow(): void {
      this.isArrowActive = !this.isArrowActive;
    }

    receiveTopic(topic: string){
    this.jstopic = topic;

    }

    clickTopic(topic: JsModel){
        console.log('topic :', topic);
    }
}
