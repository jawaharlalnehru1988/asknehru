import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Project } from '../home/homejson';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink, MarkdownModule],
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    roadmap: any;
    loading: boolean = true;
    error: string | null = null;
    copiedId: number | null = null;

    explainedSubtopicIds: Set<number> = new Set();
    loadingSubtopics: Set<number> = new Set();
    activeExplanation: any = null;
    drawerOpen: boolean = false;

    // MCQ Quiz properties
    generatingMcqs: boolean = false;
    quizStarted: boolean = false;
    mcqsList: any[] = [];
    currentQuestionIndex: number = 0;
    selectedAnswers: number[] = [];
    quizCompleted: boolean = false;
    score: number = 0;
    showFeedback: boolean = false;
    currentSelectedOption: number | null = null;

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    copyToClipboard(text: string, id: number) {
        navigator.clipboard.writeText(text).then(() => {
            this.copiedId = id;
            setTimeout(() => {
                if (this.copiedId === id) {
                    this.copiedId = null;
                }
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadRoadmap(+id);
                this.loadExplainedSubtopics();
            } else {
                this.error = "Roadmap ID not found.";
                this.loading = false;
            }
        });
    }

    loadExplainedSubtopics() {
        this.apiService.getExplainedSubtopics().subscribe({
            next: (ids) => {
                this.explainedSubtopicIds = new Set(ids);
            },
            error: (err) => console.error('Error fetching explained subtopics:', err)
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

    explainOrRead(subtopic: any) {
        this.loadingSubtopics.add(subtopic.id);
        this.apiService.explainSubtopic(subtopic.id).subscribe({
            next: (res) => {
                this.activeExplanation = res;
                this.explainedSubtopicIds.add(subtopic.id);
                this.drawerOpen = true;
                this.loadingSubtopics.delete(subtopic.id);
            },
            error: (err) => {
                console.error(err);
                this.loadingSubtopics.delete(subtopic.id);
            }
        });
    }

    generateAndStartQuiz() {
        if (!this.activeExplanation || !this.activeExplanation.id) return;

        if (this.activeExplanation.mcqs) {
            try {
                this.mcqsList = JSON.parse(this.activeExplanation.mcqs);
                this.startQuiz();
                return;
            } catch (e) {
                console.error("Failed to parse cached MCQs:", e);
            }
        }

        this.generatingMcqs = true;
        this.apiService.generateMcqs(this.activeExplanation.id).subscribe({
            next: (res) => {
                this.activeExplanation = res;
                try {
                    this.mcqsList = JSON.parse(res.mcqs);
                    this.startQuiz();
                } catch (e) {
                    console.error("Failed to parse newly generated MCQs:", e);
                }
                this.generatingMcqs = false;
            },
            error: (err) => {
                console.error("Error generating MCQs:", err);
                this.generatingMcqs = false;
            }
        });
    }

    startQuiz() {
        this.quizStarted = true;
        this.currentQuestionIndex = 0;
        this.selectedAnswers = new Array(this.mcqsList.length).fill(-1);
        this.quizCompleted = false;
        this.score = 0;
        this.showFeedback = false;
        this.currentSelectedOption = null;
    }

    selectOption(optionIndex: number) {
        if (this.showFeedback) return;
        this.currentSelectedOption = optionIndex;
    }

    submitAnswer() {
        if (this.currentSelectedOption === null) return;
        this.showFeedback = true;
        this.selectedAnswers[this.currentQuestionIndex] = this.currentSelectedOption;

        if (this.currentSelectedOption === this.mcqsList[this.currentQuestionIndex].answerIndex) {
            this.score++;
        }
    }

    nextQuestion() {
        this.showFeedback = false;
        this.currentSelectedOption = null;
        if (this.currentQuestionIndex < this.mcqsList.length - 1) {
            this.currentQuestionIndex++;
        } else {
            this.quizCompleted = true;
        }
    }

    resetQuiz() {
        this.quizStarted = false;
        this.quizCompleted = false;
        this.mcqsList = [];
    }

    closeDrawer() {
        this.drawerOpen = false;
        this.activeExplanation = null;
        this.quizStarted = false;
        this.quizCompleted = false;
        this.mcqsList = [];
    }
}


