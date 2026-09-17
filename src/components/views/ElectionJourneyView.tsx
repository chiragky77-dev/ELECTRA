import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { electionStages } from '../../data/electionStages';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { CheckIcon, ChevronRightIcon, BookOpenIcon } from '../common/Icons';

export const ElectionJourneyView: React.FC = () => {
  const { language, t, markStageVisited, progress, setCurrentView } = useApp();
  const [selectedStageId, setSelectedStageId] = useState<string>('announcement');
  const [phaseFilter, setPhaseFilter] = useState<'all' | 'before' | 'during' | 'after'>('all');

  const filteredStages = electionStages.filter((stg) => {
    if (phaseFilter === 'all') return true;
    return stg.phase === phaseFilter;
  });

  const selectedStage = electionStages.find((s) => s.id === selectedStageId) || electionStages[0];

  const handleSelectStage = (id: string) => {
    setSelectedStageId(id);
    markStageVisited(id);
  };

  return (
    <div className="fade-in container" style={{ padding: '40px 0 60px' }}>
      {/* Header */}
      <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
        <Badge variant="accent" style={{ marginBottom: '12px' }}>
          7 Chronological Stages
        </Badge>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>
          {t.nav.journey}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Walk through the complete lifecycle of a democratic election. Note that specific deadlines and procedures may differ across jurisdictions; the steps below reflect standard universal democratic safeguards.
        </p>
      </div>

      {/* Phase Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: 'All 7 Stages' },
          { id: 'before', label: 'Before Polling (Stages 1–4)' },
          { id: 'during', label: 'During Polling (Stage 5)' },
          { id: 'after', label: 'After Polling (Stages 6–7)' }
        ].map((tab) => {
          const isActive = phaseFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setPhaseFilter(tab.id as any)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`,
                transition: 'all var(--transition-fast)'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main 2-Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) 1fr', gap: '28px' }} className="journey-layout">
        {/* Stages Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredStages.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            const isVisited = progress.visitedStages.includes(stage.id);

            return (
              <div
                key={stage.id}
                onClick={() => handleSelectStage(stage.id)}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.04em' }}>
                    Stage {stage.order}
                  </span>
                  {isVisited && (
                    <span style={{ fontSize: '11px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <CheckIcon size={13} color="var(--success)" /> Explored
                    </span>
                  )}
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {stage.title[language]}
                </h4>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {stage.shortDesc[language]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div>
          <Card style={{ padding: '32px' }}>
            {/* Header / Meta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
              <div>
                <Badge variant="accent" style={{ marginBottom: '8px' }}>
                  Phase: {selectedStage.phase.toUpperCase()} POLLING
                </Badge>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {selectedStage.title[language]}
                </h2>
              </div>
              <Badge variant="default">
                Official Protocol
              </Badge>
            </div>

            {/* Deep-Dive Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* 1. What Happens */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  What Happens in this Stage
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-primary)' }}>
                  {selectedStage.whatHappens[language]}
                </p>
              </div>

              {/* 2. Why It Matters */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '18px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-text)', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  Why It Matters to Citizens
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {selectedStage.whyItMatters[language]}
                </p>
              </div>

              {/* 3. Who Is Involved */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Key Participants Involved
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {selectedStage.whoIsInvolved[language]}
                </p>
              </div>

              {/* 4. Critical Safeguards & Rules */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '10px' }}>
                  Statutory Rules & Integrity Safeguards
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedStage.rules.map((rule, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '13.5px',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <div style={{ marginTop: '2px', color: 'var(--accent-primary)', flexShrink: 0 }}>
                        <CheckIcon size={16} />
                      </div>
                      <span>{rule[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Key Terminology */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Associated Terminology
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedStage.terms.map((term, i) => (
                    <span
                      key={i}
                      onClick={() => setCurrentView('glossary')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-muted)',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        cursor: 'pointer'
                      }}
                    >
                      {term} ↗
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Sources & References */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <strong>Statutory Sources: </strong>
                {selectedStage.sources.map((s, idx) => (
                  <span key={idx}>
                    {s.title}{idx < selectedStage.sources.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .journey-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
