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

const highlights = [
  {
    img: "/highlight1.png", // Dresses
    label: "DRESSES",
    bg: "bg-red-100",
    text: "text-black",
    target: "dresses",
  },
  {
    img: "/highlight2.png", // Food
    label: "FOOD",
    bg: "bg-red-300",
    text: "text-black",
    target: "food",
  },
  {
    img: "/highlight3.png", // Destination
    label: "DESTINATION",
    bg: "bg-red-400",
    text: "text-black",
    target: "destination",
  },
  {
    img: "/highlight4.png", // Languages
    label: "LANGUAGES",
    bg: "bg-red-700",
    text: "text-white",
    target: "languages",
  },
  {
    img: "/highlight5.png", // Legacy
    label: "LEGACY",
    bg: "bg-red-900",
    text: "text-white",
    target: "legacy",
  },
];

// Fungsi scroll smooth ke section
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const AboutGallery = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-white font-serif">
      {/* Judul utama */}
      <h1
        className="text-4xl font-normal text-[#810d11] mb-10 text-center"
        style={{ fontFamily: "'Cinzel', serif", letterSpacing: 1 }}
      >
        WHAT IS LAMPUNG?
      </h1>

      {/* Grid Foto */}
      <div
        className="grid gap-2 mb-8"
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
        <img
          src={photos[0]}
          alt=""
          className="w-full h-full object-cover rounded"
          style={{ gridArea: "foto1" }}
        />
        <img
          src={photos[1]}
          alt=""
          className="w-full h-full object-cover rounded"
          style={{ gridArea: "foto2" }}
        />
        <img
          src={photos[2]}
          alt=""
          className="w-full h-full object-cover rounded"
          style={{ gridArea: "foto3" }}
        />
        <img
          src={photos[3]}
          alt=""
          className="w-full h-full object-cover rounded"
          style={{ gridArea: "foto4" }}
        />
        <div
          style={{ gridArea: "foto5" }}
          className="grid grid-cols-2 gap-2 rounded overflow-hidden"
        >
          <img src={photos[4]} alt="" className="w-full h-full object-cover" />
          <img src={photos[5]} alt="" className="w-full h-full object-cover" />
        </div>
        <img
          src={photos[6]}
          alt=""
          className="w-full h-full object-cover rounded"
          style={{ gridArea: "foto7" }}
        />
      </div>
<div
  className="relative flex justify-center items-center mb-10"
  style={{ minHeight: 150, overflow: "visible" }}
>
  {/* Oval background */}
  <div
    className="absolute"
    style={{
      background: "#f3d6d6",
      width: 1500,          // Lebar oval disesuaikan agar tidak terlalu besar
      height: 150,         // Tinggi oval disesuaikan
      borderRadius: 9999,
      left: "0%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      pointerEvents: "none", // Agar oval tidak mengganggu interaksi
    }}
  />
  {/* PNG About */}
  <img
    src="/about-typo.png" // Ganti dengan path file kamu
    alt="About"
    style={{
      maxWidth: 320,
      width: "80%",
      position: "relative",
      zIndex: 1,
      marginTop: 10,
      marginBottom: 10,
    }}
  />
</div>


      {/* Konten About */}
      <article className="max-w-3xl mx-auto text-justify text-gray-800 leading-relaxed prose prose-lg mb-16">
        <p>
          Budaya adalah cara kita hidup, berinteraksi, dan menghargai satu sama lain. Melalui budaya, kita mengenal jati diri serta memahami akar dari mana kita berasal. Website ini hadir untuk mengajak semua orang lebih dekat dengan budaya Lampung—warisan yang kaya akan nilai, simbol, dan filosofi kehidupan.
        </p>
        <p className="text-[#a21d1d] font-semibold">
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
        <h3
          className="text-lg font-semibold text-black mb-4 text-center tracking-wide"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          HIGHLIGHTS OF WEBSITE LAMPUNG KALCER
        </h3>
        <div className="flex flex-col gap-4">
          {highlights.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className={`flex items-stretch rounded overflow-hidden shadow transition hover:scale-105 focus:outline-none ${item.bg} ${item.text}`}
              style={{ cursor: "pointer" }}
            >
              <div className="w-[180px] h-[110px] flex-shrink-0 bg-white flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.label}
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className={`flex-1 flex items-center justify-center text-xl font-medium tracking-wide`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
