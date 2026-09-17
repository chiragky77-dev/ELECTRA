import React from 'react';
import { useApp } from '../../context/AppContext';
import { VoteBoxIcon, RefreshIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const { t, setCurrentView, progress, resetProgress } = useApp();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '56px 0 36px',
        marginTop: '80px',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}
        >
          {/* Brand & Purpose */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: 'var(--text-primary)' }}>
              <VoteBoxIcon size={22} color="var(--accent-primary)" />
              <span style={{ fontSize: '18px', fontWeight: 700 }}>{t.brand}</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
              {t.heroSub}
            </p>
            <div
              style={{
                fontSize: '12px',
                padding: '10px 14px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--warm-accent)',
                lineHeight: 1.5
              }}
            >
              <strong>Educational Simulation:</strong> No real votes are cast, and no real voter credentials or biometrics are ever requested.
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Explore Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <button onClick={() => { setCurrentView('journey'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  {t.nav.journey}
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('simulator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  {t.nav.simulator}
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('glossary'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  {t.nav.glossary}
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  {t.nav.quiz}
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('mythfact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  {t.nav.mythFact}
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  {t.nav.ai}
                </button>
              </li>
            </ul>
          </div>

          {/* Your Civic Progress */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Your Learning Tracker
            </h4>
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                fontSize: '13px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Stages Explored:</span>
                <strong>{progress.visitedStages.length} / 7</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Glossary Terms Read:</span>
                <strong>{progress.viewedGlossaryTerms.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Simulator Completed:</span>
                <strong style={{ color: progress.simulatorCompleted ? 'var(--success)' : 'var(--text-muted)' }}>
                  {progress.simulatorCompleted ? 'Yes' : 'Not yet'}
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Quizzes Taken:</span>
                <strong>{progress.quizzesCompleted.length}</strong>
              </div>
              <button
                onClick={resetProgress}
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '6px 10px',
                  backgroundColor: 'var(--bg-muted)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)'
                }}
              >
                <RefreshIcon size={14} />
                <span>Reset Learning Progress</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Disclaimer */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            fontSize: '12px',
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <p>
            {t.officialNotice}
          </p>
          <p>
            ELECTRA is built for hackathon demonstration and non-partisan public education. All candidate names in simulators are fictional.
          </p>
        </div>
      </div>
    </footer>
  );
};
