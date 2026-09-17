import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { SimulatorCandidate } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';
import {
  VoteBoxIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  RefreshIcon,
  ShieldAlertIcon
} from '../common/Icons';

const candidates: SimulatorCandidate[] = [
  {
    id: 'alpha',
    name: 'Candidate Alpha',
    title: 'Civic Renewal & Green Spaces',
    focus: 'Urban reforestation, solar parks, pedestrian streets, and waste management reform.',
    symbol: '🌳 Tree Symbol',
    badgeColor: 'var(--success)',
    keyPledge: 'Zero-emission public buses and municipal park revitalization.'
  },
  {
    id: 'beta',
    name: 'Candidate Beta',
    title: 'Transit & Youth Opportunities',
    focus: 'Expanding public metro routes, vocational scholarships, and subsidized youth sports.',
    symbol: '⚡ Electric Flash Symbol',
    badgeColor: 'var(--accent-primary)',
    keyPledge: 'Night bus connectivity and free digital literacy libraries.'
  },
  {
    id: 'gamma',
    name: 'Candidate Gamma',
    title: 'Smart Utilities & Small Business',
    focus: 'Water supply modernization, micro-business tax relief, and broadband accessibility.',
    symbol: '💡 Lamp Symbol',
    badgeColor: 'var(--warm-accent)',
    keyPledge: '24/7 potable water monitoring and streamlined municipal licensing.'
  },
  {
    id: 'nota',
    name: 'NOTA / None of the Above',
    title: 'Constitutional Voter Dissent',
    focus: 'Express dissatisfaction with all contesting candidates while maintaining official turnout.',
    symbol: '❌ NOTA Symbol',
    badgeColor: 'var(--text-muted)',
    keyPledge: 'Formal recorded rejection of candidate choices under ballot secrecy.'
  }
];

type SimulatorStep = 
  | 'intro' 
  | 'learn' 
  | 'ballot' 
  | 'review' 
  | 'recorded' 
  | 'counting' 
  | 'results';

