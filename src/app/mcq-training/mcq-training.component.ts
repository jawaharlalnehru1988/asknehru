import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { McqTrainingService, MCQQuestion, LevelInfo } from '../services/mcq-training.service';

// Interface for quiz state
interface QuizState {
  currentQuestionIndex: number;
  score: number;
  totalPoints: number;
  answeredQuestions: number;
  userAnswers: Map<number, string>;
  correctAnswers: number;
  wrongAnswers: number;
}

// Interface for answer result
interface AnswerResult {
  isCorrect: boolean;
  selectedAnswer: string;
  correctAnswer: string;
  explanation: string;
}

@Component({
  selector: 'app-mcq-training',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mcq-training.component.html',
  styleUrl: './mcq-training.component.scss'
})
export class McqTrainingComponent implements OnInit, OnDestroy {
  // Topic from route parameter
  topic: string = '';
  
  // Quiz flow states
  quizState: 'level-selection' | 'quiz-active' | 'quiz-completed' = 'level-selection';
  
  // Level data
  availableLevels: LevelInfo[] = [];
  selectedLevel: number | null = null;
  isLoadingLevels: boolean = false;
  
  // Questions data
  questions: MCQQuestion[] = [];
  isLoadingQuestions: boolean = false;
  
  // Quiz state
  quizData: QuizState = {
    currentQuestionIndex: 0,
    score: 0,
    totalPoints: 0,
    answeredQuestions: 0,
    userAnswers: new Map(),
    correctAnswers: 0,
    wrongAnswers: 0
  };
  
  // Current question interaction
  selectedAnswer: string | null = null;
  showExplanation: boolean = false;
  answerResult: AnswerResult | null = null;
  isAnswerSubmitted: boolean = false;
  
  // Timer (optional)
  timeElapsed: number = 0;
  timerInterval: any = null;

  constructor(
    private mcqService: McqTrainingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Get topic from route parameter
    this.route.params.subscribe(params => {
      this.topic = params['topic'] || '';
      if (this.topic) {
        this.loadLevels();
      }
    });
  }

  // Load available levels for the topic
  loadLevels() {
    this.isLoadingLevels = true;
    this.mcqService.getTopicLevels(this.topic).subscribe({
      next: (levels) => {
        this.availableLevels = levels;
        this.isLoadingLevels = false;
        console.log('Levels loaded:', levels);
      },
      error: (error) => {
        console.error('Error loading levels:', error);
        this.isLoadingLevels = false;
        alert('Failed to load levels. Please try again.');
      }
    });
  }

  // Select level and load questions
  selectLevel(level: number) {
    this.selectedLevel = level;
    this.loadQuestions();
  }

  // Load questions for selected topic and level
  loadQuestions() {
    if (!this.selectedLevel) return;
    
    this.isLoadingQuestions = true;
    this.mcqService.getQuestionsByTopicAndLevel(this.topic, this.selectedLevel).subscribe({
      next: (questions) => {
        // Shuffle questions for variety
        this.questions = this.mcqService.shuffleArray(questions);
        
        // Calculate total points
        this.quizData.totalPoints = this.questions.reduce((sum, q) => sum + q.points, 0);
        
        // Start quiz
        this.quizState = 'quiz-active';
        this.isLoadingQuestions = false;
        this.startTimer();
        
        console.log('Questions loaded:', this.questions.length);
      },
      error: (error) => {
        console.error('Error loading questions:', error);
        this.isLoadingQuestions = false;
        alert('Failed to load questions. Please try again.');
      }
    });
  }

  // Get current question
  get currentQuestion(): MCQQuestion | null {
    if (this.questions.length === 0) return null;
    return this.questions[this.quizData.currentQuestionIndex];
  }

  // Select an answer (before submission)
  selectAnswer(choiceId: string) {
    if (this.isAnswerSubmitted) return; // Prevent changing answer after submission
    this.selectedAnswer = choiceId;
  }

