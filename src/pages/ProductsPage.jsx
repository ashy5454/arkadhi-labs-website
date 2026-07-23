import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, ExternalLink, Cpu, Database, Shield, BarChart3, Zap, Eye, Activity, Layers } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="page">
      {/* Page Header */}
      <section className="section paper-hero">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ maxWidth: '800px' }}>
              <span className="eyebrow">Our Products</span>
              <h1 className="headline">Building infrastructure for token-efficient, robust, and interpretable AI.</h1>
              <p className="lead">
                From drop-in context management to contamination-free evaluation suites, our tools are designed to solve the hardest problems in deploying production LLMs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Product: Prexi */}
      <section className="section section-dark">
        <div className="site-container">
          <ScrollReveal>
            <div className="split" style={{ alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <h2 className="section-title" style={{ margin: 0, color: 'white' }}>Prexi</h2>
                  <span className="pill" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>Live</span>
                </div>
                <h3 className="section-kicker">LLM Context Management</h3>
                <p className="section-copy" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Stop Paying for Tokens You Don't Need. Drop-in context management for LLMs. 26x more token-efficient than mem0. Compress, cache, and protect every conversation — one API call.
                </p>
                <p className="section-copy" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                  Cut LLM API costs by 65%. Drop-in middleware for GPT-4o, Claude, and Gemini.
                </p>
                
                <div className="stat-grid" style={{ marginBottom: '2rem' }}>
                  <div className="stat-cell">
                    <div className="stat-value" style={{ color: 'white' }}>65%</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Cost Reduction</div>
                  </div>
                  <div className="stat-cell">
                    <div className="stat-value" style={{ color: 'white' }}>26x</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Token Efficiency</div>
                  </div>
                  <div className="stat-cell">
                    <div className="stat-value" style={{ color: 'white' }}>1</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>API Call</div>
                  </div>
                </div>

                <a href="https://echoregent-yudi-pub.web.app/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Prexi <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="grid-2">
                <div className="dark-card">
                  <Layers size={24} style={{ marginBottom: '1rem', color: '#60a5fa' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Context Compression</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)' }}>Squeeze maximum information into the minimal token window.</p>
                </div>
                <div className="dark-card">
                  <Database size={24} style={{ marginBottom: '1rem', color: '#60a5fa' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Semantic Caching</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)' }}>Intelligent caching to serve repeated queries without hitting the LLM.</p>
                </div>
                <div className="dark-card">
                  <Activity size={24} style={{ marginBottom: '1rem', color: '#60a5fa' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Conversation Memory</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)' }}>Long-term memory management across sessions.</p>
                </div>
                <div className="dark-card">
                  <Shield size={24} style={{ marginBottom: '1rem', color: '#60a5fa' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Content Guardrails</h4>
                  <p className="meta" style={{ color: 'rgba(255,255,255,0.6)' }}>Protect against prompt injections and ensure safety.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Infrastructure & Research Products */}
      <section className="section section-muted">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Infrastructure & Research</span>
              <h2 className="section-title" style={{ margin: '0 auto' }}>Evaluation & Runtimes</h2>
            </div>
            
            <div className="grid-3">
              {/* Ark-Eval */}
              <div className="paper-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <BarChart3 size={28} />
                  <span className="pill" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#2563eb' }}>In Development</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Ark-Eval</h3>
                <p className="section-copy" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  Evaluation infrastructure for LLM systems. Build reliable, robust tests for production AI without data leakage.
                </p>
                <div className="manuscript-list" style={{ marginTop: 'auto' }}>
                  <div className="manuscript-row meta">Benchmark construction that avoids contamination</div>
                  <div className="manuscript-row meta">Ablation protocol framework</div>
                  <div className="manuscript-row meta">Runtime trace visualization</div>
                </div>
              </div>

              {/* Prism Runtime */}
              <div className="paper-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <Zap size={28} />
                  <span className="pill" style={{ backgroundColor: 'rgba(107, 114, 128, 0.1)', color: '#4b5563' }}>Research Phase</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Prism Runtime</h3>
                <p className="section-copy" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  Next-generation runtime engine designed for highly optimized and targeted inference computing.
                </p>
                <div className="manuscript-list" style={{ marginTop: 'auto' }}>
                  <div className="manuscript-row meta">Sparse activation runtime engine</div>
                  <div className="manuscript-row meta">Selective compute allocation</div>
                  <div className="manuscript-row meta">Memory-efficient inference</div>
                </div>
              </div>

              {/* Trace Atlas */}
              <div className="paper-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <Eye size={28} />
                  <span className="pill" style={{ backgroundColor: 'rgba(107, 114, 128, 0.1)', color: '#4b5563' }}>Research Phase</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Trace Atlas</h3>
                <p className="section-copy" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  Advanced visualization tools for deep model interpretability and internal activation tracking.
                </p>
                <div className="manuscript-list" style={{ marginTop: 'auto' }}>
                  <div className="manuscript-row meta">Activation trace visualization</div>
                  <div className="manuscript-row meta">Model interpretability dashboard</div>
                  <div className="manuscript-row meta">Real-time analysis</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
