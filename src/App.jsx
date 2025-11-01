import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import About from './pages/About';
import WonderfulPage from './pages/WonderfulPage';
import LanguagesPage from './pages/LanguagesPage';
import DressesPage from './pages/DressesPage';
import VideoPage from './pages/VideoPage';
import RegionPage from './pages/RegionPage';
import Berita from './pages/Berita';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardNews from './pages/DashboardNews';
import DashboardGallery from './pages/DashboardGallery'; // Pastikan file ini ada
import PrivateRoute from './components/PrivateRoute';

import LampungUtara from './pages/LampungUtara';

function AppContent() {
  const location = useLocation();

  const hideNavbarPaths = [
    '/dashboard',
    '/dashboard/news',
    '/dashboard/gallery',
  ];

  const hideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="font-poppins bg-white text-text overflow-x-hidden">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/wonderful" element={<WonderfulPage />} />
        <Route path="/languages" element={<LanguagesPage />} />
        <Route path="/dresses" element={<DressesPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/region/:regionName" element={<RegionPage />} />
        <Route path="/lampung-utara" element={<LampungUtara />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/news"
          element={
            <PrivateRoute>
              <DashboardNews />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/gallery"
          element={
            <PrivateRoute>
              <DashboardGallery />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
