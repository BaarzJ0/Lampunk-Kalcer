import React from "react";

const LampungTengah = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Container dengan padding responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Judul utama */}
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-8 tracking-wider uppercase text-[#b31217]"
            style={{ fontFamily: "'Cinzel', serif" }}>
          Lampung Tengah
        </h1>

        {/* Grid 2x2 Images - Responsive */}
        <div className="w-full mb-12 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/tugu-canang.png" 
                alt="Tugu Canang"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/Tugu_Lampung_Tengah 1.png" 
                alt="Tugu Tangan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/gajah putih lampung tengah 1.png" 
                alt="Tugu Gajah Putih"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/tugu-kopiah.png" 
                alt="Tugu Kopiah Emas"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

          </div>
        </div>

        {/* Deskripsi List - Responsive */}
        <div className="w-full mb-12 lg:mb-16">
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed">
            
            <div className="flex gap-2 sm:gap-3">
              <div className="flex-shrink-0 font-bold text-gray-900">1.</div>
              <div className="flex-1 text-gray-800">
                <span className="text-gray-900">Tugu Canang:</span> Melambangkan alat komunikasi tradisional atau penanda keramaian, tugu ini menjadi simbol gerakan perubahan dan RTH di Lapangan Merdeka Gunung Sugih.
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <div className="flex-shrink-0 font-bold text-gray-900">2.</div>
              <div className="flex-1 text-gray-800">
                <span className="text-gray-900">Tugu Tangan (Tugu Pepadun):</span> Berbentuk dua tangan penari wanita menopang singgerang adat (Pepadun), tugu ini merupakan simbol penghormatan dan kebanggaan budaya Adat Pepadun Lampung Tengah.
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <div className="flex-shrink-0 font-bold text-gray-900">3.</div>
              <div className="flex-1 text-gray-800">
                <span className="text-gray-900">Tugu Gajah Putih (Tugu Gajah Siwo Mergo):</span> Menampilkan sembilan patung gajah, tugu ini melambangkan Sembilan Marga (Siwo Mergo) yang menjadi tonggak sejarah dan identitas adat di Lampung Tengah.
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <div className="flex-shrink-0 font-bold text-gray-900">4.</div>
              <div className="flex-1 text-gray-800">
                <span className="text-gray-900">Tugu Kopiah Emas:</span> Berbentuk replika tutup kepala adat pria Lampung, tugu ini menjadi landmark yang mencolok dan ikonik di Jalan Lintas Sumatera, Gunung Sugih.
              </div>
            </div>

          </div>
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

        {/* Section 1: Javanese Culture */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-right">
                JAVANESE CULTURE
              </h2>
            </div>

            <div className="flex items-center justify-center md:justify-start order-1 md:order-2">
              <img 
                src="/javanese.png" 
                alt="Javanese Wayang Performance" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>

        {/* Section 2: Adat Pepadun */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-1">
              <img 
                src="/pepadun 1.png" 
                alt="Adat Pepadun" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex items-center justify-center md:justify-start order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-left">
                ADAT PEPADUN
              </h2>
            </div>

          </div>
        </div>

        {/* Section 3: Bali Culture */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-right">
                BALI CULTURE
              </h2>
            </div>

            <div className="flex items-center justify-center md:justify-start order-1 md:order-2">
              <img 
                src="/balinese.png" 
                alt="Bali Culture" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>

        {/* Section 4: Nanas Kaleng */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            <div className="flex items-center justify-center md:justify-end order-1">
              <img 
                src="/nanas kaleng lamteng 1.png" 
                alt="Nanas Kaleng Khas Lampung Tengah" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex items-center justify-center md:justify-start order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 text-center md:text-left">
                Nanas Kaleng Khas Lampung Tengah
              </h2>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default LampungTengah;