  // Submit the selected answer
  submitAnswer() {
    if (!this.selectedAnswer || !this.currentQuestion) return;
    
    this.isAnswerSubmitted = true;
    const isCorrect = this.selectedAnswer === this.currentQuestion.correctAnswer;
    
    // Store user answer
    this.quizData.userAnswers.set(this.quizData.currentQuestionIndex, this.selectedAnswer);
    this.quizData.answeredQuestions++;
    
    // Update score
    if (isCorrect) {
      this.quizData.score += this.currentQuestion.points;
      this.quizData.correctAnswers++;
    } else {
      this.quizData.wrongAnswers++;
    }
    
    // Show explanation
    this.answerResult = {
      isCorrect,
      selectedAnswer: this.selectedAnswer,
      correctAnswer: this.currentQuestion.correctAnswer || '',
      explanation: this.currentQuestion.explanation || 'No explanation available.'
    };
    
    this.showExplanation = true;
  }

  // Move to next question
  nextQuestion() {
    if (this.quizData.currentQuestionIndex < this.questions.length - 1) {
      this.quizData.currentQuestionIndex++;
      this.resetQuestionState();
    } else {
      this.completeQuiz();
    }
  }

  // Move to previous question (optional - for review)
  previousQuestion() {
    if (this.quizData.currentQuestionIndex > 0) {
      this.quizData.currentQuestionIndex--;
      this.resetQuestionState();
    }
  }

  // Reset state for new question
  resetQuestionState() {
    this.selectedAnswer = null;
    this.showExplanation = false;
    this.answerResult = null;
    this.isAnswerSubmitted = false;
  }

  // Complete the quiz
  completeQuiz() {
    this.quizState = 'quiz-completed';
    this.stopTimer();
  }

  // Restart quiz with same level
  restartQuiz() {
    this.resetQuizData();
    this.loadQuestions();
  }

  // Go back to level selection
  backToLevelSelection() {
    this.resetQuizData();
    this.quizState = 'level-selection';
    this.selectedLevel = null;
  }

  // Reset all quiz data
  resetQuizData() {
    this.quizData = {
      currentQuestionIndex: 0,
      score: 0,
      totalPoints: 0,
      answeredQuestions: 0,
      userAnswers: new Map(),
      correctAnswers: 0,
      wrongAnswers: 0
    };
    this.questions = [];
    this.resetQuestionState();
    this.stopTimer();
    this.timeElapsed = 0;
  }

  // Timer functions
  startTimer() {
    this.timeElapsed = 0;
    this.timerInterval = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  // Format time (seconds to MM:SS)
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Calculate percentage
  getScorePercentage(): number {
    if (this.quizData.totalPoints === 0) return 0;
    return Math.round((this.quizData.score / this.quizData.totalPoints) * 100);
  }

  // Get progress percentage
  getProgressPercentage(): number {
    if (this.questions.length === 0) return 0;
    return Math.round(((this.quizData.currentQuestionIndex + 1) / this.questions.length) * 100);
  }

  // Navigate back to previous page
  goBack() {
    this.stopTimer();
    this.resetQuizData();
    this.router.navigate([`/${this.topic}`]);
  }

  // Get choice label (A, B, C, D)
  getChoiceLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is ASCII for 'A'
  }

  // Check if choice is selected
  isChoiceSelected(choiceId: string): boolean {
    return this.selectedAnswer === choiceId;
  }

  // Get choice CSS class based on answer state
  getChoiceClass(choiceId: string): string {
    if (!this.isAnswerSubmitted) {
      return this.isChoiceSelected(choiceId) ? 'selected' : '';
    }
    
    // After submission
    if (!this.answerResult) return '';
    
    if (choiceId === this.answerResult.correctAnswer) {
      return 'correct';
    }
    
    if (choiceId === this.answerResult.selectedAnswer && !this.answerResult.isCorrect) {
      return 'wrong';
    }
    
    return '';
  }

  // Get performance message
  getPerformanceMessage(): string {
    const percentage = this.getScorePercentage();
    
    if (percentage >= 90) {
      return '🎉 Outstanding! You\'re a master!';
    } else if (percentage >= 80) {
      return '🌟 Excellent work! Keep it up!';
    } else if (percentage >= 70) {
      return '👍 Good job! You\'re doing well!';
    } else if (percentage >= 60) {
      return '📚 Not bad! Keep practicing!';
    } else {
      return '💪 Keep learning! You\'ll improve!';
    }
  }

  // Cleanup on component destroy
  ngOnDestroy() {
    this.stopTimer();
  }
}
