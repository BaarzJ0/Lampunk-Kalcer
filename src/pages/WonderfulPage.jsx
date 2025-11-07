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
      className="
        min-h-screen text-neutral-200 font-sans relative
        // Gradient Utama (gelap-terang-gelap)
        bg-[linear-gradient(to_bottom,theme(colors.neutral.100)_13%,theme(colors.neutral.800)_20%,theme(colors.neutral.300)_40%,theme(colors.neutral.900)_100%)]
        // Strip Emas di Tengah (linear-gradient kedua)
        before:content-[''] before:absolute before:top-[45%] before:left-0 before:right-0 before:h-20 before:bg-[linear-gradient(to_right,transparent_0%,theme(colors.custom-light-gold)_20%,theme(colors.custom-gold)_50%,theme(colors.custom-light-gold)_80%,transparent_100%)]
        before:opacity-30 // Sesuaikan transparansi strip emas jika terlalu mencolok
      "
      style={{
        
        margin: "0px auto",
        fontFamily: "'Georgia', serif",
        color: "#2e2e2e",
        backgroundColor: "#ffffff",
        padding: "40px 30px",
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
      <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 24, fontFamily: 'Poppins, sans-serif' }}>
        "Wonderful Lampung" adalah sebuah mosaik keindahan yang autentik. Dari puncak gunung berapi legendaris hingga ke dalam teluk yang magis, dari tenunan benang emas yang rumit hingga aksara kuno yang unik. Di sinilah petualangan bertemu tradisi. Di sinilah kemegahan alam berpadu dengan kearifan lokal. Temukan keajaiban Anda di Tanah Lampung.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 32, fontFamily: 'Poppins, sans-serif'}}>
        Lampung tidak hanya kaya akan budaya, tetapi juga dianugerahi keindahan alam yang spektakuler. Dari puncak gunung berapi legendaris hingga kawanan lumba-lumba di teluk tersembunyi, "Sai Bumi Rwa Jurai" menawarkan pengalaman tak terlupakan.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 32, fontFamily: 'Poppins, sans-serif'}}>
        Page Wonderdul Lampung ini akan mengenalkan keapada Anda tentang destinasi paling terkenal yang wajib Anda jelajahi untuk mengenal pesona Lampung seutuhnya.
      </p>


      {/* Gambar utama */}
      <div style={{ textAlign: "center", marginBottom: 40 }} className ="py-20 px-5 md:px-55">
        <img
          src={gajah}
          alt="Gajah"
          style={{
            maxWidth: "200%",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Taman Nasional Way Kambas */}
      <section style={{ marginBottom: 40}} className="text-center">
        <h2
          style={{
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "'Cinzel', serif",
            color: "#ffffff",
            marginBottom: 12,
          }}
        >
          Taman Nasional Way Kambas (TNWK)
        </h2>
        <p style={{ lineHeight: 1.6, color: "#ffffff", fontFamily: 'Poppins, sans-serif'}}>
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
              color: "#ffffff",
              marginBottom: 12,
            }}
          >
            Teluk Kiluan
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12, fontFamily: 'Poppins, sans-serif'}}>
            Terletak di Kabupaten Tanggamus, Teluk Kiluan adalah sebuah teluk mempesona yang menghadap langsung ke Samudera Hindia. Tempat ini terkenal sebagai spot terbaik untuk melihat lumba-lumba liar di habitat aslinya.
          </p>
          <p style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }} >
            Pengalaman magis berburu fajar dengan perahu Jukung (perahu tradisional) untuk menyaksikan ratusan lumba-lumba hitam hidung botol dan lumba-lumba paruh panjang melompat bebas di lautan lepas. Laguna Geyu (Laguna Tersembunyi) menawarkan tempat berenang pribadi dengan pemandangan laut lepas.
          </p>
        </div>
        <div style={{ flex: "1 1 80px" }}>
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
              color: "#272323",
              marginBottom: 12,
            }}
          >
            Pulau Pahawang
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12, fontFamily: 'Poppins, sans-serif'}}>
            Bagi pecinta pantai dan snorkeling, Pulau Pahawang di Kabupaten Pesawaran adalah surga utama. Destinasi island-hopping paling populer di Lampung ini dikelilingi oleh perairan biru toska yang jernih dan terumbu karang yang indah.
          </p>
          <p style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif'}}>
            Menjelajahi berbagai spot foto bawah laut, termasuk gugusan dan candi buatan yang kini menjadi rumah bagi ikan-ikan hias.
          </p>
        </div>
        <div style={{ flex: "1 1 80px" }}>
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
          <h3
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "'Cinzel', serif",
              color: "#000000",
              marginBottom: 12,
            }}
          >
            Gunung Anak Krakatau
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12, fontFamily: 'Poppins, sans-serif'}}>
            Nama "Krakatau" telah melegenda di seluruh dunia berkat letusan dahsyatnya pada tahun 1883. Kini, "Anak Krakatau" berdiri sebagai saksi hidup sejarah tersebut. Pulau vulkanik yang masih sangat aktif ini terletak di Selat Sunda. Mengunjungi Krakatau (dari jarak aman) adalah pengalaman sekali seumur hidup untuk menyaksikan kekuatan alam yang membentuk dunia.
          </p>
          <p style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }} >
            Gunung ini berlayar mengelilingi kaldera dan (jika kondisi aman dan diizinkan) mendaki di pulau vulkanik yang lahir dari salah satu bencana alam terbesar dalam sejarah manusia.
          </p>
        </div>
        <div style={{ flex: "1 1 80px" }}>
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
          <h3
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "'Cinzel', serif",
              color: "#ffffff",
              marginBottom: 12,
            }}
          >
            Pantai Tanjung Setia, Krui
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: 12, fontFamily: 'Poppins, sans-serif'}}>
            Terletak di Kabupaten Pesisir Barat, Pantai Tanjung Setia adalah surga bagi para peselancar dunia. Berhadapan langsung dengan Samudera Hindia, pantai ini dikenal memiliki salah satu ombak terbaik di dunia. Jauh dari keramaian, Krui menawarkan suasana pantai yang masih alami, lengkap dengan pohon kelapa dan ketenangan yang sempurna.
          </p>
          <p style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif'}}>
            Pantai ini dikenal memiliki ombak left-hand (kiri) yang panjang, tinggi, dan konsisten (terutama antara April-Oktober), menantang para peselancar profesional dari berbagai negara.
          </p>
        </div>
        <div style={{ flex: "1 1 80px" }}>
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
      </section>


      {/* Menara Siger */}
      <section style={{ marginBottom: 0 }}>
        
        <img
          src={menaraSiger}
          alt="Menara Siger"
          style={{
            width: "70%",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            marginBottom: 16,
            marginLeft: 250,
          }}
        />
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-5 text-[#FFFFFF]" style={{ fontFamily: "'Cinzel', serif" }}>
          Menara Siger
        </h1>
        <div className="text-white space-y-4 text-gray-900 text-base text-center">
          <p>
            Menara Siger adalah landmark yang paling melambangkan Lampung. Berdiri megah di titik paling selatan Sumatera (Bakauheni), bangunan ini adalah hal pertama yang menyambut pengunjung yang datang melalui kapal feri. Arsitekturnya mengambil inspirasi penuh dari Siger, mahkota adat pengantin wanita Lampung, yang berwarna kuning keemasan.
          </p>
          <p>
            Menara Siger Berfungsi sebagai penanda Titik Nol Kilometer Jalan Lintas Sumatera di bagian selatan, serta menjadi simbol "Selamat Datang di Tanah Lampung" dengan pemandangan Selat Sunda dan Pelabuhan Bakauheni dari ketinggian.  
          </p>
        </div>
        
      </div> 
      </section>
    </div>
  );
};

export default WonderfulLampung;
