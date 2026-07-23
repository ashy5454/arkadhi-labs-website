import React, { useMemo, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function WorkWithUsPage() {
  const [inquiryType, setInquiryType] = useState('research');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    attachmentUrl: ''
  });

  const descriptions = {
    research: 'For joint research, paper review, architecture discussions, and academic collaboration.',
    product: 'For evaluation harness access, runtime experiments, model audits, and benchmark support.',
    careers: 'For roles, fellowships, independent researchers, and systems engineers.',
    general: 'For press, events, partnerships, and other technical correspondence.'
  };

  const referenceId = useMemo(() => `ARK-${Math.floor(100000 + Math.random() * 900000)}`, []);

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <div className="eyebrow">Contact and collaboration</div>
          <h1 className="headline">Bring a precise problem.</h1>
          <p className="lead">
            Use this form for research collaborations, evaluation access, career conversations, and technical partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <div>
            <div className="section-kicker">What helps us respond</div>
            <h2 className="section-title">Send the hypothesis, artifact, or role fit.</h2>
            <p className="section-copy">
              The most useful messages include a short problem statement, what evidence already exists, what you want Arkadhi to evaluate or build, and links to any relevant paper, repository, or CV.
            </p>
          </div>

          {isSubmitted ? (
            <div className="card" style={{ padding: 34, textAlign: 'center' }}>
              <CheckCircle2 size={46} color="#14999C" />
              <h2 style={{ marginTop: 18, color: '#121820', fontSize: 32 }}>Inquiry received</h2>
              <p style={{ color: '#586170', marginTop: 10 }}>
                The form is captured locally in this prototype. Wire it to your backend or email service before production launch.
              </p>
              <p className="meta" style={{ marginTop: 20 }}>Reference {referenceId}</p>
              <button type="button" className="btn-secondary" style={{ marginTop: 24 }} onClick={() => setIsSubmitted(false)}>
                Submit another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card" style={{ padding: 30 }}>
              <div style={{ marginBottom: 24 }}>
                <label className="label">Inquiry type</label>
                <div className="grid-4" style={{ gap: 8 }}>
                  {[
                    ['research', 'Research'],
                    ['product', 'Product'],
                    ['careers', 'Careers'],
                    ['general', 'General']
                  ].map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setInquiryType(id)}
                      className={inquiryType === id ? 'btn-primary' : 'btn-secondary'}
                      style={{ minHeight: 38, fontSize: 13 }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p style={{ marginTop: 12, color: '#586170', fontSize: 14 }}>{descriptions[inquiryType]}</p>
              </div>

              <div className="grid-2" style={{ gap: 18 }}>
                <div>
                  <label className="label">Full name *</label>
                  <input className="input" required value={formData.fullName} onChange={(event) => updateField('fullName', event.target.value)} placeholder="Your name" />
                </div>
                <div>
                  <label className="label">Email *</label>
                  <input className="input" required type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="label">Organization</label>
                  <input className="input" value={formData.organization} onChange={(event) => updateField('organization', event.target.value)} placeholder="University, company, or independent" />
                </div>
                <div>
                  <label className="label">Subject *</label>
                  <input className="input" required value={formData.subject} onChange={(event) => updateField('subject', event.target.value)} placeholder="Short topic" />
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <label className="label">Message *</label>
                <textarea className="textarea" required value={formData.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Describe the problem, proposal, role fit, or evaluation need." />
              </div>

              <div style={{ marginTop: 18 }}>
                <label className="label">Paper, repo, or CV link</label>
                <input className="input" type="url" value={formData.attachmentUrl} onChange={(event) => updateField('attachmentUrl', event.target.value)} placeholder="https://..." />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', minHeight: 48, marginTop: 24 }}>
                Send inquiry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
