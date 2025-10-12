import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { AgenticAiService, AgenticAITopic } from '../services/agentic-ai.service';

@Component({
  selector: 'app-agentic-ai',
  imports: [CommonModule, ReactiveFormsModule, QuillModule, HttpClientModule],
  templateUrl: './agentic-ai.component.html',
  styleUrl: './agentic-ai.component.scss'
})
export class AgenticAiComponent implements OnInit {
  showModal: boolean = false;
  showAddForm: boolean = false;
  selectedTopic: AgenticAITopic | null = null;
  currentTopicIndex: number = 0;
  audioError: boolean = false;
  isSubmitting: boolean = false;
  isEditMode: boolean = false;
  isLoading: boolean = false;
  editingTopicId: string | null = null;
  isEditingInModal: boolean = false;
  
  topicForm!: FormGroup;

  // Quill editor configuration
  quillConfig = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean']
    ],
    theme: 'snow'
  };

  topicsCards: AgenticAITopic[] = [];

  constructor(
    private fb: FormBuilder,
    private agenticAiService: AgenticAiService
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.loadTopics();
  }

  // Load topics from backend
  loadTopics() {
    this.isLoading = true;
    
    this.agenticAiService.getAllTopics().subscribe({
      next: (topics) => {
        this.topicsCards = topics;
        this.isLoading = false;
        console.log('Agentic AI topics loaded successfully:', topics.length);
      },
      error: (error) => {
        console.error('Error loading topics:', error);
        this.isLoading = false;
        alert('Failed to load topics. Please check your connection and try again.');
      }
    });
  }

  // Initialize form
  initializeForm() {
    this.topicForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      category: ['', [Validators.required]],
      sectionLink: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-]+$')]],
      audioUrl: ['', [Validators.pattern('https?://.+')]],
      content: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  // Form control methods
  openAddForm() {
    this.isEditMode = false;
    this.editingTopicId = null;
    this.showAddForm = true;
    this.isEditingInModal = false;
    this.topicForm.reset();
    this.topicForm.patchValue({
      category: 'AI-Fundamentals'
    });
  }

  openEditForm(topic: AgenticAITopic, index: number) {
    this.isEditMode = true;
    this.editingTopicId = topic._id || null;
    this.currentTopicIndex = index;
    this.selectedTopic = topic;
    this.isEditingInModal = true;
    this.showModal = true;
    this.showAddForm = false;
    this.populateFormWithTopic(topic);
  }

  closeAddForm() {
    this.showAddForm = false;
    this.isEditMode = false;
    this.isEditingInModal = false;
    this.editingTopicId = null;
    this.topicForm.reset();
  }

  populateFormWithTopic(topic: AgenticAITopic) {
    this.topicForm.patchValue({
      title: topic.title,
      description: topic.description,
      imageUrl: topic.imageUrl,
      category: topic.category,
      sectionLink: topic.sectionLink,
      audioUrl: topic.audioUrl,
      content: topic.content
    });
  }

  onSubmit() {
    if (this.topicForm.valid) {
      this.isSubmitting = true;
      const formData: Partial<AgenticAITopic> = { ...this.topicForm.value };
      
      if (this.isEditMode && this.editingTopicId) {
        // Update existing topic
        this.agenticAiService.updateTopic(this.editingTopicId, formData).subscribe({
          next: (updatedTopic) => {
            const index = this.topicsCards.findIndex(t => t._id === this.editingTopicId);
            if (index >= 0) {
              this.topicsCards[index] = updatedTopic;
              this.selectedTopic = updatedTopic;
            }
            console.log('Topic updated successfully:', updatedTopic);
            alert('Topic updated successfully!');
            this.closeEditMode();
            this.isSubmitting = false;
          },
          error: (error) => {
            console.error('Error updating topic:', error);
            alert('Failed to update topic. Please try again.');
            this.isSubmitting = false;
          }
        });
      } else {
        // Add new topic
        this.agenticAiService.createTopic(formData as AgenticAITopic).subscribe({
          next: (newTopic) => {
            this.topicsCards.push(newTopic);
            console.log('Topic created successfully:', newTopic);
            alert('Topic created successfully!');
            this.closeAddForm();
            this.isSubmitting = false;
          },
          error: (error) => {
            console.error('Error creating topic:', error);
            alert('Failed to create topic. Please try again.');
            this.isSubmitting = false;
          }
        });
      }
    } else {
      Object.keys(this.topicForm.controls).forEach(key => {
        const control = this.topicForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  // Close edit mode and return to view mode
  closeEditMode() {
    this.isEditingInModal = false;
    this.isEditMode = false;
    this.editingTopicId = null;
    this.topicForm.reset();
  }

  // Toggle between view and edit mode in modal
  toggleEditInModal() {
    this.isEditingInModal = !this.isEditingInModal;
    if (this.isEditingInModal && this.selectedTopic) {
      this.isEditMode = true;
      this.editingTopicId = this.selectedTopic._id || null;
      this.populateFormWithTopic(this.selectedTopic);
    } else {
      this.closeEditMode();
    }
  }

  // Helper method to check if a form control has validation errors
  hasError(controlName: string, errorType?: string): boolean {
    const control = this.topicForm.get(controlName);
    if (!control) return false;
    
    if (errorType) {
      return control.hasError(errorType) && control.touched;
    }
    return control.invalid && control.touched;
  }

  // Helper method to get validation error message
  getErrorMessage(controlName: string): string {
    const control = this.topicForm.get(controlName);
    if (!control || !control.errors) return '';

    const errors = control.errors;
    
    if (errors['required']) return `${controlName} is required`;
    if (errors['minlength']) return `${controlName} must be at least ${errors['minlength'].requiredLength} characters`;
    if (errors['maxlength']) return `${controlName} must not exceed ${errors['maxlength'].requiredLength} characters`;
    if (errors['pattern']) {
      if (controlName === 'sectionLink') return 'Section link can only contain letters, numbers and hyphens';
      return `${controlName} must be a valid URL`;
    }
    
    return 'Invalid input';
  }

  // Delete topic
  deleteTopic(index: number) {
    const topic = this.topicsCards[index];
    if (!topic._id) {
      alert('Cannot delete topic: Invalid ID');
      return;
    }

    if (confirm('Are you sure you want to delete this topic?')) {
      this.agenticAiService.deleteTopic(topic._id).subscribe({
        next: (response) => {
          this.topicsCards.splice(index, 1);
          console.log('Topic deleted successfully:', response.message);
          alert('Topic deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting topic:', error);
          alert('Failed to delete topic. Please try again.');
        }
      });
    }
  }

  // Open topic modal
  openTopicModal(topic: AgenticAITopic, index: number) {
    this.selectedTopic = topic;
    this.currentTopicIndex = index;
    this.showModal = true;
    this.audioError = false;
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  closeModal() {
    this.showModal = false;
    this.selectedTopic = null;
    this.audioError = false;
    this.isEditingInModal = false;
    this.isEditMode = false;
    this.editingTopicId = null;
    this.topicForm.reset();
    document.body.style.overflow = 'auto';
  }

  // Handle audio loading error
  onAudioError(event: any) {
    console.error('Audio loading error:', event);
    this.audioError = true;
  }

  // Handle audio loading success
  onAudioLoaded(event: any) {
    console.log('Audio loaded successfully:', event);
    this.audioError = false;
  }

  // Navigate to previous topic
  navigateToPrevious() {
    if (this.currentTopicIndex > 0) {
      this.currentTopicIndex--;
      this.selectedTopic = this.topicsCards[this.currentTopicIndex];
    }
  }

  // Navigate to next topic
  navigateToNext() {
    if (this.currentTopicIndex < this.topicsCards.length - 1) {
      this.currentTopicIndex++;
      this.selectedTopic = this.topicsCards[this.currentTopicIndex];
    }
  }

  // Handle keyboard navigation
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.showModal) return;
    
    switch (event.key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowLeft':
        this.navigateToPrevious();
        break;
      case 'ArrowRight':
        this.navigateToNext();
        break;
    }
  }
}
