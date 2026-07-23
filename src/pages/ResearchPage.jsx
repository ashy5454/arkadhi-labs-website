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
  HelpCircle, 
  Zap, 
  BookOpen, 
  Share2, 
  GitBranch, 
  Terminal,
  Scale
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PaperModal from '../components/PaperModal';

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPaperModal, setSelectedPaperModal] = useState(null);

  const flagshipPaper = {
    title: "What Fires Together Doesn't Forget Together",
    authors: ['Ashmith Atmuri*', 'Akshay Kumar', 'Yashaswini Rao Bhogarajula'],
    affiliation: 'Arkadhi Labs',
    contact: 'ashmithatmuri2@gmail.com',
    emails: ['ashmithatmuri2@gmail.com', 'aksh9881@gmail.com', 'yashaswinirao.bhogarajula@gmail.com'],
    date: '2026 Paper Release',
    category: 'Architecture & Plasticity',
    arxivId: 'Arkadhi-CL-2026.01',
    benchmark: '15-Domain Continual Text Protocol',
    abstract: `We introduce CMP (Cognitive Memory Primitive), an architecture that represents inputs as sparse relational codes, stores them in a two-tier competitive memory, and learns entirely through local, gradient-free updates, with no backpropagation anywhere in the network. We use this architecture to test a specific hypothesis: that catastrophic forgetting, usually treated as a training-time defect to be patched with replay or regularization, is instead a structural consequence of how backpropagation assigns credit, and that a learning rule which is local and sparse by construction should resist it without a patch. On a controlled domain-incremental protocol across 15 text domains, three-seed replicated, CMP's backward transfer is 15–19× better than a matched-size Transformer trained with online EWC.`,
  };

  const architectureModules = [
    {
      step: '3.1',
      title: 'Sparse Relational Binding',
      tag: 'Vector Symbolic Architecture',
      desc: 'Binds byte pairs into fixed-size sparse relational codes via elementwise multiplication of left/right role embeddings, followed by k-WTA sparsification.',
      formula: 'z_t = k-WTA( E_L(x_{t-1}) ⊙ E_R(x_t) )',
      detail: 'Avoids per-pair lookup tables and sequence recomputation. Operates at single-byte-pair resolution with zero learned projection overhead.'
    },
    {
      step: '3.2',
      title: 'Two-Tier Competitive Memory',
      tag: 'Associative Memory',
      desc: 'Fast short-term Buffer and slow long-term Register store relational codes via competitive, similarity-gated writes and content-addressed reads.',
      formula: 'S_{buffer} = { s | sim(z_t, s) > θ_{match} }',
      detail: 'Only codes that survive repeated match decisions earn promotion to the long-term register, preventing baseline noise from polluting memory.'
    },
    {
      step: '3.3–3.4',
      title: 'Hierarchy & Predictive Coding',
      tag: 'Self-Supervised Cascade',
      desc: 'Coarse word-scale codes (h_t) predict fine byte-scale codes (z_t) via locally-trained matrix F, producing sparse residual error signals.',
      formula: 'e_t = z_t - k-WTA( F · h_t )',
      detail: 'Matrix F is updated purely by local reconstruction and never receives gradient signals from the downstream task loss.'
    },
    {
      step: '3.5–3.7',
      title: 'Local Delta Rule & Weight-Protect',
      tag: 'Gradient-Free Plasticity Throttle',
      desc: 'All terms sum to next-byte logits, updated by a one-hop local delta rule. Per-tensor weight movement throttles future learning speed.',
      formula: 'ΔS_i = λ · S_i ⊙ |ΔW_i|  -->  W_i = W_i - η / (1 + S_i) · Error',
      detail: 'Replaces EWC Fisher information with raw weight-movement magnitude, enabling gradient-free synaptic protection across continual tasks.'
    }
  ];

  const resultsSummary = [
    {
      metric: '15–19×',
      label: 'Lower Backward Transfer (BWT)',
      note: '+0.1482 BWT vs Online EWC (+2.2457) and Naive Fine-Tuning (+2.7897) at matched 3.8M byte budget (~6.5M params).'
    },
    {
      metric: '3-Seed',
      label: 'Tightly Replicated BWT',
      note: 'Replication across seeds 42, 43, 44 produced mean BWT +0.2406 ± 0.0092 (std < 4% of mean).'
    },
    {
      metric: '+0.24 to +0.44',
      label: 'Domain-Order Range',
      note: 'Tested across canonical, reverse, and shuffled domain orderings. Order matters, but worst case still beats EWC by ~5×.'
    }
  ];

  const honestDisclosures = [
    {
      title: 'Accuracy Gap vs. Transformers',
      status: 'Acknowledged Limitation',
      desc: 'CMP single-domain raw BPB (3.10–3.27) trails matched Transformers. Focus is on structural forgetting resistance, not raw prediction competitiveness.'
    },
    {
      title: 'Split-MNIST Null Result',
      status: 'Negative Result',
      desc: 'Hilbert-serialized Split-MNIST (5-task) showed no measurable advantage of weight-protect over base sparse configuration (−0.0207 vs −0.0211 BWT).'
    },
    {
      title: 'Depth + Hierarchy Merge Failure',
      status: 'Diagnosed Failure (Appendix D)',
      desc: 'Stacking 4 non-sparse binding blocks prior to memory underperformed (3.48 vs 3.27 BPB) due to dense vectors degrading memory slot-matching.'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="paper-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="site-container">
          <ScrollReveal direction="up">
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
              <span className="pill">Flagship Research Paper</span>
              <span className="meta">Arkadhi Labs Continual Learning Group</span>
              <span className="meta" style={{ color: '#14999C' }}>3-Seed Replicated</span>
            </div>

            <h1 className="headline" style={{ maxWidth: 1050, fontSize: 'clamp(2.4rem, 5.2vw, 4.8rem)' }}>
              What Fires Together <span className="accent">Doesn't Forget Together.</span>
            </h1>

            <p className="lead" style={{ maxWidth: 880, marginTop: 18 }}>
              A structural account of catastrophic forgetting: demonstrating that local, sparse, gradient-free plasticity (CMP) resists forgetting <strong>15–19× better</strong> than backpropagation with online EWC.
            </p>

            {/* Author Byline Box */}
            <div className="paper-card" style={{ padding: '20px 24px', marginTop: 28, background: 'rgba(20, 153, 156, 0.03)', borderColor: 'rgba(20, 153, 156, 0.25)', maxWidth: 840 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                <div>
                  <div className="meta" style={{ color: '#14999C', marginBottom: 6 }}>Authors & Institution</div>
                  <div style={{ color: '#121820', fontWeight: 700, fontSize: 16 }}>
                    Ashmith Atmuri* &nbsp;•&nbsp; Akshay Kumar &nbsp;•&nbsp; Yashaswini Rao Bhogarajula
                  </div>
                  <div style={{ color: '#586170', fontSize: 13, marginTop: 4 }}>
                    Arkadhi Labs &nbsp;|&nbsp; *Corresponding author: <a href="mailto:ashmithatmuri2@gmail.com" style={{ color: '#14999C', textDecoration: 'underline' }}>ashmithatmuri2@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => setSelectedPaperModal(flagshipPaper)} className="btn-primary">
                    <FileText size={16} /> Read Abstract & BibTeX
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Tabs for Modules */}
      <section className="section" style={{ paddingTop: 36, paddingBottom: 24, borderBottom: '1px solid var(--paper-line)', background: '#ffffff', sticky: 'top', top: 74, zIndex: 20 }}>
        <div className="site-container">
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 6 }}>
            {[
              { id: 'overview', label: '1. Executive Summary & Claims', icon: BookOpen },
              { id: 'architecture', label: '2. CMP Architecture (Modules)', icon: Cpu },
              { id: 'results', label: '3. Continual Learning Protocol & Results', icon: Activity },
              { id: 'bytecl', label: '4. ByteCL Benchmark Initiative', icon: Database },
              { id: 'negative', label: '5. Honest Negative Results & Appendix', icon: AlertTriangle }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn-secondary ${isActive ? 'active' : ''}`}
                  style={{
                    borderRadius: 999,
                    fontSize: 13,
                    padding: '8px 18px',
                    borderColor: isActive ? '#14999C' : undefined,
                    background: isActive ? 'rgba(20, 153, 156, 0.08)' : undefined,
                    color: isActive ? '#0f7678' : undefined,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={15} color={isActive ? '#14999C' : '#5d6670'} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAB CONTENT: 1. OVERVIEW */}
      {activeTab === 'overview' && (
        <section className="section">
          <div className="site-container split">
            <ScrollReveal direction="left">
              <div className="section-kicker">Core Premise</div>
              <h2 className="section-title">Forgetting as a structural defect of Backprop.</h2>
              <p className="section-copy">
                Catastrophic forgetting is typically treated as a training-time problem to be patched with replay buffers, EWC regularization, or column expansion. Each treats forgetting as incidental.
              </p>
              <p className="section-copy" style={{ marginTop: 14 }}>
                We investigate a different premise: that forgetting is a structural consequence of global, dense backpropagation touching every weight in proportion to a single scalar loss — and that a learning rule which is <strong>local, sparse, and gradient-free</strong> by construction resists it naturally.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="dark-card" style={{ padding: 28 }}>
                <span className="meta" style={{ color: '#14999C' }}>What this paper does NOT claim</span>
                <ul style={{ margin: '16px 0 0', paddingLeft: 20, display: 'grid', gap: 14, color: '#d8e2ea', fontSize: 14 }}>
                  <li><strong>Not more accurate than Transformers:</strong> CMP trails raw accuracy by a substantial margin on short contexts.</li>
                  <li><strong>Not general superiority over attention:</strong> It makes a single, narrow, falsifiable claim on continual learning.</li>
                  <li><strong>Not novel individual math:</strong> Binding, Hopfield memory, and delta rules are established VSA/Hebbian methods; the specific combination and movement-based plasticity throttle are what we introduce.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="site-container" style={{ marginTop: 64 }}>
            <div className="grid-3">
              {resultsSummary.map((res, i) => (
                <ScrollReveal key={res.label} delay={i * 120}>
                  <div className="paper-card" style={{ padding: 26, height: '100%' }}>
                    <span className="pill">{res.label}</span>
                    <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#121820', margin: '14px 0 8px', fontFamily: 'Space Grotesk' }}>
                      {res.metric}
                    </div>
                    <p style={{ color: '#586170', fontSize: 14, lineHeight: 1.6 }}>{res.note}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 2. CMP ARCHITECTURE MODULES */}
      {activeTab === 'architecture' && (
        <section className="section">
          <div className="site-container">
            <ScrollReveal>
              <div style={{ marginBottom: 36 }}>
                <div className="section-kicker">Architecture Modules</div>
                <h2 className="section-title">Cognitive Memory Primitive (CMP) Breakdown</h2>
                <p className="section-copy">
                  A 7-stage local pipeline designed without backpropagation, global graph autograd, or subword tokenization.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid-2">
              {architectureModules.map((mod, i) => (
                <ScrollReveal key={mod.title} delay={i * 100}>
                  <div className="paper-card" style={{ padding: 28, height: '100%', borderLeft: '4px solid #14999C' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="meta" style={{ color: '#14999C' }}>Section {mod.step}</span>
                      <span className="pill">{mod.tag}</span>
                    </div>

                    <h3 style={{ fontSize: 22, color: '#121820', margin: '6px 0 10px' }}>{mod.title}</h3>
                    <p style={{ color: '#415063', fontSize: 14, lineHeight: 1.65 }}>{mod.desc}</p>

                    <div style={{ 
                      marginTop: 16, 
                      padding: '12px 16px', 
                      background: 'var(--graphite)', 
                      borderRadius: 6, 
                      color: '#14999C', 
                      fontFamily: 'JetBrains Mono, monospace', 
                      fontSize: 13 
                    }}>
                      {mod.formula}
                    </div>

                    <p style={{ marginTop: 14, color: '#8f949b', fontSize: 13, fontStyle: 'italic' }}>
                      {mod.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Weight Protect Focus Box */}
            <ScrollReveal delay={400}>
              <div className="dark-card" style={{ marginTop: 32, padding: 32, borderColor: 'rgba(20, 153, 156, 0.4)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <Zap size={22} color="#14999C" />
                  <h3 style={{ color: '#ffffff', fontSize: 22, margin: 0 }}>Section 3.7 — Weight-Protect: The Plasticity Throttle</h3>
                </div>
                <p style={{ color: '#c9d4df', fontSize: 15, maxWidth: 900 }}>
                  Because CMP has no backpropagated gradient by construction, it cannot compute EWC's Fisher Information matrix (which requires squaring gradients). 
                  Instead, Weight-Protect tracks the <strong>raw accumulated weight movement magnitude</strong> $|\Delta W_i|$ after each domain, throttling future updates inversely.
                </p>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <div>
                    <span className="meta" style={{ color: '#14999C' }}>Update Scaling</span>
                    <div style={{ color: '#ffffff', fontFamily: 'JetBrains Mono', fontSize: 14, marginTop: 4 }}>η_effective = η / (1 + S_i)</div>
                  </div>
                  <div>
                    <span className="meta" style={{ color: '#14999C' }}>Key Property</span>
                    <div style={{ color: '#ffffff', fontSize: 14, marginTop: 4 }}>Gradient-free, O(1) per parameter, zero backprop graph memory.</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 3. RESULTS & PROTOCOL */}
      {activeTab === 'results' && (
        <section className="section">
          <div className="site-container">
            <ScrollReveal>
              <div className="section-kicker">Empirical Protocol</div>
              <h2 className="section-title">15-Domain Continual Text Evaluation</h2>
              <p className="section-copy">
                Tested across 15 real-world text domains (Wikipedia, CPython source, Shakespeare, KJV Bible, Reuters, Moby Dick, Federalist Papers, Darwin, Whitman, Lodash, Aurelius, Flatland, Alice, Python Docs, Hindi Corpus).
              </p>
            </ScrollReveal>

            {/* Comparison Table */}
            <ScrollReveal delay={150}>
              <div className="paper-card" style={{ marginTop: 32, padding: 28, overflowX: 'auto' }}>
                <div className="meta" style={{ color: '#14999C', marginBottom: 16 }}>Table 3: Forgetting Comparison (Matched 3.8M Byte Budget, ~6.5M Params)</div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--paper-line)', color: '#121820' }}>
                      <th style={{ padding: '12px 16px' }}>Method</th>
                      <th style={{ padding: '12px 16px' }}>Architecture</th>
                      <th style={{ padding: '12px 16px' }}>Backward Transfer (BWT) ↓</th>
                      <th style={{ padding: '12px 16px' }}>Relative Forgetting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--paper-line)' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 600 }}>Naive Sequential Fine-Tuning</td>
                      <td style={{ padding: '14px 16px' }}>Transformer (6.5M)</td>
                      <td style={{ padding: '14px 16px', color: '#fc7a5c', fontWeight: 700 }}>+2.7897 BPB</td>
                      <td style={{ padding: '14px 16px', color: '#586170' }}>19× Baseline</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--paper-line)' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 600 }}>Online EWC (Schwarz et al.)</td>
                      <td style={{ padding: '14px 16px' }}>Transformer (6.5M)</td>
                      <td style={{ padding: '14px 16px', color: '#fc7a5c', fontWeight: 700 }}>+2.2457 BPB</td>
                      <td style={{ padding: '14px 16px', color: '#586170' }}>15× Baseline (~20% reduction vs naive)</td>
                    </tr>
                    <tr style={{ background: 'rgba(20, 153, 156, 0.08)' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#0f7678' }}>CMP (Weight-Protect) [Ours]</td>
                      <td style={{ padding: '14px 16px', fontWeight: 600 }}>Cognitive Memory Primitive</td>
                      <td style={{ padding: '14px 16px', color: '#14999C', fontWeight: 800, fontSize: 16 }}>+0.1482 BPB</td>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#14999C' }}>15–19× Less Forgetting</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ marginTop: 14, fontSize: 12, color: '#8f949b' }}>
                  *Note: BWT is reported in Bits-Per-Byte (BPB); lower is better. Lower BWT indicates minimal catastrophic forgetting across sequential domain shifts.
                </div>
              </div>
            </ScrollReveal>

            {/* Order Sensitivity */}
            <div className="grid-2" style={{ marginTop: 28 }}>
              <ScrollReveal delay={250}>
                <div className="paper-card" style={{ padding: 24 }}>
                  <span className="meta" style={{ color: '#14999C' }}>Domain-Order Sensitivity Control</span>
                  <h4 style={{ fontSize: 18, margin: '10px 0 8px', color: '#121820' }}>Order-Dependent Bound (+0.24 to +0.44)</h4>
                  <p style={{ color: '#586170', fontSize: 14 }}>
                    Evaluated across 5-domain crossed sequences (Canonical, Reverse, Shuffled). The effect is sequence-dependent, but even the worst ordering (+0.44) still outperforms Transformer Online EWC (+2.25) by ~5×.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="paper-card" style={{ padding: 24 }}>
                  <span className="meta" style={{ color: '#14999C' }}>3-Seed Replication</span>
                  <h4 style={{ fontSize: 18, margin: '10px 0 8px', color: '#121820' }}>Tightly Replicated BWT Across Seeds</h4>
                  <p style={{ color: '#586170', fontSize: 14 }}>
                    Seeds 42, 43, 44 produced mean BWT <strong>+0.2406 ± 0.0092</strong>. Standard deviation is under 4% of the mean, confirming that forgetting resistance is an architectural property, not a lucky random initialization.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 4. BYTECL BENCHMARK INITIATIVE */}
      {activeTab === 'bytecl' && (
        <section className="section">
          <div className="site-container">
            <ScrollReveal>
              <div className="dark-card" style={{ padding: 36, borderLeft: '6px solid #14999C' }}>
                <div className="eyebrow" style={{ color: '#14999C' }}>Arkadhi Labs Initiative</div>
                <h2 style={{ fontSize: 36, color: '#ffffff', margin: '12px 0 16px' }}>
                  ByteCL: A Byte-Level Benchmark for Continual Learning
                </h2>
                <p style={{ color: '#c9d4df', fontSize: 16, lineHeight: 1.7, maxWidth: 900 }}>
                  Current continual learning benchmarks rely heavily on subword tokenizers (BPE, WordPiece) that bake in static vocabulary distribution assumptions and introduce tokenizer contamination across domains. 
                  We are building <strong>ByteCL</strong> — an open, standardized byte-level benchmark designed specifically to evaluate continual learning in byte-level and non-subword sequence models.
                </p>

                <div className="grid-3" style={{ marginTop: 32 }}>
                  <div style={{ padding: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                    <Database size={22} color="#14999C" />
                    <h4 style={{ color: '#ffffff', margin: '12px 0 6px', fontSize: 17 }}>Zero Tokenizer Bias</h4>
                    <p style={{ color: '#8f949b', fontSize: 13 }}>Evaluates raw byte-stream representations without vocabulary mismatch or out-of-vocabulary artifacts.</p>
                  </div>

                  <div style={{ padding: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                    <Layers size={22} color="#14999C" />
                    <h4 style={{ color: '#ffffff', margin: '12px 0 6px', fontSize: 17 }}>Multi-Domain Shifts</h4>
                    <p style={{ color: '#8f949b', fontSize: 13 }}>Spans code, natural language, formal mathematics, and multilingual scripts with standardized BPB metrics.</p>
                  </div>

                  <div style={{ padding: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                    <Scale size={22} color="#14999C" />
                    <h4 style={{ color: '#ffffff', margin: '12px 0 6px', fontSize: 17 }}>Contamination Controls</h4>
                    <p style={{ color: '#8f949b', fontSize: 13 }}>Built-in provenance verification and holdout protocols to prevent accidental pretraining data leakage.</p>
                  </div>
                </div>

                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                  <span style={{ color: '#8f949b', fontSize: 14 }}>ByteCL is currently under active development at Arkadhi Labs.</span>
                  <NavLink to="/work-with-us" className="btn-primary">
                    Collaborate on ByteCL <ArrowRight size={16} />
                  </NavLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 5. HONEST NEGATIVE RESULTS & APPENDIX */}
      {activeTab === 'negative' && (
        <section className="section">
          <div className="site-container">
            <ScrollReveal>
              <div className="section-kicker">Scientific Integrity</div>
              <h2 className="section-title">Honest Accounting of What Does Not Yet Work</h2>
              <p className="section-copy">
                An honest negative result is more useful than an omitted one. We explicitly disclose limitations, null results, and failure modes.
              </p>
            </ScrollReveal>

            <div className="grid-3" style={{ marginTop: 32 }}>
              {honestDisclosures.map((disc, i) => (
                <ScrollReveal key={disc.title} delay={i * 120}>
                  <div className="paper-card" style={{ padding: 26, height: '100%', borderTop: '3px solid #fc7a5c' }}>
                    <span className="pill" style={{ borderColor: 'rgba(252, 122, 92, 0.4)', background: 'rgba(252, 122, 92, 0.08)', color: '#fc7a5c' }}>
                      {disc.status}
                    </span>
                    <h3 style={{ fontSize: 20, color: '#121820', margin: '16px 0 10px' }}>{disc.title}</h3>
                    <p style={{ color: '#586170', fontSize: 14, lineHeight: 1.6 }}>{disc.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Appendix D Details */}
            <ScrollReveal delay={300}>
              <div className="paper-card" style={{ marginTop: 32, padding: 28, background: '#f7f8f9' }}>
                <h4 style={{ fontSize: 18, color: '#121820', marginBottom: 8 }}>Appendix D Diagnostic: Why Depth + Hierarchy Merge Failed</h4>
                <p style={{ color: '#415063', fontSize: 14, lineHeight: 1.65 }}>
                  Attempting to stack 4 non-sparse binding blocks prior to memory underperformed the flagship baseline (3.48 vs 3.27 BPB). 
                  Our diagnosis: the depth-line blocks use plain normalization (no k-WTA sparsification), while memory slot-matching assumes sparse inputs. 
                  Feeding dense vectors into memory degraded match precision. Additionally, signal dilution occurred with 7+ readout terms competing for the same one-hop error.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Collaboration Section */}
      <section className="section section-dark">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div className="section-kicker">Replication & Partnership</div>
            <h2 className="section-title">Request Code & Reproducible Logs</h2>
            <p className="section-copy">
              The domain-incremental text corpus and code are available for external research verification upon request.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="dark-card" style={{ padding: 28 }}>
              <Terminal size={26} color="#14999C" />
              <h3 style={{ margin: '14px 0 8px', fontSize: 22 }}>Work With Arkadhi Labs</h3>
              <p style={{ color: '#c9d4df', fontSize: 14, lineHeight: 1.6 }}>
                We partner with academic institutions, model architecture labs, and continual learning researchers.
              </p>
              <NavLink to="/work-with-us" className="btn-primary" style={{ marginTop: 20 }}>
                Contact Research Team <ArrowRight size={16} />
              </NavLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Paper Modal for BibTeX */}
      {selectedPaperModal && (
        <PaperModal paper={selectedPaperModal} onClose={() => setSelectedPaperModal(null)} />
      )}
    </div>
  );
}
