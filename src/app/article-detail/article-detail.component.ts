import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { AudioPlayerComponent } from '../shared/audio-player/audio-player.component';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import mermaid from 'mermaid';

// Ensure mermaid is globally registered on window for ngx-markdown and runtime SVG rendering
if (typeof window !== 'undefined') {
  (window as any).mermaid = mermaid;
}

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MarkdownModule,
    AudioPlayerComponent
  ],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  @ViewChild('contentContainer') contentContainer!: ElementRef;

  projectId: number = 5;
  subtopicId: number = 0;
  
  loading: boolean = true;
  error: string | null = null;
  
  articleData: any = null;
  roadmap: any = null;
  
  currentChapter: any = null;
  currentSubtopic: any = null;
  prevSubtopic: any = null;
  nextSubtopic: any = null;
  
  allSubtopics: any[] = [];
  currentIndex: number = -1;

  // Presentation / YouTube Mode
  isPresentationMode: boolean = false;
  zoomLevel: number = 100; // 90%, 100%, 115%, 130%

  // Isolated Mermaid Diagram Modal state
  @ViewChild('modalDiagramHost') modalDiagramHost?: ElementRef<HTMLDivElement>;
  isMermaidModalOpen: boolean = false;
  modalZoom: number = 1.0;
  modalPanX: number = 0;
  modalPanY: number = 0;
  isDragging: boolean = false;
  dragStartX: number = 0;
  dragStartY: number = 0;
  initialPanX: number = 0;
  initialPanY: number = 0;
  touchStartDist: number = 0;

  get zoomPercentage(): number {
    return Math.round(this.modalZoom * 100);
  }

  // Quiz properties
  quizActive: boolean = false;
  quizCompleted: boolean = false;
  mcqsList: any[] = [];
  currentQuestionIndex: number = 0;
  selectedOption: number | null = null;
  score: number = 0;
  showFeedback: boolean = false;
  scoreSaved: boolean = false;

  // Copy feedback
  copiedUrl: boolean = false;
  copiedArticle: boolean = false;
  sharedArticle: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pid = params.get('id');
      const sid = params.get('subtopicId');

      if (pid) {
        this.projectId = +pid;
      }
      if (sid) {
        this.subtopicId = +sid;
        this.loadArticleAndRoadmap(this.projectId, this.subtopicId);
      } else {
        this.error = 'Invalid topic specified.';
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  loadArticleAndRoadmap(projectId: number, subtopicId: number): void {
    this.loading = true;
    this.error = null;
    this.quizActive = false;
    this.quizCompleted = false;
    this.selectedOption = null;
    this.showFeedback = false;
    this.score = 0;
    this.scoreSaved = false;

    // Fetch roadmap to resolve chapter, breadcrumbs, previous/next links
    this.apiService.getRoadmapById(projectId).subscribe({
      next: (roadmap) => {
        this.roadmap = roadmap;
        this.resolveNavigation(roadmap, subtopicId);
      },
      error: (err) => {
        console.error('Failed to load roadmap context:', err);
      }
    });

    // Fetch article content
    this.apiService.explainSubtopic(subtopicId).subscribe({
      next: (res) => {
        let articleText = res?.article || '';
        // If the article markdown starts with an H1 (# Title), strip it because the top header card already renders currentSubtopic.subtopicName
        if (articleText.startsWith('# ')) {
          const firstLineBreak = articleText.indexOf('\n');
          if (firstLineBreak !== -1) {
            articleText = articleText.substring(firstLineBreak).trimStart();
          }
        }
        this.articleData = { ...res, article: articleText };
        this.loading = false;
        if (res && res.mcqs) {
          try {
            this.mcqsList = typeof res.mcqs === 'string' ? JSON.parse(res.mcqs) : res.mcqs;
          } catch (e) {
            this.mcqsList = [];
          }
        } else {
          this.mcqsList = [];
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err) => {
        console.error('Failed to load article:', err);
        this.error = 'Failed to load concept article. Please try again.';
        this.loading = false;
      }
    });
  }

  resolveNavigation(roadmap: any, subtopicId: number): void {
    if (!roadmap || !roadmap.chapters) return;

    this.allSubtopics = [];
    this.currentChapter = null;
    this.currentSubtopic = null;

    for (const ch of roadmap.chapters) {
      if (ch.subtopics) {
        for (const sub of ch.subtopics) {
          const item = { ...sub, chapterName: ch.chapterName, chapterId: ch.id };
          this.allSubtopics.push(item);
          if (sub.id === subtopicId) {
            this.currentChapter = ch;
            this.currentSubtopic = sub;
          }
        }
      }
    }

    this.currentIndex = this.allSubtopics.findIndex(s => s.id === subtopicId);
    this.prevSubtopic = this.currentIndex > 0 ? this.allSubtopics[this.currentIndex - 1] : null;
    this.nextSubtopic = this.currentIndex < this.allSubtopics.length - 1 ? this.allSubtopics[this.currentIndex + 1] : null;
  }

  goToSubtopic(subtopic: any): void {
    if (!subtopic) return;
    this.router.navigate(['/roadmap', this.projectId, 'topic', subtopic.id]);
  }

  togglePresentationMode(): void {
    this.isPresentationMode = !this.isPresentationMode;
  }

  changeZoom(delta: number): void {
    const newZoom = this.zoomLevel + delta;
    if (newZoom >= 80 && newZoom <= 140) {
      this.zoomLevel = newZoom;
    }
  }

  copyPageUrl(): void {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.copiedUrl = true;
        setTimeout(() => this.copiedUrl = false, 2500);
      });
    }
  }

  copyArticle(): void {
    if (typeof window !== 'undefined' && this.articleData?.article) {
      navigator.clipboard.writeText(this.articleData.article).then(() => {
        this.copiedArticle = true;
        setTimeout(() => this.copiedArticle = false, 2500);
      }).catch(err => {
        console.error('Failed to copy article content: ', err);
      });
    }
  }

  shareArticle(): void {
    if (typeof window === 'undefined') return;
    const title = this.currentSubtopic?.subtopicName || this.roadmap?.mainTopic || 'AskNehru Concept Guide';
    const url = window.location.href;
    const text = `Check out this concept guide on AskNehru: ${title}`;

    if (navigator.share) {
      navigator.share({ title, text, url }).then(() => {
        this.sharedArticle = true;
        setTimeout(() => this.sharedArticle = false, 2500);
      }).catch((err) => {
        if (err && err.name !== 'AbortError') {
          this.fallbackShare(url);
        }
      });
    } else {
      this.fallbackShare(url);
    }
  }

  private fallbackShare(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      this.sharedArticle = true;
      setTimeout(() => this.sharedArticle = false, 2500);
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }

  customMermaidOptions: any = {
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontSize: 13,
    themeVariables: {
      darkMode: true,
      fontSize: '13px',
      background: '#090d16',
      mainBkg: '#0f172a',
      clusterBkg: '#090d16',
      clusterBorder: '#3b82f6',
      edgeLabelBackground: '#0b1120',
      nodeTextColor: '#f8fafc',
      textColor: '#f8fafc',
      primaryColor: '#1e3a8a',
      primaryTextColor: '#f8fafc',
      primaryBorderColor: '#3b82f6',
      lineColor: '#60a5fa',
      secondaryColor: '#064e3b',
      secondaryTextColor: '#f8fafc',
      secondaryBorderColor: '#10b981',
      tertiaryColor: '#4c1d95',
      tertiaryTextColor: '#f8fafc',
      tertiaryBorderColor: '#a855f7',
      actorBkg: '#1e293b',
      actorBorder: '#60a5fa',
      actorTextColor: '#ffffff',
      signalColor: '#60a5fa',
      signalTextColor: '#ffffff',
      labelBoxBkgColor: '#0b1120',
      labelBoxBorderColor: '#38bdf8',
      labelTextColor: '#38bdf8',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    },
    flowchart: {
      htmlLabels: true,
      useMaxWidth: false,
      curve: 'basis',
      padding: 28,
      nodeSpacing: 55,
      rankSpacing: 65,
      wrappingWidth: 280,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0
      }
    }
  };

  onMarkdownReady(): void {
    this.renderMermaidDiagrams();
    setTimeout(() => {
      this.enhanceCodeBlocks();
    }, 150);
  }

  enhanceCodeBlocks(): void {
    if (typeof document === 'undefined') return;
    const preElements = document.querySelectorAll('article pre:not([data-copy-enhanced="true"])');

    preElements.forEach((preElement: Element) => {
      const pre = preElement as HTMLElement;
      pre.setAttribute('data-copy-enhanced', 'true');

      const codeEl = pre.querySelector('code');
      let lang = 'code';
      if (codeEl) {
        const langClass = Array.from(codeEl.classList).find(c => c.startsWith('language-'));
        if (langClass) {
          lang = langClass.replace('language-', '');
        }
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const label = document.createElement('span');
      label.className = 'code-lang-label';
      label.textContent = lang;
      wrapper.appendChild(label);

      const actionsContainer = document.createElement('div');
      actionsContainer.className = 'code-actions';

      const copyBtn = document.createElement('button');
      copyBtn.type = 'button';
      copyBtn.className = 'code-copy-btn';
      copyBtn.setAttribute('title', 'Copy code to clipboard');
      copyBtn.innerHTML = `
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
        <span>Copy</span>
      `;

      copyBtn.addEventListener('click', () => {
        const rawText = codeEl ? codeEl.innerText : pre.innerText;
        navigator.clipboard.writeText(rawText).then(() => {
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied!</span>
          `;
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy</span>
            `;
          }, 2200);
        }).catch(err => {
          console.error('Failed to copy code: ', err);
        });
      });

      actionsContainer.appendChild(copyBtn);

      // Add Run Code button for executable programming languages
      const nonExecutable = ['plaintext', 'text', 'console', 'output', 'terminal', 'sh', 'bash', 'json', 'yaml', 'yml', 'xml'];
      const isExecutable = !nonExecutable.includes(lang.toLowerCase());

      if (isExecutable) {
        const runBtn = document.createElement('button');
        runBtn.type = 'button';
        runBtn.className = 'code-run-btn';
        runBtn.setAttribute('title', 'Copy code and open in Programiz online compiler');
        runBtn.innerHTML = `
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>Run Code</span>
        `;

        runBtn.addEventListener('click', () => {
          const rawText = codeEl ? codeEl.innerText : pre.innerText;
          navigator.clipboard.writeText(rawText).catch(err => console.error('Failed to copy code: ', err));

          runBtn.classList.add('running');
          runBtn.innerHTML = `
            <svg fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied! Opening...</span>
          `;

          // Language mapping to Programiz online compilers (defaults to Java)
          const l = lang.toLowerCase();
          let compilerUrl = 'https://www.programiz.com/java-programming/online-compiler/';
          if (l === 'python' || l === 'py') {
            compilerUrl = 'https://www.programiz.com/python-programming/online-compiler/';
          } else if (l === 'c') {
            compilerUrl = 'https://www.programiz.com/c-programming/online-compiler/';
          } else if (l === 'cpp' || l === 'c++') {
            compilerUrl = 'https://www.programiz.com/cpp-programming/online-compiler/';
          } else if (l === 'javascript' || l === 'js') {
            compilerUrl = 'https://www.programiz.com/javascript/online-compiler/';
          } else if (l === 'sql') {
            compilerUrl = 'https://www.programiz.com/sql/online-compiler/';
          }

          window.open(compilerUrl, '_blank');

          setTimeout(() => {
            runBtn.classList.remove('running');
            runBtn.innerHTML = `
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Run Code</span>
            `;
          }, 2500);
        });

        actionsContainer.appendChild(runBtn);
      }

      wrapper.appendChild(actionsContainer);
    });
  }

  async renderMermaidDiagrams(): Promise<void> {
    if (typeof window === 'undefined') return;
    try {
      mermaid.initialize(this.customMermaidOptions as any);
      setTimeout(async () => {
        try {
          const unprocessed = document.querySelectorAll('.mermaid:not([data-processed="true"])');
          if (unprocessed.length > 0) {
            await mermaid.run({ nodes: Array.from(unprocessed) as HTMLElement[] });
          }
        } catch (e) {
          console.debug('Mermaid render run note:', e);
        } finally {
          this.enhanceMermaidDiagrams();
        }
      }, 100);

      setTimeout(() => this.enhanceMermaidDiagrams(), 400);
      setTimeout(() => this.enhanceMermaidDiagrams(), 1000);
    } catch (e) {
      console.error('Mermaid initialization error:', e);
    }
  }

  enhanceMermaidDiagrams(): void {
    if (typeof document === 'undefined') return;
    const containers = document.querySelectorAll('.mermaid');
    containers.forEach((container: Element) => {
      const el = container as HTMLElement;

      const svg = el.querySelector('svg');
      if (!svg) return;

      // Ensure all foreignObjects and child containers have overflow: visible and adequate width/height so text is never truncated
      svg.style.overflow = 'visible';
      svg.querySelectorAll('foreignObject').forEach(fo => {
        (fo as SVGElement).style.overflow = 'visible';
        const div = fo.querySelector('div');
        if (!div) return;
        (div as HTMLElement).style.overflow = 'visible';

        // Check if already adjusted to prevent compounding translations on repeated timeout calls
        if (fo.getAttribute('data-adjusted') === 'true') return;

        const span = div.querySelector('span') || div;
        const scrollWidth = Math.max(div.scrollWidth, span.scrollWidth, div.getBoundingClientRect().width);
        const currentWidth = parseFloat(fo.getAttribute('width') || '0');

        if (scrollWidth > currentWidth) {
          fo.setAttribute('data-adjusted', 'true');
          const extra = Math.ceil(scrollWidth - currentWidth) + 16;
          fo.setAttribute('width', `${currentWidth + extra}`);

          // If parent is g.label with translate(-width/2, ...), re-center it horizontally
          const parentG = fo.parentElement;
          if (parentG && parentG.tagName.toLowerCase() === 'g' && parentG.classList.contains('label')) {
            const transform = parentG.getAttribute('transform');
            if (transform) {
              const match = /translate\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)/.exec(transform);
              if (match) {
                const currentX = parseFloat(match[1]);
                const currentY = parseFloat(match[2]);
                parentG.setAttribute('transform', `translate(${currentX - extra / 2}, ${currentY})`);
              }
            }
          }
        }
        const scrollHeight = Math.max(div.scrollHeight, div.getBoundingClientRect().height);
        const currentHeight = parseFloat(fo.getAttribute('height') || '0');
        if (scrollHeight > currentHeight) {
          fo.setAttribute('height', `${scrollHeight + 6}`);
        }
      });

      if (el.getAttribute('data-enhanced') === 'true') return;

      el.setAttribute('data-enhanced', 'true');
      el.classList.add('mermaid-interactive-container');

      // Double-click to isolate and zoom
      el.addEventListener('dblclick', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        this.openMermaidModal(el);
      });

      // Floating button in top-right corner
      const btn = document.createElement('button');
      btn.className = 'mermaid-expand-floating-btn';
      btn.setAttribute('type', 'button');
      btn.setAttribute('title', 'Double-click or click to isolate, zoom & pan diagram');
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
        <span>Isolate & Zoom</span>
      `;
      btn.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        this.openMermaidModal(el);
      });

      el.appendChild(btn);
    });
  }

  openMermaidModal(container: HTMLElement): void {
    const svg = container.querySelector('svg');
    if (!svg) return;

    this.isMermaidModalOpen = true;
    this.modalZoom = 1.0;
    this.modalPanX = 0;
    this.modalPanY = 0;
    this.isDragging = false;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }

    setTimeout(() => {
      if (this.modalDiagramHost && this.modalDiagramHost.nativeElement) {
        const host = this.modalDiagramHost.nativeElement;
        host.innerHTML = '';
        const clone = svg.cloneNode(true) as SVGSVGElement;
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.style.width = '100%';
        clone.style.height = 'auto';
        clone.style.maxWidth = '100%';
        clone.style.maxHeight = '100%';
        clone.style.overflow = 'visible';
        clone.style.pointerEvents = 'none';
        host.appendChild(clone);
      }
    }, 50);
  }

  closeMermaidModal(): void {
    this.isMermaidModalOpen = false;
    this.isDragging = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  zoomIn(): void {
    this.modalZoom = Math.min(Math.round((this.modalZoom + 0.25) * 100) / 100, 5.0);
  }

  zoomOut(): void {
    this.modalZoom = Math.max(Math.round((this.modalZoom - 0.25) * 100) / 100, 0.25);
  }

  resetZoom(): void {
    this.modalZoom = 1.0;
    this.modalPanX = 0;
    this.modalPanY = 0;
  }

  onModalWheel(event: WheelEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const factor = event.deltaY < 0 ? 0.15 : -0.15;
    const newZoom = Math.min(Math.max(0.25, this.modalZoom + factor), 5.0);
    this.modalZoom = Math.round(newZoom * 100) / 100;
  }

  startDrag(event: MouseEvent): void {
    if (event.button !== 0) return;
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.initialPanX = this.modalPanX;
    this.initialPanY = this.modalPanY;
  }

  onDrag(event: MouseEvent): void {
    if (!this.isDragging) return;
    const dx = event.clientX - this.dragStartX;
    const dy = event.clientY - this.dragStartY;
    this.modalPanX = this.initialPanX + dx;
    this.modalPanY = this.initialPanY + dy;
  }

  endDrag(): void {
    this.isDragging = false;
  }

  startTouchDrag(event: TouchEvent): void {
    if (event.touches.length === 1) {
      this.isDragging = true;
      this.dragStartX = event.touches[0].clientX;
      this.dragStartY = event.touches[0].clientY;
      this.initialPanX = this.modalPanX;
      this.initialPanY = this.modalPanY;
    } else if (event.touches.length === 2) {
      this.isDragging = false;
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.touchStartDist = Math.hypot(dx, dy);
    }
  }

  onTouchDrag(event: TouchEvent): void {
    if (event.touches.length === 1 && this.isDragging) {
      const dx = event.touches[0].clientX - this.dragStartX;
      const dy = event.touches[0].clientY - this.dragStartY;
      this.modalPanX = this.initialPanX + dx;
      this.modalPanY = this.initialPanY + dy;
    } else if (event.touches.length === 2 && this.touchStartDist > 0) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const currentDist = Math.hypot(dx, dy);
      const scaleChange = (currentDist - this.touchStartDist) * 0.005;
      this.modalZoom = Math.min(Math.max(0.25, this.modalZoom + scaleChange), 5.0);
      this.touchStartDist = currentDist;
    }
  }

  // Quiz methods
  startQuiz(): void {
    this.quizActive = true;
    this.quizCompleted = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedOption = null;
    this.showFeedback = false;
    this.scoreSaved = false;
  }

  selectQuizOption(index: number): void {
    if (this.showFeedback) return;
    this.selectedOption = index;
    this.showFeedback = true;
    if (index === this.mcqsList[this.currentQuestionIndex]?.correctIndex) {
      this.score++;
    }
  }

  nextQuizQuestion(): void {
    this.selectedOption = null;
    this.showFeedback = false;
    if (this.currentQuestionIndex < this.mcqsList.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizCompleted = true;
      this.saveScoreIfNeeded();
    }
  }

  saveScoreIfNeeded(): void {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      const dialogRef = this.dialog.open(AuthDialogComponent, {
        data: {
          message: 'Sign in with Google to record your score on the leaderboard!'
        },
        width: '420px'
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res?.token) {
          this.saveScoreIfNeeded();
        }
      });
      return;
    }
    this.apiService.saveScore(this.subtopicId, this.score, this.mcqsList.length).subscribe({
      next: () => {
        this.scoreSaved = true;
      },
      error: (err) => console.error('Failed to save score:', err)
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMermaidModalOpen) {
      this.closeMermaidModal();
      return;
    }
    if (event.key === 'f' && (event.ctrlKey || event.metaKey)) return;
    if (event.key === 'p' && event.altKey) {
      this.togglePresentationMode();
    }
  }
}
