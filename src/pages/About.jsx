import React from "react";

// Pastikan font Google Fonts sudah diimport di index.html atau CSS global:
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Cinzel:wght@700&display=swap');

const photos = [
  "/foto1.png", // kiri atas besar vertikal (hitam putih)
  "/foto2.png", // kecil di atas makanan
  "/foto3.png", // kecil di bawah tulisan
  "/foto4.png", // kanan atas kecil horizontal
  "/foto5.png", // kiri bawah besar (dua foto berdampingan)
  "/foto6.png", // kiri bawah besar (dua foto berdampingan)
  "/foto7.png", // kanan bawah besar horizontal
];

// Data highlights
const highlights = [
  {
    img: "/highlight1.png", // Dresses
    label: "DRESSES",
    bg: "bg-red-100",
    text: "text-black",
  },
  {
    img: "/highlight2.png", // Food
    label: "FOOD",
    bg: "bg-red-300",
    text: "text-black",
  },
  {
    img: "/highlight3.png", // Destination
    label: "DESTINATION",
    bg: "bg-red-400",
    text: "text-black",
  },
  {
    img: "/highlight4.png", // Languages
    label: "LANGUANGES",
    bg: "bg-red-700",
    text: "text-white",
  },
  {
    img: "/highlight5.png", // Legacy
    label: "LEGACY",
    bg: "bg-red-900",
    text: "text-white",
  },
];

const AboutGallery = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-white">
      {/* Judul utama */}
      <h1
        className="text-4xl font-extrabold text-black mb-10 text-center"
        style={{ fontFamily: "'Cinzel', serif", letterSpacing: 1 }}
      >
        WHAT IS LAMPUNG?
      </h1>

      {/* Grid Foto */}
      <div
        className="grid gap-2 mb-2"
        style={{
          gridTemplateColumns: "300px 150px 150px 1fr",
          gridTemplateRows: "200px 150px 150px",
          gridTemplateAreas: `
            "foto1 foto2 foto4 foto4"
            "foto1 foto3 foto7 foto7"
            "foto5 foto5 foto7 foto7"
          `,
        }}
      >
        <img src={photos[0]} alt="" className="w-full h-full object-cover rounded" style={{ gridArea: "foto1" }} />
        <img src={photos[1]} alt="" className="w-full h-full object-cover rounded" style={{ gridArea: "foto2" }} />
        <img src={photos[2]} alt="" className="w-full h-full object-cover rounded" style={{ gridArea: "foto3" }} />
        <img src={photos[3]} alt="" className="w-full h-full object-cover rounded" style={{ gridArea: "foto4" }} />
        <div style={{ gridArea: "foto5" }} className="grid grid-cols-2 gap-2 rounded overflow-hidden">
          <img src={photos[4]} alt="" className="w-full h-full object-cover" />
          <img src={photos[5]} alt="" className="w-full h-full object-cover" />
        </div>
        <img src={photos[6]} alt="" className="w-full h-full object-cover rounded" style={{ gridArea: "foto7" }} />
      </div>

      {/* Tulisan "About" */}
      <div className="relative max-w-[300px] mx-auto mb-10">
        <div
          className="absolute bg-red-100 rounded-full opacity-60"
          style={{
            width: "280px",
            height: "80px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
            zIndex: -1,
          }}
        ></div>
        <h2
          className="text-5xl font-extrabold text-red-700 text-center"
          style={{ fontFamily: "'Dancing Script', cursive", lineHeight: 1 }}
        >
          About
        </h2>
      </div>

      {/* Konten About */}
      <article className="max-w-3xl mx-auto text-justify text-gray-800 leading-relaxed prose prose-lg mb-16">
        <p>
          Budaya adalah cara kita hidup, berinteraksi, dan menghargai satu sama lain. Melalui budaya, kita mengenal jati diri serta memahami akar dari mana kita berasal. Website ini hadir untuk mengajak semua orang lebih dekat dengan budaya Lampung—warisan yang kaya akan nilai, simbol, dan filosofi kehidupan.
        </p>
        <p className="text-red-600 font-semibold">
          Sesuai falsafah Sai Bumi Ruwa Jurai, masyarakat adat Lampung terbagi menjadi dua jurai besar, yakni Pepadun dan Saibatin.
        </p>
        <p>
          Adat Pepadun bersifat egaliter (demokratis), di mana gelar adat diraih melalui upacara Cakak Pepadun, dan mereka umumnya mendiami wilayah pedalaman atau dataran tengah seperti Lampung Utara, Lampung Tengah, dan Tulang Bawang.
        </p>
        <p>
          Adat Saibatin (sering disebut Pesisir) bersifat hirarkis (kebangsawanan), di mana gelar kepemimpinan diwariskan secara turun-temurun, dan mereka mendiami wilayah sepanjang pesisir pantai seperti Pesisir Barat, Tanggamus, dan Lampung Selatan.
        </p>
        <p className="mt-8 p-4 bg-red-100 text-red-900 font-bold text-center rounded">
          “Sai Bumi Ruwa Jurai”<br />
          Satu bumi, dua adat, satu tujuan dalam kebersamaan dan keharmonisan.
        </p>
      </article>

      {/* HIGHLIGHTS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-black mb-4 text-center tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
          HIGHLIGHTS OF WEBSITE LAMPUNK KALCER
        </h3>
        <div className="flex flex-col gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className={`flex items-stretch rounded overflow-hidden shadow ${item.bg}`}>
              <div className="w-[180px] h-[110px] flex-shrink-0 bg-white flex items-center justify-center">
                <img src={item.img} alt={item.label} className="object-cover w-full h-full" />
              </div>
              <div className={`flex-1 flex items-center justify-center ${item.text} text-xl font-medium tracking-wide`} style={{ fontFamily: "'Cinzel', serif" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
