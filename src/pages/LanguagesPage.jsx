import React from "react";
import lampungLanguageImg from "../assets/lampung_language.png"; // Ganti sesuai path
import seruitImg from "../assets/seruit.jpg"; // Ganti sesuai path
import pindangImg from "../assets/pindang.jpg"; // Ganti sesuai path
import engkakImg from "../assets/engkak.jpg"; // Ganti sesuai path
import aksaraLampungImg from "../assets/aksara_lampung.jpg"; // Ganti sesuai path

const vocabLampung = [
  { indo: "Apa kabar?", lampung: "Napi kabar?" },
  { indo: "Terima kasih", lampung: "Tabik pun" },
  { indo: "Makan", lampung: "Mangan" },
  { indo: "Air", lampung: "Way" },
  { indo: "Ikan", lampung: "Iwak" },
  { indo: "Rumah", lampung: "Lamban" },
  { indo: "Pergi", lampung: "Jalan" },
  { indo: "Bagus", lampung: "Gham" },
  { indo: "Teman", lampung: "Sahabat" },
  { indo: "Keluarga", lampung: "Keluarga" },
];

const LanguageAndFoodLampung = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #b31217 0%, #e52d27 100%)",
        fontFamily: "'Georgia', serif",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "48px auto",
          background: "rgba(255,255,255,0.97)",
          borderRadius: 18,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          padding: "40px 30px 60px 30px",
        }}
      >
        {/* Judul utama */}
        <h1
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#b31217",
            marginBottom: 12,
            letterSpacing: "1px",
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Language & Food of Lampung
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#444",
            fontSize: 18,
            marginBottom: 32,
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Jelajahi kekayaan bahasa, aksara, dan cita rasa kuliner khas Lampung yang penuh warna dan makna.
        </p>

        {/* Bahasa Lampung */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 32,
            marginBottom: 48,
            background: "#fff5f5",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
          }}
        >
          <div style={{ flex: 1, minWidth: 600 }}>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: "#b31217",
                marginBottom: 12,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Bahasa Lampung
            </h2>
            <p style={{ color: "#333", marginBottom: 16, lineHeight: 1.6 }}>
              Bahasa Lampung adalah bahasa asli masyarakat Lampung yang kaya akan dialek dan ekspresi unik. Terdapat dua dialek utama, yaitu Lampung Api dan Lampung Nyo, yang digunakan dalam kehidupan sehari-hari di berbagai wilayah Lampung. Bahasa ini juga memiliki aksara sendiri yang disebut Aksara Lampung.
            </p>
            <div
              style={{
                background: "#ffeaea",
                borderRadius: 8,
                padding: 12,
                marginBottom: 8,
                overflowX: "auto",
              }}
            >
              <table style={{ width: "100%", fontSize: 15, borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ color: "#b31217", fontWeight: "bold", borderBottom: "2px solid #b31217" }}>
                    <td style={{ padding: "6px 12px", textAlign: "left" }}>Indonesia</td>
                    <td style={{ padding: "6px 12px", textAlign: "left" }}>Lampung</td>
                  </tr>
                </thead>
                <tbody>
                  {vocabLampung.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx !== vocabLampung.length - 1 ? "1px solid #f0caca" : "none" }}>
                      <td style={{ padding: "6px 12px" }}>{row.indo}</td>
                      <td style={{ padding: "6px 12px" }}>{row.lampung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: "#b31217", marginTop: 4 }}>
              *Ayo belajar sapaan sederhana dalam bahasa Lampung!
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 500, textAlign: "center" }}>
            <img
              src={lampungLanguageImg}
              alt="Bahasa Lampung"
              style={{
                maxWidth: 1000,
                width: "100%",
                borderRadius: 10,
                boxShadow: "0 2px 8px rgba(179,18,23,0.13)",
                background: "#fff",
                padding: 8,
              }}
            />
            <div style={{ fontSize: 13, color: "#b31217", marginTop: 8}}>
              Contoh Tulisan Aksara Lampung
            </div>
          </div>
        </section>

        {/* Aksara Lampung */}
        <section
          style={{
            background: "#fff0f0",
            borderRadius: 12,
            padding: 24,
            marginBottom: 48,
            boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "#b31217",
              marginBottom: 16,
              fontFamily: "'Playfair Display', serif",
              textAlign: "center",
            }}
          >
            Aksara Lampung
          </h2>
          <p style={{ lineHeight: 1.6, color: "#333", marginBottom: 16 }}>
            Aksara Lampung adalah sistem tulisan tradisional yang digunakan untuk menulis bahasa Lampung. Terdiri dari 20 aksara dasar yang disebut <i>kelabai surat</i>, serta tanda diakritik yang disebut <i>benah surat</i> untuk mengubah bunyi vokal. Aksara ini merupakan bagian penting dari warisan budaya Lampung dan masih diajarkan di beberapa sekolah serta digunakan dalam seni dan upacara adat.
          </p>
          
          <div style={{ textAlign: "center" }}>
            <img
              src={aksaraLampungImg}
              alt="Contoh Aksara Lampung"
              style={{
                maxWidth: 1000,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(179,18,23,0.15)",
              }}
            />
            <div style={{ fontSize: 13, color: "#b31217", marginTop: 8 }}>
              Contoh aksara dasar dan diakritik Aksara Lampung
            </div>
          </div>
        </section>

               {/* Ketik Aksara Lampung Interaktif */}
        <section
  style={{
    background: "#fff5f5",
    borderRadius: 12,
    padding: 24,
    marginBottom: 48,
    boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
  }}
