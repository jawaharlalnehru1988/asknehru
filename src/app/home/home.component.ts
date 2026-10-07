import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import gsap from 'gsap';

import { FluidAuroraComponent } from '../shared/animations/fluid-aurora/fluid-aurora.component';
import { Tilt3dDirective } from '../shared/animations/tilt-3d.directive';
import { SpotlightDirective } from '../shared/animations/spotlight.directive';
import { CountUpDirective } from '../shared/animations/count-up.directive';
import { BorderBeamDirective } from '../shared/animations/border-beam.directive';

export interface EnterpriseExperience {
  id: string;
  company: string;
  shortName: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  logoIcon: string;
  badgeGradient: string;
  primaryHighlight: string;
  impactMetrics: { value: string; label: string }[];
  keyAchievements: string[];
  projectsMentioned: string[];
  techStack: string[];
}

export interface ProjectShowcase {
  id: string;
  name: string;
  category: string;
  badge: string;
  type: 'screenshot' | 'iframe' | 'mobile';
  url?: string;
  safeUrl?: SafeResourceUrl;
  screenshot?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    FluidAuroraComponent,
    Tilt3dDirective,
    SpotlightDirective,
    CountUpDirective,
    BorderBeamDirective
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  selectedProjectId: string = 'business';
  selectedExperienceId: string = 'bayer';

  enterpriseExperiences: EnterpriseExperience[] = [
    {
      id: 'bayer',
      company: 'Bayer CropScience Pvt Ltd',
      shortName: 'Bayer',
      role: 'Software Engineer — Full Stack & Agentic AI',
      period: 'Dec 2025 – Present',
      location: 'Bangalore, India',
      current: true,
      logoIcon: '🌱',
      badgeGradient: 'from-emerald-500 to-teal-500',
      primaryHighlight: 'Agentic AI Platform (LangGraph) & 28% Front-End Load Time Reduction',
      impactMetrics: [
        { value: '-28%', label: 'UI Load Time' },
        { value: 'Agentic AI', label: 'LangGraph Multi-Agent' },
        { value: 'Enterprise', label: 'Real-Time Workflows' }
      ],
      keyAchievements: [
        'Designed and developed an Agentic AI platform using LangGraph and multi-agent coordination architecture.',
        'Developed scalable Angular UI components, dramatically improving rendering performance and cutting load times by 28%.',
        'Engineered dynamic UI generation REST APIs using Spring Boot to support complex user interaction pipelines.',
        'Handled enterprise-scale applications with high-volume data streams and mission-critical responsiveness.'
      ],
      projectsMentioned: [
        'Design Agent Platform (LangGraph)',
        'Dynamic UI Generation REST Pipeline'
      ],
      techStack: ['Angular 20+', 'Spring Boot', 'LangGraph', 'Multi-Agent AI', 'PostgreSQL', 'RxJS', 'Docker']
    },
    {
      id: 'hcltech',
      company: 'HCLTech Pvt Ltd',
      shortName: 'HCLTech',
      role: 'Lead Engineer — Full Stack Developer',
      period: 'Mar 2025 – Dec 2025',
      location: 'Bangalore, India',
      current: false,
      logoIcon: '🏢',
      badgeGradient: 'from-blue-600 to-indigo-600',
      primaryHighlight: 'Enterprise Microservices, Scalable Modules & Full-Stack Leadership',
      impactMetrics: [
        { value: 'Lead', label: 'Engineering Role' },
        { value: 'REST API', label: 'High-Throughput Services' },
        { value: 'Full-Stack', label: 'Angular + Spring Boot' }
      ],
      keyAchievements: [
        'Spearheaded enterprise application feature modules utilizing modern Angular and Spring Boot architectures.',
        'Designed resilient, secure RESTful APIs and established streamlined frontend-to-backend service contracts.',
        'Led sprint technical evaluations, code reviews, and enterprise release deliveries.'
      ],
      projectsMentioned: [
        'Enterprise Application Modernization',
        'Scalable REST Services Layer'
      ],
      techStack: ['Angular', 'Spring Boot', 'Microservices', 'REST APIs', 'PostgreSQL', 'Git']
    },
    {
      id: 'rebit',
      company: 'Reserve Bank Information Technology (ReBIT)',
      shortName: 'ReBIT',
      role: 'Development Engineer — Fullstack Developer',
      period: 'Dec 2023 – Feb 2025',
      location: 'Bangalore, India',
      current: false,
      logoIcon: '🏛️',
      badgeGradient: 'from-amber-500 to-orange-600',
      primaryHighlight: 'Master Data Management (MDM) with TDD & Next Gen Core Banking (NGCB)',
      impactMetrics: [
        { value: '100% TDD', label: 'Test-Driven Reliability' },
        { value: 'Banking', label: 'Mission-Critical Compliance' },
        { value: 'Clean Arch', label: 'Layered Domain Design' }
      ],
      keyAchievements: [
        'Designed and implemented core modules for the Master Data Management (MDM) system using Test-Driven Development (TDD), boosting system reliability.',
        'Engineered full-stack modules for NGCB (Next Generation Core Banking), implementing high-security REST APIs for financial data processing.',
        'Developed responsive Angular interfaces accompanied by rigorous unit test coverage in Jasmine and Karma.',
        'Followed Clean Architecture principles and layered domain design for rock-solid banking service scalability.'
      ],
      projectsMentioned: [
        'Master Data Management System (MDM)',
        'Next Gen Core Banking (NGCB)'
      ],
      techStack: ['Angular', 'Spring Boot', 'TDD (Jasmine/Karma)', 'Clean Architecture', 'PostgreSQL', 'Spring Security']
    },
    {
      id: 'ninjacart',
      company: 'Wolken Software & Ninjacart',
      shortName: 'Ninjacart',
      role: 'Full Stack / Frontend Engineer',
      period: '2022 – 2023',
      location: 'Bangalore, India',
      current: false,
      logoIcon: '⚡',
      badgeGradient: 'from-violet-600 to-purple-600',
      primaryHighlight: 'High-Throughput Supply Chain Logistics & Component Library Architecture',
      impactMetrics: [
        { value: 'Supply Chain', label: 'Real-Time Logistics' },
        { value: 'Component', label: 'Reusable Architecture' },
        { value: 'Agile', label: 'Rapid Sprint Delivery' }
      ],
      keyAchievements: [
        'Developed Angular-based user interfaces handling complex supply-chain logistics, live inventory metrics, and fast user workflows.',
        'Constructed reusable component systems that accelerated sprint feature delivery across cross-functional teams.',
        'Optimized client-side state handling and API data streaming via RxJS observables and functional operators.'
      ],
      projectsMentioned: [
        'Supply Chain Operations Dashboard',
        'Enterprise SaaS Component Suite'
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'SCSS', 'Git']
    }
  ];

