import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-complexity',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule],
  templateUrl: './complexity.component.html',
  styleUrls: ['./complexity.component.scss']
})
export class ComplexityComponent implements OnInit {
  topic = '';
  selectedComplexityCategory = '';
  complexityQuestions: string[] = [];
  complexityAnswers: string[] = [];
  complexityResult: any = null;
  
  activeSetName = '';
  isCurrentSetSaved = false;
  currentPhase: 'CODING' | 'COMPLETED' = 'CODING';
  busyLabel = '';

  constructor(private apiService: ApiService, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state as any;
    if (state) {
      this.topic = state.topic;
      this.selectedComplexityCategory = state.selectedComplexityCategory;
      const selectedSavedComplexitySetId = state.selectedSavedComplexitySetId;
      const savedComplexitySets = state.savedComplexitySets;

      if (selectedSavedComplexitySetId !== 'NEW' && selectedSavedComplexitySetId !== 'NEXT') {
         const set = savedComplexitySets?.find((s: any) => s.id == selectedSavedComplexitySetId);
         if (set) {
           this.complexityQuestions = set.questions.map((q: string) => this.formatCodeInString(q));
           this.complexityAnswers = new Array(this.complexityQuestions.length).fill('');
           this.activeSetName = set.setName;
           this.isCurrentSetSaved = true;
         } else {
           this.generateComplexityChallenge(state);
         }
      } else {
         this.generateComplexityChallenge(state);
      }
    } else {
      this.router.navigate(['/coding']);
    }
  }

  ngOnInit(): void {}

  generateComplexityChallenge(state: any) {
    this.busyLabel = 'Generating...';
    const payload = {
      topic: this.topic,
      category: this.selectedComplexityCategory,
      excludePrevious: state.selectedSavedComplexitySetId === 'NEXT'
    };

    this.apiService.startComplexityQuestions(payload.topic, payload.category).subscribe({
      next: (response: any) => {
        this.complexityQuestions = response.questions.map((q: string) => this.formatCodeInString(q));
        this.complexityAnswers = new Array(this.complexityQuestions.length).fill('');
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

  saveCurrentComplexitySet() {
    if (this.isCurrentSetSaved) return;
    const setName = prompt('Enter a name for this complexity question set:');
    if (!setName) return;

    // Remove formatting back to plain string to save
    const plainQuestions = this.complexityQuestions.map(q => {
      let stripped = q;
      if (q.includes('\`\`\`')) {
         const parts = q.split('\`\`\`');
         if(parts.length >= 3) {
           const before = parts[0].trim();
           const code = parts[1].replace(/^java\n/, '').replace(/\n  /g, '').replace(/\n/g, '').trim();
           stripped = before + ' ' + code;
         }
      }
      return stripped;
    });

    this.apiService.saveComplexityQuestionSet(this.topic, this.selectedComplexityCategory, setName, plainQuestions).subscribe({
      next: () => {
        this.activeSetName = setName;
        this.isCurrentSetSaved = true;
        alert('Question set saved successfully!');
      },
      error: (err: any) => {
        console.error('Failed to save set', err);
        alert('Failed to save question set.');
      }
    });
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  handleSubmitComplexityAnswers() {
    this.busyLabel = 'Evaluating Answers...';
    
    // Convert formatted strings back to plain strings for evaluation
    const plainQuestions = this.complexityQuestions.map(q => {
      let stripped = q;
      if (q.includes('\`\`\`')) {
         const parts = q.split('\`\`\`');
         if(parts.length >= 3) {
           const before = parts[0].trim();
           const code = parts[1].replace(/^java\n/, '').replace(/\n  /g, '').replace(/\n/g, '').trim();
           stripped = before + ' ' + code;
         }
      }
      return stripped;
    });

    const payload = {
      topic: this.topic,
      category: this.selectedComplexityCategory,
      questions: plainQuestions,
      answers: this.complexityAnswers
    };

    this.apiService.evaluateComplexityAnswers(payload.topic, payload.category, payload.questions, payload.answers).subscribe({
      next: (response) => {
        this.complexityResult = response;
        if (this.complexityResult && this.complexityResult.evaluations) {
          this.complexityResult.evaluations.forEach((evalItem: any) => {
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
