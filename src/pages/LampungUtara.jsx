import React from "react";
//import LampungUtara from "./TuguLamut.png";

const LampungUtara = () => {
    "/TuguLamut.png"
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        fontFamily: "'Marcellus', serif",
        color: "#222",
        lineHeight: 1.6,
        padding: "0 16px",
      }}
    >
      {/* Judul kecil di atas */}
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          letterSpacing: "0.15em",
          marginBottom: 8,
          textTransform: "uppercase",
        }}
      >
        Lampung Utara
      </p>

      {/* Judul utama */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: 400,
          fontSize: 18,
          marginBottom: 24,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Welcome to Lampung Utara
      </h1>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src = "/lampungutara.png"
          alt="The Gold Spear Monument"
          style={{ maxWidth: "100%", height: "auto", borderRadius: 4 }}
        />
      </div>

      {/* Caption gambar */}
      <p
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 32,
        }}
      >
        The Gold Spear Monument
      </p>

      {/* The Culture */}
      <p style={{ fontSize: 14, fontWeight: 400, marginBottom: 16 }}>
        The Culture
      </p>

      {/* Baris 1: gambar kiri, teks kanan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 32,
          gap: 16,
          justifyContent: "flex-start",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Tarian_Raja_Lampung_Utara.jpg"
          alt="Tarian Raja"
          style={{ width: 150, height: "auto", borderRadius: 4, flexShrink: 0 }}
        />
        <p style={{ fontSize: 14, fontWeight: 400, margin: 0 }}>Tarian Raja</p>
      </div>

      {/* Baris 2: teks kiri, gambar kanan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 32,
          gap: 16,
          justifyContent: "flex-end",
        }}
      >
        <p
          style={{
            fontSize: 14,
            fontWeight: 400,
            margin: 0,
            flexShrink: 0,
            width: 120,
            textAlign: "right",
          }}
        >
          Upacara Pepadun
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Upacara_Pepadun_Lampung_Utara.jpg"
          alt="Upacara Pepadun"
          style={{ width: 150, height: "auto", borderRadius: 4 }}
        />
      </div>

      {/* Baris 3: gambar kiri, teks kanan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          justifyContent: "flex-start",
          marginBottom: 48,
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Terapang_Keris_Lampung_Utara.jpg"
          alt="Terapang"
          style={{ width: 60, height: "auto", borderRadius: 4, flexShrink: 0 }}
        />
        <p style={{ fontSize: 14, fontWeight: 400, margin: 0 }}>Terapang</p>
      </div>
    </div>
  );
};

export default LampungUtara;
