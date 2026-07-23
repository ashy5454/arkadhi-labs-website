import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      date: '2026.06',
      category: 'Research note',
      title: 'Sparse routing needs an evidence protocol',
      author: 'Arkadhi Labs',
      readTime: '7 min',
      excerpt: 'A claim about sparse compute is only meaningful when activation savings, latency, quality, and boundary behavior are measured together.',
      content: 'Sparse routing is often presented as a single efficiency claim. In practice, it is a coupled systems question. A useful protocol must report which paths activated, what work was skipped, whether latency moved in the right direction, and where quality regressed. The goal is not to make sparsity sound elegant. The goal is to make it falsifiable.'
    },
    {
      date: '2026.05',
      category: 'Evaluation memo',
      title: 'Benchmark cards for contamination-resistant tasks',
      author: 'Evaluation Group',
      readTime: '6 min',
      excerpt: 'Every generated task should carry construction rules, solver checks, holdout logic, and known failure modes.',
      content: 'A benchmark card should make the task lineage visible. It should describe how instances were generated, how answers were verified, which parameters were held out, and why the task tests the claimed capability. This makes benchmark results harder to overstate and easier to reproduce.'
    },
    {
      date: '2026.04',
      category: 'Systems log',
      title: 'What activation traces should show',
      author: 'Systems Group',
      readTime: '5 min',
      excerpt: 'A trace interface is useful only when it helps researchers see decisions, not just decorative model internals.',
      content: 'Activation traces should expose the decision surface: which token neighborhoods were considered, which paths were selected, how memory moved, and when uncertainty appeared. The interface is not evidence by itself. It is an instrument for finding the next ablation.'
    },
    {
      date: '2026.03',
      category: 'Lab note',
      title: 'A lab culture for frontier work from India',
      author: 'Arkadhi Labs',
      readTime: '4 min',
      excerpt: 'The strongest research culture rewards mechanisms, replication, and precise writing before broad claims.',
      content: 'Frontier work does not require a theatrical posture. It requires talent, compute discipline, careful measurement, and the willingness to write down what failed. Arkadhi Labs is designed around those habits.'
    }
  ];

  const categories = ['All', 'Research note', 'Evaluation memo', 'Systems log', 'Lab note'];
  const visible = activeCategory === 'All' ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="page">
      <section className="paper-hero">
        <div className="site-container">
          <div className="eyebrow">Publications and field notes</div>
          <h1 className="headline">Research writing with methods attached.</h1>
          <p className="lead">
            Notes from the lab on architecture, evaluation, systems, and the operating discipline required for serious AI research.
          </p>
        </div>
      </section>

      <section className="section section-muted" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="site-container" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'btn-primary' : 'btn-secondary'}
              style={{ minHeight: 36, fontSize: 13 }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="site-container grid-2">
          {visible.map((post) => (
            <button
              key={post.title}
              type="button"
              onClick={() => setSelectedPost(post)}
              className="paper-card"
              style={{ padding: 28, textAlign: 'left' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 18 }}>
                <span className="pill">{post.category}</span>
                <span className="meta">{post.date}</span>
              </div>
              <h2 style={{ color: '#121820', fontSize: 30 }}>{post.title}</h2>
              <p style={{ marginTop: 12, color: '#586170' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'center', marginTop: 26, paddingTop: 18, borderTop: '1px solid #dfe5eb' }}>
                <span className="meta">{post.author} / {post.readTime}</span>
                <span className="btn-ghost">Read <ArrowRight size={15} /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedPost && (
        <div className="modal-backdrop" onClick={() => setSelectedPost(null)}>
          <article className="modal-panel" onClick={(event) => event.stopPropagation()}>
            <div style={{ padding: 34, borderBottom: '1px solid #dfe5eb', position: 'relative' }}>
              <button className="btn-icon" type="button" onClick={() => setSelectedPost(null)} aria-label="Close reader" style={{ position: 'absolute', right: 20, top: 20 }}>
                <X size={18} />
              </button>
              <span className="pill">{selectedPost.category}</span>
              <h2 style={{ marginTop: 18, paddingRight: 48, color: '#121820', fontSize: 36 }}>{selectedPost.title}</h2>
              <p className="meta" style={{ marginTop: 12 }}>{selectedPost.author} / {selectedPost.date} / {selectedPost.readTime}</p>
            </div>
            <div style={{ padding: 34 }}>
              <p style={{ color: '#415063', fontSize: 17, lineHeight: 1.75 }}>{selectedPost.content}</p>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
