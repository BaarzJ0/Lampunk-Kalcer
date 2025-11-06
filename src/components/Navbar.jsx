import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/wonderful', label: 'Wonderful Lampung' },
  { to: '/languages', label: 'Languanges & Food' },
  { to: '/dresses', label: 'Dresses' },
  { to: '/video', label: 'Discover Video' },
  { to: '/berita', label: 'Berita' },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`Mencari: ${searchTerm}\nFitur pencarian akan segera tersedia!`);
    }
  };

  return (
    <nav className="w-full bg-[#D8D188] border-b border-gray-300 shadow-sm">
      {/* Atas: Judul & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 pt-10 pb-6">
        {/* Judul */}
        <div className="mb-4 md:mb-0">
          <div className="text-[2.5rem] leading-[2.8rem] font-normal text-black" style={{ fontFamily: 'Cinzel, serif'}}>
            LAMPOENK<br />KALCER
          </div>
        </div>
        {/* Search */}
        <div className="w-full md:w-[420px] flex justify-end">
          <div className="relative w-full md:w-[420px]">
            <input
              type="text"
              placeholder="Cari tempat disini"
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full bg-white shadow focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black"
              aria-label="Cari"
            >
              {/* Search icon SVG */}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Garis */}
      <div className="border-t border-gray-400" />
      {/* Menu */}
      <div className="flex justify-center items-center py-2 bg-[#D8D188]">
        <ul className="flex flex-row w-full max-w-5xl mx-auto justify-between">
          {navLinks.map((link) => (
  <li key={link.to}>
    <Link
      to={link.to}
      className={`
        relative block px-4 py-2 rounded-lg text-[1rem] font-normal 
        transition-all duration-300 ease-in-out
        ${isActive(link.to) 
          ? 'text-black font-semibold bg-white shadow-md scale-105' 
          : 'text-gray-800 hover:text-black hover:bg-white/60 hover:shadow-sm'
        }
        active:scale-95
      `}
      style={{ fontFamily: 'Cinzel, serif' }}
    >
      {link.label}
    </Link>
  </li>
))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
