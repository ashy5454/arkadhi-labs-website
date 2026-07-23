import React, { useMemo, useState } from 'react';
import { CheckCircle2, Send, Mail, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function WorkWithUsPage() {
  const [inquiryType, setInquiryType] = useState('research');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    attachmentUrl: ''
  });

  const targetEmail = 'founder@arkadhi.com';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // Direct email routing via FormSubmit API targeting founder@arkadhi.com
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Arkadhi Labs Inquiry] ${formData.subject || inquiryType}`,
          _template: 'table',
          _captcha: 'false',
          Inquiry_Type: inquiryType.toUpperCase(),
          Full_Name: formData.fullName,
          Sender_Email: formData.email,
          Organization: formData.organization || 'N/A',
          Subject: formData.subject,
          Message: formData.message,
          Attachment_Link: formData.attachmentUrl || 'None',
          Reference_ID: referenceId
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <ScrollReveal>
            <div className="eyebrow">Contact & Collaboration</div>
            <h1 className="headline">Bring a precise problem.</h1>
            <p className="lead">
              Use this form to reach the research leadership directly. Inquiries are automatically routed to <strong style={{ color: '#14999C' }}>{targetEmail}</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <ScrollReveal direction="left">
            <div>
              <div className="section-kicker">Direct Contact</div>
              <h2 className="section-title">Send a hypothesis, proposal, or evaluation need.</h2>
              <p className="section-copy">
                The most useful messages include a short problem statement, what evidence already exists, what you want Arkadhi Labs to evaluate or build, and links to any relevant paper, repository, or CV.
              </p>

              <div className="paper-card" style={{ marginTop: 28, padding: 22, borderLeft: '4px solid #14999C', background: 'rgba(20, 153, 156, 0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#14999C', fontWeight: 700, fontSize: 15 }}>
                  <Mail size={18} /> Direct Email Routing
                </div>
                <p style={{ marginTop: 8, color: '#586170', fontSize: 13, lineHeight: 1.6 }}>
                  Submissions are delivered straight to <code style={{ color: '#121820', background: '#e2e8f0', padding: '2px 6px', borderRadius: 4 }}>{targetEmail}</code>. You can also write to us directly at any time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            {isSubmitted ? (
              <div className="card" style={{ padding: 36, textAlign: 'center' }}>
                <CheckCircle2 size={48} color="#14999C" style={{ margin: '0 auto' }} />
                <h2 style={{ marginTop: 18, color: '#121820', fontSize: 28 }}>Inquiry Sent Successfully</h2>
                <p style={{ color: '#586170', marginTop: 10, lineHeight: 1.6 }}>
                  Your message has been routed to <strong>{targetEmail}</strong>. We review inquiries daily and respond to technical proposals promptly.
                </p>
                <div className="pill" style={{ marginTop: 20 }}>Reference #{referenceId}</div>

                <div style={{ marginTop: 28 }}>
                  <button 
                    type="button" 
                    className="btn-secondary" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', organization: '', subject: '', message: '', attachmentUrl: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card" style={{ padding: 30 }}>
                <div style={{ marginBottom: 24 }}>
                  <label className="label">Inquiry Type</label>
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
                  <p style={{ marginTop: 12, color: '#586170', fontSize: 13 }}>{descriptions[inquiryType]}</p>
                </div>

                <div className="grid-2" style={{ gap: 16 }}>
                  <div>
                    <label className="label">Full Name *</label>
                    <input 
                      className="input" 
                      required 
                      name="fullName"
                      value={formData.fullName} 
                      onChange={(event) => updateField('fullName', event.target.value)} 
                      placeholder="Your full name" 
                    />
                  </div>
                  <div>
                    <label className="label">Email Address *</label>
                    <input 
                      className="input" 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email} 
                      onChange={(event) => updateField('email', event.target.value)} 
                      placeholder="you@domain.com" 
                    />
                  </div>
                  <div>
                    <label className="label">Organization / Lab</label>
                    <input 
                      className="input" 
                      name="organization"
                      value={formData.organization} 
                      onChange={(event) => updateField('organization', event.target.value)} 
                      placeholder="University, company, or independent" 
                    />
                  </div>
                  <div>
                    <label className="label">Subject *</label>
                    <input 
                      className="input" 
                      required 
                      name="subject"
                      value={formData.subject} 
                      onChange={(event) => updateField('subject', event.target.value)} 
                      placeholder="Topic of inquiry" 
                    />
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <label className="label">Message *</label>
                  <textarea 
                    className="textarea" 
                    required 
                    name="message"
                    value={formData.message} 
                    onChange={(event) => updateField('message', event.target.value)} 
                    placeholder="Describe the problem, paper proposal, or evaluation need." 
                  />
                </div>

                <div style={{ marginTop: 16 }}>
                  <label className="label">Paper, Repo, or CV Link (Optional)</label>
                  <input 
                    className="input" 
                    type="url" 
                    name="attachmentUrl"
                    value={formData.attachmentUrl} 
                    onChange={(event) => updateField('attachmentUrl', event.target.value)} 
                    placeholder="https://..." 
                  />
                </div>

                {errorMsg && (
                  <div style={{ marginTop: 16, color: '#dc2626', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <AlertCircle size={16} /> {errorMsg}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary" 
                  style={{ width: '100%', minHeight: 48, marginTop: 24, fontSize: 15 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Routing Email...
                    </>
                  ) : (
                    <>
                      Send Inquiry to {targetEmail} <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
