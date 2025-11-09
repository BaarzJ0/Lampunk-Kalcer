import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaNewspaper, FaImages } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import axios from 'axios'; // <-- 1. Import axios

// Komponen Sidebar (Tidak ada perubahan)
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

// Komponen Header
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken"); // <-- 2. Tambahkan ini agar token juga terhapus
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

// Komponen Utama DashboardNews
const DashboardNews = () => {
  // Ini adalah daftar berita "dummy" Anda. Kita akan tambahkan data asli ke sini
  const [newsList, setNewsList] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "", // Ini tetap ada untuk form, tapi tidak kita kirim ke API news
    content: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNewClick = () => setShowForm((prev) => !prev);

  const handleEditClick = (news) => {
    setEditingId(news.id);
    setFormData({
      title: news.title || "",
      date: news.date || "",
      content: news.content || "",
    });
    setShowForm(true);
    // scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ title: "", date: "", content: "" });
    setShowForm(false);
  };

  const handleDelete = async (news) => {
    const ok = window.confirm(`Hapus berita "${news.title}"? Tindakan ini tidak bisa dibatalkan.`);
    if (!ok) return;

    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Token otentikasi tidak ditemukan. Silakan login kembali.');
      return;
    }

    try {
      // gunakan DELETE ke endpoint resource
      await axios.delete(`http://127.0.0.1:8000/api/news/${news.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // hapus dari state
      setNewsList((prev) => prev.filter((n) => n.id !== news.id));
      alert('Berita berhasil dihapus.');
    } catch (err) {
      console.error('Gagal menghapus berita:', err);
      alert('Gagal menghapus berita. Cek console untuk detail.');
    }
  };

  // --- 3. FUNGSI INI DIGANTI TOTAL ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("Mohon isi Judul dan Konten Berita!");
      return;
    }

    // 4. Ambil token dari localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert("Otentikasi gagal! Silakan login kembali.");
      return;
    }

    // Debug: pastikan handler terpanggil
    console.debug('DashboardNews.handleSubmit called', { formData });

    // 5. Siapkan data yang akan dikirim ke API (tanpa gambar)
    const payload = {
      title: formData.title,
      content: formData.content,
    };
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    try {
      setIsSubmitting(true);
      let response;
      if (editingId) {
        // update existing
        response = await axios.put(`http://127.0.0.1:8000/api/news/${editingId}`, payload, { headers });
        setNewsList((prev) => prev.map((n) => (n.id === editingId ? response.data.data : n)));
        alert('Berita berhasil diperbarui.');
        setEditingId(null);
      } else {
        // create new
        response = await axios.post('http://127.0.0.1:8000/api/news', payload, { headers });
        console.debug('DashboardNews.create response', response);
        alert('Berita berhasil disimpan ke database!');
        setNewsList((prev) => [response.data.data, ...prev]);
      }

      // Reset form dan sembunyikan
      setFormData({ title: "", date: "", content: "" });
      setShowForm(false);

    } catch (error) {
      // 10. Tangani jika ada error
      console.error('Error saat membuat berita:', error);
      if (error.response) {
        const status = error.response.status;
        const serverMsg = error.response.data && (error.response.data.message || JSON.stringify(error.response.data));
        if (status === 401) {
          alert(serverMsg || "Sesi Anda habis. Silakan login kembali.");
        } else {
          alert(serverMsg || "Terjadi kesalahan. Gagal menyimpan berita.");
        }
      } else {
        alert("Terjadi kesalahan jaringan. Coba lagi.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  // --- BATAS AKHIR PERUBAHAN ---

  const handleReset = () => setFormData({ title: "", date: "", content: "" });

  // Fetch news from backend when component mounts
  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      try {
        setLoadingNews(true);
        const res = await axios.get('http://127.0.0.1:8000/api/news');
        // backend returns { message, data: [ ... ] }
        const items = res.data && (res.data.data || res.data);
        if (mounted) setNewsList(items || []);
      } catch (err) {
        console.error('Gagal memuat daftar berita:', err);
      } finally {
        if (mounted) setLoadingNews(false);
      }
    };

    fetchNews();
    return () => { mounted = false };
  }, []);

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
              <h4 className="mb-4 font-semibold">{editingId ? 'Edit Berita' : 'Tambah Berita Baru'}</h4>

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

              

              <div className="flex gap-4">
                <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="bg-[#bfa046] text-white px-4 py-2 rounded hover:bg-[#a68f3a] transition" >
                  {isSubmitting ? (editingId ? 'Menyimpan...' : 'Menyimpan...') : (editingId ? 'Update' : 'Simpan')}
                </button>
                <button type="button" onClick={handleReset} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
                  Reset
                </button>
                {editingId && (
                  <button type="button" onClick={handleCancelEdit} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          )}

          <section>
            <h4 className="mb-4 font-semibold">NEWS LIST</h4>
            <div className="space-y-4 w-full">
              {newsList.map((news) => (
                <div
                  key={news.id}
                  className="bg-white p-4 rounded shadow w-full"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '96px 1fr auto',
                    gap: '1rem',
                    alignItems: 'start'
                  }}
                >
                  <div className="w-24 flex-shrink-0 bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                    {`News ${news.id}`}
                  </div>
                  <div style={{ overflowWrap: 'break-word' }}>
                    <h5 className="font-semibold">{news.title}</h5>
                    <p className="text-xs text-gray-500">{news.date || (news.created_at ? new Date(news.created_at).toLocaleDateString('id-ID') : '')}</p>
                    <p className="text-sm text-gray-700">{news.content}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end ml-4">
                    <button onClick={() => handleEditClick(news)} className="text-sm bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                    <button onClick={() => handleDelete(news)} className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
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