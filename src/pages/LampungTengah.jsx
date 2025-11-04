import React from "react";

const LampungTengah = () => {
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
        Lampung Tengah
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
        Welcome to Lampung Tengah
      </h1>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="/tugu-canang.png"
          alt="Tugu Canang"
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
        Tugu Canang
      </p>

      {/* Deskripsi singkat */}
      <p style={{ fontSize: 15, marginBottom: 18, fontFamily: "'Poppins', sans-serif" }}>
        Lampung Tengah merupakan salah satu kabupaten terluas dan menjadi 'jantung' Provinsi Lampung, berfungsi sebagai kabupaten induk yang melahirkan beberapa daerah otonomi baru. Wilayah ini dikenal sebagai salah satu lumbung pangan utama dan pusat agrikultur di Lampung
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
          src="/javanese.png"
          alt="Javanese Culture"
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
            Javanese Culture
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Sebagai salah satu kantong komunitas transmigran terbesar, budaya Jawa tumbuh subur dan menyatu dengan kehidupan sehari-hari di Lampung Tengah. Kesenian klasik seperti pertunjukan wayang kulit, alunan merdu gamelan, hingga semaraknya tarian kuda lumping (kuda kepang) masih sering ditampilkan dalam berbagai perayaan.
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
            Adat Pepadun
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Adat Pepadun adalah identitas asli dan warisan luhur masyarakat Lampung yang mendiami wilayah Lampung Tengah. Budaya ini dikenal melalui upacara adat yang megah, terutama Begawi Cakak Pepadun, sebuah prosesi agung untuk pemberian gelar adat dan penaikan status sosial
          </p>
        </div>
        <img
          src="/pepadun 1.png"
          alt="Adat Pepadun"
          style={{
            width: 180,
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
          src="/balinese.png"
          alt="Balinese Culture"
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
            Balinese Culture
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Lampung Tengah juga merupakan rumah bagi komunitas Bali yang kuat. Mereka membawa serta warisan budaya dan agama Hindu yang kental, yang terlihat jelas di "kampung-kampung Bali" dengan arsitektur pura yang khas. Kehidupan beragama yang rukun ini terlihat dari berbagai upacara adat, seperti prosesi Melasti menjelang Hari Raya Nyepi.
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
        Lampung Tengah, jantung Lampung, harmoni dalam keberagaman dan semangat 'Beguwai Jejamo Wawai'.
      </p>
    </div>
  );
};

export default LampungTengah;
