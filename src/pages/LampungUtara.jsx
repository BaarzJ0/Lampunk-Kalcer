import React from "react";

const LampungUtara = () => {
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
        Lampung Utara
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
        Welcome to Lampung Utara
      </h1>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="/TuguLamut.png"
          alt="The Gold Spear Monument"
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
        The Gold Spear Monument (Tugu Lamut)
      </p>

      {/* Deskripsi singkat */}
      <p style={{ fontSize: 15, marginBottom: 18, fontFamily: "'Poppins', sans-serif"}}>
        Lampung Utara adalah salah satu kabupaten tertua di Provinsi Lampung, dikenal sebagai "Gerbang Sumatera Selatan". Wilayah ini kaya akan sejarah, budaya, dan keindahan alam. Tugu Lamut sebagai ikon kota menggambarkan semangat dan kejayaan masyarakat Lampung Utara.
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
          src="/TarianRaja.png"
          alt="Tarian Raja"
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
            Tarian Raja
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Tarian Raja adalah tarian tradisional yang biasanya dipentaskan dalam upacara adat dan penyambutan tamu kehormatan. Gerakannya anggun dan penuh makna, melambangkan kebesaran dan keagungan budaya Lampung Utara.
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
        <div style={{ textAlign: "right", maxWidth: 260,  }}>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Upacara Pepadun
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Upacara Pepadun adalah prosesi adat untuk mengangkat seseorang menjadi pemimpin adat (penyimbang). Upacara ini sarat dengan nilai-nilai demokrasi, musyawarah, dan gotong royong.
          </p>
        </div>
        <img
          src="/UpacaraPepadun.png"
          alt="Upacara Pepadun"
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
          src="/Terapang.png"
          alt="Terapang"
          style={{
            width: 80,
            height: "auto",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(179,18,23,0.10)",
            flexShrink: 0,
          }}
        />
        <div>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Terapang
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Terapang adalah keris khas Lampung Utara yang menjadi simbol keberanian dan kehormatan. Senjata tradisional ini sering digunakan dalam upacara adat dan diwariskan secara turun-temurun.
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
        Lampung Utara, tanah penuh sejarah, budaya, dan harmoni.
      </p>
    </div>
  );
};

export default LampungUtara;
