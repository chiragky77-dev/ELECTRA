import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { glossaryTerms } from '../../data/glossaryData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { SearchIcon, BookOpenIcon, CheckIcon } from '../common/Icons';

export const KnowledgeHubView: React.FC = () => {
  const { language, t, progress, markGlossaryViewed } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.glossary.allCategories },
    { id: 'basics', label: t.glossary.categories.basics },
    { id: 'voting', label: t.glossary.categories.voting },
    { id: 'process', label: t.glossary.categories.process },
    { id: 'counting', label: t.glossary.categories.counting }
  ];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = glossaryTerms.filter((item) => {
    const termText = (item.term[language] || item.term.en).toLowerCase();
    const defText = (item.definition[language] || item.definition.en).toLowerCase();
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch = !query || termText.includes(query) || defText.includes(query);
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesLetter = selectedLetter === 'all' || item.term.en.toUpperCase().startsWith(selectedLetter);

    return matchesSearch && matchesCategory && matchesLetter;
  });

  const recentlyViewedTerms = glossaryTerms.filter((item) =>
    progress.viewedGlossaryTerms.includes(item.id)
  );

  return (
    <div className="fade-in container" style={{ padding: '40px 0 64px' }}>
      {/* Header */}
      <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
        <Badge variant="accent" style={{ marginBottom: '12px' }}>
          Civic Reference Library
        </Badge>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>
          {t.glossary.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {t.glossary.subtitle}
        </p>
      </div>

      {/* Search Input */}
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <div
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            display: 'flex'
          }}
        >
          <SearchIcon size={20} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.glossary.searchPlaceholder}
          style={{
            width: '100%',
            padding: '14px 16px 14px 48px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontSize: '15px',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color var(--transition-fast)'
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--border-focus)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
        />
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
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
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Alphabetical A-Z Filter */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '32px',
          overflowX: 'auto',
          paddingBottom: '8px'
        }}
      >
        <button
          onClick={() => setSelectedLetter('all')}
          style={{
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            fontWeight: 600,
            backgroundColor: selectedLetter === 'all' ? 'var(--accent-primary)' : 'var(--bg-card)',
            color: selectedLetter === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          ALL
        </button>
        {alphabet.map((letter) => {
          const isActive = selectedLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              style={{
                minWidth: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '12px',
                fontWeight: 600,
                backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Recently Viewed Strip */}
      {recentlyViewedTerms.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '10px' }}>
            {t.glossary.recentlyViewed} ({recentlyViewedTerms.length})
          </span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {recentlyViewedTerms.map((term) => (
              <span
                key={term.id}
                style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-text)',
                  fontSize: '12px',
                  fontWeight: 500,
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}
              >
                {term.term[language]}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '64px 20px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
            {t.glossary.noResults}
          </p>
        </div>
      ) : (
        <div className="grid-2">
          {filteredTerms.map((item) => {
            const hasRead = progress.viewedGlossaryTerms.includes(item.id);

            return (
              <Card
                key={item.id}
                interactive
                onClick={() => markGlossaryViewed(item.id)}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.term[language]}
                    </h3>
                    {hasRead && (
                      <span style={{ fontSize: '11px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 }}>
                        <CheckIcon size={12} color="var(--success)" /> Read
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '14px' }}>
                    {item.definition[language]}
                  </p>

                  <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                    <strong style={{ color: 'var(--accent-text)' }}>{t.glossary.whyItMatters}: </strong>
                    {item.whyItMatters[language]}
                  </div>
                </div>

                {item.relatedTerms && (
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    <span>{t.glossary.related}: </span>
                    {item.relatedTerms.join(', ')}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
