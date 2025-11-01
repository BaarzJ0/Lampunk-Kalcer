import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaNewspaper, FaImages } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

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

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="bg-[#f6f4e6] border-b border-gray-300 flex items-center justify-between px-8 py-4" style={{ fontFamily: "Cinzel, serif" }}>
      <h2 className="text-lg font-semibold">Dashboard Admin</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm">Hi, Admin</span>
        <button onClick={handleLogout} aria-label="Logout" title="Logout" className="text-[#222] hover:text-[#800000] transition">
          <FiLogOut size={24} />
        </button>
      </div>
    </header>
  );
};

const DashboardNews = () => {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "Lampung Utara melakukan kolaborasi dengan Mahasiswa ITERA",
      date: "10 Juni 2025",
      content: "Kolaborasi berhasil dilakukan",
    },
    {
      id: 2,
      title: "Lampung Utara melakukan kolaborasi dengan Mahasiswa ITERA",
      date: "10 Juni 2025",
      content: "Kolaborasi berhasil dilakukan",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddNewClick = () => setShowForm((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.content) {
      alert("Mohon isi semua field!");
      return;
    }
    const newNews = {
      id: newsList.length + 1,
      title: formData.title,
      date: formData.date,
      content: formData.content,
      image: formData.image,
    };
    setNewsList((prev) => [newNews, ...prev]);
    setFormData({ title: "", date: "", content: "", image: null });
    setShowForm(false);
  };

  const handleReset = () => setFormData({ title: "", date: "", content: "", image: null });

  return (
    <div className="flex min-h-screen bg-[#f0ead2]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8 flex-1 overflow-auto" style={{ fontFamily: "Cinzel, serif" }}>
          <h3 className="text-xl mb-4 font-semibold">WELCOME TO NEWS OF TODAY</h3>

          <button onClick={handleAddNewClick} className="mb-6 bg-[#bfa046] text-white px-4 py-2 rounded hover:bg-[#a68f3a] transition">
            {showForm ? "Cancel" : "+ Add New"}
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} className="mb-8 border border-blue-500 p-6 rounded bg-white max-w-xl">
              <h4 className="mb-4 font-semibold">Tambah Berita Baru</h4>

              <label className="block mb-2">
                Judul Berita
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="Judul Berita"
                  required
                />
              </label>

              <label className="block mb-2">
                Tanggal
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </label>

              <label className="block mb-2">
                Konten Berita
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  rows={4}
                  placeholder="Konten Berita"
                  required
                />
              </label>

              <label className="block mb-4">
                Pilih Gambar
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="w-full mt-1"
                />
              </label>

              <div className="flex gap-4">
                <button type="submit" className="bg-[#bfa046] text-white px-4 py-2 rounded hover:bg-[#a68f3a] transition">
                  Simpan
                </button>
                <button type="button" onClick={handleReset} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
                  Reset
                </button>
              </div>
            </form>
          )}

          <section>
            <h4 className="mb-4 font-semibold">NEWS LIST</h4>
            <div className="space-y-4 max-w-3xl">
              {newsList.map((news) => (
                <div key={news.id} className="bg-white p-4 rounded shadow flex gap-4">
                  <div className="w-24 flex-shrink-0 bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                    News {news.id}
                  </div>
                  <div>
                    <h5 className="font-semibold">{news.title}</h5>
                    <p className="text-xs text-gray-500">{news.date}</p>
                    <p className="text-sm">{news.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardNews;
