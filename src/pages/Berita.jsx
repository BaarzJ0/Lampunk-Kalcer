import React, { useState } from 'react';

const beritaList = [
  {
    title: "Festival Budaya Lampung di Museum Budaya Lampung",
    date: "15 November 2025",
    author: "Redaksi Lampungkalcerc",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    excerpt: "Akan diadakan festival budaya yang menampilkan ragam seni dan tradisi Lampung di Museum Budaya Lampung.",
    content: `Museum Budaya Lampung akan menjadi tuan rumah Festival Budaya Lampung pada tanggal 15 November 2025. Festival ini akan menampilkan berbagai pertunjukan seni tradisional, pameran kerajinan tangan, serta workshop budaya yang melibatkan komunitas lokal. Pengunjung dapat menikmati ritual adat, tarian khas Lampung, serta kuliner tradisional yang autentik. Acara ini bertujuan untuk melestarikan dan memperkenalkan kekayaan budaya Lampung kepada masyarakat luas, khususnya generasi muda. Jangan lewatkan kesempatan untuk menyaksikan langsung keindahan dan keunikan budaya Lampung di lokasi yang sarat sejarah ini.`,
    time: "09.00 - 17.00 WIB",
    location: "Museum Budaya Lampung, Jl. Pangeran Antasari No.10, Bandar Lampung",
    contact: "0812-3456-7890"
  },
  {
    title: "Workshop Tenun Tapis di Museum Lampung",
    date: "20 November 2025",
    author: "Redaksi Lampungkalcerc",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    excerpt: "Workshop pembuatan kain tenun tapis khas Lampung akan diadakan di Museum Lampung.",
    content: `Pada tanggal 20 November 2025, Museum Lampung mengadakan workshop pembuatan kain tenun tapis yang merupakan warisan budaya Lampung. Workshop ini terbuka untuk umum dan akan dipandu oleh pengrajin lokal yang berpengalaman. Peserta akan belajar teknik dasar menenun serta makna filosofis dari motif-motif tapis. Kegiatan ini diharapkan dapat meningkatkan apresiasi masyarakat terhadap seni tradisional dan mendorong pelestarian budaya Lampung.`,
    time: "10.00 - 15.00 WIB",
    location: "Museum Lampung, Jl. Raden Intan No.18, Bandar Lampung",
    contact: "0821-9876-5432"
  },
  {
    title: "Pameran Koleksi Sejarah Lampung di Museum Ruwa Jurai",
    date: "1 Desember 2025",
    author: "Redaksi Lampungkalcerc",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    excerpt: "Museum Ruwa Jurai menggelar pameran koleksi sejarah dan budaya Lampung dari masa prasejarah hingga masa kini.",
    content: `Museum Ruwa Jurai akan menggelar pameran khusus mulai 1 Desember 2025 yang menampilkan koleksi benda-benda bersejarah dari berbagai era di Lampung. Pameran ini mencakup artefak prasejarah, peninggalan Hindu-Buddha, masa penjajahan, hingga perkembangan budaya modern. Pengunjung dapat mempelajari sejarah panjang Lampung melalui benda-benda yang dipamerkan serta narasi yang disajikan secara interaktif. Acara ini menjadi kesempatan edukasi yang menarik bagi masyarakat dan wisatawan.`,
    time: "08.00 - 16.00 WIB",
    location: "Museum Ruwa Jurai, Jl. Sultan Agung No.5, Bandar Lampung",
    contact: "0857-1234-5678"
  }
];

const Berita = () => {
  const [selectedBerita, setSelectedBerita] = useState(null);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl font-bold mb-2 text-[#800000]"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Agenda Kegiatan Budaya
        </h1>
        <div className="h-1 w-24 bg-[#bfa046] mb-10 rounded"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {beritaList.map((berita, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <img
                src={berita.image}
                alt={berita.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  {berita.date} &nbsp;|&nbsp; {berita.author}
                </div>
                <h2
                  className="text-xl font-semibold mb-2 text-[#800000]"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {berita.title}
                </h2>
                <p className="text-gray-800 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                  {berita.excerpt}
                </p>
                <button
                  className="mt-auto text-[#bfa046] hover:underline font-semibold text-left"
                  style={{ fontFamily: 'Cinzel, serif', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  onClick={() => setSelectedBerita(berita)}
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DENGAN BACKDROP BLUR */}
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
              className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative"
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
              <img
                src={selectedBerita.image}
                alt={selectedBerita.title}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <div className="text-xs text-gray-500 mb-2">
                {selectedBerita.date} &nbsp;|&nbsp; {selectedBerita.author}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-[#800000]">
                {selectedBerita.title}
              </h2>
              <p className="text-gray-700 mb-2"><strong>Waktu:</strong> {selectedBerita.time}</p>
              <p className="text-gray-700 mb-2"><strong>Lokasi:</strong> {selectedBerita.location}</p>
              <p className="text-gray-700 mb-4"><strong>Kontak:</strong> {selectedBerita.contact}</p>
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