  consultingPillars = [
    {
      icon: 'architecture',
      title: 'Product Counseling & Architecture',
      subtitle: 'From Concept to Scalable System',
      description: 'I counsel startups and business owners on transforming rough ideas into production-ready software architectures, database schemas, and milestone-driven technical roadmaps.'
    },
    {
      icon: 'layers',
      title: 'Full-Stack Web & Cloud Systems',
      subtitle: 'Modern, Resilient Codebases',
      description: 'Over 4+ years building high-throughput web applications with Angular, React, Next.js, Spring Boot, Node.js, and Python/Django. Clean architecture, automated testing, and scalable microservices.'
    },
    {
      icon: 'smartphone',
      title: 'Native Android Mobile Engineering',
      subtitle: 'Modern Kotlin & Jetpack Compose',
      description: 'Capable of engineering native, fluid Android mobile applications using Kotlin, Jetpack Compose, Room database, Coroutines, and cloud data synchronization.'
    },
    {
      icon: 'cloud_done',
      title: 'Cloud Deployment & DevOps',
      subtitle: 'Zero-Downtime Linux Infrastructure',
      description: 'Production Linux VPS management, Nginx reverse proxy routing, multi-domain SSL/TLS hardening, Docker containerization, and automated CI/CD pipelines.'
    }
  ];

