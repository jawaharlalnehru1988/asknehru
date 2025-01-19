import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-angular-audio',
    imports: [],
    templateUrl: './angular-audio.component.html',
    styleUrl: './angular-audio.component.scss'
})
export class AngularAudioComponent {
  id!: string | null;
constructor(private route: ActivatedRoute){}

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);
}
}
