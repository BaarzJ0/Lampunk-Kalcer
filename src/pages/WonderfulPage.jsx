import React from "react";
import gajah from "../assets/gajah.png";
import telukKiluan from "../assets/teluk_kiluan.png";
import pulauPahawang from "../assets/pulau_pahawang.png";

const WonderfulLampung = () => {
  return (

    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "'Georgia', serif",
        color: "#2e2e2e",
        backgroundColor: "#ffffff", // hijau abu lembut sesuai gambar
        padding: "40px 30px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        borderRadius: 8,
      }}
      
    >
      {/* Judul utama */}
      <h1
        style={{
          fontSize: 28,
          fontWeight: "semi-bold",
          marginBottom: 24,
          fontFamily: "'Cinzel', serif",
          color: "#810d11ff",
        }}
      >
        Wonderful of Lampung
      </h1>

      {/* Paragraf pembuka */}
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          marginBottom: 24,
          fontFamily: "'Arial', sans-serif",
        }}
      >
        "Wonderful Lampung" adalah sebuah mosaik keindahan yang autentik. Dari puncak gunung berapi legendaris hingga ke dalam teluk yang magis, dari tenunan benang emas yang rumit hingga aksara kuno yang unik. Di sinilah petualangan bertemu tradisi. Di sinilah kemegahan alam berpadu dengan kearifan lokal. Temukan keajaiban Anda di Tanah Lampung.
      </p>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          marginBottom: 32,
          fontFamily: "'Arial', sans-serif",
        }}
      >
        Lampung tidak hanya kaya akan budaya, tetapi juga dianugerahi keindahan alam yang spektakuler. Dari puncak gunung berapi legendaris hingga kawanan lumba-lumba di teluk tersembunyi, "Sai Bumi Rwa Jurai" menawarkan pengalaman tak terlupakan.
      </p>

      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <img
          src={gajah}
          alt="Gajah"
          style={{
            maxWidth: "100%",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Taman Nasional Way Kambas */}
      <section
        style={{
          // backgroundColor: "#9ea48a",
          padding: 24,
          borderRadius: 8,
          marginBottom: 40,
          color: "#1f1f1f",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: 20, fontFamily: "'Cinzel', serif", color: "#810d11ff",  marginBottom: 12 }}>
          Taman Nasional Way Kambas (TNWK)
        </h2>
        <p style={{ lineHeight: 1.6 }}>
          Taman Nasional Way Kambas adalah salah satu taman nasional tertua di Indonesia dan rumah bagi satwa-satwa langka yang terancam punah. Tempat ini menjadi pusat konservasi utama untuk Gajah Sumatera. Selain gajah, TNWK juga menjadi habitat bagi Badak Sumatera, Harimau Sumatera, dan berbagai jenis satwa liar lainnya. Ini adalah destinasi wajib bagi pecinta alam dan mereka yang ingin melihat upaya pelestarian satwa ikonik Indonesia.
        </p>
      </section>

      {/* Teluk Kiluan */}
      <section
        style={{
          display: "flex",
          gap: 24,
          marginBottom: 40,
          alignItems: "center",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: "bold", fontSize: 18, fontFamily: "'Cinzel', serif", color: "#810d11ff", marginBottom: 12 }}>
            Teluk Kiluan
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
            Terletak di Kabupaten Tanggamus, Teluk Kiluan adalah sebuah teluk mempesona yang menghadap langsung ke Samudera Hindia. Tempat ini terkenal sebagai spot terbaik untuk melihat lumba-lumba liar di habitat aslinya.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Pengalaman magis berburu fajar dengan perahu Jukung (perahu tradisional) untuk menyaksikan ratusan lumba-lumba hitam hidung botol dan lumba-lumba paruh panjang melompat bebas di lautan lepas. Laguna Geyu (Laguna Tersembunyi) menawarkan tempat berenang pribadi dengan pemandangan laut lepas.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={telukKiluan}
            alt="Lumba-lumba di Teluk Kiluan"
            style={{
              width: "100%",
              borderRadius: 8,
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </section>

      {/* Pulau Pahawang */}
      <section
        style={{
          display: "flex",
          gap: 24,
          marginBottom: 40,
          alignItems: "center",
          fontFamily: "'Arial', sans-serif",
          flexDirection: "row-reverse",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: "bold", fontSize: 18, fontFamily: "'Playfair Display', serif", color: "#810d11ff", marginBottom: 12 }}>
            Pulau Pahawang
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
            Bagi pecinta pantai dan snorkeling, Pulau Pahawang di Kabupaten Pesawaran adalah surga utama. Destinasi island-hopping paling populer di Lampung ini dikelilingi oleh perairan biru toska yang jernih dan terumbu karang yang indah.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Menjelajahi berbagai spot foto bawah laut, termasuk gugusan dan candi buatan yang kini menjadi rumah bagi ikan-ikan hias.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={pulauPahawang}
            alt="Pantai Pulau Pahawang"
            style={{
              width: "100%",
              borderRadius: 8,
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default WonderfulLampung;
