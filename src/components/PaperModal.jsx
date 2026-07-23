import React, { useState } from 'react';
import { Check, FileText, X, Copy, BookOpen } from 'lucide-react';

export default function PaperModal({ paper, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!paper) return null;

  const handleCopyBibtex = async () => {
    const key = paper.id || paper.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const bibtex = `@article{arkadhi-${key},
  title={${paper.title}},
  author={${paper.authors.join(' and ')}},
  journal={Arkadhi Labs Technical Report},
  year={${paper.date || '2026'}},
  institution={Arkadhi Labs},
  note={Arkadhi Labs ${paper.category} publication}
}`;
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal-panel" onClick={(event) => event.stopPropagation()} style={{ maxWidth: 880 }}>
        <div style={{ padding: 34, borderBottom: '1px solid #dfe5eb', position: 'relative' }}>
          <button className="btn-icon" type="button" onClick={onClose} aria-label="Close modal" style={{ position: 'absolute', right: 20, top: 20 }}>
            <X size={18} />
          </button>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingRight: 50, marginBottom: 12 }}>
            <span className="pill">{paper.category}</span>
            {paper.type && <span className="pill" style={{ background: 'rgba(20, 153, 156, 0.1)', color: '#0f7678' }}>{paper.type}</span>}
            {paper.arxivId && <span className="meta">{paper.arxivId}</span>}
          </div>

          <h2 style={{ color: '#121820', fontSize: 30, lineHeight: 1.18 }}>{paper.title}</h2>
          
          <div className="meta" style={{ marginTop: 12, color: '#14999C', fontSize: 13 }}>
            Authors: {paper.authors.join(', ')} {paper.affiliation && `(${paper.affiliation})`}
          </div>
          {paper.emails && (
            <div style={{ fontSize: 12, color: '#586170', fontFamily: 'JetBrains Mono, monospace', marginTop: 4 }}>
              Contact: {paper.emails.join(', ')}
            </div>
          )}
        </div>

        <div style={{ padding: 34, maxHeight: '72vh', overflowY: 'auto' }}>
          {/* Abstract Box */}
          <div className="paper-card" style={{ padding: 24, borderLeft: '4px solid #14999C', background: 'rgba(20, 153, 156, 0.02)' }}>
            <div className="meta" style={{ color: '#14999C', marginBottom: 8 }}>Abstract</div>
            <p style={{ color: '#334155', lineHeight: 1.72, fontSize: 15 }}>{paper.abstract}</p>
          </div>

          {/* Metrics Summary if available */}
          {paper.metrics && paper.metrics.length > 0 && (
            <div className="grid-3" style={{ marginTop: 20 }}>
              {paper.metrics.map(m => (
                <div key={m.label} className="paper-card" style={{ padding: 18 }}>
                  <span className="meta">{m.label}</span>
                  <p style={{ marginTop: 6, color: '#121820', fontWeight: 700, fontSize: 16 }}>{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Paper Sections (for CMP paper) */}
          {paper.details && paper.details.sections && (
            <div style={{ marginTop: 28 }}>
              <div className="section-kicker" style={{ marginBottom: 12 }}>Architecture & Equations</div>
              <div style={{ display: 'grid', gap: 16 }}>
                {paper.details.sections.map(sec => (
                  <div key={sec.title} className="paper-card" style={{ padding: 20, background: '#f7f8f9' }}>
                    <h4 style={{ color: '#121820', fontSize: 16, margin: '0 0 6px' }}>{sec.title}</h4>
                    <div style={{ 
                      padding: '8px 12px', 
                      background: 'var(--graphite)', 
                      borderRadius: 4, 
                      color: '#14999C', 
                      fontFamily: 'JetBrains Mono, monospace', 
                      fontSize: 13,
                      marginBottom: 8
                    }}>
                      {sec.code}
                    </div>
                    <p style={{ color: '#586170', fontSize: 13, margin: 0 }}>{sec.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disclosures section if present */}
          {paper.details && paper.details.disclosures && (
            <div style={{ marginTop: 24, padding: 20, background: 'rgba(252, 122, 92, 0.05)', borderRadius: 8, border: '1px solid rgba(252, 122, 92, 0.2)' }}>
              <div className="meta" style={{ color: '#fc7a5c', marginBottom: 8 }}>Disclosed Limitations & Negative Results</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: '#415063', fontSize: 13, display: 'grid', gap: 6 }}>
                {paper.details.disclosures.map((disc, idx) => (
                  <li key={idx}>{disc}</li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid #dfe5eb', display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
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
