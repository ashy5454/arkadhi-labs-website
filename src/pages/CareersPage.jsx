import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code2, FileText, GraduationCap } from 'lucide-react';

export default function CareersPage() {
  const roles = [
    ['Research Scientist, Model Architecture', 'Research', 'Bengaluru / hybrid', 'Design mechanisms, run ablations, and write precise technical reports.'],
    ['Systems Engineer, Runtime Experiments', 'Systems', 'Hyderabad / hybrid', 'Build prototype kernels, tracing tools, and performance measurement harnesses.'],
    ['Evaluation Researcher', 'Evaluation', 'Remote India', 'Create contamination-resistant tasks, solver checks, and benchmark documentation.'],
    ['Research Fellow', 'Fellowship', 'Flexible', 'Own a focused 6-12 month research question with publication-quality output.']
  ];

  const values = [
    [GraduationCap, 'Research taste', 'You can separate an interesting mechanism from a vague idea.'],
    [Code2, 'Implementation depth', 'You can turn a claim into a runnable experiment with logs.'],
    [FileText, 'Clear writing', 'You can explain methods, limitations, and results without hiding uncertainty.']
  ];

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <div className="eyebrow">Careers</div>
          <h1 className="headline">Build the kind of AI work that can be inspected.</h1>
          <p className="lead">
            We hire researchers and engineers who like hard problems, clean protocols, careful code, and technical writing that survives peer review.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid-3">
          {values.map(([Icon, title, text]) => (
            <div key={title} className="paper-card rule-card">
              <Icon size={24} color="#14999C" />
              <h3 style={{ margin: '16px 0 10px', color: '#121820', fontSize: 24 }}>{title}</h3>
              <p style={{ color: '#586170', fontSize: 14 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-container">
          <div style={{ marginBottom: 28 }}>
            <div className="section-kicker">Open roles</div>
            <h2 className="section-title">Current hiring tracks.</h2>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {roles.map(([title, team, location, desc]) => (
              <article key={title} className="paper-card" style={{ padding: 26 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 22, alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                      <span className="pill">{team}</span>
                      <span className="meta">{location}</span>
                    </div>
                    <h3 style={{ color: '#121820', fontSize: 25 }}>{title}</h3>
                    <p style={{ color: '#586170', marginTop: 8 }}>{desc}</p>
                  </div>
                  <NavLink to="/work-with-us" className="btn-primary">
                    Apply <ArrowRight size={16} />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
