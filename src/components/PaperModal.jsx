import React from 'react';
import { Check, FileText, X } from 'lucide-react';

export default function PaperModal({ paper, onClose }) {
  const [copied, setCopied] = React.useState(false);
  if (!paper) return null;

  const handleCopyBibtex = async () => {
    const key = paper.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const bibtex = `@misc{arkadhi-${key},
  title={${paper.title}},
  author={${paper.authors.join(' and ')}},
  year={2026},
  note={Arkadhi Labs ${paper.category} artifact}
}`;
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <div style={{ padding: 34, borderBottom: '1px solid #dfe5eb', position: 'relative' }}>
          <button className="btn-icon" type="button" onClick={onClose} aria-label="Close abstract" style={{ position: 'absolute', right: 20, top: 20 }}>
            <X size={18} />
          </button>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingRight: 50 }}>
            <span className="pill">{paper.category}</span>
            <span className="pill">{paper.arxivId}</span>
          </div>
          <h2 style={{ marginTop: 18, color: '#121820', fontSize: 34 }}>{paper.title}</h2>
          <p className="meta" style={{ marginTop: 12 }}>Authors: {paper.authors.join(', ')}</p>
        </div>

        <div style={{ padding: 34 }}>
          <div className="paper-card" style={{ padding: 22, borderLeft: '3px solid #14999C' }}>
            <div className="meta" style={{ color: '#14999C', marginBottom: 8 }}>Abstract</div>
            <p style={{ color: '#415063', lineHeight: 1.72 }}>{paper.abstract}</p>
          </div>

          <div className="grid-2" style={{ marginTop: 18 }}>
            <div className="paper-card" style={{ padding: 18 }}>
              <span className="meta">Status</span>
              <p style={{ marginTop: 8, color: '#121820', fontWeight: 700 }}>{paper.date}</p>
            </div>
            <div className="paper-card" style={{ padding: 18 }}>
              <span className="meta">Benchmark</span>
              <p style={{ marginTop: 8, color: '#121820', fontWeight: 700 }}>{paper.benchmark}</p>
            </div>
          </div>

          <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid #dfe5eb', display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <button type="button" onClick={handleCopyBibtex} className="btn-secondary">
              {copied ? <Check size={16} color="#14999C" /> : <FileText size={16} />}
              {copied ? 'Copied' : 'Copy citation'}
            </button>
            <button type="button" onClick={onClose} className="btn-primary">Close</button>
          </div>
        </div>
      </article>
    </div>
  );
}
