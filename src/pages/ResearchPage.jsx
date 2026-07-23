import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  Cpu, 
  Database, 
  Layers, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  BookOpen, 
  Copy,
  Clock,
  FlaskConical
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PaperModal from '../components/PaperModal';

export default function ResearchPage() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Multi-paper database: Flagship is released, others are explicitly marked "In Preparation"
  const papers = [
    {
      id: 'cmp-2026',
      isFlagship: true,
      status: 'Published Paper',
      statusColor: '#14999C',
      title: "What Fires Together Doesn't Forget Together",
      subtitle: "Local, sparse, gradient-free plasticity (CMP) resists catastrophic forgetting 15–19× better than online EWC.",
      authors: ['Ashmith Atmuri*', 'Akshay Kumar', 'Yashaswini Rao Bhogarajula'],
      affiliation: 'Arkadhi Labs',
      contact: 'ashmithatmuri2@gmail.com',
      emails: ['ashmithatmuri2@gmail.com', 'aksh9881@gmail.com', 'yashaswinirao.bhogarajula@gmail.com'],
      date: '2026',
      category: 'Continual Learning',
      type: 'Flagship Research Paper',
      arxivId: 'Arkadhi-CL-2026.01',
      benchmark: '15-Domain Protocol (3-Seed Replicated)',
      metrics: [
        { label: 'Forgetting Reduction', value: '15–19× vs EWC' },
        { label: 'BWT Score', value: '+0.1482 BPB' },
        { label: 'Replication', value: '3-Seed Stable' }
      ],
      abstract: `We introduce CMP (Cognitive Memory Primitive), an architecture that represents inputs as sparse relational codes, stores them in a two-tier competitive memory, and learns entirely through local, gradient-free updates, with no backpropagation anywhere in the network. We test whether catastrophic forgetting is a structural defect of global backpropagation. On a 15-domain text protocol, CMP's backward transfer is 15–19× better than a matched Transformer with Online EWC (+0.1482 vs +2.2457 BWT).`,
      details: {
        sections: [
          {
            title: '3.1 Sparse Relational Binding',
            code: 'z_t = k-WTA( E_L(x_{t-1}) ⊙ E_R(x_t) )',
            text: 'Binds byte pairs into fixed-size sparse relational codes via elementwise multiplication of role embeddings, followed by k-WTA sparsification.'
          },
          {
            title: '3.2 Two-Tier Competitive Memory',
            code: 'S_{buffer} = { s | sim(z_t, s) > θ_{match} }',
            text: 'Fast short-term Buffer and slow long-term Register store relational codes via similarity-gated writes and content-addressed reads.'
          },
          {
            title: '3.7 Weight-Protect Plasticity',
            code: 'ΔS_i = λ · S_i ⊙ |ΔW_i|',
            text: 'Tracks raw accumulated weight movement magnitude to throttle future updates, substituting for EWC Fisher information without backprop gradients.'
          }
        ],
        disclosures: [
          'Raw single-domain BPB trails matched Transformers by a substantial margin.',
          'Hilbert-serialized Split-MNIST showed a null result (−0.0207 vs −0.0211 BWT).',
          'Stacking 4 non-sparse binding blocks prior to memory underperformed (Appendix D).'
        ]
      }
    },
    {
      id: 'bytecl-2026',
      isFlagship: false,
      status: 'In Preparation',
      statusColor: '#eab308',
      title: "ByteCL: A Tokenizer-Free Byte-Level Continual Learning Benchmark",
      subtitle: "Standardizing continual learning evaluation without vocabulary shift or subword tokenizer contamination.",
      authors: ['Arkadhi Labs Benchmark Group'],
      affiliation: 'Arkadhi Labs',
      date: 'In Prep (2026)',
      category: 'Benchmarks',
      type: 'Benchmark Specification',
      arxivId: 'Draft BM-002',
      benchmark: 'Byte-Stream Domain Shift Suite',
      metrics: [
        { label: 'Tokenizer Bias', value: 'Zero (Raw Bytes)' },
        { label: 'Domains', value: '15 Standardized' },
        { label: 'Evaluation', value: 'BPB Bits-Per-Byte' }
      ],
      abstract: `[Work in Progress] Existing continual learning benchmarks rely on subword tokenizers (BPE, WordPiece) that bake in static vocabulary distribution assumptions and introduce tokenizer contamination across domains. ByteCL provides a standardized, multi-domain byte-stream benchmark designed specifically for non-subword and byte-level sequence models.`,
    },
    {
      id: 'prism-runtime-2026',
      isFlagship: false,
      status: 'In Preparation',
      statusColor: '#eab308',
      title: "Selective Compute Allocation in Non-Backprop Memory Architectures",
      subtitle: "Sparse activation execution kernels paired with content-addressed Hopfield memory retrieval.",
      authors: ['Arkadhi Labs Systems Group'],
      affiliation: 'Arkadhi Labs',
      date: 'In Prep (2026)',
      category: 'Architecture',
      type: 'Systems Technical Note',
      arxivId: 'Draft SYS-003',
      benchmark: 'Routing & Latency Suite',
      metrics: [
        { label: 'Memory Access', value: 'O(1) Slots' },
        { label: 'Autograd Overhead', value: 'Zero Graph' }
      ],
      abstract: `[Work in Progress] A technical note on accelerating sparse relational binding and two-tier Hopfield memory reads. We show that one-cue-at-a-time recurrent retrieval avoids the quadratic all-pairs attention matrix while maintaining stable memory access during online local updates.`,
    },
    {
      id: 'diag-negative-2026',
      isFlagship: false,
      status: 'In Preparation',
      statusColor: '#eab308',
      title: "Diagnostic Analysis of Stacking Non-Sparse Binding Blocks",
      subtitle: "Why feeding dense normalized vectors into sparse associative memory degrades slot-matching precision.",
      authors: ['Ashmith Atmuri', 'Akshay Kumar'],
      affiliation: 'Arkadhi Labs',
      date: 'In Prep (2026)',
      category: 'Technical Reports',
      type: 'Negative Result Report',
      arxivId: 'Draft TR-004',
      benchmark: 'Appendix D Diagnostic',
      metrics: [
        { label: 'Performance', value: '3.48 vs 3.27 BPB' },
        { label: 'Diagnosis', value: 'Slot Contamination' }
      ],
      abstract: `[Work in Progress] Disclosing a diagnosed negative result from attempting to merge a 4-block non-sparse depth stack with competitive memory. Dense representations dilute memory slot-matching and create readout signal competition. Published to document failure modes for the research community.`,
    }
  ];

  const categories = ['All', 'Continual Learning', 'Architecture', 'Benchmarks', 'Technical Reports'];

  const filteredPapers = activeCategory === 'All' 
    ? papers 
    : papers.filter(p => p.category === activeCategory);

  const flagship = papers.find(p => p.isFlagship);

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="paper-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="site-container">
          <ScrollReveal>
            <div className="eyebrow">Arkadhi Labs / Research Index</div>
            <h1 className="headline" style={{ maxWidth: 980 }}>
              Original AI Architecture, <span className="accent">Measured Carefully.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 820 }}>
              Our index of published research, papers in preparation, benchmark specifications, and technical notes. Built around falsifiable mechanisms and empirical evidence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Flagship Paper Hero Banner */}
      <section className="section" style={{ paddingTop: 36, paddingBottom: 48 }}>
        <div className="site-container">
          <ScrollReveal>
            <div className="dark-card" style={{ padding: '36px 40px', borderLeft: '6px solid #14999C', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
                <span className="pill" style={{ background: '#14999C', color: '#ffffff', border: 'none' }}>Primary Research Paper</span>
                <span className="pill" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', borderColor: 'transparent' }}>Published</span>
                <span className="meta" style={{ color: '#14999C' }}>{flagship.category}</span>
                <span className="meta" style={{ color: '#8f949b' }}>{flagship.date}</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 3rem)', color: '#ffffff', margin: '10px 0 14px', lineHeight: 1.12 }}>
                {flagship.title}
              </h2>

              <p style={{ color: '#c9d4df', fontSize: 16, maxWidth: 920, lineHeight: 1.65, marginBottom: 24 }}>
                {flagship.subtitle}
              </p>

              {/* Metrics bar */}
              <div className="grid-3" style={{ marginBottom: 28 }}>
                {flagship.metrics.map(m => (
                  <div key={m.label} style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.04)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ color: '#14999C', fontWeight: 800, fontSize: 20, fontFamily: 'Space Grotesk' }}>{m.value}</div>
                    <div style={{ color: '#8f949b', fontSize: 12, marginTop: 2 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ color: '#d8e2ea', fontSize: 14 }}>
                  Authors: <strong>{flagship.authors.join(', ')}</strong> ({flagship.affiliation})
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSelectedPaper(flagship)} className="btn-primary" style={{ padding: '10px 20px' }}>
                    <FileText size={16} /> Read Full Paper & Abstract
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Papers Catalog */}
      <section className="section section-muted">
        <div className="site-container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
              <div>
                <div className="section-kicker">Publications & Work in Progress</div>
                <h2 className="section-title">Research Catalog</h2>
              </div>

              {/* Category Filter Pills */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`btn-secondary ${activeCategory === cat ? 'active' : ''}`}
                    style={{
                      borderRadius: 999,
                      fontSize: 12,
                      padding: '6px 14px',
                      minHeight: 34,
                      borderColor: activeCategory === cat ? '#14999C' : undefined,
                      background: activeCategory === cat ? 'rgba(20, 153, 156, 0.1)' : '#ffffff',
                      color: activeCategory === cat ? '#0f7678' : undefined
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Paper List Grid */}
          <div style={{ display: 'grid', gap: 20 }}>
            {filteredPapers.map((paper, idx) => (
              <ScrollReveal key={paper.id} delay={idx * 100}>
                <article className="paper-card" style={{ padding: 28, transition: 'all 200ms ease' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start' }}>
                    <div>
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 10 }}>
                        <span className="pill">{paper.category}</span>
                        <span 
                          className="pill" 
                          style={{ 
                            backgroundColor: paper.isFlagship ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)', 
                            color: paper.isFlagship ? '#15803d' : '#854d0e',
                            borderColor: 'transparent'
                          }}
                        >
                          {paper.status}
                        </span>
                        <span className="meta">{paper.type}</span>
                        <span className="meta" style={{ color: '#14999C' }}>{paper.date}</span>
                        {paper.arxivId && <span className="meta" style={{ color: '#8f949b' }}>{paper.arxivId}</span>}
                      </div>

                      <h3 style={{ fontSize: 23, color: '#121820', margin: '8px 0 10px', lineHeight: 1.25 }}>
                        {paper.title}
                      </h3>

                      <p style={{ color: '#586170', fontSize: 14, lineHeight: 1.6, maxWidth: 900, marginBottom: 16 }}>
                        {paper.abstract}
                      </p>

                      <div className="meta" style={{ color: '#415063' }}>
                        Authors: {paper.authors.join(', ')} {paper.affiliation && `(${paper.affiliation})`}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end', minWidth: 160 }}>
                      <button 
                        onClick={() => setSelectedPaper(paper)} 
                        className={paper.isFlagship ? 'btn-primary' : 'btn-secondary'} 
                        type="button" 
                        style={{ width: '100%', padding: '9px 16px', fontSize: 13 }}
                      >
                        <FileText size={15} /> {paper.isFlagship ? 'Open Paper' : 'View Abstract'}
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Programs */}
      <section className="section">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div className="section-kicker">Research Programs</div>
            <h2 className="section-title">Four Active Technical Threads</h2>
            <p className="section-copy">
              Our research is structured into dedicated long-term programs focused on solving foundational flaws in modern AI models.
            </p>
          </ScrollReveal>

          <div className="grid-2">
            {[
              ['Local Plasticity', 'Designing non-backprop learning rules that update parameters locally without global autograd graph passes.'],
              ['Associative Memory', 'Building two-tier Hopfield and VSA memory structures that store and retrieve relational codes.'],
              ['Byte-Level Benchmark', 'Constructing ByteCL to evaluate continual learning without subword tokenizer contamination.'],
              ['Interpretability Traces', 'Creating real-time trace visualizers for inspecting memory slot-matching and parameter updates.']
            ].map(([title, desc], i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <div className="paper-card" style={{ padding: 22, height: '100%' }}>
                  <span className="pill">{title}</span>
                  <p style={{ marginTop: 12, color: '#415063', fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Reader Modal */}
      {selectedPaper && (
        <PaperModal paper={selectedPaper} onClose={() => setSelectedPaper(null)} />
      )}
    </div>
  );
}
