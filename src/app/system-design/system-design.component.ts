import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

// Interface for System Design Topic
export interface SystemDesignTopic {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  sectionLink: string;
  audioUrl: string;
  content: string;
}

@Component({
  selector: 'app-system-design',
  imports: [CommonModule, ReactiveFormsModule, QuillModule],
  templateUrl: './system-design.component.html',
  styleUrl: './system-design.component.scss'
})
export class SystemDesignComponent {
  showModal: boolean = false;
  showAddForm: boolean = false;
  selectedTopic: SystemDesignTopic | null = null;
  currentTopicIndex: number = 0;
  audioError: boolean = false;
  isSubmitting: boolean = false;
  isEditMode: boolean = false;
  editingTopicId: number | null = null;
  
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

  topicsCards: SystemDesignTopic[] = [
    {
      title: 'Introduction to High-Level System Design',
      description: 'Understand the basics of system design, its importance, and key concepts.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'introduction',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep1%20-%20what%20is%20HLD.mp3',
      content: `<h1 data-start="209" data-end="257">🎙️ Podcast Script &mdash; Nehru from asknehru.com</h1>
<p data-start="258" data-end="388"><strong data-start="258" data-end="300">Season 1: High-Level Design Essentials</strong><br data-start="300" data-end="303" /> <strong data-start="303" data-end="388">Episode 1: What is HLD? Problem framing &rarr; NFRs (SLA/SLO), constraints, trade-offs</strong></p>
<hr data-start="390" data-end="393" />
<p data-start="395" data-end="572"><strong data-start="395" data-end="413">🎧 Intro (30s)</strong><br data-start="413" data-end="416" /> "Hello and welcome to the <em data-start="442" data-end="460">AskNehru Podcast</em>! I&rsquo;m Nehru from <a class="decorated-link" href="https://asknehru.com?utm_source=chatgpt.com" target="_new" rel="noopener" data-start="477" data-end="513">asknehru.com</a>, and this is Season 1 on <em data-start="539" data-end="569">High-Level Design Essentials</em>.</p>
<p data-start="574" data-end="936">If you&rsquo;re a full stack developer, a tech enthusiast, or someone aiming to grow into a software architect, you&rsquo;ve come to the right place. In this very first episode, we&rsquo;re going to talk about one of the most important steps in system design: <em data-start="816" data-end="843">High-Level Design, or HLD</em>. What is it? Why do we need it? And how do we approach it in the real world? Let&rsquo;s dive in."</p>
<hr data-start="938" data-end="941" />
<p data-start="943" data-end="1176"><strong data-start="943" data-end="982">📌 Segment 1: What is HLD? (2 mins)</strong><br data-start="982" data-end="985" /> "Think of High-Level Design as the <strong data-start="1020" data-end="1054">blueprint of a software system</strong>. Just like an architect draws a building plan before construction, software architects define HLD before coding begins.</p>
<p data-start="1178" data-end="1277">It&rsquo;s not about classes or methods&mdash;that&rsquo;s low-level design. HLD is about answering questions like:</p>
<ul data-start="1278" data-end="1447">
<li data-start="1278" data-end="1319">
<p data-start="1280" data-end="1319">What components will the system have?</p>
</li>
<li data-start="1320" data-end="1347">
<p data-start="1322" data-end="1347">How will they interact?</p>
</li>
<li data-start="1348" data-end="1402">
<p data-start="1350" data-end="1402">What data stores and external services are needed?</p>
</li>
<li data-start="1403" data-end="1447">
<p data-start="1405" data-end="1447">What are the main APIs and integrations?</p>
</li>
</ul>
<p data-start="1449" data-end="1607">In short, HLD paints the big picture of your system. It&rsquo;s a roadmap for your team so everyone understands <em data-start="1555" data-end="1605">what we&rsquo;re building and how it will fit together</em>."</p>
<hr data-start="1609" data-end="1612" />
<p data-start="1614" data-end="1728"><strong data-start="1614" data-end="1656">📌 Segment 2: Problem Framing (2 mins)</strong><br data-start="1656" data-end="1659" /> "Before even drawing diagrams, HLD begins with <strong data-start="1706" data-end="1725">problem framing</strong>.</p>
<p data-start="1730" data-end="1745">Ask yourself:</p>
<ul data-start="1746" data-end="1832">
<li data-start="1746" data-end="1768">
<p data-start="1748" data-end="1768">Who are the users?</p>
</li>
<li data-start="1769" data-end="1791">
<p data-start="1771" data-end="1791">What do they need?</p>
</li>
<li data-start="1792" data-end="1832">
<p data-start="1794" data-end="1832">What are the most critical features?</p>
</li>
</ul>
<p data-start="1834" data-end="1970">For example, imagine you&rsquo;re building a <strong data-start="1873" data-end="1910">Chronic Disease Management Portal</strong> for patients and doctors. Problem framing would identify:</p>
<ul data-start="1971" data-end="2161">
<li data-start="1971" data-end="2039">
<p data-start="1973" data-end="2039">Patients need to register, book appointments, track medications.</p>
</li>
<li data-start="2040" data-end="2116">
<p data-start="2042" data-end="2116">Doctors need to view patient records, update notes, and schedule visits.</p>
</li>
<li data-start="2117" data-end="2161">
<p data-start="2119" data-end="2161">Admins may need reporting and analytics.</p>
</li>
</ul>
<p data-start="2163" data-end="2225">When you define the problem clearly, HLD becomes much easier."</p>
<hr data-start="2227" data-end="2230" />
<p data-start="2232" data-end="2376"><strong data-start="2232" data-end="2275">📌 Segment 3: NFRs (SLA / SLO) (3 mins)</strong><br data-start="2275" data-end="2278" /> "Now comes a very important but often overlooked part: <strong data-start="2333" data-end="2364">Non-Functional Requirements</strong>, or NFRs.</p>
<p data-start="2378" data-end="2494">While functional requirements tell us <em data-start="2416" data-end="2443">what the system should do</em>, NFRs define <em data-start="2457" data-end="2491">how well the system should do it</em>.</p>
<p data-start="2496" data-end="2517">A few key NFRs are:</p>
<ul data-start="2518" data-end="2752">
<li data-start="2518" data-end="2575">
<p data-start="2520" data-end="2575"><strong data-start="2520" data-end="2535">Performance</strong>: Should the app respond within 200ms?</p>
</li>
<li data-start="2576" data-end="2638">
<p data-start="2578" data-end="2638"><strong data-start="2578" data-end="2593">Scalability</strong>: Should it handle 10,000 concurrent users?</p>
</li>
<li data-start="2639" data-end="2685">
<p data-start="2641" data-end="2685"><strong data-start="2641" data-end="2657">Availability</strong>: 99.9% uptime guaranteed?</p>
</li>
<li data-start="2686" data-end="2752">
<p data-start="2688" data-end="2752"><strong data-start="2688" data-end="2700">Security</strong>: Should data be encrypted in transit and at rest?</p>
</li>
</ul>
<p data-start="2754" data-end="2899">When companies talk about SLAs (Service Level Agreements) and SLOs (Service Level Objectives), they&rsquo;re really setting expectations around NFRs.</p>
<p data-start="2901" data-end="3108">For instance, an SLA may promise that the system will be available 99.95% of the time. That means only about 22 minutes of downtime per month. As an architect, you need to design with these numbers in mind."</p>
<hr data-start="3110" data-end="3113" />
<p data-start="3115" data-end="3238"><strong data-start="3115" data-end="3166">📌 Segment 4: Constraints &amp; Trade-offs (3 mins)</strong><br data-start="3166" data-end="3169" /> "No design is perfect, and every system comes with <strong data-start="3220" data-end="3235">constraints</strong>.</p>
<p data-start="3240" data-end="3277">Constraints can be technical, like:</p>
<ul data-start="3278" data-end="3433">
<li data-start="3278" data-end="3319">
<p data-start="3280" data-end="3319">The team only knows MySQL, not NoSQL.</p>
</li>
<li data-start="3320" data-end="3376">
<p data-start="3322" data-end="3376">The budget doesn&rsquo;t allow for premium cloud services.</p>
</li>
<li data-start="3377" data-end="3433">
<p data-start="3379" data-end="3433">Latency must be less than 1 second for global users.</p>
</li>
</ul>
<p data-start="3435" data-end="3456">Or business-driven:</p>
<ul data-start="3457" data-end="3536">
<li data-start="3457" data-end="3497">
<p data-start="3459" data-end="3497">The system must go live in 3 months.</p>
</li>
<li data-start="3498" data-end="3536">
<p data-start="3500" data-end="3536">It must run within a given budget.</p>
</li>
</ul>
<p data-start="3538" data-end="3605">Once you understand constraints, you need to make <strong data-start="3588" data-end="3602">trade-offs</strong>.</p>
<p data-start="3607" data-end="3757">Example: If you want high consistency in a distributed database, you may have to compromise on availability or latency&mdash;that&rsquo;s CAP theorem in action.</p>
<p data-start="3759" data-end="3878">Your role as an architect is to balance these trade-offs and explain them to stakeholders so that everyone is aligned."</p>
<hr data-start="3880" data-end="3883" />
<p data-start="3885" data-end="3936"><strong data-start="3885" data-end="3918">📌 Segment 5: Wrap-up (1 min)</strong><br data-start="3918" data-end="3921" /> "So to recap:</p>
<ul data-start="3937" data-end="4278">
<li data-start="3937" data-end="4028">
<p data-start="3939" data-end="4028">High-Level Design is the <strong data-start="3964" data-end="3992">blueprint of your system</strong>, not the detailed code structure.</p>
</li>
<li data-start="4029" data-end="4102">
<p data-start="4031" data-end="4102">It starts with <strong data-start="4046" data-end="4065">problem framing</strong>&mdash;understanding what you&rsquo;re solving.</p>
</li>
<li data-start="4103" data-end="4175">
<p data-start="4105" data-end="4175">You must define <strong data-start="4121" data-end="4152">non-functional requirements</strong> using SLAs and SLOs.</p>
</li>
<li data-start="4176" data-end="4278">
<p data-start="4178" data-end="4278">And finally, you account for <strong data-start="4207" data-end="4237">constraints and trade-offs</strong> to make realistic, scalable decisions.</p>
</li>
</ul>
<p data-start="4280" data-end="4412">In the next episode, we&rsquo;ll talk about <em data-start="4318" data-end="4409">How to move from requirements to architecture using models like C4 and container diagrams</em>.</p>
<p data-start="4414" data-end="4560">If you enjoyed this episode, don&rsquo;t forget to check out <a class="decorated-link" href="https://asknehru.com?utm_source=chatgpt.com" target="_new" rel="noopener" data-start="4469" data-end="4505">asknehru.com</a> for more resources, and stay tuned for the next one.</p>
<p data-start="4562" data-end="4663">This is Nehru, signing off&mdash;helping you step up from developer to architect, one episode at a time."</p>
`
    },
    {
      title: 'From Requirements to Architecture',
      description: 'Learn how to design systems that can scale efficiently and handle high traffic loads.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'from-requirements-to-architecture',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep2%20-%20from%20requirements%20to%20architecture.mp3',
      content: ``
    },
    {
      title: 'Workload Modeling',
      description: 'Explore techniques for modeling workloads and understanding system performance under different conditions.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'workload-modeling',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep3%20-%20Workload%20modelling%20.mp3',
      content: ``
    },
    {
      title: 'APIs at HLD',
      description: 'Learn how to design robust and scalable APIs for high-level systems.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'apis-at-hld',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep4%20-%20APIs%20at%20HLD.mp3',
      content: ``
    },
    {
      title: 'Data Storage Choices',
      description: 'Understand the trade-offs between different data storage solutions and how to choose the right one for your system.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'data-storage-choices',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep5%20-%20Data%20storage%20choices.mp3',
      content: ``
    },
    {
      title: 'Caching Strategies',
      description: 'Explore various caching techniques to improve system performance and reduce latency.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'caching-strategies',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep6%20-%20Cashing%20Strategies%20.mp3',
      content: ``
    },
    {
      title: 'CDN Edge Reverse Proxy',
      description: 'Learn how to design and implement a CDN edge reverse proxy for efficient content delivery.',
      imageUrl: 'https://res.cloudinary.com/dbmkctsda/image/upload/v1756956557/c937db99-2e3a-4173-ace3-626cea9956f8.png',
      category: "High-Level-Design",
      sectionLink: 'cdn-edge-reverse-proxy',
      audioUrl: 'https://raw.githubusercontent.com/jawaharlalnehru1988/bgsloka/master/assets/high%20level%20design/ep7%20-%20CDN%20Edge%20Reverse%20proxy%20.mp3',
      content: ``
    }
  ];

