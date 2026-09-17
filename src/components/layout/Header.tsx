import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavView } from '../../types';
import { VoteBoxIcon, SunIcon, MoonIcon, GlobeIcon, SettingsIcon, MenuIcon, CloseIcon } from '../common/Icons';

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    language,
    setLanguage,
    theme,
    setTheme,
    setA11yModalOpen,
    isMobileMenuOpen,
    setMobileMenuOpen,
    t
  } = useApp();

  const navItems: { view: NavView; label: string }[] = [
    { view: 'home', label: t.nav.home },
    { view: 'explore', label: t.nav.explore },
    { view: 'journey', label: t.nav.journey },
    { view: 'simulator', label: t.nav.simulator },
    { view: 'glossary', label: t.nav.glossary },
    { view: 'quiz', label: t.nav.quiz },
    { view: 'mythfact', label: t.nav.mythFact },
    { view: 'ai', label: t.nav.ai },
    { view: 'about', label: t.nav.about }
  ];

  const handleNavClick = (view: NavView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  return (
    <>
      {/* Educational Banner */}
      <div className="disclaimer-banner">
        <span style={{ fontWeight: 600, color: 'var(--warm-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Educational Platform:
        </span>
        <span>{t.simulationNotice}</span>
      </div>

      {/* Main Header */}
      <header className="electra-header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo / Brand */}
          <div
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
              }}
            >
              <VoteBoxIcon size={20} color="#FFFFFF" />
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', display: 'block', lineHeight: 1.1 }}>
                {t.brand}
              </span>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Civic Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '4px', alignItems: 'center' }} className="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '13.5px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Lang, Theme, A11y, Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              title="Toggle Language (English / ಕನ್ನಡ)"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: 600
              }}
            >
              <GlobeIcon size={14} />
              <span>{language === 'en' ? 'ಕನ್ನಡ' : 'EN'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              aria-label="Toggle dark and light mode"
              style={{
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={17} />}
            </button>

            {/* Accessibility Settings */}
            <button
              onClick={() => setA11yModalOpen(true)}
              title="Accessibility & Display"
              aria-label="Accessibility options"
              style={{
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SettingsIcon size={17} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              style={{
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isMobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              padding: '16px 20px 24px',
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '15px',
                    fontWeight: isActive ? 600 : 500,
                    textAlign: 'left',
                    color: isActive ? 'var(--accent-text)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};
