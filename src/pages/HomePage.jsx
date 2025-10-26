import { useRef } from "react";
import SimpleInteractiveMap from "../components/SimpleInteractiveMap";
import penariLampung from "../assets/Home/HomeTari.png"; // Pastikan path gambar benar
import landmark1 from "../assets/Home/landmark-1.png"; // Mengimpor gambar landmark
import landmark2 from "../assets/Home/landmark-2.png"; // Mengimpor gambar landmark
import landmark3 from "../assets/Home/landmark-3.png"; // Mengimpor gambar landmark
import icon1 from "../assets/Home/icon-1.png"; // Mengimpor gambar ikon
import icon2 from "../assets/Home/icon-2.png"; // Mengimpor gambar ikon
import icon3 from "../assets/Home/icon-3.png"; // Mengimpor gambar ikon
import icon4 from "../assets/Home/icon-4.png"; // Mengimpor gambar ikon
import icon5 from "../assets/Home/icon-5.png"; // Mengimpor gambar ikon

const HomePage = () => {
  const aboutRef = useRef(null);
  const mapRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] mt-20 overflow-hidden">
        <img 
          src={penariLampung}  // Pastikan gambar Penari Lampung sudah diimpor dengan benar
          alt="Penari Lampung" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center items-center text-white px-5 md:px-10 lg:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl lg:max-w-3xl text-center leading-tight drop-shadow-lg" 
          style={{
            fontFamily: "'Satoshi', 'Clash Display', sans-serif",
            letterSpacing: '2px',
            textShadow: '2px 2px 12px rgba(0,0,0,0.5)'
          }}>
            Lampung Kalcer
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl lg:max-w-2xl mb-6 text-left md:text-center lg:text-left opacity-90">
            Jelajahi kekayaan budaya, wisata, dan kuliner khas Provinsi Lampung
          </p>
          {/* <button 
            onClick={scrollToAbout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Mulai Eksplorasi
          </button> */}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-8 relative inline-block">
          Tentang Lampung Kalcer
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Lampung Kalcer, yang diinisiasi oleh Kelompok 3in LKMO, mengorganisasi kekayaan aset budaya Lampung yang beragam ke dalam tema-tema yang kuat. Tujuannya adalah untuk menyampaikan konteks historis, nilai-nilai, serta signifikansi mendalam dari warisan budaya daerah ini.
        </p>
      </section>

      {/* Map Lampung Section */}
      <section ref={mapRef} className="py-20 px-5 md:px-10 bg-light-gray">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-2 relative inline-block">
      Peta Interaktif Provinsi Lampung
      <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
    </h2>
    <p className="text-gray-700 mb-8 font-semibold">
      KLIK PADA TOMBOL MERAH DI PETA INTERAKTIF UNTUK MENJELAJAHI KEINDAHAN DAN KEKAYAAN BUDAYA SETIAP DAERAH DI PROVINSI LAMPUNG!
    </p>
    <SimpleInteractiveMap />
  </div>
</section>

      {/* Three Images Below Map Section */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-8 relative inline-block">
            Keindahan Lampung
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
          </h2>
          <div className="flex flex-col gap-6">
            <img 
              src={landmark1} 
              alt="Landmark 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <img 
              src={landmark2} 
              alt="Landmark 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <img 
              src={landmark3} 
              alt="Landmark 3"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Icon of Lampung Section */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-8 text-center relative inline-block">
            Ikon Lampung
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
          </h2>
          <div className="flex flex-col gap-6">
            {/* Row 1: Icon 1 dan Icon 2 */}
            <div className="grid grid-cols-2 gap-6">
              <img 
                src={icon1} 
                alt="Icon 1"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <img 
                src={icon2} 
                alt="Icon 2"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Row 2: Icon 3 dan Icon 4 */}
            <div className="grid grid-cols-2 gap-6">
              <img 
                src={icon3} 
                alt="Icon 3"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <img 
                src={icon4} 
                alt="Icon 4"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Row 3: Icon 5 full width */}
            <div>
              <img 
                src={icon5} 
                alt="Icon 5"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;