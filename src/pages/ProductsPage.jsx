import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Code2 } from 'lucide-react';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      name: 'Ark-Eval',
      status: 'Private beta',
      type: 'Evaluation',
      audience: 'Model builders and evaluation teams',
      summary: 'A contamination-aware benchmark construction workflow for teams that need to test reasoning claims without relying on overexposed public datasets.',
      details: ['Task provenance cards', 'Solver-backed answer checks', 'Holdout families and ablation reports']
    },
    {
      name: 'Prism Runtime',
      status: 'Research preview',
      type: 'Systems',
      audience: 'Systems researchers',
      summary: 'A runtime experiment bed for testing selective compute mechanisms against real latency, memory, and instrumentation constraints.',
      details: ['Traceable activation paths', 'Kernel experiment harness', 'Latency and memory pressure dashboards']
    },
    {
      name: 'Trace Atlas',
      status: 'Internal',
      type: 'Observability',
      audience: 'Research and safety teams',
      summary: 'A visual inspection layer for token movement, attention neighborhoods, memory retrieval, and routing decisions during inference.',
      details: ['Token-level route maps', 'Failure case annotation', 'Exportable evidence bundles']
    },
    {
      name: 'Research Dossier',
      status: 'Live',
      type: 'Protocol',
      audience: 'Partners and reviewers',
      summary: 'A compact reporting format for sharing experimental claims with methods, limitations, replication notes, and decision history attached.',
      details: ['Methods-first layout', 'Benchmark cards', 'Negative result capture']
    }
  ];

  const workflow = [
    ['Scope', 'Define the model claim, baseline, success metric, and likely failure cases.'],
    ['Instrument', 'Run the system through Arkadhi traces, benchmark cards, or runtime probes.'],
    ['Review', 'Return a short dossier with results, caveats, replication notes, and next experiment.']
  ];

  const filters = ['All', 'Evaluation', 'Systems', 'Observability', 'Protocol'];
  const visible = activeFilter === 'All' ? products : products.filter((product) => product.type === activeFilter);

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <div className="eyebrow">Research infrastructure</div>
          <h1 className="headline">Tools that make AI claims testable.</h1>
          <p className="lead">
            Arkadhi products are research artifacts first: evaluation harnesses, runtime prototypes, trace interfaces, and reporting formats designed to make model behavior inspectable and claims easier to audit.
          </p>
        </div>
      </section>

      <section className="section section-muted" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="site-container" style={{ display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'btn-primary' : 'btn-secondary'}
                style={{ minHeight: 36, fontSize: 13 }}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="meta">Showing {visible.length} artifacts</span>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid-2">
          {visible.map((product) => (
            <article key={product.name} className="paper-card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'start', marginBottom: 18 }}>
                <span className="pill">{product.type}</span>
                <span className="meta">{product.status}</span>
              </div>
              <h2 style={{ color: '#121820', fontSize: 30 }}>{product.name}</h2>
              <p className="meta" style={{ marginTop: 8 }}>{product.audience}</p>
              <p style={{ marginTop: 12, color: '#586170' }}>{product.summary}</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 24 }}>
                {product.details.map((detail) => (
                  <div key={detail} style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#415063', fontSize: 14 }}>
                    <CheckCircle2 size={17} color="#14999C" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginTop: 28, paddingTop: 20, borderTop: '1px solid #dfe5eb' }}>
                <NavLink to="/work-with-us" className="btn-primary">
                  Request access <ArrowRight size={16} />
                </NavLink>
                <span className="meta" style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <Code2 size={14} /> Research build
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container split">
          <div>
            <div className="section-kicker">Access model</div>
            <h2 className="section-title">Built for serious evaluation partners.</h2>
          </div>
          <div className="dark-card" style={{ padding: 26 }}>
            {workflow.map(([label, text], index) => (
              <div key={label} style={{
                padding: index === 0 ? '0 0 18px' : '18px 0',
                borderTop: index === 0 ? 0 : '1px solid rgba(255,255,255,0.12)'
              }}>
                <div className="meta" style={{ color: '#14999C' }}>{label}</div>
                <p style={{ color: '#d8e2ea', marginTop: 7, fontSize: 14 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
