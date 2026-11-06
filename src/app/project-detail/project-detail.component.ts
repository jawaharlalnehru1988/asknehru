import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Project } from '../home/homejson';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { FormsModule } from '@angular/forms';
import { AudioPlayerComponent } from '../shared/audio-player/audio-player.component';

import { environment } from '../../environments/environment';
import { forkJoin } from 'rxjs';
import mermaid from 'mermaid';

if (typeof window !== 'undefined') {
    (window as any).mermaid = mermaid;
}

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink, MarkdownModule, FormsModule, AudioPlayerComponent],
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    roadmap: any;
    loading: boolean = true;
    error: string | null = null;
    copiedId: number | null = null;
    apiBaseUrl: string = environment.apiBaseUrl;

    isUserLoggedIn: boolean = false;
    totalRoadmapScore: number = 0;
    totalRoadmapQuestions: number = 0;
    subtopicScores: { [subtopicId: number]: { score: number, totalQuestions: number } } = {};

    private guestTimer: any;
    // 5 minutes for production
    private readonly GUEST_TIME_LIMIT_MS = 300000;

    explainedSubtopicIds: Set<number> = new Set();
    loadingSubtopics: Set<number> = new Set();
    activeExplanation: any = null;
    drawerOpen: boolean = false;
    currentSubtopicName: string = '';

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
    isSavingScore: boolean = false;
    scoreSaved: boolean = false;

    // Chat properties
    isChatOpen: boolean = false;
    chatInput: string = '';
    chatMessages: {role: string, content: string}[] = [];
    isSendingMessage: boolean = false;

    // Audio upload per-subtopic state
    // key = subtopicId, value = 'uploading' | 'done' | 'error'
    audioUploadState: { [subtopicId: number]: string } = {};

    // Super admin flag — mic/upload button only shown to super admin
    isSuperAdmin: boolean = false;

    // Web Speech API TTS state (fallback when no recorded audio)
    isSpeaking: boolean = false;
    speechSupported: boolean = typeof window !== 'undefined' && 'speechSynthesis' in window;
    private utterances: SpeechSynthesisUtterance[] = [];
    
    // Continuous Playback state
    isContinuousPlayActive: boolean = false;
    autoGenerateRemaining: number = 0;
    autoPlayPending: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    openTopicArticle(subtopic: any) {
        const id = this.route.snapshot.paramMap.get('id') || '5';
        this.saveScrollPosition();
        this.router.navigate(['/project', id, 'topic', subtopic.id]);
    }

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
            padding: 24,
            nodeSpacing: 50,
            rankSpacing: 60,
            wrappingWidth: 260
        }
    };

    onMarkdownReady(): void {
        this.renderMermaidDiagrams();
        setTimeout(() => {
            this.enhanceCodeBlocks();
        }, 120);
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
            svg.style.overflow = 'visible';
            svg.querySelectorAll('foreignObject').forEach(fo => {
                (fo as SVGElement).style.overflow = 'visible';
                const div = fo.querySelector('div');
                if (!div) return;
                (div as HTMLElement).style.overflow = 'visible';
            });
        });
    }

    enhanceCodeBlocks(): void {
        if (typeof document === 'undefined') return;
        const preElements = document.querySelectorAll('.premium-markdown pre:not([data-copy-enhanced="true"])');
        
        preElements.forEach((preElement: Element) => {
            const pre = preElement as HTMLElement;
            pre.setAttribute('data-copy-enhanced', 'true');

            // Detect language from code class (e.g. language-java)
            const codeEl = pre.querySelector('code');
            let lang = 'code';
            if (codeEl) {
                const langClass = Array.from(codeEl.classList).find(c => c.startsWith('language-'));
                if (langClass) {
                    lang = langClass.replace('language-', '');
                }
            }

            // Create wrapper container
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';

            // Insert wrapper before pre and move pre inside
            pre.parentNode?.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            // Add language label
            const label = document.createElement('span');
            label.className = 'code-lang-label';
            label.textContent = lang;
            wrapper.appendChild(label);

            // Actions container for buttons
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'code-actions';

            // Add copy button
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

    @HostListener('window:beforeunload')
    saveScrollPosition() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            sessionStorage.setItem('roadmapScrollPos_' + id, window.scrollY.toString());
        }
    }

    ngOnDestroy() {
        this.saveScrollPosition();
        if (this.guestTimer) {
            clearTimeout(this.guestTimer);
        }
        this.stopSpeaking();
    }

    ngOnInit(): void {
        this.isSuperAdmin = this.apiService.isSuperAdmin();
        this.apiService.authState$.subscribe(state => {
            this.isUserLoggedIn = state;
            if (state && this.roadmap) {
                this.loadScores();
            } else {
                this.clearScores();
            }
        });

        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadRoadmap(+id);
                this.loadExplainedSubtopics();
                this.startGuestTimer();
            } else {
                this.error = "Roadmap ID not found.";
                this.loading = false;
            }
        });
    }

    clearScores() {
        this.totalRoadmapScore = 0;
        this.totalRoadmapQuestions = 0;
        this.subtopicScores = {};
    }

    loadScores() {
        if (!this.isUserLoggedIn || !this.roadmap) return;
        
        forkJoin({
            conversations: this.apiService.getConversations(),
            scores: this.apiService.getUserScores()
        }).subscribe({
            next: ({ conversations, scores }) => {
                let roadmapSubtopicIds: number[] = [];
                if (this.roadmap.chapters) {
                    this.roadmap.chapters.forEach((ch: any) => {
                        if (ch.subtopics) {
                            ch.subtopics.forEach((sub: any) => roadmapSubtopicIds.push(sub.id));
                        }
                    });
                }
                
                const roadmapConversations = conversations.filter((conv: any) => roadmapSubtopicIds.includes(conv.subtopicId));
                
                this.subtopicScores = {};
                this.totalRoadmapQuestions = 0;
                
                roadmapConversations.forEach((conv: any) => {
                    let mcqsCount = 0;
                    try {
                        const mcqs = JSON.parse(conv.mcqs || '[]');
                        mcqsCount = mcqs.length;
                    } catch (e) {}
                    
                    if (mcqsCount > 0) {
                        this.subtopicScores[conv.subtopicId] = {
                            score: 0,
                            totalQuestions: mcqsCount
                        };
                        this.totalRoadmapQuestions += mcqsCount;
                    }
                });
                
                this.totalRoadmapScore = 0;
                scores.forEach((s: any) => {
                    if (this.subtopicScores[s.subtopicId]) {
                        this.subtopicScores[s.subtopicId].score = s.score || 0;
                        this.totalRoadmapScore += s.score || 0;
                    } else if (roadmapSubtopicIds.includes(s.subtopicId)) {
                        this.subtopicScores[s.subtopicId] = {
                            score: s.score || 0,
                            totalQuestions: s.totalQuestions || 0
                        };
                        this.totalRoadmapScore += s.score || 0;
                        this.totalRoadmapQuestions += s.totalQuestions || 0;
                    }
                });
            },
            error: (err) => console.error('Error fetching scores:', err)
        });
    }

    startGuestTimer() {
        if (typeof window !== 'undefined' && window.localStorage && !localStorage.getItem('token')) {
            this.guestTimer = setTimeout(() => {
                if (!localStorage.getItem('token')) {
                    this.dialog.open(AuthDialogComponent, {
                        data: { 
                            message: 'Please sign in with Google to store your score and track your mastery of a subject!' 
                        },
                        width: '420px'
                    });
                }
            }, this.GUEST_TIME_LIMIT_MS);
        }
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
                
                if (this.isUserLoggedIn) {
                    this.loadScores();
                }
                
                // Restore scroll position after a short delay to ensure DOM is updated
                setTimeout(() => {
                    const savedPos = sessionStorage.getItem('roadmapScrollPos_' + id);
                    if (savedPos) {
                        window.scrollTo({ top: parseInt(savedPos, 10), behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 100);
            },
            error: (err) => {
                console.error(err);
                this.error = "Failed to load roadmap.";
                this.loading = false;
            }
        });
    }

    explainOrRead(subtopic: any) {
        if (!this.autoPlayPending) {
            this.stopSpeaking();
        }
        
        if (!this.explainedSubtopicIds.has(subtopic.id) && this.drawerOpen) {
            this.activeExplanation = {
                subtopicId: subtopic.id,
                article: '## Generating topic...\n\n_Please wait ~10-15 seconds while the AI creates this explanation._ ⏳'
            };
        }

        this.currentSubtopicName = subtopic.subtopicName;
        this.loadingSubtopics.add(subtopic.id);
        this.apiService.explainSubtopic(subtopic.id).subscribe({
            next: (res) => {
                this.activeExplanation = res;
                this.explainedSubtopicIds.add(subtopic.id);
                this.drawerOpen = true;
                this.loadingSubtopics.delete(subtopic.id);
                
                if (this.autoPlayPending) {
                    this.autoPlayPending = false;
                    setTimeout(() => {
                        this.speakArticle(true);
                    }, 500);
                }
            },
            error: (err) => {
                console.error(err);
                this.loadingSubtopics.delete(subtopic.id);
                if (this.drawerOpen && this.activeExplanation?.subtopicId === subtopic.id) {
                    this.activeExplanation.article = '## Error\n\nFailed to generate this topic. Please try again.';
                }
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
        this.submitAnswer();
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
            this.handleQuizCompletion();
        }
    }

    handleQuizCompletion() {
        const token = localStorage.getItem('token');
        if (token) {
            this.saveScore();
        } else {
            const dialogRef = this.dialog.open(AuthDialogComponent, {
                width: '400px',
                data: { mode: 'login' }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result && result.token) {
                    localStorage.setItem('token', result.token);
                    this.saveScore();
                }
            });
        }
    }

    saveScore() {
        if (!this.activeExplanation || !this.activeExplanation.subtopicId) return;
        this.isSavingScore = true;
        this.apiService.saveScore(this.activeExplanation.subtopicId, this.score, this.mcqsList.length).subscribe({
            next: () => {
                this.isSavingScore = false;
                this.scoreSaved = true;
            },
            error: (err) => {
                console.error('Failed to save score', err);
                this.isSavingScore = false;
            }
        });
    }

    resetQuiz() {
        this.quizStarted = false;
        this.quizCompleted = false;
        this.mcqsList = [];
    }

    closeDrawer() {
        this.drawerOpen = false;
        this.stopSpeaking();
        this.activeExplanation = null;
        this.quizStarted = false;
        this.quizCompleted = false;
        this.mcqsList = [];
        this.isChatOpen = false;
        this.chatMessages = [];
        this.chatInput = '';
    }

    toggleChat() {
        this.isChatOpen = !this.isChatOpen;
    }

    // ── Audio upload ───────────────────────────────────────────────────

    /** Programmatically click the hidden file input for a given subtopic. */
    triggerAudioInput(subtopicId: number): void {
        const input = document.getElementById('audio-input-' + subtopicId) as HTMLInputElement | null;
        input?.click();
    }

    /**
     * Called when the user picks/records a file via the hidden input.
     * Uploads to the existing conversation entry for the subtopic.
     */
    onAudioFileSelected(event: Event, subtopicId: number): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        // Find the conversation ID for this subtopic from activeExplanation
        // We must first ensure the conversation exists (explainSubtopic creates it)
        this.audioUploadState[subtopicId] = 'uploading';

        // If the conversation isn't loaded yet, explain first then upload
        const doUpload = (conversationId: number) => {
            this.apiService.uploadSubtopicAudio(conversationId, file).subscribe({
                next: (updated: any) => {
                    this.audioUploadState[subtopicId] = 'done';
                    // If drawer is open for this subtopic, refresh the audio URL
                    if (this.activeExplanation && this.activeExplanation.subtopicId === subtopicId) {
                        this.activeExplanation = { ...this.activeExplanation, articleAudio: updated.articleAudio };
                    }
                    // Reset input so same file can be re-selected
                    input.value = '';
                    setTimeout(() => { this.audioUploadState[subtopicId] = 'done'; }, 3000);
                },
                error: () => {
                    this.audioUploadState[subtopicId] = 'error';
                    input.value = '';
                }
            });
        };

        if (this.activeExplanation && this.activeExplanation.subtopicId === subtopicId) {
            doUpload(this.activeExplanation.id);
        } else {
            // Explain subtopic first to get/create the conversation entry
            this.apiService.explainSubtopic(subtopicId).subscribe({
                next: (res: any) => doUpload(res.id),
                error: () => { this.audioUploadState[subtopicId] = 'error'; }
            });
        }
    }

    triggerDrawerAudioUpload(): void {
        const input = document.getElementById('drawer-audio-upload') as HTMLInputElement | null;
        input?.click();
    }

    onAudioUploadDrawer(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        // Check if file size is within 15MB limit
        const MAX_SIZE = 15 * 1024 * 1024; // 15MB in bytes
        if (file.size > MAX_SIZE) {
            alert('File size exceeds the maximum limit of 15MB.');
            input.value = '';
            return;
        }

        if (!this.activeExplanation || !this.activeExplanation.id) {
            return;
        }

        const subtopicId = this.activeExplanation.subtopicId;
        this.audioUploadState[subtopicId] = 'uploading';

        this.apiService.uploadSubtopicAudio(this.activeExplanation.id, file).subscribe({
            next: (updated: any) => {
                this.audioUploadState[subtopicId] = 'done';
                if (this.activeExplanation && this.activeExplanation.subtopicId === subtopicId) {
                    this.activeExplanation = { ...this.activeExplanation, articleAudio: updated.articleAudio };
                }
                input.value = '';
                setTimeout(() => { this.audioUploadState[subtopicId] = 'done'; }, 3000);
            },
            error: () => {
                this.audioUploadState[subtopicId] = 'error';
                input.value = '';
                alert('An error occurred during upload. Please try again.');
            }
        });
    }

    sendMessage() {
        if (!this.chatInput.trim() || this.isSendingMessage || !this.activeExplanation) return;
        
        const question = this.chatInput.trim();
        this.chatMessages.push({ role: 'user', content: question });
        this.chatInput = '';
        this.isSendingMessage = true;

        this.apiService.chatAboutSubtopic(this.activeExplanation.subtopicId, question).subscribe({
            next: (res) => {
                this.chatMessages.push({ role: 'assistant', content: res.answer });
                this.isSendingMessage = false;
            },
            error: (err) => {
                console.error("Chat error:", err);
                this.chatMessages.push({ role: 'assistant', content: 'Sorry, I encountered an error while trying to answer your question.' });
                this.isSendingMessage = false;
            }
        });
    }

    // ── Web Speech API TTS fallback ────────────────────────────────────

    speakArticle(isAutoPlay: boolean = false): void {
        if (!this.activeExplanation?.article) return;
        this.stopSpeaking(false);
        
        if (!isAutoPlay) {
            this.isContinuousPlayActive = true;
            this.autoGenerateRemaining = 25;
        }

        if (this.activeExplanation.articleAudio) {
            // We have backend audio, don't use Web Speech TTS.
            // AudioPlayerComponent will pick it up since isContinuousPlayActive is true.
            return;
        }

        if (!this.speechSupported) return;

        // Strip markdown syntax for cleaner speech
        let text = this.activeExplanation.article
            .replace(/#{1,6}\s?/g, '')       // headings
            .replace(/\*\*(.+?)\*\*/g, '$1') // bold
            .replace(/\*(.+?)\*/g, '$1')     // italic
            .replace(/`{1,3}[^`]*`{1,3}/g, '') // code
            .replace(/\[(.+?)\]\(.+?\)/g, '$1') // links
            .replace(/^\s*[-*+]\s/gm, '')    // bullets
            .replace(/\n{2,}/g, '. ')        // paragraph breaks
            .trim();

        // Split text into chunks (by sentence boundaries)
        const chunks = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];

        if (chunks.length > 0) {
            this.isSpeaking = true;
            this.playNextUtterance(0, chunks);
        }
    }

    private playNextUtterance(index: number, chunks: string[]): void {
        if (index >= chunks.length) {
            // Entire article has finished narrating
            this.isSpeaking = false;
            this.onArticleSpeechEnd();
            return;
        }

        if (!this.isSpeaking) {
            return; // Stopped early by user
        }

        const chunkText = chunks[index].trim();
        if (!chunkText) {
            this.playNextUtterance(index + 1, chunks);
            return;
        }

        const utterance = new SpeechSynthesisUtterance(chunkText);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        
        utterance.onend = () => {
            if (this.isSpeaking) {
                // Small timeout allows browser to clear its internal buffer, preventing GC/limit bugs on mobile
                setTimeout(() => {
                    this.playNextUtterance(index + 1, chunks);
                }, 50);
            }
        };

        utterance.onerror = (e) => {
            console.error('TTS Error', e);
            if (this.isSpeaking) {
                this.isSpeaking = false;
                window.speechSynthesis.cancel();
            }
        };

        this.utterances.push(utterance);
        window.speechSynthesis.speak(utterance);
    }

    stopSpeaking(resetContinuousPlay: boolean = true): void {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        this.utterances = [];
        this.isSpeaking = false;
        if (resetContinuousPlay) {
            this.isContinuousPlayActive = false;
            this.autoPlayPending = false;
        }
    }

    get previousSubtopic(): any {
        if (!this.activeExplanation) return null;
        return this.getPreviousSubtopic(this.activeExplanation.subtopicId);
    }

    get nextSubtopic(): any {
        if (!this.activeExplanation) return null;
        return this.getNextSubtopic(this.activeExplanation.subtopicId);
    }

    private getPreviousSubtopic(currentId: number | string): any {
        if (!this.roadmap || !this.roadmap.chapters) return null;
        let previous = null;
        for (const chapter of this.roadmap.chapters) {
            if (!chapter.subtopics) continue;
            for (const sub of chapter.subtopics) {
                if (sub.id == currentId) {
                    return previous;
                }
                previous = sub;
            }
        }
        return null;
    }

    private getNextSubtopic(currentId: number | string): any {
        if (!this.roadmap || !this.roadmap.chapters) return null;
        let foundCurrent = false;
        for (const chapter of this.roadmap.chapters) {
            if (!chapter.subtopics) continue;
            for (const sub of chapter.subtopics) {
                if (foundCurrent) return sub;
                if (sub.id == currentId) {
                    foundCurrent = true;
                }
            }
        }
        return null;
    }

    onBackendAudioStarted(): void {
        this.isContinuousPlayActive = true;
        this.autoGenerateRemaining = 25;
    }

    onBackendAudioEnded(): void {
        this.onArticleSpeechEnd();
    }

    private onArticleSpeechEnd(): void {
        if (!this.isContinuousPlayActive || !this.activeExplanation) return;
        
        const nextSub = this.getNextSubtopic(this.activeExplanation.subtopicId);
        if (!nextSub) {
            this.isContinuousPlayActive = false;
            return; // No more subtopics
        }

        const isGenerated = this.explainedSubtopicIds.has(nextSub.id);
        
        if (isGenerated) {
            this.autoPlayPending = true;
            this.explainOrRead(nextSub);
        } else if (this.autoGenerateRemaining > 0) {
            this.autoGenerateRemaining--;
            this.autoPlayPending = true;
            this.explainOrRead(nextSub);
        } else {
            // Hit the auto-generate limit
            this.isContinuousPlayActive = false;
        }
    }
}
