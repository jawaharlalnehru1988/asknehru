import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { TutorialService, TutorialContent } from '../services/tutorial.service';

@Component({
  selector: 'app-llm',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, QuillModule],
  templateUrl: './llm.component.html',
  styleUrl: './llm.component.scss'
})
export class LLMComponent implements OnInit {
  activeTab: string = 'articles';
  searchTerm: string = '';
  selectedDifficulty: string = 'all';
  showAddForm: boolean = false;
  showArticleModal: boolean = false;
  isSubmitting: boolean = false;
  isLoading: boolean = false;
  isEditMode: boolean = false;
  editingArticleId: number | null = null;
  
  articleForm!: FormGroup;
  selectedArticle: TutorialContent | null = null;

  // Initialize as empty arrays - will be populated from API
  articles: TutorialContent[] = [];
  audios: TutorialContent[] = [];
  videos: TutorialContent[] = [];
  allTutorials: TutorialContent[] = [];

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

  constructor(
    private fb: FormBuilder,
    private tutorialService: TutorialService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.loadTutorials();
  }

  loadTutorials() {
    this.isLoading = true;
    
    this.tutorialService.getAllTutorials().subscribe({
      next: (tutorials) => {
        this.allTutorials = tutorials;
        
        // Separate tutorials by type if your API includes type field
        // If not, you can categorize based on other criteria or tags
        this.articles = tutorials.filter(tutorial => 
          tutorial.type === 'article' || 
          !tutorial.type || // Default to article if no type specified
          tutorial.tags.some(tag => tag.toLowerCase().includes('article'))
        );
        
        this.audios = tutorials.filter(tutorial => 
          tutorial.type === 'audio' || 
          tutorial.tags.some(tag => ['podcast', 'audio', 'course'].some(audioTag => 
            tag.toLowerCase().includes(audioTag)
          ))
        );
        
        this.videos = tutorials.filter(tutorial => 
          tutorial.type === 'video' || 
          tutorial.tags.some(tag => ['video', 'tutorial', 'demo', 'workshop'].some(videoTag => 
            tag.toLowerCase().includes(videoTag)
          ))
        );
        
        this.isLoading = false;
        console.log('Tutorials loaded successfully:', {
          total: tutorials.length,
          articles: this.articles.length,
          audios: this.audios.length,
          videos: this.videos.length
        });
      },
      error: (error) => {
        console.error('Error loading tutorials:', error);
        this.isLoading = false;
        
        // Fallback to empty arrays or show error message
        this.articles = [];
        this.audios = [];
        this.videos = [];
        this.allTutorials = [];
        
        // You can add a user-friendly error notification here
        alert('Failed to load tutorials. Please check your connection and try again.');
      }
    });
  }

