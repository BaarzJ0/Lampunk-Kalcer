import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaImages } from "react-icons/fa";

const Sidebar = () => (
  <aside
    className="w-64 min-h-screen flex flex-col justify-between"
    style={{
      backgroundColor: "#d9d18a",
      borderRight: "2px solid purple",
      fontFamily: "'Cinzel', serif",
    }}
  >
    <div>
      <div className="px-6 py-8 border-b border-gray-400">
        <h1 className="text-3xl font-normal" style={{ fontFamily: "Cinzel, serif" }}>
          LAMPUNK<br />KALCER
        </h1>
      </div>
      <nav className="mt-8">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-6 py-3 hover:bg-[#c7be7f] font-semibold text-[#222]"
            >
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/news"
              className="flex items-center gap-3 px-6 py-3 hover:bg-[#c7be7f] text-[#222]"
            >
              <FaNewspaper /> News
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/gallery"
              className="flex items-center gap-3 px-6 py-3 hover:bg-[#c7be7f] text-[#222]"
            >
              <FaImages /> Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

const Header = () => (
  <header className="bg-[#f6f4e6] border-b border-gray-300 flex items-center justify-between px-8 py-4">
    <h2 className="text-lg font-semibold" style={{ fontFamily: "Cinzel, serif" }}>
      Dashboard Admin
    </h2>
    <div className="flex items-center gap-4">
      <span className="text-sm" style={{ fontFamily: "Cinzel, serif" }}>
        Hi, Admin
      </span>
      <button className="text-gray-500 hover:text-gray-700" aria-label="Logout">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9" stroke="#222" strokeWidth="2" />
          <path d="M10 6v4l2 2" stroke="#222" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  </header>
);

const DashboardContent = () => (
  <div className="p-8 bg-[#f9f9f7] flex flex-col items-center">
    <div className="mb-6 w-full max-w-3xl bg-[#eae9e4] p-6 rounded-md shadow">
      <h3 className="text-base font-semibold mb-2" style={{ fontFamily: "Cinzel, serif" }}>
        Welcome, Admin Kalcer Sebandar Lampung!
      </h3>
      <p style={{ fontFamily: "Cinzel, serif" }}>
        Apa yang mau kamu edit hari ini Min?
      </p>
    </div>
    <div className="flex gap-8">
      <Link
        to="/dashboard/news"
        className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-800 text-white rounded-md p-10 w-40 h-40 shadow-lg transition"
      >
        <FaNewspaper size={64} />
        <span className="mt-4 font-semibold" style={{ fontFamily: "Cinzel, serif" }}>
          EDIT NEWS
        </span>
      </Link>
      <Link
        to="/dashboard/gallery"
        className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-800 text-white rounded-md p-10 w-40 h-40 shadow-lg transition"
      >
        <FaImages size={64} />
        <span className="mt-4 font-semibold" style={{ fontFamily: "Cinzel, serif" }}>
          EDIT GALLERY
        </span>
      </Link>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="flex min-h-screen bg-gray-200">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <DashboardContent />
    </div>
  </div>
);

export default Dashboard;
