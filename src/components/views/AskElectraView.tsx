import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { findAIAnswer, AIResponse } from '../../data/aiKnowledge';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { SparklesIcon, ShieldAlertIcon, ChevronRightIcon } from '../common/Icons';

export const AskElectraView: React.FC = () => {
  const { language, t, setCurrentView } = useApp();

  const [mode, setMode] = useState<'simple' | 'detailed'>('simple');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeResponse, setActiveResponse] = useState<AIResponse | null>(null);

  const sampleQuestions = [
    'What happens during polling?',
    'What is nomination?',
    'How does vote counting work?',
    'What does NOTA mean?',
    'Explain elections in simple language.',
    'Who should I vote for?'
  ];

  const handleAsk = (questionToAsk?: string) => {
    const q = questionToAsk || query;
    if (!q.trim()) return;

    setIsLoading(true);
    // Simulate natural AI thinking latency (300ms)
    setTimeout(() => {
      const res = findAIAnswer(q, mode);
      setActiveResponse(res);
      setIsLoading(false);
    }, 350);
  };

  return (
    <div className="fade-in container" style={{ padding: '40px 0 64px', maxWidth: '840px' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <Badge variant="accent" icon={<SparklesIcon size={14} />} style={{ marginBottom: '12px' }}>
          Civic Intelligence
        </Badge>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px' }}>
          {t.ai.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {t.ai.subtitle}
        </p>
      </div>

      {/* Mode Selector (Simple / Detailed) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '8px', backgroundColor: 'var(--bg-card)', padding: '4px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <button
            onClick={() => setMode('simple')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: mode === 'simple' ? 'var(--accent-primary)' : 'transparent',
              color: mode === 'simple' ? '#FFFFFF' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)'
            }}
          >
            {t.ai.modeSimple}
          </button>
          <button
            onClick={() => setMode('detailed')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: mode === 'detailed' ? 'var(--accent-primary)' : 'transparent',
              color: mode === 'detailed' ? '#FFFFFF' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)'
            }}
          >
            {t.ai.modeDetailed}
          </button>
        </div>

        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          {t.ai.fallbackNotice}
        </span>
      </div>

      {/* Query Input Box */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            placeholder={t.ai.placeholder}
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontSize: '15px',
              outline: 'none',
              boxShadow: 'var(--shadow-sm)'
            }}
          />
          <Button
            variant="primary"
            size="md"
            onClick={() => handleAsk()}
            disabled={!query.trim() || isLoading}
            icon={<SparklesIcon size={16} color="#FFFFFF" />}
          >
            {isLoading ? 'Thinking...' : t.ai.btnAsk}
          </Button>
        </div>
      </div>

      {/* Suggested Quick Questions */}
      <div style={{ marginBottom: '32px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
          {t.ai.exampleQueriesLabel}
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {sampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => {
                setQuery(q);
                handleAsk(q);
              }}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                fontSize: '12.5px',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Structured AI Response Card */}
      {activeResponse && (
        <Card style={{ padding: '32px', animation: 'fadeIn 250ms ease-out' }}>
          {/* Neutrality Safeguard Alert */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '24px',
              fontSize: '12px',
              color: 'var(--text-secondary)'
            }}
          >
            <ShieldAlertIcon size={16} color="var(--accent-primary)" />
            <span>{t.ai.neutralityNotice}</span>
          </div>

          {/* 1. Short Answer */}
          <div style={{ marginBottom: '22px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              {t.ai.shortAnswer}
            </span>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>
              {activeResponse.shortAnswer[language] || activeResponse.shortAnswer.en}
            </p>
          </div>

          {/* 2. How It Works */}
          <div style={{ marginBottom: '24px', backgroundColor: 'var(--bg-secondary)', padding: '18px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
              {t.ai.howItWorks} ({mode.toUpperCase()})
            </span>
            <p style={{ fontSize: '14.5px', color: 'var(--text-primary)', lineHeight: 1.65 }}>
              {activeResponse.howItWorks[language] || activeResponse.howItWorks.en}
            </p>
          </div>

          {/* 3. Related Topics */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
              {t.ai.relatedTopics}
            </span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {activeResponse.relatedTopics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentView('glossary')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-muted)',
                    fontSize: '12px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {topic} ↗
                </button>
              ))}
            </div>
          </div>

          {/* 4. Sources */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
            <strong>{t.ai.sources}: </strong>
            {activeResponse.sources.join(' • ')}
          </div>
        </Card>
      )}
    </div>
  );
};
