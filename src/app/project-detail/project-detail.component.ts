import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Project } from '../home/homejson';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SafeHtmlPipe } from '../../core/pipes/safe-html.pipe';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink, SafeHtmlPipe],
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    roadmap: any;
    loading: boolean = true;
    error: string | null = null;

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadRoadmap(+id);
            } else {
                this.error = "Roadmap ID not found.";
                this.loading = false;
            }
        });
    }

    loadRoadmap(id: number) {
        this.loading = true;
        this.apiService.getRoadmapById(id).subscribe({
            next: (data) => {
                this.roadmap = data;
                this.loading = false;
            },
            error: (err) => {
                console.error(err);
                this.error = "Failed to load roadmap.";
                this.loading = false;
            }
        });
    }
}

