import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ArkadhiLogo from './ArkadhiLogo';

export default function Footer() {
  const groups = [
    {
      title: 'Research & Paper',
      links: [
        ['Flagship Paper', '/research'],
        ['CMP Architecture', '/research'],
        ['ByteCL Benchmark', '/research'],
        ['Method Notes', '/blog']
      ]
    },
    {
      title: 'Products & Systems',
      links: [
        ['Prexi Platform', '/products'],
        ['Prism Runtime', '/products'],
        ['Trace Atlas', '/products'],
        ['Context Management', '/products']
      ]
    },
    {
      title: 'Collaboration',
      links: [
        ['Work With Us', '/work-with-us'],
        ['Research Grants', '/work-with-us'],
        ['Contact Team', '/work-with-us']
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="site-container section" style={{ paddingBottom: 44 }}>
        <div className="grid-4" style={{ alignItems: 'start' }}>
          <div style={{ gridColumn: 'span 1 / span 1' }}>
            <ArkadhiLogo variant="full" theme="light" size="md" />
            <p style={{ marginTop: 18, color: '#c9d4df', maxWidth: 340, fontSize: 14 }}>
              Arkadhi Labs builds research-grade AI systems, local learning rules, and deployment infrastructure for original model architecture work.
            </p>
            <NavLink to="/work-with-us" className="btn-primary" style={{ marginTop: 22 }}>
              Start a Collaboration <ArrowUpRight size={16} />
            </NavLink>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="meta" style={{ color: '#14999C', marginBottom: 14 }}>{group.title}</h4>
              <ul style={{ display: 'grid', gap: 10, padding: 0, margin: 0, listStyle: 'none', fontSize: 14 }}>
                {group.links.map(([label, path]) => (
                  <li key={label}>
                    <NavLink to={path}>{label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 18,
          marginTop: 54,
          paddingTop: 22,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          color: '#8f949b',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12
        }}>
          <span>(c) {new Date().getFullYear()} Arkadhi Labs. All rights reserved.</span>
          <span>Bengaluru / Hyderabad / Remote Research Network</span>
        </div>
      </div>
    </footer>
  );
}
