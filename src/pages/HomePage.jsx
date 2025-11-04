import { useRef, useState, useEffect } from "react";
import SimpleInteractiveMap from "../components/SimpleInteractiveMap";
import penariLampung from "../assets/Home/HomeTari.png"; // Foto Penari Lampung 1
import penariLampung2 from "../assets/Home/HomeTari2.jpg"; // Foto Penari Lampung 2
import penariLampung3 from "../assets/Home/HomeTari3.png"; // Foto Penari Lampung 3
import landmark1 from "../assets/Home/landmark-1.png";
import landmark2 from "../assets/Home/landmark-2.png";
import landmark3 from "../assets/Home/landmark-3.png";
import icon1 from "../assets/Home/icon-1.png";
import icon2 from "../assets/Home/icon-2.png";
import icon3 from "../assets/Home/icon-3.png";
import icon4 from "../assets/Home/icon-4.png";
import icon5 from "../assets/Home/icon-5.png";

const HomePage = () => {
  const aboutRef = useRef(null);
  const mapRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Slideshow state untuk Hero Section (slide horizontal + tombol)
  const heroImages = [penariLampung, penariLampung2, penariLampung3];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Untuk reset interval saat tombol ditekan
  const intervalRef = useRef();

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [currentHeroIndex]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
  };

  const goToPrev = () => {
    setCurrentHeroIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const goToNext = () => {
    setCurrentHeroIndex((prevIndex) =>
      (prevIndex + 1) % heroImages.length
    );
    startAutoSlide();
  };

  return (
    <div>
      {/* Hero Section dengan slide horizontal & tombol */}
      <section className="relative h-[85vh] mt-20 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentHeroIndex * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Penari Lampung ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
              style={{ height: "85vh" }}
            />
          ))}
        </div>
        {/* Tombol geser kiri */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 z-10 transition"
          aria-label="Sebelumnya"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        {/* Tombol geser kanan */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 z-10 transition"
          aria-label="Berikutnya"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center items-center text-white px-5 md:px-10 lg:px-0">
          {/* Konten hero bisa diaktifkan jika ingin */}
        </div>
        {/* Indikator bulat */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentHeroIndex ? "bg-white" : "bg-white/50"} transition`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
          Lampoenk Kalcer, yang diinisiasi oleh Kelompok 3in LKMO, mengorganisasi kekayaan aset budaya Lampung yang beragam ke dalam tema-tema yang kuat. Tujuannya adalah untuk menyampaikan konteks historis, nilai-nilai, serta signifikansi mendalam dari warisan budaya daerah ini.
        </p>
      </section>

      {/* Map Lampung Section */}
      <section ref={mapRef} className="py-20 px-5 md:px-10 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-2 relative inline-block"
            style={{ fontFamily: "'Cinzel', serif", color: "#810d11ff" }}>
            Peta Interaktif Provinsi Lampung
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
          </h2>
          <p className="text-gray-700 mb-8 font-normal" style={{fontFamily: 'Poppins, sans-serif'}}>
            KLIK PADA TOMBOL MERAH DI PETA INTERAKTIF UNTUK MENJELAJAHI KEINDAHAN DAN KEKAYAAN BUDAYA SETIAP DAERAH DI PROVINSI LAMPUNG!
          </p>
          <SimpleInteractiveMap />
        </div>
      </section>

      {/* Three Images Below Map Section */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-8 relative inline-block" style={{ fontFamily: "'Cinzel', serif", color: "#810d11ff" }}>
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
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-8 text-center relative inline-block" style={{ fontFamily: "'Cinzel', serif", color: "#810d11ff" }}>
            Ikon Lampung
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
          </h2>
          <div className="flex flex-col gap-6">
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
