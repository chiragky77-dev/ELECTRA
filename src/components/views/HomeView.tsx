import React from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import {
  VoteBoxIcon,
  ChevronRightIcon,
  BookOpenIcon,
  ShieldAlertIcon,
  SparklesIcon,
  AwardIcon
} from '../common/Icons';

export const HomeView: React.FC = () => {
  const { t, setCurrentView } = useApp();

  const learningPaths = [
    {
      id: 'understand',
      title: t.paths.understand.title,
      desc: t.paths.understand.desc,
      icon: <BookOpenIcon size={20} color="var(--accent-primary)" />,
      action: () => setCurrentView('explore'),
      label: 'Start with Basics'
    },
    {
      id: 'explore',
      title: t.paths.explore.title,
      desc: t.paths.explore.desc,
      icon: <ChevronRightIcon size={20} color="var(--accent-primary)" />,
      action: () => setCurrentView('journey'),
      label: 'Walk the 7 Stages'
    },
    {
      id: 'experience',
      title: t.paths.experience.title,
      desc: t.paths.experience.desc,
      icon: <VoteBoxIcon size={20} color="var(--warm-accent)" />,
      action: () => setCurrentView('simulator'),
      label: 'Demo Polling Booth'
    },
    {
      id: 'test',
      title: t.paths.test.title,
      desc: t.paths.test.desc,
      icon: <AwardIcon size={20} color="var(--success)" />,
      action: () => setCurrentView('quiz'),
      label: 'Take Civic Quiz'
    }
  ];

  const awarenessSections = [
    {
      title: '1. What Is An Election?',
      desc: 'The constitutional mechanism whereby eligible sovereign citizens elect representatives to make laws, allocate public resources, and govern.',
      view: 'explore'
    },
    {
      title: '2. How Elections Work',
      desc: 'A synchronized nationwide exercise regulated by strict legal codes, neutral officers, and publicly verifiable audit trails.',
      view: 'journey'
    },
    {
      title: '3. Before Polling',
      desc: 'Electoral roll preparation, formal nomination papers, sworn affidavits, statutory scrutiny, and regulated campaign rallies.',
      view: 'journey'
    },
    {
      title: '4. During Polling',
      desc: 'Mock polls, voter ID verification, indelible ink application, and secret ballot casting inside private compartments.',
      view: 'journey'
    },
    {
      title: '5. After Polling',
      desc: 'Double-locking of EVMs, 24/7 CCTV strongroom security, round-wise vote counting, and certified declaration of results.',
      view: 'journey'
    },
    {
      title: '6. Counting & Results',
      desc: 'Transparent tabulation in the presence of candidate agents, postal vote audits, and sample VVPAT slip matching.',
      view: 'journey'
    },
    {
      title: '7. Election Terminology',
      desc: 'Clear definitions for crucial terms like Electoral Roll, EVM, VVPAT, NOTA, Returning Officer, and Scrutiny.',
      view: 'glossary'
    },
    {
      title: '8. Common Questions',
      desc: 'Fact-checked answers to common misconceptions regarding voter ID requirements, voting rights, and secrecy.',
      view: 'mythfact'
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{ padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <Badge variant="simulation" style={{ marginBottom: '20px' }}>
            {t.simulator.badge}
          </Badge>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}
          >
            {t.brand}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              marginBottom: '16px'
            }}
          >
            “{t.tagline}”
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {t.heroSub}
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              size="lg"
              variant="primary"
              onClick={() => setCurrentView('journey')}
              icon={<ChevronRightIcon size={18} color="#FFFFFF" />}
            >
              {t.heroCtaExplore}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setCurrentView('simulator')}
              icon={<VoteBoxIcon size={18} color="var(--accent-primary)" />}
            >
              {t.heroCtaExperience}
            </Button>
          </div>
        </div>
      </section>

      {/* 4 Core Learning Paths */}
      <section style={{ padding: '32px 0 56px' }}>
        <div className="container">
          <div className="grid-4">
            {learningPaths.map((path) => (
              <Card
                key={path.id}
                interactive
                onClick={path.action}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '200px'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    {path.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                    {path.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {path.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginTop: '20px'
                  }}
                >
                  <span>{path.label}</span>
                  <ChevronRightIcon size={14} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metric Pillars Banner */}
      <section style={{ padding: '24px 0 48px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent-primary)', display: 'block' }}>
                7 Stages
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Chronological Election Journey
              </span>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--success)', display: 'block' }}>
                100% Secret
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Guaranteed Ballot Confidentiality
              </span>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--warm-accent)', display: 'block' }}>
                7 Seconds
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                VVPAT Paper Audit Slip Visibility
              </span>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', display: 'block' }}>
                Non-Partisan
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Zero Candidate or Party Endorsement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Essential Awareness Modules */}
      <section style={{ padding: '24px 0 64px' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>
              Election Awareness Curriculum
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Explore the critical components of the democratic voting lifecycle.
            </p>
          </div>

          <div className="grid-2">
            {awarenessSections.map((item, idx) => (
              <Card
                key={idx}
                interactive
                onClick={() => setCurrentView(item.view as any)}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginTop: '16px'
                  }}
                >
                  <span>Explore topic</span>
                  <ChevronRightIcon size={12} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ask ELECTRA AI Quick Callout */}
      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--accent-subtle)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <Badge variant="accent" icon={<SparklesIcon size={14} />} style={{ marginBottom: '12px' }}>
                AI Civic Assistant
              </Badge>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Have questions about voting or election rules?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Ask ELECTRA AI for instant, non-partisan, fact-checked explanations in simple or detailed terms.
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={() => setCurrentView('ai')}
              icon={<SparklesIcon size={16} />}
            >
              Open Ask ELECTRA AI
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
