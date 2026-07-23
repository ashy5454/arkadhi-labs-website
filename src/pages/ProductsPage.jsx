import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, ExternalLink, Database, Shield, Activity, Layers, Zap, Eye } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="page">
      {/* Page Header */}
      <section className="section paper-hero">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ maxWidth: '820px' }}>
              <span className="eyebrow">Executable Systems & Tools</span>
              <h1 className="headline">Building systems for token-efficient, robust, and interpretable AI.</h1>
              <p className="lead">
                From drop-in LLM context management to sparse runtime engines and activation trace visualizers, our systems turn research principles into production tools.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Flagship Product: Prexi */}
      <section className="section section-dark">
        <div className="site-container">
          <ScrollReveal>
            <div className="split" style={{ alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <h2 className="section-title" style={{ margin: 0, color: 'white' }}>Prexi</h2>
                  <span className="pill" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>Live Product</span>
                </div>
                <h3 className="section-kicker">LLM Context Management Middleware</h3>
                <p className="section-copy" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }}>
                  <strong>Stop paying for tokens you don't need.</strong> Drop-in context management for GPT-4o, Claude, and Gemini. Compress, cache, and protect every conversation in one API call.
                </p>
                <p className="section-copy" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                  Proven 26× more token-efficient than standard memory frameworks, slashing production LLM API costs by up to 65%.
                </p>
                
                <div className="stat-grid" style={{ marginBottom: '2rem', borderRadius: 8, overflow: 'hidden' }}>
                  <div className="stat-cell" style={{ background: '#191e25' }}>
                    <div className="stat-value" style={{ color: '#14999C' }}>65%</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>API Cost Savings</div>
                  </div>
                  <div className="stat-cell" style={{ background: '#191e25' }}>
                    <div className="stat-value" style={{ color: '#14999C' }}>26×</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Token Efficiency</div>
                  </div>
                  <div className="stat-cell" style={{ background: '#191e25' }}>
                    <div className="stat-value" style={{ color: '#14999C' }}>1</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>API Call Integration</div>
                  </div>
                </div>

                <a 
                  href="https://echoregent-yudi-pub.web.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '12px 24px' }}
                >
                  Launch Prexi Platform <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="grid-2">
                <div className="dark-card" style={{ padding: 22 }}>
                  <Layers size={24} style={{ marginBottom: '0.8rem', color: '#14999C' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.4rem', fontSize: 18 }}>Context Compression</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none' }}>Compress long conversational turns while maintaining key semantic grounding.</p>
                </div>
                <div className="dark-card" style={{ padding: 22 }}>
                  <Database size={24} style={{ marginBottom: '0.8rem', color: '#14999C' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.4rem', fontSize: 18 }}>Semantic Caching</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none' }}>Zero-latency vector caching to bypass redundant upstream model queries.</p>
                </div>
                <div className="dark-card" style={{ padding: 22 }}>
                  <Activity size={24} style={{ marginBottom: '0.8rem', color: '#14999C' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.4rem', fontSize: 18 }}>Conversation Memory</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none' }}>Persistent episodic & entity memory across multi-session user interactions.</p>
                </div>
                <div className="dark-card" style={{ padding: 22 }}>
                  <Shield size={24} style={{ marginBottom: '0.8rem', color: '#14999C' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.4rem', fontSize: 18 }}>Content Guardrails</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none' }}>Inline security filtering to block prompt injection & adversarial attacks.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Systems & Research Tooling */}
      <section className="section section-muted">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ marginBottom: '3rem' }}>
              <span className="eyebrow">Systems Tooling</span>
              <h2 className="section-title">Runtime & Interpretability Engines</h2>
              <p className="section-copy">Systems developed alongside our architectural papers to inspect and accelerate non-standard models.</p>
            </div>
            
            <div className="grid-2">
              {/* Prism Runtime */}
              <div className="paper-card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <Zap size={28} color="#14999C" />
                  <span className="pill">Research Engine</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: 24, color: '#121820' }}>Prism Runtime</h3>
                <p className="section-copy" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  Sparse activation runtime engine paired with Cognitive Memory Primitives for memory-efficient inference without global graph autograd.
                </p>
                <div className="manuscript-list" style={{ marginTop: 'auto' }}>
                  <div className="manuscript-row meta">Sparse activation execution kernel</div>
                  <div className="manuscript-row meta">Selective compute allocation</div>
                  <div className="manuscript-row meta">Memory-efficient sparse inference</div>
                </div>
              </div>

              {/* Trace Atlas */}
              <div className="paper-card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <Eye size={28} color="#14999C" />
                  <span className="pill">Observability</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: 24, color: '#121820' }}>Trace Atlas</h3>
                <p className="section-copy" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  Interpretability dashboard for visualizing token routing, slot-matching in competitive memory, and weight-protect plasticity movement.
                </p>
                <div className="manuscript-list" style={{ marginTop: 'auto' }}>
                  <div className="manuscript-row meta">Activation trace visualization</div>
                  <div className="manuscript-row meta">Hopfield memory slot-matching inspection</div>
                  <div className="manuscript-row meta">Real-time plasticity tracking</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
