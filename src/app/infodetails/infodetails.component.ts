import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';

@Component({
  selector: 'app-infodetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infodetails.component.html',
  styleUrl: './infodetails.component.scss'
})
export class InfodetailsComponent implements OnInit {
  details: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private el: ElementRef) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getConversations().subscribe(data => {
        this.details = data.find((item: any) => item.id == id);
        setTimeout(() => this.highlight(), 100);
      });
    }
  }

  highlight() {
    const preElements = this.el.nativeElement.querySelectorAll('pre');
    preElements.forEach((pre: HTMLElement) => {
      pre.removeAttribute('style'); // Remove inline styles to allow Prism theme to take effect
      let code = pre.querySelector('code');
      if (!code) {
        code = document.createElement('code');
        code.className = 'language-json'; // Defaulting to JSON as per request
        code.innerHTML = pre.innerHTML;
        pre.innerHTML = ''; // Clear pre content
        pre.appendChild(code);
        pre.classList.add('language-json');
      }
      Prism.highlightElement(code);
    });
  }
}
