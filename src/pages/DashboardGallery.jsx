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
    <header
      className="flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: "#fef9d6", fontFamily: "'Cinzel', serif" }}
    >
      <h2 className="text-lg font-semibold">Dashboard Admin</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm">Hi, Admin</span>
        <button
          onClick={handleLogout}
          aria-label="Logout"
          title="Logout"
          className="text-[#222] hover:text-[#800000] transition"
        >
          <FiLogOut size={20} />
        </button>
      </div>
    </header>
  );
};

const DashboardGallery = () => {
  const [gallery, setGallery] = useState([
    // Dummy foto hitam sesuai screenshot
    { id: 1, url: null },
    { id: 2, url: null },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleAddNewClick = () => {
    setShowForm((prev) => !prev);
    setImageFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setPreviewUrl(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Pilih gambar terlebih dahulu!");
      return;
    }
    setGallery((prev) => [
      ...prev,
      { id: Date.now(), url: previewUrl },
    ]);
    setShowForm(false);
    setImageFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8" style={{ fontFamily: "'Cinzel', serif" }}>
          <h3 className="mb-4 font-semibold">GALLERY ADDING</h3>
          <button
            onClick={handleAddNewClick}
            className="mb-6 px-4 py-1 rounded"
            style={{
              backgroundColor: "#bfb45a",
              color: "#222",
              fontFamily: "'Cinzel', serif",
            }}
          >
            {showForm ? "Cancel" : "+ Add New Photo"}
          </button>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mb-8 border-2 border-blue-400 p-6 rounded bg-white max-w-md"
            >
              <div className="mb-2 font-semibold">Tambah Foto Baru</div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full mb-4"
                required
              />
              {previewUrl && (
                <div className="mb-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-w-full max-h-48 object-contain rounded shadow"
                  />
                </div>
              )}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-[#bfb45a] text-[#222] px-4 py-1 rounded hover:bg-[#a69f3a] transition border border-[#bfb45a]"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={handleAddNewClick}
                  className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400 transition"
                >
                  Batal
                </button>
              </div>
            </form>
          )}

          <div className="flex gap-8">
            {gallery.length === 0 && (
              <div className="text-gray-500">Belum ada foto di galeri.</div>
            )}
            {gallery.map((img) => (
              <div
                key={img.id}
                style={{
                  width: "200px",
                  height: "130px",
                  backgroundColor: img.url ? "transparent" : "#231f20",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 0 5px rgba(0,0,0,0.3)",
                }}
              >
                {img.url && (
                  <img
                    src={img.url}
                    alt="Gallery"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardGallery;
