import React from "react";

const LampungBarat = () => {
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
        Lampung Barat
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
        Welcome to Lampung Barat
      </h1>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="/lambar.png"
          alt="Land Above the Clouds"
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
        Land Above the Clouds
      </p>

      {/* Deskripsi singkat */}
      <p style={{ fontSize: 15, marginBottom: 18, fontFamily: "'Poppins', sans-serif" }}>
        Lampung Barat atau biasa disebut "Negeri di Atas Awan". Julukan magis ini melekat erat pada Liwa, ibu kota kabupaten, yang terletak di dataran tinggi Bukit Barisan Selatan. Di pagi hari, kota ini seringkali diselimuti lautan kabut tebal, menciptakan ilusi menakjubkan seolah bangunan dan masjid ikonik di pusat kota mengambang di atas awan. Hawa sejuk dan pemandangan spektakuler ini adalah identitas dan daya tarik utama "Bumi Sekala Behak".
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
          src="/pepadun.png"
          alt="Adat Pepadun"
          style={{
            width: 180,
            height: "auto",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(179,18,23,0.10)",
            flexShrink: 0,
          }}
        />
        <div>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Adat Pepadun
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Lampung Barat adalah salah satu penjaga utama keluhuran Adat Pepadun. Tradisi ini masih mengakar kuat dalam kehidupan masyarakat. Prosesi Begawi Cakak Pepadun, sebuah upacara sakral untuk pemberian gelar dan kenaikan status adat, masih rutin dilaksanakan dengan khidmat dan megah. Kemewahan pakaian adat, kentalnya ritual, dan tingginya penghormatan terhadap tatanan adat menunjukkan betapa warisan leluhur dijunjung tinggi di sini.
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
            Festival Sekura
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Festival Sekura adalah jiwa dari Lampung Barat, sebuah tradisi pesta topeng rakyat yang unik dan paling ditunggu. Diadakan setiap Hari Raya Idul Fitri, ribuan masyarakat turun ke jalan mengenakan sekura (topeng) dengan dua karakter utama: Sekura Kamak (lucu/kotor) dan Sekura Betik (bersih/bagus). Festival ini adalah ledakan suka cita, ajang silaturahmi massal, dan ungkapan rasa syukur yang otentik dan meriah, di mana semua orang berpesta bersama.
          </p>
        </div>
        <img
          src="/topeng-lampung.png"
          alt="Festival Sekura"
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
          src="/bawang-bakung.png"
          alt="Bukit Bawang Bakung"
          style={{
            width: 180,
            height: "auto",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(179,18,23,0.10)",
            flexShrink: 0,
          }}
        />
        <div>
          <h3 style={{ fontSize: 16, color: "#b31217", margin: 0, fontWeight: 600 }}>
            Bukit Bawang Bakung
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Bagi para pemburu matahari terbit dan pecinta pemandangan, bukit-bukit di sekitar Liwa adalah surga tersembunyi. Lokasi seperti Bukit Barang Bareng atau Geredai menjadi titik berkemah favorit untuk menyaksikan secara langsung fenomena "Negeri di Atas Awan". Dari puncak-puncak ini, terhampar pemandangan 360 derajat Kota Liwa, lembah yang hijau, dan lautan kabut yang perlahan tersibak oleh mentari pagi.
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
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        Lampung Barat, tanah 'Sekala Behak', sejuknya alam, dan luhurnya adat.
      </p>
    </div>
  );
};

export default LampungBarat;
