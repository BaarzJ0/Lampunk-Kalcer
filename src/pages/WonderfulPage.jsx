import React from "react";
import gajah from "../assets/gajah.png";
import telukKiluan from "../assets/teluk_kiluan.png";
import pulauPahawang from "../assets/pulau_pahawang.png";
import anakKrakatau from "../assets/anak_krakatau.png";
import pantaiTanjungSetia from "../assets/pantai_tanjung_setia.png";
import menaraSiger from "../assets/menara_siger.png";

const WonderfulLampung = () => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "'Georgia', serif",
        color: "#2e2e2e",
        backgroundColor: "#ffffff",
        padding: "40px 30px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        borderRadius: 8,
      }}
    >
      {/* Judul */}
      <h1
        style={{
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 24,
          fontFamily: "'Cinzel', serif",
          color: "#810d11",
        }}
      >
        Wonderful of Lampung
      </h1>

      {/* Paragraf pembuka */}
      <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
        "Wonderful Lampung" adalah sebuah mosaik keindahan yang autentik. Dari puncak gunung berapi legendaris hingga ke dalam teluk yang magis, dari tenunan benang emas yang rumit hingga aksara kuno yang unik. Di sinilah petualangan bertemu tradisi. Di sinilah kemegahan alam berpadu dengan kearifan lokal. Temukan keajaiban Anda di Tanah Lampung.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
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
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "'Cinzel', serif",
            color: "#810d11",
            marginBottom: 12,
          }}
        >
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
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "'Cinzel', serif",
              color: "#810d11",
              marginBottom: 12,
            }}
          >
            Teluk Kiluan
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
            Terletak di Kabupaten Tanggamus, Teluk Kiluan adalah sebuah teluk mempesona yang menghadap langsung ke Samudera Hindia. Tempat ini terkenal sebagai spot terbaik untuk melihat lumba-lumba liar di habitat aslinya.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Pengalaman magis berburu fajar dengan perahu Jukung (perahu tradisional) untuk menyaksikan ratusan lumba-lumba hitam hidung botol dan lumba-lumba paruh panjang melompat bebas di lautan lepas. Laguna Geyu (Laguna Tersembunyi) menawarkan tempat berenang pribadi dengan pemandangan laut lepas.
          </p>
        </div>
        <div style={{ flex: "1 1 300px" }}>
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
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "'Cinzel', serif",
              color: "#810d11",
              marginBottom: 12,
            }}
          >
            Pulau Pahawang
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
            Bagi pecinta pantai dan snorkeling, Pulau Pahawang di Kabupaten Pesawaran adalah surga utama. Destinasi island-hopping paling populer di Lampung ini dikelilingi oleh perairan biru toska yang jernih dan terumbu karang yang indah.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Menjelajahi berbagai spot foto bawah laut, termasuk gugusan dan candi buatan yang kini menjadi rumah bagi ikan-ikan hias.
          </p>
        </div>
        <div style={{ flex: "1 1 300px" }}>
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

      {/* Gunung Anak Krakatau */}
      <section
        style={{
          display: "flex",
          gap: 24,
          marginBottom: 40,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <img
            src={anakKrakatau}
            alt="Gunung Anak Krakatau"
            style={{
              width: "100%",
              borderRadius: 8,
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          />
        </div>
        <div style={{ flex: "1 1 300px" }}>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "'Cinzel', serif",
              color: "#810d11",
              marginBottom: 12,
            }}
          >
            Gunung Anak Krakatau
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            Nama "Anak Krakatau" berarti "anak gunung Krakatau" yang muncul dari letusan dahsyat Gunung Krakatau pada tahun 1883. Gunung ini terus tumbuh dan menjadi simbol kekuatan alam yang luar biasa di Selat Sunda.
          </p>
        </div>
      </section>

      {/* Pantai Tanjung Setia */}
      <section
        style={{
          display: "flex",
          gap: 24,
          marginBottom: 40,
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <img
            src={pantaiTanjungSetia}
            alt="Pantai Tanjung Setia"
            style={{
              width: "100%",
              borderRadius: 8,
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          />
        </div>
        <div style={{ flex: "1 1 300px" }}>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "'Cinzel', serif",
              color: "#810d11",
              marginBottom: 12,
            }}
          >
            Pantai Tanjung Setia, Krui
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            Terletak di Kabupaten Pesisir Barat, Pantai Tanjung Setia dikenal sebagai surga bagi peselancar dengan ombak besar dan pemandangan alam yang menakjubkan. Pantai ini juga menjadi tempat konservasi penyu yang penting.
          </p>
        </div>
      </section>

      {/* Menara Siger */}
      <section style={{ marginBottom: 0 }}>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "'Cinzel', serif",
            color: "#810d11",
            marginBottom: 12,
          }}
        >
          Menara Siger
        </h3>
        <img
          src={menaraSiger}
          alt="Menara Siger"
          style={{
            width: "100%",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            marginBottom: 16,
          }}
        />
        <p style={{ lineHeight: 1.6 }}>
          Menara Siger adalah landmark ikonik di Lampung yang melambangkan budaya dan sejarah daerah ini. Dengan arsitektur khas dan warna kuning cerah, menara ini menjadi simbol kebanggaan masyarakat Lampung.
        </p>
      </section>
    </div>
  );
};

export default WonderfulLampung;
