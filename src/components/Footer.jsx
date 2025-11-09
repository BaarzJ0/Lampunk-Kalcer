import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/languages', label: 'Languages & Food' },
  { to: '/dresses', label: 'Dresses' },
  { to: '/wonderful', label: 'Wonderful Lampung' },
  { to: '/berita', label: 'News' },
  { to: '/video', label: 'Discover Video' },
  { to: '/login', label: 'Login' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#D9D48B] border-t border-[#8B1E1E] py-6 px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Kiri: Logo dan menu */}
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          <div>
            <h1
              className="font-serif text-3xl font-normal text-[#1A1A1A]"
              style={{ letterSpacing: '0.03em' }}
            >
              LAMPUNG KALCER
            </h1>
            <h2
              className="font-serif text-xl text-[#8B1E1E] tracking-widest mt-1"
              style={{ letterSpacing: '0.3em' }}
            >
              OFFICIAL SITE
            </h2>
          </div>

          {/* Menu */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-serif text-[#8B1E1E] max-w-lg">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Garis vertikal */}
        <div className="hidden md:block h-24 border-1 border-[#8B1E1E] mx-12"></div>

        {/* Kanan: Info dan ikon */}
        <div className="flex flex-col items-end text-sm font-serif text-[#1A1A1A] max-w-md">
          <p className="mb-4 text-right leading-relaxed">
            Copyright © Website produced by Culture’s Team of Group 3 LKMO 2025.<br />
            Content provided by Agency for Cultural Affairs. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Login Link */}
            <Link
              to="/login"
              className="text-[#8B1E1E] hover:underline text-sm font-serif"
            >
              Login
            </Link>

            {/* Crown icon PNG */}
            <img
              src="/sigericon.png"
              alt="Siger icon"
              className="w-16 h-auto"
            />

            {/* Bendera Indonesia */}
            <div className="w-12 h-7 border border-[#8B1E1E]">
              <div className="w-full h-1/2 bg-red-700"></div>
              <div className="w-full h-1/2 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