  initializeForm() {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      difficulty: ['Beginner', Validators.required],
      tags: this.fb.array([this.fb.control('', Validators.required)]),
      thumbnail: ['', [Validators.pattern('https?://.+')]],
      content: ['', [Validators.required, Validators.minLength(50)]],
      publishDate: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  get tagsArray(): FormArray {
    return this.articleForm.get('tags') as FormArray;
  }

  addTag() {
    this.tagsArray.push(this.fb.control('', Validators.required));
  }

  removeTag(index: number) {
    if (this.tagsArray.length > 1) {
      this.tagsArray.removeAt(index);
    }
  }

  openAddForm() {
    this.isEditMode = false;
    this.editingArticleId = null;
    this.showAddForm = true;
    this.initializeForm();
  }

  openEditForm(article: TutorialContent) {
    this.isEditMode = true;
    this.editingArticleId = article.id || null;
    this.showAddForm = true;
    this.initializeForm();
    this.populateFormWithArticle(article);
  }

  closeAddForm() {
    this.showAddForm = false;
    this.isEditMode = false;
    this.editingArticleId = null;
    this.articleForm.reset();
  }

  populateFormWithArticle(article: TutorialContent) {
    // Clear existing tags
    while (this.tagsArray.length !== 0) {
      this.tagsArray.removeAt(0);
    }
    
    // Add tags from article
    article.tags.forEach(tag => {
      this.tagsArray.push(this.fb.control(tag, [Validators.required]));
    });

    // Populate form fields
    this.articleForm.patchValue({
      title: article.title,
      description: article.description,
      difficulty: article.difficulty,
      thumbnail: article.thumbnail || '',
      content: article.content || '',
      publishDate: article.publishDate
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.isSubmitting = true;
      
      const formData = { ...this.articleForm.value };
      // Filter out empty tags
      formData.tags = formData.tags.filter((tag: string) => tag.trim() !== '');
      
      if (this.isEditMode && this.editingArticleId) {
        // Update existing article
        formData.id = this.editingArticleId;
        this.tutorialService.updateTutorial(this.editingArticleId, formData).subscribe({
          next: (response) => {
            console.log('Article updated successfully:', response);
            this.loadTutorials(); // Refresh the list
            this.closeAddForm();
            // You can add a success notification here
            alert('Article updated successfully!');
          },
          error: (error) => {
            console.error('Error updating article:', error);
            alert('Failed to update article. Please try again.');
          },
          complete: () => {
            this.isSubmitting = false;
          }
        });
      } else {
        // Create new article
        this.tutorialService.createTutorial(formData).subscribe({
          next: (response) => {
            console.log('Article created successfully:', response);
            
            // Add the new article to the appropriate array based on type
            if (response.type === 'article' || !response.type) {
              this.articles.unshift(response);
            } else if (response.type === 'audio') {
              this.audios.unshift(response);
            } else if (response.type === 'video') {
              this.videos.unshift(response);
            }
            
            // Also add to allTutorials array
            this.allTutorials.unshift(response);
            
            this.closeAddForm();
            // You can add a success notification here
            alert('Article created successfully!');
          },
          error: (error) => {
            console.error('Error creating article:', error);
            alert('Failed to create article. Please try again.');
          },
          complete: () => {
            this.isSubmitting = false;
          }
        });
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.articleForm.controls).forEach(key => {
        const control = this.articleForm.get(key);
        control?.markAsTouched();
        
        if (control instanceof FormArray) {
          control.controls.forEach(c => c.markAsTouched());
        }
      });
    }
  }

  // Method to delete a tutorial
  deleteTutorial(tutorial: TutorialContent) {
    if (tutorial.id && confirm('Are you sure you want to delete this tutorial?')) {
      this.tutorialService.deleteTutorial(tutorial.id).subscribe({
        next: () => {
          console.log('Tutorial deleted successfully');
          this.loadTutorials(); // Refresh the list
          alert('Tutorial deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting tutorial:', error);
          alert('Failed to delete tutorial. Please try again.');
        }
      });
    }
  }

  // Helper method to check if a form control has validation errors
  hasError(controlName: string, errorType?: string): boolean {
    const control = this.articleForm.get(controlName);
    if (!control) return false;
    
    if (errorType) {
      return control.hasError(errorType) && control.touched;
    }
    return control.invalid && control.touched;
  }

  // Helper method to get validation error message
  getErrorMessage(controlName: string): string {
    const control = this.articleForm.get(controlName);
    if (!control || !control.errors) return '';

    const errors = control.errors;
    
    if (errors['required']) return `${controlName} is required`;
    if (errors['minlength']) return `${controlName} must be at least ${errors['minlength'].requiredLength} characters`;
    if (errors['maxlength']) return `${controlName} must not exceed ${errors['maxlength'].requiredLength} characters`;
    if (errors['pattern']) return `${controlName} must be a valid URL`;
    
    return 'Invalid input';
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getActiveContent(): TutorialContent[] {
    let content: TutorialContent[] = [];
    
    switch(this.activeTab) {
      case 'articles':
        content = this.articles;
        break;
      case 'audios':
        content = this.audios;
        break;
      case 'videos':
        content = this.videos;
        break;
    }

    // Apply filters
    if (this.selectedDifficulty !== 'all') {
      content = content.filter(item => item.difficulty.toLowerCase() === this.selectedDifficulty.toLowerCase());
    }

    if (this.searchTerm) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }

    return content;
  }

  getDifficultyBadgeClass(difficulty: string): string {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }

  onDifficultyChange(event: any) {
    this.selectedDifficulty = event.target.value;
  }

  // Method to refresh tutorials (useful for manual refresh)
  refreshTutorials() {
    this.loadTutorials();
  }

  // Method to get total count for each tab
  getTabCount(tab: string): number {
    switch(tab) {
      case 'articles': return this.articles.length;
      case 'audios': return this.audios.length;
      case 'videos': return this.videos.length;
      default: return 0;
    }
  }

  // Method to open article for reading
  openArticle(article: TutorialContent) {
    this.selectedArticle = article;
    this.showArticleModal = true;
  }

  // Method to close article modal
  closeArticleModal() {
    this.showArticleModal = false;
    this.selectedArticle = null;
  }

  // Method to handle card clicks based on content type
  onCardClick(item: TutorialContent) {
    if (this.activeTab === 'articles') {
      this.openArticle(item);
    } else if (this.activeTab === 'audios' && item.url) {
      // For audio content, open URL in new tab or play audio
      window.open(item.url, '_blank');
    } else if (this.activeTab === 'videos' && item.url) {
      // For video content, open URL in new tab
      window.open(item.url, '_blank');
    }
  }

  // Method to format publish date
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
