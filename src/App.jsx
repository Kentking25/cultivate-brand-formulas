import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CohortPage from './pages/CohortPage';
import BrandCatalystPage from './pages/BrandCatalystPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/cohort" element={<CohortPage />} />
          <Route path="/brand-catalyst" element={<BrandCatalystPage />} />
          {/* Placeholder routes for other pages */}
          <Route path="/assessment" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Assessment Page - Coming Soon</h1></div>} />
          <Route path="/speaking" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Speaking Page - Coming Soon</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
