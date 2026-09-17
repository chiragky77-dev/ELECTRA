import React from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { VoteBoxIcon, ShieldAlertIcon, CheckIcon } from '../common/Icons';

export const AboutView: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="fade-in container" style={{ padding: '40px 0 64px', maxWidth: '840px' }}>
      <div style={{ marginBottom: '32px' }}>
        <Badge variant="accent" style={{ marginBottom: '12px' }}>
          Platform Mission
        </Badge>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px' }}>
          About {t.brand}
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          “{t.tagline}” — Building informed, confident, and active democratic participants through transparent technology.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Core Mission */}
        <Card style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
            Our Civic Educational Purpose
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.65, marginBottom: '16px' }}>
            ELECTRA was created to dismantle the mystery surrounding modern elections. While voting is a cornerstone constitutional right, many citizens—especially first-time voters—face anxiety or confusion regarding registration checks, voting booth protocols, EVM & VVPAT mechanisms, and tallying integrity.
          </p>
          <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            By providing an interactive, chronological walkthrough from election notification to counting day, ELECTRA empowers every citizen with verifiable knowledge.
          </p>
        </Card>

        {/* Inviolable Neutrality & Simulation Notice */}
        <Card style={{ padding: '32px', borderLeft: '4px solid var(--warm-accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <ShieldAlertIcon size={22} color="var(--warm-accent)" />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
              Non-Partisan & Fictional Simulation Declaration
            </h3>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--warm-accent)', fontWeight: 700 }}>•</span>
              <span><strong>Zero Endorsement:</strong> ELECTRA does not recommend, support, or oppose any political party, candidate, or legislative ballot measure.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--warm-accent)', fontWeight: 700 }}>•</span>
              <span><strong>Fictional Ballot Simulator:</strong> All candidates, symbols, and scenarios in the Voting Simulator are entirely fictional and designed solely for educational demonstration.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--warm-accent)', fontWeight: 700 }}>•</span>
              <span><strong>Absolute Privacy:</strong> ELECTRA never asks for, captures, or transmits personal voter IDs, Aadhaar numbers, biometric data, or sensitive credentials.</span>
            </li>
          </ul>
        </Card>

        {/* Statutory Standards & Sources */}
        <Card style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '14px', color: 'var(--text-primary)' }}>
            Statutory Sources & References
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
              <strong>The Representation of the People Act</strong>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Legal provisions governing notification, nominations, scrutiny, and polling rules.
              </p>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
              <strong>Conduct of Elections Rules, 1961</strong>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Procedures for voting compartments, indelible ink, EVMs, VVPAT audits, and counting.
              </p>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
              <strong>Election Commission Manuals</strong>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Official operational handbooks for Returning Officers, Presiding Officers, and Polling Agents.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
