export type Language = 'en' | 'kn';
export type Theme = 'light' | 'dark' | 'system';

export type NavView = 
  | 'home' 
  | 'explore' 
  | 'journey' 
  | 'simulator' 
  | 'glossary' 
  | 'quiz' 
  | 'mythfact' 
  | 'ai' 
  | 'about';

export interface ElectionStage {
  id: string;
  order: number;
  title: { en: string; kn: string };
  shortDesc: { en: string; kn: string };
  whatHappens: { en: string; kn: string };
  whyItMatters: { en: string; kn: string };
  whoIsInvolved: { en: string; kn: string };
  rules: { en: string; kn: string }[];
  terms: string[];
  sources: { title: string; url?: string }[];
  phase: 'before' | 'during' | 'after';
}

export interface GlossaryTerm {
  id: string;
  term: { en: string; kn: string };
  category: 'basics' | 'voting' | 'process' | 'counting' | 'terminology' | 'faqs';
  definition: { en: string; kn: string };
  whyItMatters: { en: string; kn: string };
  example?: { en: string; kn: string };
  relatedTerms?: string[];
}

export interface QuizQuestion {
  id: string;
  question: { en: string; kn: string };
  options: { en: string[]; kn: string[] };
  correctIndex: number;
  explanation: { en: string; kn: string };
  topicTag: string;
}

export interface MythFactItem {
  id: string;
  statement: { en: string; kn: string };
  isFact: boolean;
  verdict: { en: string; kn: string };
  explanation: { en: string; kn: string };
  source: string;
  category: string;
}

export interface SimulatorCandidate {
  id: string;
  name: string;
  title: string;
  focus: string;
  symbol: string;
  badgeColor: string;
  keyPledge: string;
}

export interface LearningProgress {
  visitedStages: string[];
  viewedGlossaryTerms: string[];
  quizzesCompleted: { score: number; total: number; timestamp: number }[];
  simulatorCompleted: boolean;
  mythsChecked: string[];
}
