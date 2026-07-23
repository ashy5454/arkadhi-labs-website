import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, BookOpen, Cpu, Network, ShieldCheck } from 'lucide-react';
import ArkadhiLogo from '../components/ArkadhiLogo';
import ScrollReveal from '../components/ScrollReveal';
import CrystalMotionCanvas from '../components/CrystalMotionCanvas';

export default function HomePage() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Architecture research',
      text: 'We investigate routing, memory, and evaluation as first-class scientific problems rather than incremental prompt or wrapper improvements.',
      link: '/research'
    },
    {
      icon: Cpu,
      title: 'Executable systems',
      text: 'Research programs are paired with kernels, eval harnesses, visualizers, and reproducible logs that can survive external scrutiny.',
      link: '/products'
    },
    {
      icon: ShieldCheck,
      title: 'Evidence discipline',
      text: 'Every claim is tracked against a benchmark protocol, ablation plan, contamination check, and replication path.',
      link: '/blog'
    }
  ];

  const standards = [
    ['Problem', 'Long-context reasoning, sparse compute, and benchmark contamination are treated as coupled architecture failures.'],
    ['Method', 'Build minimal mechanisms, isolate the claimed effect, then scale only after reproducible evidence is stable.'],
    ['Artifact', 'Papers, code, data cards, visual traces, and negative results are designed to be legible to outside researchers.'],
    ['Collaboration', 'We work with labs, universities, and technical teams that need rigorous model or system evaluation.']
  ];

  const notes = [
    ['Research note', 'Sparse routing should be measured as an intervention, not a marketing adjective.'],
    ['Systems log', 'What a useful activation trace must show before it becomes evidence.'],
    ['Evaluation memo', 'Benchmark construction rules for avoiding accidental memorization.']
  ];

  return (
    <div className="page">
      {/* Hero with crystal motion background */}
      <section className="paper-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle crystalline canvas in the hero area */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, zIndex: 0 }}>
          <CrystalMotionCanvas theme="light" />
        </div>

        <div className="site-container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-rail">Arkadhi Labs / Research index</div>
          <div>
            <div className="eyebrow">Arkadhi Labs / Frontier AI research</div>
            <h1 className="headline">
              Where intelligence <span className="accent">takes shape.</span>
            </h1>
            <p className="lead">
              Arkadhi Labs is a research-first AI lab building original model architecture, evaluation infrastructure, and systems tooling with the rigor of a frontier paper.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, animation: 'fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both' }}>
              <NavLink to="/research" className="btn-primary">
                Explore research <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/work-with-us" className="btn-secondary">
                Work with us
              </NavLink>
            </div>
          </div>

          <aside className="card animate-border-glow" style={{ padding: 28, animation: 'fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 18 }}>
              <div className="animate-float">
                <ArkadhiLogo variant="mark" theme="teal" size="xl" />
              </div>
              <span className="meta">Lab brief</span>
            </div>
            <h2 style={{ marginTop: 26, marginBottom: 10, fontSize: 28, color: '#121820' }}>Research program</h2>
            <p style={{ color: '#586170', fontSize: 15 }}>
              A focused agenda for sparse activation, memory-efficient inference, and uncontaminated reasoning evaluation.
            </p>
            <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
              {['Mechanism design', 'Ablation protocol', 'Runtime trace', 'External review'].map((item, index) => (
                <div key={item} style={{
                  display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12, alignItems: 'center',
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + index * 0.1}s both`
                }}>
                  <span className="meta">{String(index + 1).padStart(2, '0')}</span>
                  <span style={{ color: '#121820', fontWeight: 700 }}>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div className="section-kicker">Index</div>
            <h2 className="section-title">Three surfaces, one standard.</h2>
          </ScrollReveal>
          <div className="manuscript-list">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={idx * 120}>
                  <NavLink to={pillar.link} className="manuscript-row">
                    <span className="meta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <Icon size={16} color="#14999C" /> {pillar.title.split(' ')[0]}
                    </span>
                    <div>
                      <h3 style={{ color: '#121820', fontSize: 22 }}>{pillar.title}</h3>
                      <p style={{ color: '#5d6670', fontSize: 14, marginTop: 4 }}>{pillar.text}</p>
                    </div>
                    <ArrowRight size={18} color="#14999C" />
                  </NavLink>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core thesis */}
      <section className="section section-dark">
        <div className="site-container split">
          <ScrollReveal direction="up">
            <div className="section-kicker">Core thesis</div>
            <h2 className="section-title">Frontier progress needs better structure, not only larger scale.</h2>
            <p className="section-copy">
              The lab studies how models allocate compute, preserve context, and prove reasoning ability. The operating belief is simple: architecture, measurement, and systems have to advance together.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="dark-card" style={{ padding: 26 }}>
              {standards.map(([label, text], index) => (
                <div key={label} style={{
                  padding: index === 0 ? '0 0 18px' : '18px 0',
                  borderTop: index === 0 ? '0' : '1px solid rgba(255,255,255,0.12)'
                }}>
                  <div className="meta" style={{ color: '#14999C' }}>{label}</div>
                  <p style={{ marginTop: 7, color: '#d8e2ea', fontSize: 14 }}>{text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest notes */}
      <section className="section section-muted">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, flexWrap: 'wrap', marginBottom: 30 }}>
              <div>
                <div className="section-kicker">Latest from the lab</div>
                <h2 className="section-title">Notes written like methods sections.</h2>
              </div>
              <NavLink to="/blog" className="btn-secondary">View all notes</NavLink>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {notes.map(([type, title], idx) => (
              <ScrollReveal key={title} delay={idx * 140}>
                <NavLink to="/blog" className="paper-card" style={{ padding: 24, display: 'block' }}>
                  <span className="meta">{type}</span>
                  <h3 style={{ marginTop: 18, color: '#121820', fontSize: 22 }}>{title}</h3>
                  <span className="btn-ghost" style={{ marginTop: 26 }}>
                    Open note <ArrowRight size={15} />
                  </span>
                </NavLink>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="section">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div className="section-kicker">Collaboration</div>
            <h2 className="section-title">Bring us hard architecture and evaluation problems.</h2>
            <p className="section-copy">
              We are most useful when the question is technical, falsifiable, and important enough to deserve a clean protocol.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="card animate-pulse-glow" style={{ padding: 28 }}>
              <Network size={24} color="#14999C" />
              <h3 style={{ margin: '16px 0 10px', color: '#121820', fontSize: 24 }}>Good fit</h3>
              <p style={{ color: '#586170', fontSize: 14 }}>
                Academic labs, infrastructure teams, model builders, and enterprises evaluating non-standard AI systems.
              </p>
              <NavLink to="/work-with-us" className="btn-primary" style={{ marginTop: 24 }}>
                Start the conversation <ArrowRight size={16} />
              </NavLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
