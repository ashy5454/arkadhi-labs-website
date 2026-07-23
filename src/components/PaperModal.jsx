import React, { useState } from 'react';
import { Check, FileText, X, Copy } from 'lucide-react';

export default function PaperModal({ paper, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!paper) return null;

  const handleCopyBibtex = async () => {
    const key = paper.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const bibtex = `@article{atmuri2026whatfires,
  title={What Fires Together Doesn't Forget Together},
  author={${paper.authors.join(' and ')}},
  journal={Arkadhi Labs Technical Report},
  year={2026},
  institution={Arkadhi Labs},
  note={3-seed replicated continual learning paper}
}`;
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal-panel" onClick={(event) => event.stopPropagation()} style={{ maxWidth: 850 }}>
        <div style={{ padding: 34, borderBottom: '1px solid #dfe5eb', position: 'relative' }}>
          <button className="btn-icon" type="button" onClick={onClose} aria-label="Close abstract" style={{ position: 'absolute', right: 20, top: 20 }}>
            <X size={18} />
          </button>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingRight: 50 }}>
            <span className="pill">{paper.category}</span>
            <span className="pill">{paper.arxivId}</span>
            <span className="pill" style={{ background: 'rgba(20, 153, 156, 0.1)', color: '#0f7678' }}>{paper.benchmark}</span>
          </div>

          <h2 style={{ marginTop: 18, color: '#121820', fontSize: 32, lineHeight: 1.15 }}>{paper.title}</h2>
          
          <div className="meta" style={{ marginTop: 14, color: '#14999C', fontSize: 13 }}>
            Authors: {paper.authors.join(', ')} ({paper.affiliation})
          </div>
          {paper.emails && (
            <div style={{ fontSize: 12, color: '#586170', fontFamily: 'JetBrains Mono, monospace', marginTop: 4 }}>
              Contact: {paper.emails.join(', ')}
            </div>
          )}
        </div>

        <div style={{ padding: 34 }}>
          <div className="paper-card" style={{ padding: 24, borderLeft: '4px solid #14999C', background: 'rgba(20, 153, 156, 0.02)' }}>
            <div className="meta" style={{ color: '#14999C', marginBottom: 8 }}>Paper Abstract</div>
            <p style={{ color: '#334155', lineHeight: 1.72, fontSize: 15 }}>{paper.abstract}</p>
          </div>

          <div className="grid-3" style={{ marginTop: 20 }}>
            <div className="paper-card" style={{ padding: 18 }}>
              <span className="meta">Primary Metric</span>
              <p style={{ marginTop: 6, color: '#121820', fontWeight: 700, fontSize: 16 }}>15–19× Lower Forgetting</p>
            </div>
            <div className="paper-card" style={{ padding: 18 }}>
              <span className="meta">Evaluation</span>
              <p style={{ marginTop: 6, color: '#121820', fontWeight: 700, fontSize: 16 }}>15 Sequential Domains</p>
            </div>
            <div className="paper-card" style={{ padding: 18 }}>
              <span className="meta">Validation</span>
              <p style={{ marginTop: 6, color: '#121820', fontWeight: 700, fontSize: 16 }}>3-Seed Replicated</p>
            </div>
          </div>

          <div style={{ marginTop: 26, paddingTop: 20, borderTop: '1px solid #dfe5eb', display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button type="button" onClick={handleCopyBibtex} className="btn-secondary">
              {copied ? <Check size={16} color="#14999C" /> : <Copy size={16} />}
              {copied ? 'BibTeX Copied!' : 'Copy BibTeX Citation'}
            </button>
            <button type="button" onClick={onClose} className="btn-primary">Close Viewer</button>
          </div>
        </div>
      </article>
    </div>
  );
}
