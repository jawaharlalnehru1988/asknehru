import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  imports: [CommonModule, RouterLink, MatCardModule]
})
export class HomeComponent implements OnInit {
  selectedProjectId: string = 'business';

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

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize iframe URLs
    this.projects.forEach(project => {
      if (project.type === 'iframe' && project.url) {
        project.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.url);
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
