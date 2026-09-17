import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AccessibilityModal } from './components/layout/AccessibilityModal';

import { HomeView } from './components/views/HomeView';
import { ElectionJourneyView } from './components/views/ElectionJourneyView';
import { VotingSimulatorView } from './components/views/VotingSimulatorView';
import { KnowledgeHubView } from './components/views/KnowledgeHubView';
import { AskElectraView } from './components/views/AskElectraView';
import { QuizView } from './components/views/QuizView';
import { MythFactView } from './components/views/MythFactView';
import { AboutView } from './components/views/AboutView';

const AppContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        {currentView === 'home' && <HomeView />}
        {currentView === 'explore' && <HomeView />}
        {currentView === 'journey' && <ElectionJourneyView />}
        {currentView === 'simulator' && <VotingSimulatorView />}
        {currentView === 'glossary' && <KnowledgeHubView />}
        {currentView === 'quiz' && <QuizView />}
        {currentView === 'mythfact' && <MythFactView />}
        {currentView === 'ai' && <AskElectraView />}
        {currentView === 'about' && <AboutView />}
      </main>

      <Footer />
      <AccessibilityModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
