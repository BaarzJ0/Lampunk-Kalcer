import React from "react";

const LampungUtara = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Container dengan padding responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Judul utama */}
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-8 tracking-wider uppercase text-[#b31217]"
            style={{ fontFamily: "'Cinzel', serif" }}>
          Lampung Utara
        </h1>

{/* Ganti grid 2x2 dengan 1 gambar saja */}
<div className="w-full mb-12 lg:mb-16">
  <div className="overflow-hidden rounded-lg">
    <img 
      src="/TuguLumut.png" 
      alt="Lampung Tengah Collage"
      className="w-full h-auto object-cover"
    />
  </div>
</div>


        {/* Deskripsi List - Responsive */}
        <div>
  <h2 style={{ fontSize: 40, textAlign: "center", marginBottom: 12,}}>
    The Gold Spear Monument
  </h2>
  <p style={{ fontSize: 20, textAlign: "center", maxWidth: 1000, margin: "0 auto" }}>
    Lampung Utara dikenal memiliki masyarakat yang terbuka (sakay-sambayan) dan menerima keberagaman suku pendatang (Jawa, Sunda, dll.) yang berbaur dengan suku asli Lampung Abung.
  </p>
</div>


      </div>

      {/* The Culture Section - Full width dengan background */}
      <div className="min-h-screen bg-[#DEDEDC]">
        
        {/* Header */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-wide text-center">
              THE CULTURE
            </h1>
          </div>
        </div>

        {/* Section 1: Tarian Raja */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-right">
                Tarian Raja
              </h2>
            </div>

            <div className="flex items-center justify-center md:justify-start order-1 md:order-2">
              <img 
                src="/TarianRaja.png" 
                alt="Tarian Raja" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>

        {/* Section 2: Upacara Pepadun */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-1">
              <img 
                src="/UpacaraPepadun.png" 
                alt="Upacara Pepadun" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex items-center justify-center md:justify-start order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-left">
                Upacara Pepadun
              </h2>
            </div>

          </div>
        </div>

        {/* Section 3: Terapang*/}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-right">
                Terampang
              </h2>
            </div>

            <div className="flex items-center justify-center md:justify-start order-1 md:order-2">
              <img 
                src="/Terapang.png" 
                alt="Terapang" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default LampungUtara;
