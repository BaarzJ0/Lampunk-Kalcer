import React from "react";

const LampungTimur = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Section 1: Header & Welcome */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          
          {/* Judul Lampung Timur */}
          <h1 
            className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-12 tracking-wider uppercase text-[#b31217]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Lampung Timur
          </h1>
          
          {/* Welcome Title */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light tracking-widest text-gray-900 uppercase">
              Welcome to Lampung Timur
            </h2>
          </div>

          {/* Image & Title Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 lg:mb-12">
            
            {/* Image Section - Left */}
            <div className="w-full">
              <img 
                src="/gajah.png" 
                alt="Sumatra's Elephant Sanctuary"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Title Section - Right */}
            <div className="flex items-center justify-start h-full pt-8 lg:pt-16">
              <h3 className="text-4xl sm:text-5xl lg:text-5xl font-serif text-gray-900 leading-tight">
                Sumatra's<br />
                Elephant<br />
                Sanctuary
              </h3>
            </div>

          </div>

          {/* Description Paragraph */}
          <div className="w-full max-w-5xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed px-4">
              Way Kambas telah ditetapkan sebagai Taman Warisan ASEAN (ASEAN Heritage Park), 
              menunjukkan pentingnya kawasan ini dalam upaya konservasi di tingkat regional.
            </p>
          </div>

        </div>
      </div>

      {/* Section 2: The Culture - Full Background Abu-abu */}
      <div className="bg-[#DEDEDC] py-12 px-4 sm:px-6 lg:px-8">
        
        {/* The Culture Header */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 text-center tracking-wide">
            THE CULTURE
          </h2>
        </div>

        {/* Culture Cards */}
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Card 1: Tari Melinting */}
          <div className="flex flex-col items-center">
            <div className="w-full mb-6">
              <img 
                src="/tari-melinting.png" 
                alt="Tari Melinting"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 text-center">
              Tari Melinting
            </h3>
          </div>

          {/* Card 2: Tapis Melinting */}
          <div className="flex flex-col items-center">
            <div className="w-full mb-6">
              <img 
                src="/kain-tapis.png" 
                alt="Tapis Melinting"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 text-center">
              Tapis Melinting
            </h3>
          </div>

        </div>

        {/* Section 3: Other of Lampung Timur - Di dalam background abu-abu */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          
          {/* Other Header - CENTERED */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-wider">
              OTHER OF LAMPUNG TIMUR
            </h2>
          </div>

          {/* Other Cards */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Card 1: Festival Lada dan Ruwat Desa */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md mb-6">
                <img 
                  src="/festival-lada.png" 
                  alt="Festival Lada dan Ruwat Desa"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 text-center">
                Festival Lada dan Ruwat Desa
              </h3>
            </div>

            {/* Card 2: Taman Nasional Way Kambas */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-500 mb-6">
                <img 
                  src="/gajah-way-kambas.png" 
                  alt="Taman Nasional Way Kambas"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 text-center">
                Taman Nasional Way Kambas
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LampungTimur;
