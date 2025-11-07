import React from "react";

const LampungBarat = () => {
  return (
    
    <div className="min-h-screen bg-white">
      
      {/* Section 1: Hero - Welcome to Lampung Barat */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
          {/* Main Title */}
          <div className="mb-10 sm:mb-12 text-center">
            <h1 
            className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-12 tracking-wider uppercase text-[#b31217]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Lampung Barat
          </h1>
          </div>

          {/* Subtitle 1 */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-wide">
              WELCOME TO THE HEAVEN OF LAMPUNG...
            </h2>
          </div>

          {/* Subtitle 2 */}
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif text-gray-900 tracking-wider uppercase">
              Here We Go Lampung Barat
            </h3>
          </div>

          {/* Hero Image */}
          <div className="w-full mb-8 sm:mb-10 lg:mb-12">
            <img 
              src="/lambar.png" 
              alt="Land Above the Clouds"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>

          {/* Caption */}
          <div className="text-center">
            <h4 className="text-3xl sm:text-4xl md:text-4xl text-gray-900 font-serif tracking-wide">
              Land Above the Clouds
            </h4>
          </div>

        </div>
      </div>

      {/* Section 2: The Culture - Background Abu-abu starts here */}
      <div className="bg-[#DEDEDC]">
        
        {/* THE CULTURE: Adat Pepadun */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Title */}
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 tracking-wider">
                THE CULTURE
              </h2>
            </div>

            {/* Card Container */}
            <div className=" p-8 sm:p-10 md:p-12 lg:p-16 ">
              
              {/* Image */}
              <div className="w-full mb-10">
                <img 
                  src="/pepadun.png" 
                  alt="Adat Pepadun"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Title */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
                  Adat Pepadun
                </h3>
              </div>

              {/* Description */}
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Upacara pemberian gelar adat (Begawi Cakak Pepadun), masih sangat kental.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Section 3: Festival Sekura */}
        <div className="py-12 sm:py-16 lg:py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Image */}
            <div className="w-full mb-10 sm:mb-12">
              <img 
                src="/topeng-lampung.png" 
                alt="Festival Sekura"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
                Festival Sekura
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                Tradisi pesta topeng yang dilakukan masyarakat Lampung Barat setiap perayaan Idul Fitri. 
                Tujuannya adalah sebagai ungkapan rasa syukur dan suka cita.
              </p>
            </div>

          </div>
        </div>

        {/* Section 4: Natural Charm */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Title */}
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-4xl font-serif text-gray-900 tracking-wider uppercase">
                Natural Charm
              </h2>
            </div>

            {/* Top Row - 2 Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-10">
              
              {/* Danau Ranau */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-[4/3] overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src="/danau-ranau.png" 
                    alt="Danau Ranau"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-gray-900 tracking-wide uppercase">
                  Danau Ranau
                </h3>
              </div>

              {/* Kebun Raya Liwa */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-[4/3] overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src="/kebun-raya-liwa.png" 
                    alt="Kebun Raya Liwa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-gray-900 tracking-wide uppercase">
                  Kebun Raya Liwa
                </h3>
              </div>

            </div>

            {/* Bottom Row - 1 Large Image */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-[16/9] overflow-hidden mb-4 sm:mb-6">
                <img 
                  src="/bawang-bakung.png" 
                  alt="Bukit Bawang Bakung"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-gray-900 tracking-wide uppercase">
                Bukit Bawang Bakung
              </h3>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default LampungBarat;
