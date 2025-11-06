import React from "react";
import seruitImg from "/seruit.png";
import pindangImg from "/pindang.png";
import keripikImg from "/keripikpisang.png";
import aksaraLampungImg from "/aksara.png";

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
        background: "linear-gradient(180deg, #EB5A5A 0%, #3C0F0F 20%, #3C0F0F 100%)",
        fontFamily: "'Poppins', sans-serif",
        margin: 0,
        padding: 5,
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "40px 30px 60px 30px",
        }}
      >
        {/* Judul utama */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: 12,
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
          <img 
            src="/language_font.png"
            alt="Languages"
            style={{
              maxWidth: "500px",
              width: "100%",
              height: "auto",
              margin: "20px auto",
            }}
          />
        </div>
        <p
          style={{
            textAlign: "left",
            color: "#fff",
            fontSize: 24,
            marginBottom: 32,
            lineHeight: 1.6,
            fontFamily: "'Marcellus', serif",
            paddingLeft: "20px",
          }}
        >
          Apa Itu Bahasa Lampung?
        </p>

        {/* Bahasa Lampung Content */}
        <section style={{ marginBottom: 48 }}>
          <p style={{ color: "#fff", marginBottom: 24, lineHeight: 1.8, textAlign: "justify", fontSize: "16px" }}>
            Bahasa Lampung adalah sebuah bahasa Austronesia yang dituturkan oleh suku Lampung di Provinsi Lampung dan sekitarnya. 
            Bahasa ini memiliki posisi unik dalam rumpun bahasa Melayu-Polinesia dan menjadi salah satu kekayaan linguistik yang 
            penting di Indonesia. Sama seperti budaya masyarakatnya, bahasanya pun memiliki ciri khas yang membedakannya dari 
            bahasa-bahasa lain di sekitarnya.
          </p>
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: 12,
              marginBottom: 8,
              overflowX: "auto",
              backdropFilter: "blur(10px)",
            }}
          >
            <table style={{ width: "100%", fontSize: 15, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ color: "#ffffff", fontWeight: "bold", borderBottom: "2px solid #ffffff" }}>
                  <td style={{ padding: "6px 12px", textAlign: "left" }}>Indonesia</td>
                  <td style={{ padding: "6px 12px", textAlign: "left" }}>Lampung</td>
                </tr>
              </thead>
              <tbody>
                {vocabLampung.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx !== vocabLampung.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                      color: "#ffffff",
                    }}
                  >
                    <td style={{ padding: "6px 12px" }}>{row.indo}</td>
                    <td style={{ padding: "6px 12px" }}>{row.lampung}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "#fff", marginTop: 4, textAlign: "center" }}>
            *Ayo belajar sapaan sederhana dalam bahasa Lampung!
          </p>
        </section>

        {/* Aksara Lampung */}
        <section
          style={{
            padding: 24,
            marginBottom: 48,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#fff",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ marginBottom: 24, textAlign: "justify" }}>
              Salah satu hal paling istimewa dari Bahasa Lampung adalah kepemilikan aksara tradisionalnya sendiri yang disebut 
              Aksara Lampung atau Had Lampung. Aksara ini merupakan turunan dari aksara Brahmi kuno dari India, yang menyebar ke 
              Nusantara dan berkerabat dengan aksara Batak dan Rejang.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={aksaraLampungImg}
                alt="Contoh Aksara Lampung"
                style={{
                  maxWidth: 800,
                  width: "100%",
                  borderRadius: 8,
                  marginBottom: 24,
                }}
              />
            </div>
          </div>
        </section>

        {/* Bahasa Lampung */}
        <section
          style={{
            padding: 24,
            marginBottom: 48,
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "#fff",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Coba Ketik Aksara Lampung
          </h2>
          <p style={{ textAlign: "center", color: "#fff", marginBottom: 18 }}>
            Gunakan fitur interaktif di bawah ini untuk menulis dan mengonversi kata/kalimat ke Aksara Lampung secara langsung!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid rgba(255,255,255,0.2)",
              borderRadius: 12,
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
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
              p
            />
          </div>
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              marginTop: 12,
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            Sumber aplikasi:{" "}
            <a
              href="https://github.com/meizano/ketikAksaraLampung"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              meizano/ketikAksaraLampung
            </a>
          </p>
          
        </section>

        {/* Kuliner Lampung */}
        <section>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <img 
              src="/food_font.png"
              alt="Food"
              style={{
                maxWidth: "300px",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 30,
              marginBottom: 40,
            }}
          >
            {/* Seruit */}
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 12,
                backdropFilter: "blur(10px)",
                padding: 24,
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
                  width: 160,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 8,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Seruit
              </h3>
              <p style={{ fontSize: 15, color: "#fff", lineHeight: 1.6, fontFamily: "'Poppins', sans-serif" }}>
                Ikan bakar yang disajikan dengan sambal terasi, tempoyak
                (durian fermentasi), dan lalapan. Hidangan ini menjadi simbol
                kebersamaan dalam adat Lampung.
              </p>
            </div>
            {/* Pindang */}
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 12,
                backdropFilter: "blur(10px)",
                padding: 24,
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
                  width: 160,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 8,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Pindang
              </h3>
              <p style={{ fontSize: 15, color: "#fff", lineHeight: 1.6, fontFamily: "'Poppins', sans-serif" }}>
                Sup ikan khas Lampung dengan kuah asam pedas dan rempah-rempah
                seperti serai, kunyit, dan daun jeruk. Cocok disantap hangat
                bersama nasi putih.
              </p>
            </div>
            {/* Keripik Pisang */}
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 12,
                backdropFilter: "blur(10px)",
                padding: 24,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={keripikImg}
                alt="Keripik Pisang"
                style={{
                  width: 160,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 8,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Keripik Pisang
              </h3>
              <p style={{ fontSize: 15, color: "#fff", lineHeight: 1.6, fontFamily: "'Poppins', sans-serif" }}>
                Camilan renyah khas Lampung yang terbuat dari irisan pisang yang digoreng
                hingga kering. Tersedia dalam berbagai varian rasa yang menggugah selera.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LanguageAndFoodLampung;