>
  <h2
    style={{
      fontWeight: "bold",
      fontSize: 22,
      color: "#b31217",
      marginBottom: 16,
      fontFamily: "'Playfair Display', serif",
      textAlign: "center",
    }}
  >
    Coba Ketik Aksara Lampung
  </h2>
  <p style={{ textAlign: "center", color: "#444", marginBottom: 18 }}>
    Gunakan fitur interaktif di bawah ini untuk menulis dan mengonversi kata/kalimat ke Aksara Lampung secara langsung!
  </p>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #b31217",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
      background: "#fff",
      marginBottom: 8,
      overflow: "hidden",
      minHeight: 520,
      height: "auto",
    }}
  >
    <iframe
      src="https://meizano.github.io/ketikAksaraLampung/"
      title="Ketik Aksara Lampung"
      width="100%"
      height="520"
      style={{
        border: "none",
        borderRadius: 12,
        background: "#fff",
        minHeight: 520,
        width: "100%",
      }}
      allowFullScreen
    />
  </div>
  <p style={{ textAlign: "center", color: "#b31217", marginTop: 12, fontSize: 14 }}>
    Sumber aplikasi:{" "}
    <a
      href="https://github.com/meizano/ketikAksaraLampung"
      target="_blank"
      rel="noopener noreferrer"
    >
      meizano/ketikAksaraLampung
    </a>
  </p>
</section
>
        {/* Kuliner Lampung */}
        <section>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "#b31217",
              marginBottom: 24,
              fontFamily: "'Playfair Display', serif",
              textAlign: "center",
            }}
          >
            Kuliner Khas Lampung
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 28,
              marginBottom: 12,
            }}
          >
            {/* Seruit */}
            <div
              style={{
                background: "#fff5f5",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
                padding: 18,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={seruitImg}
                alt="Seruit"
                style={{
                  width: 130,
                  height: 130,
                  objectFit: "cover",
                  borderRadius: 10,
                  marginBottom: 12,
                  boxShadow: "0 2px 8px rgba(179,18,23,0.13)",
                  background: "#fff",
                }}
              />
              <h3
                style={{
                  color: "#b31217",
                  fontWeight: "bold",
                  fontSize: 17,
                  marginBottom: 6,
                }}
              >
                Seruit
              </h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.5 }}>
                Ikan bakar yang disajikan dengan sambal terasi, tempoyak
                (durian fermentasi), dan lalapan. Hidangan ini menjadi simbol
                kebersamaan dalam adat Lampung.
              </p>
            </div>
            {/* Pindang */}
            <div
              style={{
                background: "#fff5f5",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
                padding: 18,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={pindangImg}
                alt="Pindang"
                style={{
                  width: 130,
                  height: 130,
                  objectFit: "cover",
                  borderRadius: 10,
                  marginBottom: 12,
                  boxShadow: "0 2px 8px rgba(179,18,23,0.13)",
                  background: "#fff",
                }}
              />
              <h3
                style={{
                  color: "#b31217",
                  fontWeight: "bold",
                  fontSize: 17,
                  marginBottom: 6,
                }}
              >
                Pindang
              </h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.5 }}>
                Sup ikan khas Lampung dengan kuah asam pedas dan rempah-rempah
                seperti serai, kunyit, dan daun jeruk. Cocok disantap hangat
                bersama nasi putih.
              </p>
            </div>
            {/* Engkak */}
            <div
              style={{
                background: "#fff5f5",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(179,18,23,0.07)",
                padding: 18,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={engkakImg}
                alt="Engkak"
                style={{
                  width: 130,
                  height: 130,
                  objectFit: "cover",
                  borderRadius: 10,
                  marginBottom: 12,
                  boxShadow: "0 2px 8px rgba(179,18,23,0.13)",
                  background: "#fff",
                }}
              />
              <h3
                style={{
                  color: "#b31217",
                  fontWeight: "bold",
                  fontSize: 17,
                  marginBottom: 6,
                }}
              >
                Engkak
              </h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.5 }}>
                Kue lapis tradisional berbahan telur, santan, dan gula merah.
                Teksturnya lembut, manis, dan legit, cocok sebagai hidangan
                penutup atau oleh-oleh.
              </p>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              color: "#b31217",
              fontSize: 15,
              marginTop: 18,
              fontStyle: "italic",
            }}
          >
            Lampung, surga rasa dan budaya di ujung selatan Sumatera!
          </p>
        </section>
      </div>
    </div>
  );
};

export default LanguageAndFoodLampung;