  projects: ProjectShowcase[] = [
    {
      id: 'business',
      name: 'AskNehru Business Suite',
      category: 'Cloud Accounting & ERP',
      badge: 'B2B SaaS / ERP',
      type: 'screenshot',
      url: 'https://business.asknehru.com',
      screenshot: 'assets/image/business-gst-billing.png',
      description: 'A cloud-based GST billing, invoicing, and real-time inventory management platform built for modern Indian businesses. Features automated GST calculations, thermal print receipts, client payment tracking, and low-stock alerts.',
      highlights: [
        'Automated GST Invoicing & Quotations',
        'Real-time Inventory Valuation & Low Stock Alerts',
        'Multi-client Accounts & Payment Ledgers',
        'Barcode Generation & Thermal Printer Ready'
      ],
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Nginx', 'Docker']
    },
    {
      id: 'android-routine',
      name: 'My Routine — Task & Habit Tracker',
      category: 'Native Android Mobile App',
      badge: 'Kotlin & Android Jetpack',
      type: 'mobile',
      screenshot: 'assets/image/android-routine-app.png',
      description: 'A native Android routine, task management, and streak tracking mobile application developed in Kotlin. Designed with Material 3 dark aesthetics, cloud synchronization, priority categorizations, and customizable daily/weekly routines.',
      highlights: [
        'Built Natively with Kotlin & Android SDK',
        'Daily, Weekly, and Monthly Routine Switcher',
        'Cloud Sync & 7-Day Streak Habit Gamification',
        'Priority (Low/Med/High/Urgent) & Category Filters'
      ],
      techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Coroutines', 'Room DB']
    },
    {
      id: 'rjwoodessenz',
      name: 'RJ Wood Essenz',
      category: 'Furniture E-Commerce',
      badge: 'Live E-Commerce',
      type: 'iframe',
      url: 'https://rjwoodessenz.com',
      description: 'A high-converting e-commerce web platform for bespoke handcrafted wooden furniture. Features interactive catalogs, custom dimensions, fast responsive design, and frictionless order placement.',
      highlights: [
        'Interactive Custom Furniture Catalog',
        'Mobile-First Responsive Layout',
        'High-Speed Edge Delivery & Asset Caching',
        'Direct WhatsApp & Web Inquiry Checkout'
      ],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel']
    },
    {
      id: 'vinnavar',
      name: 'Vinnavar',
      category: 'Modern Retail E-Commerce',
      badge: 'Live Marketplace',
      type: 'iframe',
      url: 'https://vinnavar.com',
      description: 'A scalable Direct-to-Consumer (D2C) e-commerce marketplace featuring fast catalog exploration, promotional discount engines, customer cart persistence, and comprehensive admin dashboard.',
      highlights: [
        'High-Throughput Product Catalog',
        'Dynamic Promotional & Discount Offer Engine',
        'Admin Order & Catalog Management',
        'Secure End-to-End API Integration'
      ],
      techStack: ['React', 'FastAPI / Python', 'PostgreSQL', 'Nginx']
    },
    {
      id: 'yogasan',
      name: 'Yogasan Platform',
      category: 'Yoga & Wellness Portal',
      badge: 'Health & Asana Guide',
      type: 'iframe',
      url: 'https://yogasan.asknehru.com',
      description: 'An interactive digital Yoga and Asana wellness portal offering categorized pose libraries, therapeutic benefits, guided posture instructions, and video tutorials.',
      highlights: [
        'Structured Asana & Pranayama Catalog',
        'Anatomical & Health Benefit Breakdowns',
        'Fast Visual Asset Streaming',
        'Mobile-Optimized Practice Routine'
      ],
      techStack: ['Angular', 'Spring Boot', 'Nginx', 'Linux VPS']
    },
    {
      id: 'harekrishnatex',
      name: 'Hare Krishna Tex',
      category: 'Textile & E-Commerce',
      badge: 'Textile Commerce',
      type: 'iframe',
      url: 'https://harekrishnatex.asknehru.com',
      description: 'A specialized online textile and apparel catalog platform providing bulk fabric orders, collection browsing, and direct merchant inquiry capabilities.',
      highlights: [
        'Dynamic Fabric & Apparel Collections',
        'Fast Image Gallery & Product Zoom',
        'Direct WhatsApp & Phone Order Inquiries',
        'Cloud VPS Optimization'
      ],
      techStack: ['Angular', 'Tailwind CSS', 'Nginx', 'PostgreSQL']
    },
    {
      id: 'carnatic',
      name: 'Carnatic Music Learning',
      category: 'Classical Music Portal',
      badge: 'Audio & Music Education',
      type: 'iframe',
      url: 'https://carnatic.askharekrishna.com',
      description: 'A dedicated classical Carnatic music education platform providing structured raga explorations, audio demonstrations, tala breakdowns, and practice exercises.',
      highlights: [
        'Interactive Raga & Tala Visualizer',
        'High-Fidelity Audio Demonstration Streaming',
        'Categorized Vocal & Instrumental Lessons',
        'Fast Responsive Player'
      ],
      techStack: ['Next.js / React', 'HTML5 Audio API', 'Django REST', 'Nginx']
    },
    {
      id: 'kirtan',
      name: 'Kirtan Streaming Library',
      category: 'Audio Streaming Portal',
      badge: 'Devotional Audio',
      type: 'iframe',
      url: 'https://kirtan.askharekrishna.com',
      description: 'A streaming audio repository offering categorized bhajans, mantras, and kirtan recordings with continuous playlist playback and offline caching.',
      highlights: [
        'Continuous Audio Playlist Engine',
        'Artist & Album Categorization',
        'Global CDN Fast Media Delivery',
        'Responsive Mobile Player Controls'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Nginx']
    },
    {
      id: 'brahmacharya',
      name: 'Brahmacharya Platform',
      category: 'Lifestyle & Mind Mastery',
      badge: 'Holistic Wellness',
      type: 'iframe',
      url: 'https://brahmacharya.askharekrishna.com',
      description: 'A comprehensive lifestyle, wellness, and mind-mastery platform offering authentic Vedic guidance, habit tracking insights, and spiritual practices.',
      highlights: [
        'Guided Mind Mastery & Discipline Articles',
        'Interactive Habit & Mindset Modules',
        'Multi-lingual Spiritual Insights',
        'Fast Accessible Reading View'
      ],
      techStack: ['Next.js', 'Django REST Framework', 'PostgreSQL', 'Nginx']
    },
    {
      id: 'askharekrishna',
      name: 'Ask Hare Krishna',
      category: 'Spiritual & Media Portal',
      badge: 'Media & Community',
      type: 'iframe',
      url: 'https://askharekrishna.com',
      description: 'An expansive multi-lingual cultural and spiritual portal featuring streaming audio libraries, sacred literature readers, chapter-by-chapter navigators, and community discussion boards.',
      highlights: [
        'Streaming Audio Player with Continuous Playback',
        'Multi-lingual Reader (Tamil, Hindi, English, Sanskrit)',
        'Server-Side Rendered for Global SEO Reach',
        'Cloud-Hosted High Capacity Media Streaming'
      ],
      techStack: ['Next.js 14', 'Django REST Framework', 'PostgreSQL', 'Linux VPS']
    },
    {
      id: 'abloli',
      name: 'Abloli Platform',
      category: 'Digital Services & Web',
      badge: 'Live Web Platform',
      type: 'iframe',
      url: 'https://abloli.in',
      description: 'A modern web platform showcasing digital solutions and services. Optimized for lightning-fast first contentful paint, SEO discoverability, and high accessibility across all devices.',
      highlights: [
        'Clean, Modern UI/UX Design',
        'Lighthouse Performance Optimization',
        'Responsive Mobile-First Architecture',
        'Custom Cloud Deployment'
      ],
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Nginx']
    }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private ngZone: NgZone,
    private hostEl: ElementRef
  ) {}

  ngOnInit(): void {
    // Sanitize iframe URLs
    this.projects.forEach(project => {
      if (project.type === 'iframe' && project.url) {
        project.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.url);
      }
    });
  }

