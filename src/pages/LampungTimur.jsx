import React from "react";

const LampungTimur = () => {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        fontFamily: "'Marcellus', serif",
        color: "#222",
        lineHeight: 1.7,
        padding: "0 16px",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* Judul kecil di atas */}
      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          letterSpacing: "0.15em",
          marginBottom: 8,
          textTransform: "uppercase",
          color: "#b31217",
          fontWeight: 600,
        }}
      >
        Lampung Timur
      </p>

      {/* Judul utama */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: 26,
          marginBottom: 24,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#b31217",
          fontFamily: "'Cinzel', serif",
        }}
      >
        Welcome to Lampung Timur
      </h1>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="/gajah.png"
          alt="Sumatra's Elephant Sanctuary"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 8,
            boxShadow: "0 2px 12px rgba(179,18,23,0.10)",
          }}
        />
      </div>

      {/* Caption gambar */}
      <p
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 32,
          color: "#b31217",
        }}
      >
        Sumatra's Elephant Sanctuary
      </p>

      {/* Deskripsi singkat */}
      <p style={{ fontSize: 15, marginBottom: 18, fontFamily: "'Poppins', sans-serif" }}>
        Lampung Timur adalah kabupaten yang identik dengan konservasi alam, dikenal luas secara internasional sebagai "Benteng Konservasi Gajah Sumatera". Wilayah ini menjadi rumah bagi Taman Nasional Way Kambas, yang telah ditetapkan sebagai ASEAN Heritage Park.
      </p>

      {/* The Culture */}
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#b31217",
          marginBottom: 16,
          letterSpacing: "0.05em",
          fontFamily: "'Cinzel', serif",
        }}
      >
        The Culture
      </h2>

      {/* Baris 1: gambar kiri, teks kanan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 32,
          gap: 18,
          justifyContent: "flex-start",
        }}
      >
        <img
          src="/tari-melinting.png"
          alt="Tari Melinting"
          style={{
            width: 160,
            height: "auto",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(179,18,23,0.10)",
            flexShrink: 0,
          }}
        />
        <div>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Tari Melinting
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Tari Melinting adalah tarian klasik yang anggun dan luhur, warisan asli dari Keratuan Melinting di Lampung Timur. Tarian ini awalnya merupakan tarian istana yang sakral, dipentaskan hanya untuk menyambut tamu agung atau dalam upacara adat kerajaan. Dengan gerakan yang gemulai, kostum yang mewah, dan iringan musik tradisional, Tari Melinting memancarkan keagungan dan kekayaan budaya Pesisir Lampung.
          </p>
        </div>
      </div>

      {/* Baris 2: teks kiri, gambar kanan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 32,
          gap: 18,
          justifyContent: "flex-end",
        }}
      >
        <div style={{ textAlign: "right", maxWidth: 260 }}>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Tapis Melinting
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Tapis Melinting adalah kain tenun tradisional khas yang menjadi simbol kemewahan dan status sosial masyarakat adat Melinting. Dibuat dengan teknik sulam benang emas atau perak yang rumit di atas kain dasar tenun (seringkali berwarna gelap), tapis ini memiliki motif-motif kuno yang sarat makna, seperti motif alam dan kapal. 
          </p>
        </div>
        <img
          src="/kain-tapis.png"
          alt="Tapis Melinting"
          style={{
            width: 160,
            height: "auto",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(179,18,23,0.10)",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Baris 3: gambar kiri, teks kanan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          justifyContent: "flex-start",
          marginBottom: 40,
        }}
      >
        <img
          src="/gajah-way-kambas.png"
          alt="Gajay Way Kambas"
          style={{
            width: 160,
            height: "auto",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(179,18,23,0.10)",
            flexShrink: 0,
          }}
        />
        <div>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Denyut Kehidupan Konservasi
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Di luar atraksi dan pusat pelatihan, jantung Way Kambas berdetak di alam liarnya. Taman nasional ini adalah habitat alami di mana kawanan gajah—termasuk anak-anak gajah yang menggemaskan—dapat hidup dan berkembang biak dengan relatif aman. Pemandangan keluarga gajah di habitatnya ini adalah bukti nyata keberhasilan upaya konservasi dan menjadi pengingat betapa pentingnya menjaga rumah bagi satwa-satwa langka Indonesia.
          </p>
        </div>
      </div>

      {/* Penutup */}
      <p
        style={{
          fontSize: 15,
          color: "#b31217",
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: 24,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Lampung Timur, suaka sang gajah, warisan budaya, dan harmoni alam.
      </p>
    </div>
  );
};

export default LampungTimur;
