import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, NavView, LearningProgress } from '../types';
import { translations } from '../i18n/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
  fontScale: number;
  setFontScale: (val: number) => void;
  currentView: NavView;
  setCurrentView: (view: NavView) => void;
  progress: LearningProgress;
  markStageVisited: (stageId: string) => void;
  markGlossaryViewed: (termId: string) => void;
  recordQuizScore: (score: number, total: number) => void;
  markSimulatorCompleted: () => void;
  markMythChecked: (mythId: string) => void;
  resetProgress: () => void;
  isA11yModalOpen: boolean;
  setA11yModalOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  t: typeof translations.en;
}

const defaultProgress: LearningProgress = {
  visitedStages: [],
  viewedGlossaryTerms: [],
  quizzesCompleted: [],
  simulatorCompleted: false,
  mythsChecked: []
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('electra_lang') as Language) || 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('electra_theme') as Theme) || 'light';
  });

  const [highContrast, setHighContrastState] = useState<boolean>(() => {
    return localStorage.getItem('electra_high_contrast') === 'true';
  });

  const [reducedMotion, setReducedMotionState] = useState<boolean>(() => {
    return localStorage.getItem('electra_reduced_motion') === 'true';
  });

  const [fontScale, setFontScaleState] = useState<number>(() => {
    const saved = localStorage.getItem('electra_font_scale');
    return saved ? parseFloat(saved) : 1;
  });

  const [currentView, setCurrentView] = useState<NavView>('home');
  const [isA11yModalOpen, setA11yModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [progress, setProgress] = useState<LearningProgress>(() => {
    try {
      const saved = localStorage.getItem('electra_progress');
      return saved ? JSON.parse(saved) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  // Save language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('electra_lang', lang);
    document.documentElement.lang = lang;
  };

  // Save theme
  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('electra_theme', t);
  };

  // Sync theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Sync accessibility options
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-high-contrast', highContrast ? 'true' : 'false');
    root.setAttribute('data-reduced-motion', reducedMotion ? 'true' : 'false');
    root.style.setProperty('--font-scale', fontScale.toString());
  }, [highContrast, reducedMotion, fontScale]);

  const setHighContrast = (val: boolean) => {
    setHighContrastState(val);
    localStorage.setItem('electra_high_contrast', val ? 'true' : 'false');
  };

  const setReducedMotion = (val: boolean) => {
    setReducedMotionState(val);
    localStorage.setItem('electra_reduced_motion', val ? 'true' : 'false');
  };

  const setFontScale = (val: number) => {
    setFontScaleState(val);
    localStorage.setItem('electra_font_scale', val.toString());
  };

  // Progress helpers
  const saveProgress = (updated: LearningProgress) => {
    setProgress(updated);
    localStorage.setItem('electra_progress', JSON.stringify(updated));
  };

  const markStageVisited = (stageId: string) => {
    if (!progress.visitedStages.includes(stageId)) {
      saveProgress({
        ...progress,
        visitedStages: [...progress.visitedStages, stageId]
      });
    }
  };

  const markGlossaryViewed = (termId: string) => {
    if (!progress.viewedGlossaryTerms.includes(termId)) {
      saveProgress({
        ...progress,
        viewedGlossaryTerms: [...progress.viewedGlossaryTerms, termId]
      });
    }
  };

  const recordQuizScore = (score: number, total: number) => {
    saveProgress({
      ...progress,
      quizzesCompleted: [
        ...progress.quizzesCompleted,
        { score, total, timestamp: Date.now() }
      ]
    });
  };

  const markSimulatorCompleted = () => {
    saveProgress({
      ...progress,
      simulatorCompleted: true
    });
  };

  const markMythChecked = (mythId: string) => {
    if (!progress.mythsChecked.includes(mythId)) {
      saveProgress({
        ...progress,
        mythsChecked: [...progress.mythsChecked, mythId]
      });
    }
  };

  const resetProgress = () => {
    saveProgress(defaultProgress);
  };

  const t = translations[language] || translations.en;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        highContrast,
        setHighContrast,
        reducedMotion,
        setReducedMotion,
        fontScale,
        setFontScale,
        currentView,
        setCurrentView,
        progress,
        markStageVisited,
        markGlossaryViewed,
        recordQuizScore,
        markSimulatorCompleted,
        markMythChecked,
        resetProgress,
        isA11yModalOpen,
        setA11yModalOpen,
        isMobileMenuOpen,
        setMobileMenuOpen,
        t
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