  ngAfterViewInit(): void {
    this.initHeroEntranceAnimations();
  }

  private initHeroEntranceAnimations(): void {
    this.ngZone.runOutsideAngular(() => {
      const root = this.hostEl.nativeElement;
      const statusPill = root.querySelector('.status-pill');
      const heroHeadings = root.querySelectorAll('.hero-headline, .hero-subheadline');
      const heroBio = root.querySelector('.hero-bio');
      const ctaButtons = root.querySelectorAll('.cta-btn-group > *');
      const metricItems = root.querySelectorAll('.metric-item');
      const avatarFrame = root.querySelector('.avatar-ring-container');
      const floatingBadges = root.querySelectorAll('.floating-badge');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.85 } });

      if (statusPill) {
        tl.from(statusPill, { y: -20, opacity: 0, duration: 0.6 });
      }
      if (heroHeadings.length) {
        tl.from(heroHeadings, { y: 25, opacity: 0, stagger: 0.12 }, '-=0.35');
      }
      if (heroBio) {
        tl.from(heroBio, { y: 20, opacity: 0, duration: 0.65 }, '-=0.35');
      }
      if (ctaButtons.length) {
        tl.from(ctaButtons, { y: 15, opacity: 0, stagger: 0.08, duration: 0.55 }, '-=0.4');
      }
      if (metricItems.length) {
        tl.from(metricItems, { y: 20, opacity: 0, stagger: 0.08, duration: 0.65 }, '-=0.4');
      }
      if (avatarFrame) {
        tl.from(avatarFrame, { scale: 0.9, opacity: 0, duration: 0.9, ease: 'back.out(1.4)' }, '-=0.75');
      }
      if (floatingBadges.length) {
        tl.from(floatingBadges, { scale: 0.65, opacity: 0, stagger: 0.12, duration: 0.75, ease: 'back.out(1.6)' }, '-=0.5');
      }
    });
  }

  get selectedExperience(): EnterpriseExperience {
    return this.enterpriseExperiences.find(e => e.id === this.selectedExperienceId) || this.enterpriseExperiences[0];
  }

  selectExperience(id: string): void {
    if (this.selectedExperienceId === id) return;
    this.selectedExperienceId = id;
    this.ngZone.runOutsideAngular(() => {
      const card = this.hostEl.nativeElement.querySelector('.active-experience-card');
      if (card) {
        gsap.fromTo(card, { opacity: 0.35, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      }
    });
  }

  get selectedProject(): ProjectShowcase {
    return this.projects.find(p => p.id === this.selectedProjectId) || this.projects[0];
  }

  selectProject(id: string): void {
    this.selectedProjectId = id;
  }

  scrollToShowcase(): void {
    const el = document.getElementById('portfolio-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
