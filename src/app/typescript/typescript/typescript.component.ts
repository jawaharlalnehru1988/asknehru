import { Component, ElementRef, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
export interface Name{
  name: string,
  id?: number
}
@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent{
  @ViewChild('myTemplate') myTemplate!: TemplateRef<any>;
  @ViewChild('myTemplate2') myTemplate2!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  fruits: string[] = ['Banana', 'Mango', 'Jackfruit'];

  constructor(private renderer: Renderer2, private el: ElementRef){}
  addElementAtEnd(fruit: string) {
    this.fruits.push(fruit);
  }
  ngAfterViewInit() {
    const newDiv = this.renderer.createElement('div');
    this.renderer.setProperty(newDiv, 'textContent', 'Hello World');
    this.renderer.addClass(newDiv, 'my-class');
    this.renderer.appendChild(this.el.nativeElement, newDiv);
  }
  removeElementAtEnd() {
    this.fruits.pop();
  }

  removeElementAtStart() {
    this.fruits.shift();
  }

  addElementAtFirst(fruit:string) {
    this.fruits.unshift(fruit);
  }
  addTemplate() {
    this.container.createEmbeddedView(this.myTemplate);
  }
  addTemplate2() {
    this.container.createEmbeddedView(this.myTemplate2);
  }

  removeTemplate() {
    this.container.remove();
  }
}
