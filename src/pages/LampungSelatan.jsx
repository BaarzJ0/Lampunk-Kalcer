import React from "react";

const LampungSelatan = () => {
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
        Lampung Selatan
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
        Welcome to Lampung Selatan
      </h1>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="/menara-siger.png"
          alt="Menara Siger"
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
        Menara Siger
      </p>

      {/* Deskripsi singkat */}
      <p style={{ fontSize: 15, marginBottom: 18, }}>
        Lampung Selatan adalah kabupaten yang terletak di ujung selatan Provinsi Lampung dan dikenal sebagai "Gerbang Pulau Sumatera". Daerah ini memiliki peranan penting sebagai pintu masuk utama melalui Pelabuhan Bakauheni yang ikonik. Selain kekayaan sejarah dan peran strategisnya, Lampung Selatan juga terkenal akan keindahan alamnya, warisan budaya, dan kearifan lokal masyarakat pesisir. Dari ikon legendaris seperti Menara Siger hingga tradisi adat yang masih lestari, Lampung Selatan memancarkan semangat keterbukaan, keberagaman, dan kemajuan masyarakat Lampung selatan masa kini.
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
          src="/tari-sigeh.png"
          alt="Tari Sigeh"
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
            Tarian Sigeh
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0" }}>
            Tari Sigeh adalah tarian tradisional khas Lampung yang dipentaskan untuk menyambut tamu kehormatan dan dalam upacara adat. Gerakannya yang anggun dan lembut melambangkan penghormatan, keramahan, dan kegembiraan masyarakat Lampung dalam menerima tamu.
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
            Tari Halibambang
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0",}}>
          Tari Halibambang adalah tarian tradisional Lampung, khususnya dari masyarakat adat Saibatin (Sekala Brak). Nama "Halibambang" berarti "kupu-kupu", dan tarian ini menggambarkan gerakan anggun kupu-kupu yang terbang. Tarian ini melambangkan kesopanan, keindahan, dan keagungan gadis Lampung, yang awalnya dipentaskan dalam pesta adat dan pernikahan.
          </p>
        </div>
        <img
          src="/tari-halibambang.png"
          alt="Tari Halibambang"
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
          src="/tuping.png"
          alt="Tuping"
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
            Tuping
          </h3>
          <p style={{ fontSize: 14, margin: "6px 0 0 0" }}>
            Tari Tuping adalah drama tari tradisional dari Lampung Selatan yang menggunakan topeng (disebut tupping). Tarian ini awalnya menggambarkan 12 pasukan gerilya Pahlawan Radin Intan II yang menyamar untuk melawan penjajah. Gerakannya teatrikal dan gagah, melambangkan semangat patriotisme dan kepahlawanan.

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
        }}
      >
        
        Lampung Selatan, tanah sang gerbang Sumatera, penuh pesona bahari dan warisan adat.
      </p>
    </div>
  );
};

export default LampungSelatan;
