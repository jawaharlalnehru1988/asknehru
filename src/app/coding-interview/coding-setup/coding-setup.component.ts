import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-coding-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coding-setup.component.html',
  styleUrls: ['./coding-setup.component.scss']
})
export class CodingSetupComponent implements OnInit {
  topics: any[] = [];
  difficultyLevels: string[] = ['SUPER_EASY', 'COMPLEXITY', 'MANIPULATION CHALLENGE', 'HARD', 'HARDER'];
  
  topic = '';
  difficulty = 'MANIPULATION CHALLENGE';
  customDescription = '';

  manipulationCategories: any[] = [];
  selectedManipulationCategory = '';
  newCategoryName = '';
  savedQuestionSets: any[] = [];
  selectedSavedSetId: any = 'NEW';
  
  userHistory: any[] = [];
  selectedHistoryId: string = '';

  complexityCategories: any[] = [];
  selectedComplexityCategory = '';
  savedComplexitySets: any[] = [];
  selectedSavedComplexitySetId: any = 'NEW';
  
  busyLabel = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTopics();
    this.fetchManipulationCategories();
    this.fetchComplexityCategories();
    this.fetchUserHistory();
  }

  fetchTopics() {
    this.apiService.getTopics().subscribe({
      next: (data) => {
        this.topics = data;
        if (data.length > 0) this.topic = data[0].name;
      }
    });
  }

  fetchUserHistory() {
    this.apiService.getManipulationHistory().subscribe(data => this.userHistory = data);
  }

  fetchManipulationCategories() {
    this.apiService.getManipulationCategories().subscribe(data => {
      this.manipulationCategories = data;
      if (data.length > 0) {
        this.selectedManipulationCategory = data[0].name;
        this.fetchSavedSets();
      }
    });
  }

  fetchComplexityCategories() {
    this.apiService.getComplexityCategories().subscribe(data => {
      this.complexityCategories = data;
      if (data.length > 0) {
        this.selectedComplexityCategory = data[0].name;
        this.fetchSavedComplexitySets();
      }
    });
  }

  fetchSavedSets() {
    this.apiService.getSavedManipulationQuestionSets(this.topic, this.selectedManipulationCategory).subscribe((data: any) => {
      this.savedQuestionSets = data;
    });
  }

  fetchSavedComplexitySets() {
    this.apiService.getSavedComplexityQuestionSets(this.topic, this.selectedComplexityCategory).subscribe((data: any) => {
      this.savedComplexitySets = data;
    });
  }

  handleAddCategory() {
    this.busyLabel = 'Adding...';
    this.apiService.addManipulationCategory({ name: this.newCategoryName }).subscribe(cat => {
      this.manipulationCategories.push(cat);
      this.selectedManipulationCategory = cat.name;
      this.newCategoryName = '';
      this.busyLabel = '';
    });
  }

  handleRevisitAttempt() {
    const history = this.userHistory.find(h => h.id == this.selectedHistoryId);
    this.router.navigate(['/coding/manipulation'], { state: { history } });
  }

  handleStartCodingSession() {
    this.busyLabel = 'Starting...';
    const setupData = {
      topic: this.topic,
      difficulty: this.difficulty,
      customDescription: this.customDescription,
      selectedManipulationCategory: this.selectedManipulationCategory,
      selectedSavedSetId: this.selectedSavedSetId,
      selectedComplexityCategory: this.selectedComplexityCategory,
      selectedSavedComplexitySetId: this.selectedSavedComplexitySetId,
      savedQuestionSets: this.savedQuestionSets,
      savedComplexitySets: this.savedComplexitySets
    };

    if (this.difficulty === 'MANIPULATION CHALLENGE') {
      this.router.navigate(['/coding/manipulation'], { state: setupData });
    } else if (this.difficulty === 'COMPLEXITY') {
      this.router.navigate(['/coding/complexity'], { state: setupData });
    } else if (this.difficulty === 'SUPER_EASY') {
      this.router.navigate(['/coding/super-easy'], { state: setupData });
    } else if (this.difficulty === 'HARD') {
      this.router.navigate(['/coding/hard'], { state: setupData });
    } else if (this.difficulty === 'HARDER') {
      this.router.navigate(['/coding/harder'], { state: setupData });
    }
  }

  getSubmitButtonText(): string {
    if (this.busyLabel) return this.busyLabel;
    if (this.difficulty === 'MANIPULATION CHALLENGE' && this.selectedSavedSetId !== 'NEW' && this.selectedSavedSetId !== 'NEXT') return 'Start Saved Set';
    if (this.difficulty === 'COMPLEXITY' && this.selectedSavedComplexitySetId !== 'NEW' && this.selectedSavedComplexitySetId !== 'NEXT') return 'Start Saved Set';
    return 'Generate Challenge';
  }
}