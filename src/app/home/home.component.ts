import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { Homejson } from './homejson';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatCardModule, RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardContent]
})
export class HomeComponent extends Homejson{
 
  
}
