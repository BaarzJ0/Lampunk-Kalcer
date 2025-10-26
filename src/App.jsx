import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import WonderfulPage from './pages/WonderfulPage';
import LanguagesPage from './pages/LanguagesPage';
import DressesPage from './pages/DressesPage';
import VideoPage from './pages/VideoPage';
import RegionPage from './pages/RegionPage';
import LampungUtara from './pages/LampungUtara';

function App() {
  return (
    <Router>
      <div className="font-poppins bg-white text-text overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/wonderful" element={<WonderfulPage />} />
          <Route path="/languages" element={<LanguagesPage />} />
          <Route path="/dresses" element={<DressesPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/region/:regionName" element={<RegionPage />} />
          <Route path="/lampung-utara" element={<LampungUtara />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;