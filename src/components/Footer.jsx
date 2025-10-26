import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/wonderful', label: 'Wonderful Lampung' },
  { to: '/languages', label: 'Languanges & Food' },
  { to: '/dresses', label: 'Dresses' },
  { to: '/video', label: 'Discover Video' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#e7df9e] to-[#a89e5f] text-black py-8 px-6 border-t border-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Kiri: Logo dan menu */}
        <div className="flex-1 flex flex-col md:items-start">
          <div className="text-3xl font-normal mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
            LAMPUNK KALCER
          </div>
          <div className="text-2xl tracking-widest mb-4" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.2em' }}>
            OFFICIAL SITE
          </div>
          {/* Menu */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base hover:underline"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Garis vertikal */}
        <div className="hidden md:block h-40 border-l border-gray-700 mx-8"></div>
        {/* Kanan: Info */}
        <div className="flex-1 flex flex-col items-start md:items-start mt-8 md:mt-0">
          <div className="mb-4 text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
            Copyright © Website produced by Culture’s Team of Group 3 LKMO 2025.<br />
            Content provided by Agency for Cultural Affairs. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            {/* Logo crown */}
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M20 2L25 14L35 6L30 22H10L5 6L15 14L20 2Z" fill="#222" />
            </svg>
            {/* Bendera Indonesia */}
            <div className="w-10 h-6 border border-gray-400">
              <div className="w-full h-1/2 bg-red-600"></div>
              <div className="w-full h-1/2 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
