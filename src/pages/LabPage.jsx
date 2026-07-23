import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LabPage() {
  const principles = [
    ['01', 'Mechanism before scale', 'We look for the smallest mechanism that explains the result before spending more compute.'],
    ['02', 'Evidence before narrative', 'Claims need protocols, ablations, controls, and clear failure cases.'],
    ['03', 'Open interfaces', 'Research should leave behind tools and records other technical people can inspect.']
  ];

  const team = [
    ['Architecture', 'Researchers working on routing, memory, sparse activation, and reasoning protocols.'],
    ['Systems', 'Engineers turning research mechanisms into kernels, traces, and measurable runtime behavior.'],
    ['Evaluation', 'Benchmark designers focused on contamination resistance, solver checks, and reproducibility.'],
    ['Partnerships', 'Technical collaborators connecting lab work to hard external evaluation problems.']
  ];

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <div className="eyebrow">The lab</div>
          <h1 className="headline">A research institute for original AI systems.</h1>
          <p className="lead">
            Arkadhi Labs is built for patient technical work: architecture research, systems implementation, evaluation design, and field-tested collaboration.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <div>
            <div className="section-kicker">Operating model</div>
            <h2 className="section-title">Closer to a scientific lab than a feature factory.</h2>
            <p className="section-copy">
              The lab is organized around durable research programs. We publish what we can, instrument what we build, and prefer narrow true claims over broad untested positioning.
            </p>
          </div>
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
                <span className="stat-value">Artifacts</span>
              </div>
            </div>
            <p style={{ marginTop: 20, color: '#586170', fontSize: 14 }}>
              Bengaluru and Hyderabad anchor the research network, with collaborators wherever the strongest technical work is happening.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-container">
          <div style={{ marginBottom: 28 }}>
            <div className="section-kicker">Principles</div>
            <h2 className="section-title">How the lab decides what is worth doing.</h2>
          </div>
          <div className="grid-3">
            {principles.map(([num, title, text]) => (
              <div key={title} className="paper-card rule-card">
                <span className="meta">{num}</span>
                <h3 style={{ margin: '14px 0 10px', color: '#121820', fontSize: 24 }}>{title}</h3>
                <p style={{ color: '#586170', fontSize: 14 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div style={{ marginBottom: 28 }}>
            <div className="section-kicker">Teams</div>
            <h2 className="section-title">Disciplines under one roof.</h2>
          </div>
          <div className="grid-4">
            {team.map(([title, text]) => (
              <div key={title} className="paper-card" style={{ padding: 24 }}>
                <span className="pill">{title}</span>
                <p style={{ marginTop: 16, color: '#415063', fontSize: 14 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container split">
          <div>
            <div className="section-kicker">Join</div>
            <h2 className="section-title">Work with people who care about the method.</h2>
          </div>
          <div>
            <p className="section-copy">We are interested in researchers and engineers who can turn ambiguity into protocols, code, measurements, and clear writing.</p>
            <NavLink to="/careers" className="btn-primary" style={{ marginTop: 24 }}>
              Explore roles <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
