import React from "react";

const LampungSelatan = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Container dengan padding responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Judul utama */}
        <h1
          className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-8 tracking-wider uppercase text-[#b31217]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Lampung Selatan
        </h1>

        {/* The Siger Landmark */}
        <h2 style={{ fontSize: 29, textAlign: "center", marginBottom: 12 }}>
          The Siger Landmark
        </h2>
        <div className="w-full mb-12 lg:mb-16">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/menara_siger.png"
              alt="Menara siger"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Deskripsi Menara Siger */}
        <div>
          <p
            style={{
              fontSize: 20,
              textAlign: "center",
              maxWidth: 1000,
              marginBottom: 100,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Menara Siger adalah replika megah dari Siger, mahkota pengantin wanita
            khas Lampung. Dengan sembilan lekukan yang menjulang, menara ini bukan
            sekadar bangunan, melainkan simbol identitas, kehormatan, dan kemuliaan
            bagi seluruh masyarakat Lampung.
          </p>
        </div>

        {/* Gambar Pelabuhan */}
        <div className="w-full mb-12 lg:mb-16">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/pelabuhan.png"
              alt="Pelabuhan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Deskripsi Pelabuhan */}
        <div>
          <p
            style={{
              fontSize: 20,
              textAlign: "center",
              maxWidth: 1000,
              marginTop: 7,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Bakauheni adalah sebuah kota di bagian selatan Provinsi Lampung,
            Indonesia, dan merupakan pelabuhan terbesar dan tersibuk di provinsi ini,
            sekaligus salah satu pelabuhan tersibuk di Indonesia. Feri yang
            mengangkut penumpang dan kendaraan, terutama truk besar, menghubungkan
            Bakauheni dengan Pelabuhan Merak di Jawa melalui Selat Sunda.
          </p>
        </div>
      </div>

      {/* The Culture Section - Full width dengan background abu-abu */}
      <div className="min-h-screen bg-[#DEDEDC]">
        
        {/* Header */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-wide text-center">
              THE CULTURE
            </h1>
          </div>
        </div>

      <p
  className="text-center mb-10"
  style={{ fontFamily: "'Marcellus', serif", fontSize: "25px" }}
>
  Teluk kiluan the heavens of dolphin
</p>

{/* Gambar utama */}
<div className="flex justify-center mb-16">
  <img
    src="/teluk_kiluan.png"
    alt="Dolphins in Teluk Kiluan"
    className="max-w-4xl w-full h-auto object-cover rounded"
  />
</div>

{/* Judul kecil Tarian Lampung Selatan */}
<h2
  className="text-center mb-10 uppercase tracking-wide"
  style={{ fontFamily: "'Marcellus', serif", fontSize: "20px" }}
>
  TARIAN LAMPUNG SELATAN
</h2>

{/* Grid 2 gambar atas */}
<div className="flex justify-center gap-16 mb-16 max-w-5xl mx-auto">
  <div className="text-center">
    <img
      src="/tuping.png"
      alt="Tarian Tupping"
      className="w-56 h-auto object-cover rounded"
    />
    <p
      className="mt-6"
      style={{ fontFamily: "'Marcellus', serif", fontSize: "18px" }}
    >
      Tarian Tupping
    </p>
  </div>
  <div className="text-center">
    <img
      src="/tari-sigeh.png"
      alt="Tarian Sigeh Pengunten"
      className="w-56 h-auto object-cover rounded"
    />
    <p
      className="mt-6"
      style={{ fontFamily: "'Marcellus', serif", fontSize: "18px" }}
    >
      Tarian Sigeh Pengunten
    </p>
  </div>
</div>

{/* Gambar bawah tengah */}
<div className="max-w-3xl mx-auto text-center">
  <img
    src="/tari-halibambang.png"
    alt="Tarian Halibambang"
    className="w-72 h-auto object-cover rounded mx-auto block"
  />
  <p
    className="mt-6"
    style={{ fontFamily: "'Marcellus', serif", fontSize: "20px", fontWeight: "600" }}
  >
    Tarian Halibambang
  </p>
</div>

      </div>
    </div>
  );
};

export default LampungSelatan;
