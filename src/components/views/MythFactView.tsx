import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { mythFactData } from '../../data/mythFactData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ShieldAlertIcon, CheckIcon } from '../common/Icons';

export const MythFactView: React.FC = () => {
  const { language, t, progress, markMythChecked } = useApp();

  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Voter ID', 'Voting Machines', 'NOTA', 'Polling Procedures', 'Eligibility'];

  const filteredItems = mythFactData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const toggleReveal = (id: string) => {
    if (!revealedIds.includes(id)) {
      setRevealedIds([...revealedIds, id]);
      markMythChecked(id);
    } else {
      setRevealedIds(revealedIds.filter((i) => i !== id));
    }
  };

  return (
    <div className="fade-in container" style={{ padding: '40px 0 64px' }}>
      {/* Header */}
      <div style={{ maxWidth: '800px', marginBottom: '28px' }}>
        <Badge variant="accent" style={{ marginBottom: '12px' }}>
          Anti-Misinformation Engine
        </Badge>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px' }}>
          {t.mythFact.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {t.mythFact.subtitle}
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`,
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat === 'all' ? t.mythFact.filterAll : cat}
            </button>
          );
        })}
      </div>

      {/* Myth Cards Grid */}
      <div className="grid-2">
        {filteredItems.map((item) => {
          const isRevealed = revealedIds.includes(item.id);
          const hasChecked = progress.mythsChecked.includes(item.id);

          return (
            <Card
              key={item.id}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                    {item.category}
                  </span>
                  {hasChecked && (
                    <span style={{ fontSize: '11px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 }}>
                      <CheckIcon size={12} color="var(--success)" /> Explored
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '20px' }}>
                  “{item.statement[language] || item.statement.en}”
                </h3>

                {isRevealed ? (
                  <div style={{ animation: 'fadeIn 200ms ease-out' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <Badge variant={item.isFact ? 'success' : 'warning'}>
                        {item.verdict[language] || item.verdict.en}
                      </Badge>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '16px' }}>
                      {item.explanation[language] || item.explanation.en}
                    </p>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                      <strong>{t.mythFact.officialSource}: </strong> {item.source}
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                      Click below to verify whether this claim is true or a common election myth.
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  variant={isRevealed ? 'outline' : 'primary'}
                  size="sm"
                  onClick={() => toggleReveal(item.id)}
                >
                  {isRevealed ? 'Hide Verification' : t.mythFact.btnCheck}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
