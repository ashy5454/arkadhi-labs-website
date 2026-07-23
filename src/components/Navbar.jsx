import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ArkadhiLogo from './ArkadhiLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Research', path: '/research' },
    { name: 'Products', path: '/products' },
    { name: 'Lab', path: '/lab' },
    { name: 'Careers', path: '/careers' },
    { name: 'Work With Us', path: '/work-with-us', isHighlight: true },
  ];

  return (
    <header className="site-header">
      <div className="site-container">
        <div className="nav-wrapper">
          <NavLink to="/" style={{ textDecoration: 'none' }} aria-label="Arkadhi Labs Home">
            <ArkadhiLogo variant="full" theme="dark" size="md" />
          </NavLink>

          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                  {link.isHighlight && <ArrowUpRight size={14} color="#FC7A5C" />}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle btn-icon"
            aria-label="Toggle Navigation"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
