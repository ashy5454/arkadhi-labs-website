import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import ProductsPage from './pages/ProductsPage';
import LabPage from './pages/LabPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import WorkWithUsPage from './pages/WorkWithUsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/work-with-us" element={<WorkWithUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
