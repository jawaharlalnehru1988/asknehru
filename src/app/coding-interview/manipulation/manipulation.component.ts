import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-manipulation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.scss']
})
export class ManipulationComponent implements OnInit {
  topic = '';
  selectedManipulationCategory = '';
  manipulationQuestions: { question: string, hint: string }[] = [];
  manipulationHintVisible: boolean[] = [];
  manipulationHintTimeRemaining: number[] = [];
  manipulationApproaches: string[] = [];
  manipulationAnswers: string[] = [];
  manipulationResult: any = null;
  
  activeSetName = '';
  isCurrentSetSaved = false;
  currentPhase: 'CODING' | 'COMPLETED' = 'CODING';
  busyLabel = '';

  constructor(private apiService: ApiService, private router: Router, private cdr: ChangeDetectorRef) {
    const state = this.router.getCurrentNavigation()?.extras.state as any;
    if (state) {
      if (state.history) {
        const history = state.history;
        this.topic = history.topic;
        this.selectedManipulationCategory = history.category;
        this.manipulationQuestions = history.questions.map((q: string) => ({ question: q, hint: 'AI generated pseudo-code hint would go here.' }));
        this.manipulationApproaches = new Array(this.manipulationQuestions.length).fill('');
        this.manipulationAnswers = new Array(this.manipulationQuestions.length).fill('');
        this.manipulationHintVisible = new Array(this.manipulationQuestions.length).fill(false);
        this.manipulationHintTimeRemaining = new Array(this.manipulationQuestions.length).fill(0);
        this.activeSetName = 'Past Attempt (' + new Date(history.date).toLocaleDateString() + ')';
        this.isCurrentSetSaved = true;
      } else {
        this.topic = state.topic;
        this.selectedManipulationCategory = state.selectedManipulationCategory;
        const selectedSavedSetId = state.selectedSavedSetId;
        const savedQuestionSets = state.savedQuestionSets;

        if (selectedSavedSetId !== 'NEW' && selectedSavedSetId !== 'NEXT') {
           const set = savedQuestionSets.find((s: any) => s.id == selectedSavedSetId);
           if (set) {
             this.manipulationQuestions = set.questions.map((q: string) => ({ question: q, hint: 'AI generated pseudo-code hint would go here.' }));
             this.manipulationApproaches = new Array(this.manipulationQuestions.length).fill('');
             this.manipulationAnswers = new Array(this.manipulationQuestions.length).fill('');
             this.manipulationHintVisible = new Array(this.manipulationQuestions.length).fill(false);
             this.manipulationHintTimeRemaining = new Array(this.manipulationQuestions.length).fill(0);
             this.activeSetName = set.setName;
             this.isCurrentSetSaved = true;
           } else {
             this.generateManipulationChallenge(state);
           }
        } else {
           this.generateManipulationChallenge(state);
        }
      }
    } else {
      this.router.navigate(['/coding']);
    }
  }

  ngOnInit(): void {}

  generateManipulationChallenge(state: any) {
    this.busyLabel = 'Generating...';
    const payload = {
      topic: this.topic,
      category: this.selectedManipulationCategory,
      excludePrevious: state.selectedSavedSetId === 'NEXT'
    };

    this.apiService.startManipulationChallenge(payload).subscribe({
      next: (response) => {
        this.manipulationQuestions = response.questions.map((q: string) => ({ question: q, hint: 'AI generated pseudo-code hint would go here.' }));
        this.manipulationApproaches = new Array(this.manipulationQuestions.length).fill('');
        this.manipulationAnswers = new Array(this.manipulationQuestions.length).fill('');
        this.manipulationHintVisible = new Array(this.manipulationQuestions.length).fill(false);
        this.manipulationHintTimeRemaining = new Array(this.manipulationQuestions.length).fill(0);
        this.activeSetName = '';
        this.isCurrentSetSaved = false;
        this.busyLabel = '';
      },
      error: () => {
        this.busyLabel = '';
        this.router.navigate(['/coding']);
      }
    });
  }

  showHint(index: number) {
    if (this.manipulationHintVisible[index]) return;
    this.manipulationHintVisible[index] = true;
    this.manipulationHintTimeRemaining[index] = 15;
    
    const interval = setInterval(() => {
      this.manipulationHintTimeRemaining[index]--;
      if (this.manipulationHintTimeRemaining[index] <= 0) {
        clearInterval(interval);
        this.manipulationHintVisible[index] = false;
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  saveCurrentManipulationSet() {
    if (this.isCurrentSetSaved) return;
    const setName = prompt('Enter a name for this question set:');
    if (!setName) return;

    this.apiService.saveManipulationQuestionSet(this.topic, this.selectedManipulationCategory, setName, this.manipulationQuestions).subscribe({
      next: () => {
        this.activeSetName = setName;
        this.isCurrentSetSaved = true;
        alert('Question set saved successfully!');
      },
      error: (err) => {
        console.error('Failed to save set', err);
        alert('Failed to save question set.');
      }
    });
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: show a small toast or inline notification
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  handleSubmitManipulationAnswers() {
    this.busyLabel = 'Evaluating Answers...';
    
    const payload = {
      topic: this.topic,
      category: this.selectedManipulationCategory,
      questions: this.manipulationQuestions.map(q => q.question),
      approaches: this.manipulationApproaches,
      answers: this.manipulationAnswers
    };

    this.apiService.evaluateManipulationAnswers(payload).subscribe({
      next: (response) => {
        this.manipulationResult = response;
        if (this.manipulationResult && this.manipulationResult.evaluations) {
          this.manipulationResult.evaluations.forEach((evalItem: any) => {
            evalItem.question = this.formatCodeInString(evalItem.question);
          });
        }
        this.currentPhase = 'COMPLETED';
        this.busyLabel = '';
      },
      error: () => {
        this.busyLabel = '';
      }
    });
  }

  handleReset() {
    this.router.navigate(['/coding']);
  }

  private formatCodeInString(input: string): string {
    if (!input) return input;
    const questionMarkIndex = input.indexOf('?');
    if (questionMarkIndex === -1) return input;

    const questionPart = input.substring(0, questionMarkIndex + 1);
    let codePart = input.substring(questionMarkIndex + 1).trim();

    if (codePart.length > 0) {
      codePart = codePart.replace(/{/g, '{\n  ').replace(/}/g, '\n}').replace(/;/g, ';\n  ');
      return `${questionPart}\n\n\`\`\`java\n${codePart}\n\`\`\``;
    }
    
    return input;
  }
}
