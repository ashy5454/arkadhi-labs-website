import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import PaperModal from '../components/PaperModal';

export default function ResearchPage() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const papers = [
    {
      id: 1,
      title: 'Sparse Facet Attention: Selective Compute Without Hard Expert Boundaries',
      arxivId: 'Draft R-001',
      date: '2026',
      authors: ['Arkadhi Labs Research Team'],
      category: 'Architecture',
      benchmark: 'Routing stability suite',
      abstract: 'This draft studies whether sparse activation can be made stable enough for reasoning workloads. The focus is not only parameter efficiency, but boundary smoothness, routing collapse, latency accounting, and failure modes under long-context generation.'
    },
    {
      id: 2,
      title: 'Ark-Eval: Contamination-Resistant Evaluation for Reasoning Systems',
      arxivId: 'Memo E-014',
      date: '2026',
      authors: ['Arkadhi Labs Evaluation Group'],
      category: 'Evaluation',
      benchmark: 'Synthetic task generator',
      abstract: 'A methodology memo for generating reasoning tasks with explicit provenance. Each task family carries construction parameters, solver-backed answer checks, holdout rules, and a written account of what the task should and should not measure.'
    },
    {
      id: 3,
      title: 'Activation Trace Interfaces for Debugging Sparse Inference',
      arxivId: 'Note S-006',
      date: '2026',
      authors: ['Arkadhi Labs Systems Group'],
      category: 'Systems',
      benchmark: 'Trace review suite',
      abstract: 'A systems note on turning token routing, memory access, and attention movement into inspectable traces. The aim is to help researchers diagnose behavior before turning a mechanism into a benchmark claim.'
    }
  ];

  const agenda = [
    ['Sparse activation', 'Measure when selective compute actually reduces work, preserves quality, and avoids brittle expert-boundary behavior.'],
    ['Long-context memory', 'Study what should be stored, compressed, retrieved, or forgotten during extended reasoning and tool use.'],
    ['Evaluation integrity', 'Build task families where construction rules, contamination controls, and solver checks are visible by default.'],
    ['Research interfaces', 'Design traces that let researchers inspect routing, attention movement, and failure cases without guesswork.']
  ];

  const openProblems = [
    ['Routing stability', 'Design sparse routing whose boundary behavior stays smooth during optimization and long generation.'],
    ['Evidence accounting', 'Define benchmark cards that disclose contamination risk, task generation, solver validity, and known failures.'],
    ['Runtime visibility', 'Reveal token-level compute allocation while keeping instrumentation light enough for real experiments.']
  ];

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <div className="eyebrow">Research agenda</div>
          <h1 className="headline" style={{ maxWidth: 980 }}>Original AI architecture, measured carefully.</h1>
          <p className="lead">
            Arkadhi Labs works on the parts of AI systems that decide whether a model is genuinely capable: routing, memory, evaluation, observability, and reproducibility.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <div>
            <div className="section-kicker">Program</div>
              <h2 className="section-title">A research roadmap built around falsifiable mechanisms.</h2>
              <p className="section-copy">
              Each thread starts with a concrete failure mode in present systems, then moves through mechanism design, ablation, benchmark construction, implementation, and external review.
            </p>
          </div>
          <div className="grid-2">
            {agenda.map(([title, text]) => (
              <div key={title} className="paper-card" style={{ padding: 22 }}>
                <span className="pill">{title}</span>
                <p style={{ marginTop: 14, color: '#415063', fontSize: 14 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-container">
          <div style={{ marginBottom: 28 }}>
            <div className="section-kicker">Papers and technical notes</div>
            <h2 className="section-title">Research artifacts</h2>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {papers.map((paper) => (
              <article key={paper.id} className="paper-card" style={{ padding: 26 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                      <span className="pill">{paper.category}</span>
                      <span className="meta">{paper.date}</span>
                      <span className="meta">{paper.benchmark}</span>
                    </div>
                    <h3 style={{ margin: '16px 0 8px', color: '#121820', fontSize: 25 }}>{paper.title}</h3>
                    <p style={{ color: '#586170', fontSize: 14 }}>Authors: {paper.authors.join(', ')}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <button onClick={() => setSelectedPaper(paper)} className="btn-secondary" type="button">
                      <FileText size={16} /> Abstract
                    </button>
                    <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="btn-icon" aria-label="Open arXiv">
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container">
          <div style={{ marginBottom: 28 }}>
            <div className="section-kicker">Open problems</div>
            <h2 className="section-title">Problems worth collaborating on.</h2>
            <p className="section-copy">These are active areas where a strong technical partner can contribute directly.</p>
          </div>
          <div className="grid-3">
            {openProblems.map(([title, text], index) => (
              <div key={title} className="dark-card" style={{ padding: 26 }}>
                <span className="meta" style={{ color: '#14999C' }}>Problem 0{index + 1}</span>
                <h3 style={{ margin: '14px 0 10px', fontSize: 23 }}>{title}</h3>
                <p style={{ color: '#d8e2ea', fontSize: 14 }}>{text}</p>
                <NavLink to="/work-with-us" className="btn-ghost" style={{ marginTop: 22, color: '#ffffff' }}>
                  Propose a direction <ArrowRight size={15} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPaper && <PaperModal paper={selectedPaper} onClose={() => setSelectedPaper(null)} />}
    </div>
  );
}
