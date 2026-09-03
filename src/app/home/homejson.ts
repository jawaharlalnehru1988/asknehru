export interface Project {
  id?: number;
  PName: string;
  routerLink?: string;
  PImage: string;
  intro: string;
  mainTopic?: string;
  syllabus?: string;
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  subTopic?: string;
  article?: string;
  positiveConversation?: string;
  negativeConversation?: string;
  chaptersCount?: number;
  subtopicsCount?: number;
  totalScore?: number;
  totalAttemptedQuestions?: number;
  explainedSubtopicsCount?: number;
  generatedMcqsCount?: number;
  category?: string;
  displayOrder?: number;
  chapterTitles?: string[];
  subtopicTitles?: string[];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}