import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, Database, Network } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function LabPage() {
  const principles = [
    ['01', 'Mechanism before scale', 'We look for the smallest mechanism that explains the result before spending more compute on raw parameter scaling.'],
    ['02', 'Evidence before narrative', 'Claims need baseline protocols, multi-seed ablations, domain-order controls, and transparent disclosure of failure modes.'],
    ['03', 'Open legible artifacts', 'Research should leave behind executable tools, inspectable trace dashboards, and records other researchers can verify.']
  ];

  const disciplines = [
    ['Architecture', 'Researchers working on local gradient-free learning rules, sparse relational representations, and Hopfield memory systems.'],
    ['Systems', 'Engineers turning research mechanisms into execution kernels, trace visualizers, and measurable runtime behavior.'],
    ['Evaluation', 'Benchmark designers building ByteCL and contamination-resistant evaluation harnesses.'],
    ['Collaborations', 'Technical partners connecting lab research to enterprise LLM context efficiency and academic replication.']
  ];

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <ScrollReveal>
            <div className="eyebrow">The Lab</div>
            <h1 className="headline">A research institute for original AI architecture.</h1>
            <p className="lead">
              Arkadhi Labs is built for patient technical work: non-backprop learning rules, associative memory systems, byte-level continual learning evaluation, and field-tested collaboration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div className="section-kicker">Operating Model</div>
            <h2 className="section-title">Closer to a scientific lab than a feature factory.</h2>
            <p className="section-copy">
              The lab is organized around durable research programs. We publish our findings, instrument what we build, and prefer narrow falsifiable claims over broad untested positioning.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="card" style={{ padding: 28 }}>
              <div className="stat-grid">
                <div className="stat-cell">
                  <span className="meta">Base</span>
                  <span className="stat-value">India</span>
                </div>
                <div className="stat-cell">
                  <span className="meta">Mode</span>
                  <span className="stat-value">Lab</span>
                </div>
                <div className="stat-cell">
                  <span className="meta">Output</span>
                  <span className="stat-value">Papers</span>
                </div>
              </div>
              <p style={{ marginTop: 20, color: '#586170', fontSize: 14, lineHeight: 1.6 }}>
                Bengaluru and Hyderabad anchor our research network, connecting with academic and industry collaborators worldwide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ marginBottom: 28 }}>
              <div className="section-kicker">Operating Principles</div>
              <h2 className="section-title">How the lab decides what is worth doing.</h2>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {principles.map(([num, title, text], idx) => (
              <ScrollReveal key={title} delay={idx * 120}>
                <div className="paper-card rule-card" style={{ height: '100%' }}>
                  <span className="meta">{num}</span>
                  <h3 style={{ margin: '14px 0 10px', color: '#121820', fontSize: 22 }}>{title}</h3>
                  <p style={{ color: '#586170', fontSize: 14, lineHeight: 1.6 }}>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ marginBottom: 28 }}>
              <div className="section-kicker">Lab Disciplines</div>
              <h2 className="section-title">Disciplines under one roof.</h2>
            </div>
          </ScrollReveal>

          <div className="grid-4">
            {disciplines.map(([title, text], idx) => (
              <ScrollReveal key={title} delay={idx * 100}>
                <div className="paper-card" style={{ padding: 24, height: '100%' }}>
                  <span className="pill">{title}</span>
                  <p style={{ marginTop: 16, color: '#415063', fontSize: 14, lineHeight: 1.6 }}>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div className="section-kicker">Join Arkadhi Labs</div>
            <h2 className="section-title">Work with people who care about the method.</h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div>
              <p className="section-copy">We hire researchers and engineers who can turn ambiguity into clean experimental protocols, runnable code, and precise technical writing.</p>
              <NavLink to="/careers" className="btn-primary" style={{ marginTop: 24 }}>
                Explore Open Roles <ArrowRight size={16} />
              </NavLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