export const VotingSimulatorView: React.FC = () => {
  const { t, markSimulatorCompleted } = useApp();

  const [step, setStep] = useState<SimulatorStep>('intro');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVotedThisSession, setHasVotedThisSession] = useState(false);

  // Stored demo votes in localStorage for real-time calculations
  const [demoTallies, setDemoTallies] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('electra_demo_tallies');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback baseline
      }
    }
    return { alpha: 34, beta: 41, gamma: 28, nota: 12 };
  });

  // Save tallies
  const saveTallies = (updated: Record<string, number>) => {
    setDemoTallies(updated);
    localStorage.setItem('electra_demo_tallies', JSON.stringify(updated));
  };

  const selectedCandidate = candidates.find((c) => c.id === selectedCandidateId) || null;

  // Handle final submission with double-click and duplicate protection
  const handleConfirmVote = () => {
    if (!selectedCandidateId || hasVotedThisSession || isSubmitting) return;

    setIsSubmitting(true);

    // Update tallies
    const currentCount = demoTallies[selectedCandidateId] || 0;
    const updated = {
      ...demoTallies,
      [selectedCandidateId]: currentCount + 1
    };
    saveTallies(updated);
    setHasVotedThisSession(true);

    // Transition to recorded slip
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('recorded');
    }, 400);
  };

  // Simulate counting animation
  const handleProceedToCounting = () => {
    setStep('counting');
    setTimeout(() => {
      setStep('results');
      markSimulatorCompleted();
    }, 2200);
  };

  // Restart / Try Again
  const handleRestart = () => {
    setSelectedCandidateId(null);
    setHasVotedThisSession(false);
    setStep('ballot');
  };

  // Reset all historical demo tallies to baseline
  const handleResetAllDemoVotes = () => {
    const baseline = { alpha: 34, beta: 41, gamma: 28, nota: 12 };
    saveTallies(baseline);
    handleRestart();
  };

  // Calculate results
  const totalVotes = Object.values(demoTallies).reduce((sum, n) => sum + n, 0);

  const getPercentage = (count: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((count / totalVotes) * 100);
  };

  // Determine plurality leader
  let leaderId = 'alpha';
  let maxCount = -1;
  Object.entries(demoTallies).forEach(([cid, count]) => {
    if (count > maxCount) {
      maxCount = count;
      leaderId = cid;
    }
  });
  const leadingCandidate = candidates.find((c) => c.id === leaderId);

  return (
    <div className="fade-in container" style={{ padding: '36px 0 64px', maxWidth: '860px' }}>
      {/* Prominent Educational Notice Banner */}
      <div
        style={{
          backgroundColor: 'var(--warm-subtle)',
          border: '1px solid rgba(217, 119, 6, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <div style={{ color: 'var(--warm-accent)', flexShrink: 0 }}>
          <ShieldAlertIcon size={24} />
        </div>
        <div>
          <strong style={{ fontSize: '13px', color: 'var(--warm-accent)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' }}>
            {t.simulator.badge}
          </strong>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
            {t.simulator.banner}
          </span>
        </div>
      </div>

      {/* Step Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Simulated Flow: Step {
            step === 'intro' ? '1/7' :
            step === 'learn' ? '2/7' :
            step === 'ballot' ? '3/7' :
            step === 'review' ? '4/7' :
            step === 'recorded' ? '5/7' :
            step === 'counting' ? '6/7' : '7/7'
          }
        </span>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)' }}>
          Scenario: Demo City Council
        </span>
      </div>

      {/* ================= STEP 1: INTRO ================= */}
      {step === 'intro' && (
        <Card style={{ padding: '36px', textAlign: 'center' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: 'var(--accent-subtle)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}
          >
            <VoteBoxIcon size={32} />
          </div>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>
            {t.simulator.introTitle}
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '640px', margin: '0 auto 32px' }}>
            {t.simulator.introDesc}
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setStep('learn')}
            icon={<ChevronRightIcon size={18} color="#FFFFFF" />}
          >
            {t.simulator.btnStart}
          </Button>
        </Card>
      )}

      {/* ================= STEP 2: LEARN BEFORE YOU VOTE ================= */}
      {step === 'learn' && (
        <Card style={{ padding: '36px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
            {t.simulator.step1Title}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Before entering any voting booth, understand these inviolable democratic principles:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {t.simulator.step1Points.map((pt, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px 16px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ color: 'var(--success)', marginTop: '2px', flexShrink: 0 }}>
                  <CheckIcon size={18} />
                </div>
                <span style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="ghost" size="md" onClick={() => setStep('intro')} icon={<ChevronLeftIcon size={16} />}>
              Back
            </Button>
            <Button variant="primary" size="md" onClick={() => setStep('ballot')} icon={<ChevronRightIcon size={16} color="#FFFFFF" />}>
              Proceed to Demo Ballot
            </Button>
          </div>
        </Card>
      )}

      {/* ================= STEP 3: DEMO BALLOT ================= */}
      {step === 'ballot' && (
        <Card style={{ padding: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px' }}>
              {t.simulator.step2Title}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              {t.simulator.step2Sub}
            </p>
          </div>

          {/* Candidate Radio Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {candidates.map((candidate) => {
              const isSelected = selectedCandidateId === candidate.id;
              return (
                <div
                  key={candidate.id}
                  onClick={() => setSelectedCandidateId(candidate.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 20px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    border: `2px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Simulated Radio Indicator */}
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        border: `2px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isSelected ? 'var(--accent-primary)' : 'transparent',
                        flexShrink: 0
                      }}
                    >
                      {isSelected && (
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
                      )}
                    </div>

                    {/* Candidate Info */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)' }}>
                          {candidate.name}
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: candidate.badgeColor }}>
                          {candidate.symbol}
                        </span>
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>
                        {candidate.title}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Focus: {candidate.keyPledge}
                      </span>
                    </div>
                  </div>

                  {/* Press to Select Button (EVM style button) */}
                  <button
                    type="button"
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {isSelected ? 'Selected' : 'Select'}
                  </button>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="ghost" size="md" onClick={() => setStep('learn')} icon={<ChevronLeftIcon size={16} />}>
              Back
            </Button>
            <Button
              variant="primary"
              size="md"
              disabled={!selectedCandidateId}
              onClick={() => setStep('review')}
              icon={<ChevronRightIcon size={16} color="#FFFFFF" />}
            >
              {t.simulator.btnReview}
            </Button>
          </div>
        </Card>
      )}

      {/* ================= STEP 4: REVIEW SELECTION ================= */}
      {step === 'review' && selectedCandidate && (
        <Card style={{ padding: '36px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
            {t.simulator.reviewTitle}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {t.simulator.reviewDesc}
          </p>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '32px'
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
              {t.simulator.selectedCandidate}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {selectedCandidate.name}
              </span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: selectedCandidate.badgeColor }}>
                ({selectedCandidate.symbol})
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {selectedCandidate.focus}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="secondary" size="md" onClick={() => setStep('ballot')} icon={<ChevronLeftIcon size={16} />}>
              {t.simulator.btnBack}
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleConfirmVote}
              disabled={isSubmitting || hasVotedThisSession}
              icon={<VoteBoxIcon size={16} color="#FFFFFF" />}
            >
              {isSubmitting ? 'Recording...' : t.simulator.btnConfirm}
            </Button>
          </div>
        </Card>
      )}

      {/* ================= STEP 5: VOTE RECORDED (VVPAT SIMULATION) ================= */}
      {step === 'recorded' && selectedCandidate && (
        <Card style={{ padding: '36px', textAlign: 'center' }}>
          {/* Simulated VVPAT Slip Visual */}
          <div
            style={{
              width: '260px',
              margin: '0 auto 24px',
              backgroundColor: '#FFFDF0',
              color: '#111827',
              border: '2px dashed #D1D5DB',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              textAlign: 'center',
              fontFamily: 'monospace'
            }}
          >
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6B7280', display: 'block', marginBottom: '4px' }}>
              VVPAT PAPER AUDIT SLIP
            </span>
            <span style={{ fontSize: '10px', color: '#9CA3AF', display: 'block', marginBottom: '12px' }}>
              Visible for 7 seconds
            </span>
            <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
              {selectedCandidate.name}
            </div>
            <div style={{ fontSize: '13px', color: '#4B5563', marginBottom: '10px' }}>
              {selectedCandidate.symbol}
            </div>
            <div style={{ fontSize: '10px', borderTop: '1px solid #E5E7EB', paddingTop: '6px', color: '#9CA3AF' }}>
              DEMO VOTE VERIFIED • SECURE
            </div>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--success)', marginBottom: '8px' }}>
            {t.simulator.confirmSuccessTitle}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 28px' }}>
            {t.simulator.confirmSuccessDesc}
          </p>

          <Button
            variant="primary"
            size="md"
            onClick={handleProceedToCounting}
            icon={<ChevronRightIcon size={16} color="#FFFFFF" />}
          >
            Simulate Counting & Results
          </Button>
        </Card>
      )}

      {/* ================= STEP 6: SIMULATED COUNTING ANIMATION ================= */}
      {step === 'counting' && (
        <Card style={{ padding: '48px 36px', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', margin: '0 auto 20px', color: 'var(--accent-primary)' }}>
            <RefreshIcon size={48} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
            {t.simulator.countingTitle}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 24px' }}>
            {t.simulator.countingDesc}
          </p>
          <div style={{ maxWidth: '380px', margin: '0 auto' }}>
            <ProgressBar value={75} height={10} color="var(--accent-primary)" />
          </div>
        </Card>
      )}

      {/* ================= STEP 7: RESULTS DASHBOARD ================= */}
      {step === 'results' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Card style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
              <div>
                <Badge variant="simulation" style={{ marginBottom: '8px' }}>
                  Mock Tabulation
                </Badge>
                <h2 style={{ fontSize: '24px', fontWeight: 700 }}>
                  {t.simulator.resultsTitle}
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {t.simulator.resultsSub}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>
                  {t.simulator.totalVotesCast}
                </span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {totalVotes}
                </span>
              </div>
            </div>

            {/* Plurality Winner Banner */}
            {leadingCandidate && (
              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'var(--accent-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  marginBottom: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-text)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {t.simulator.leadingCandidate}
                  </span>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {leadingCandidate.name} ({leadingCandidate.symbol})
                  </div>
                </div>
                <Badge variant="accent">
                  {getPercentage(demoTallies[leadingCandidate.id] || 0)}% of Tally
                </Badge>
              </div>
            )}

            {/* Live Visual Chart Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              {candidates.map((cand) => {
                const count = demoTallies[cand.id] || 0;
                const pct = getPercentage(count);
                const isSelectedByUser = selectedCandidateId === cand.id;

                return (
                  <div key={cand.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 600, fontSize: '14.5px', color: 'var(--text-primary)' }}>
                          {cand.name}
                        </span>
                        {isSelectedByUser && (
                          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-primary)', backgroundColor: 'var(--accent-subtle)', padding: '2px 8px', borderRadius: '999px' }}>
                            Your Demo Vote
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {count} votes ({pct}%)
                      </span>
                    </div>
                    <ProgressBar value={pct} height={10} color={cand.badgeColor} />
                  </div>
                );
              })}
            </div>

            {/* NOTA Educational Note */}
            <div style={{ padding: '14px 18px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              <strong>Civic Principle:</strong> {t.simulator.notaNote}
            </div>

            {/* Simulator Actions */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="md" onClick={handleRestart} icon={<RefreshIcon size={16} />}>
                {t.simulator.btnTryAgain}
              </Button>
              <Button variant="outline" size="md" onClick={handleResetAllDemoVotes}>
                {t.simulator.btnResetAll}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
