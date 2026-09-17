import React from 'react';
import { useApp } from '../../context/AppContext';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const AccessibilityModal: React.FC = () => {
  const {
    isA11yModalOpen,
    setA11yModalOpen,
    fontScale,
    setFontScale,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
    t
  } = useApp();

  const handleReset = () => {
    setFontScale(1);
    setHighContrast(false);
    setReducedMotion(false);
  };

  return (
    <Modal
      isOpen={isA11yModalOpen}
      onClose={() => setA11yModalOpen(false)}
      title={t.a11y.title}
      maxWidth="480px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Font Sizing */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontWeight: 600, fontSize: '15px' }}>{t.a11y.fontSize}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{Math.round(fontScale * 100)}%</span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            {t.a11y.fontSizeDesc}
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              variant={fontScale === 0.9 ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFontScale(0.9)}
            >
              Compact (90%)
            </Button>
            <Button
              variant={fontScale === 1.0 ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFontScale(1.0)}
            >
              Default (100%)
            </Button>
            <Button
              variant={fontScale === 1.15 ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFontScale(1.15)}
            >
              Large (115%)
            </Button>
          </div>
        </div>

        {/* High Contrast */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <span style={{ fontWeight: 600, fontSize: '15px', display: 'block' }}>{t.a11y.contrast}</span>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {t.a11y.contrastDesc}
            </p>
          </div>
          <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', marginTop: '4px' }}>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
            />
          </label>
        </div>

        {/* Reduced Motion */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <span style={{ fontWeight: 600, fontSize: '15px', display: 'block' }}>{t.a11y.motion}</span>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {t.a11y.motionDesc}
            </p>
          </div>
          <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', marginTop: '4px' }}>
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={(e) => setReducedMotion(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
            />
          </label>
        </div>

        {/* Reset */}
        <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            {t.a11y.reset}
          </Button>
          <Button variant="primary" size="sm" onClick={() => setA11yModalOpen(false)}>
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};
