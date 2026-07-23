import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, BookOpen, Cpu, Network, ShieldCheck, FileText, Database } from 'lucide-react';
import ArkadhiLogo from '../components/ArkadhiLogo';
import ScrollReveal from '../components/ScrollReveal';
import CrystalMotionCanvas from '../components/CrystalMotionCanvas';

export default function HomePage() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Architecture & Plasticity',
      text: 'We investigate local, gradient-free learning rules, sparse relational representations, and structural resistance to catastrophic forgetting.',
      link: '/research'
    },
    {
      icon: Cpu,
      title: 'Executable Systems',
      text: 'Products like Prexi for LLM context management and ByteCL benchmark harnesses that survive rigorous external scientific scrutiny.',
      link: '/products'
    },
    {
      icon: ShieldCheck,
      title: 'Evidence Discipline',
      text: 'Every claim is validated with multi-seed replication, explicit domain-order controls, and transparent disclosure of negative results.',
      link: '/blog'
    }
  ];

  const standards = [
    ['Central Thesis', 'Catastrophic forgetting is a structural defect of global backpropagation, not a training defect to be patched.'],
    ['Core Mechanism', 'Cognitive Memory Primitive (CMP) binds byte pairs into sparse codes with local, gradient-free plasticity.'],
    ['Benchmark Proof', '15–19× lower backward transfer (BWT) than Transformer + Online EWC on 15 sequential text domains.'],
    ['Open Benchmark', 'Building ByteCL: a standardized byte-level benchmark for continual learning evaluation without tokenizer bias.']
  ];

  const notes = [
    ['Flagship Paper', 'What Fires Together Doesn’t Forget Together (Atmuri et al., 2026)'],
    ['Live Product', 'Prexi: Drop-in LLM Context Management — 65% token cost reduction'],
    ['Benchmark Suite', 'ByteCL: Byte-level continual learning evaluation protocol']
  ];

  return (
    <div className="page">
      {/* Hero with crystal motion background */}
      <section className="paper-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, zIndex: 0 }}>
          <CrystalMotionCanvas theme="light" />
        </div>

        <div className="site-container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-rail">Arkadhi Labs / Research Index</div>
          <div>
            <div className="eyebrow">Arkadhi Labs / Frontier AI Research</div>
            <h1 className="headline">
              Where intelligence <span className="accent">takes shape.</span>
            </h1>
            <p className="lead">
              Arkadhi Labs is a research-first AI lab building original model architecture, local gradient-free learning rules, and evaluation infrastructure with the rigor of a frontier paper.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, animation: 'fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both' }}>
              <NavLink to="/research" className="btn-primary">
                Explore Research Paper <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/products" className="btn-secondary">
                View Prexi & Tools
              </NavLink>
            </div>
          </div>

          <aside className="card animate-border-glow" style={{ padding: 28, animation: 'fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 18 }}>
              <div className="animate-float">
                <ArkadhiLogo variant="mark" theme="teal" size="xl" />
              </div>
              <span className="meta">Lab Brief</span>
            </div>
            <h2 style={{ marginTop: 26, marginBottom: 10, fontSize: 24, color: '#121820' }}>What Fires Together...</h2>
            <p style={{ color: '#586170', fontSize: 14 }}>
              Demonstrating <strong>15–19× lower forgetting</strong> using Cognitive Memory Primitives (CMP) with zero backprop.
            </p>
            <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
              {['Sparse Relational Binding', 'Two-Tier Hopfield Memory', 'Weight-Protect Plasticity', 'ByteCL Benchmark'].map((item, index) => (
                <div key={item} style={{
                  display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12, alignItems: 'center',
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + index * 0.1}s both`
                }}>
                  <span className="meta">{String(index + 1).padStart(2, '0')}</span>
                  <span style={{ color: '#121820', fontWeight: 700, fontSize: 13 }}>{item}</span>
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
            <div className="section-kicker">Core Research Thesis</div>
            <h2 className="section-title">Frontier progress needs better structure, not only larger scale.</h2>
            <p className="section-copy">
              The lab studies how models allocate compute, preserve memory, and avoid catastrophic forgetting. Our operating belief is simple: architecture, measurement, and systems must advance together.
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
                <div className="section-kicker">Latest Artifacts</div>
                <h2 className="section-title">Original research and products.</h2>
              </div>
              <NavLink to="/research" className="btn-secondary">View Research Paper</NavLink>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {notes.map(([type, title], idx) => (
              <ScrollReveal key={title} delay={idx * 140}>
                <NavLink to={type === 'Live Product' ? '/products' : '/research'} className="paper-card" style={{ padding: 24, display: 'block' }}>
                  <span className="meta">{type}</span>
                  <h3 style={{ marginTop: 18, color: '#121820', fontSize: 20 }}>{title}</h3>
                  <span className="btn-ghost" style={{ marginTop: 26 }}>
                    Explore <ArrowRight size={15} />
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
              <h3 style={{ margin: '16px 0 10px', color: '#121820', fontSize: 24 }}>Good Fit</h3>
              <p style={{ color: '#586170', fontSize: 14 }}>
                Academic labs, model architecture teams, and researchers building non-backprop continual learning models.
              </p>
              <NavLink to="/work-with-us" className="btn-primary" style={{ marginTop: 24 }}>
                Start the Conversation <ArrowRight size={16} />
              </NavLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