  constructor(private fb: FormBuilder) {
    this.initializeForm();
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
    this.topicForm.reset();
    this.topicForm.patchValue({
      category: 'High-Level-Design'
    });
  }

  openEditForm(topic: SystemDesignTopic, index: number) {
    this.isEditMode = true;
    this.editingTopicId = topic.id || index;
    this.showAddForm = true;
    this.populateFormWithTopic(topic);
  }

  closeAddForm() {
    this.showAddForm = false;
    this.isEditMode = false;
    this.editingTopicId = null;
    this.topicForm.reset();
  }

  populateFormWithTopic(topic: SystemDesignTopic) {
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
      const formData: SystemDesignTopic = { ...this.topicForm.value };
      
      if (this.isEditMode && this.editingTopicId !== null) {
        // Update existing topic
        const index = typeof this.editingTopicId === 'number' ? this.editingTopicId : 
                     this.topicsCards.findIndex(t => t.id === this.editingTopicId);
        
        if (index >= 0) {
          formData.id = this.topicsCards[index].id;
          this.topicsCards[index] = formData;
          console.log('Topic updated successfully:', formData);
        }
      } else {
        // Add new topic
        formData.id = Date.now(); // Simple ID generation
        this.topicsCards.push(formData);
        console.log('Topic created successfully:', formData);
      }
      
      this.closeAddForm();
      this.isSubmitting = false;
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.topicForm.controls).forEach(key => {
        const control = this.topicForm.get(key);
        control?.markAsTouched();
      });
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
    if (confirm('Are you sure you want to delete this topic?')) {
      this.topicsCards.splice(index, 1);
      console.log('Topic deleted successfully');
    }
  }

  // Open topic modal
  openTopicModal(topic: SystemDesignTopic, index: number) {
    this.selectedTopic = topic;
    this.currentTopicIndex = index;
    this.showModal = true;
    this.audioError = false; // Reset audio error state
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Close modal
  closeModal() {
    this.showModal = false;
    this.selectedTopic = null;
    this.audioError = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
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
