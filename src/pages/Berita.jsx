import React, { useState, useEffect } from 'react';
import axios from 'axios'; // <-- 1. Import axios dan useEffect

// Hapus const beritaList (data dummy)

const Berita = () => {
  // 2. Buat state untuk menampung data dari API
  const [beritaList, setBeritaList] = useState([]);
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // (Opsional) untuk loading

  // 3. Gunakan useEffect untuk mengambil data saat komponen dimuat
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
  try {
  // Panggil API GET /api/news
  const response = await axios.get('http://127.0.0.1:8000/api/news');
  setBeritaList(response.data.data); // Simpan data ke state
      } catch (error) {
        console.error('Gagal mengambil data berita:', error);
      }
      setIsLoading(false);
    };

    fetchNews();
  }, []); // [] berarti "jalankan fungsi ini sekali saja"

  // (no image resolution — show placeholder only)

  // 4. Tampilan (JSX)
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl font-bold mb-2 text-[#800000]"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Artikel Budaya
        </h1>
        <div className="h-1 w-24 bg-[#bfa046] mb-10 rounded"></div>

        {/* Tampilkan pesan loading */}
        {isLoading && (
          <p style={{ fontFamily: 'Cinzel, serif' }}>Loading berita...</p>
        )}

        {/* 5. Render data dari state beritaList */}
        <div className="grid md:grid-cols-3 gap-8">
          {beritaList.map((berita) => (
            <div
              key={berita.id} // Gunakan ID dari database
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              style={{ border: '1px solid #e5e7eb' }}
            >
              {/* gambar dihilangkan — tidak ditampilkan */}
              
              <div className="p-4 flex flex-col flex-1">
                <div className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  {/* Gunakan tanggal 'created_at' dari database */}
                  {new Date(berita.created_at).toLocaleDateString('id-ID')}
                </div>
                <h2
                  className="text-xl font-semibold mb-2 text-[#800000]"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {berita.title} {/* Data title dari API */}
                </h2>
                <p className="text-gray-800 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                  {/* Buat ringkasan (excerpt) dari content */}
                  {berita.content.substring(0, 100)}...
                </p>
                <button
                  className="mt-auto text-[#bfa046] hover:underline font-semibold text-left"
                  style={{ fontFamily: 'Cinzel, serif', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  onClick={() => setSelectedBerita(berita)}
                >
                  Baca Selengkapnya
                </button>
                {/* (no debug link) */}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL (sudah disederhanakan) */}
        {selectedBerita && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
            onClick={() => setSelectedBerita(null)}
          >
              <div
              className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative"
              style={{ fontFamily: 'Cinzel, serif' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-[#800000] text-2xl font-bold"
                onClick={() => setSelectedBerita(null)}
                aria-label="Tutup"
              >
                &times;
              </button>
              
              {/* gambar modal dihilangkan */}

              <div className="text-xs text-gray-500 mb-2">
                {new Date(selectedBerita.created_at).toLocaleDateString('id-ID')}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-[#800000]">
                {selectedBerita.title}
              </h2>
              
              {/* Konten lengkap dari API */}
              <p className="text-gray-800 text-base" style={{ whiteSpace: 'pre-line' }}>
                {selectedBerita.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Berita;