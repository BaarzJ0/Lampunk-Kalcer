import React, { useState } from 'react';

const SimpleInteractiveMap = () => {
  console.log('✅ SimpleInteractiveMap component rendering successfully');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const regions = {
    'Lampung Utara': {
      title: 'Lampung Utara',
      description: 'Kabupaten Lampung Utara adalah salah satu kabupaten di Provinsi Lampung yang kaya akan potensi wisata alam dan budaya.',
      attractions: ['Gunung Tanggamus', 'Air Terjun Way Lalaan', 'Danau Ranau', 'Taman Nasional Bukit Barisan Selatan'],
      culture: 'Budaya Lampung Utara dipengaruhi oleh tradisi Lampung asli dengan tarian dan musik tradisional yang khas.',
      food: 'Kuliner khas seperti Seruit, Gulai Taboh, dan berbagai hidangan ikan air tawar.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'bg-blue-500'
    },
    'Lampung Timur': {
      title: 'Lampung Timur',
      description: 'Kabupaten Lampung Timur dikenal dengan keindahan pantainya dan potensi pertanian yang melimpah.',
      attractions: ['Pantai Tanjung Setia', 'Pantai Mutun', 'Pulau Pahawang', 'Pulau Kelagian'],
      culture: 'Budaya maritim yang kuat dengan tradisi nelayan dan festival laut yang meriah.',
      food: 'Seafood segar, kerupuk khas Lampung, dan berbagai olahan ikan laut.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'bg-green-500'
    },
    'Lampung Selatan': {
      title: 'Lampung Selatan',
      description: 'Kabupaten Lampung Selatan memiliki keindahan alam yang memukau dengan gunung dan pantai yang eksotis.',
      attractions: ['Gunung Rajabasa', 'Pantai Merak Belantung', 'Pantai Tanjung Bintang', 'Taman Nasional Way Kambas'],
      culture: 'Tradisi Lampung yang masih terjaga dengan berbagai upacara adat dan kesenian tradisional.',
      food: 'Kuliner tradisional Lampung seperti Tempoyak, Gulai Taboh, dan berbagai kue tradisional.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'bg-yellow-500'
    },
    'Lampung Barat': {
      title: 'Lampung Barat',
      description: 'Kabupaten Lampung Barat memiliki kekayaan alam yang luar biasa dengan hutan tropis dan gunung yang menjulang.',
      attractions: ['Gunung Pesagi', 'Danau Ranau', 'Air Terjun Curug Tujuh', 'Taman Nasional Bukit Barisan Selatan'],
      culture: 'Budaya Lampung asli yang masih sangat kental dengan berbagai ritual dan upacara tradisional.',
      food: 'Kuliner khas pegunungan dengan berbagai olahan sayuran dan daging.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'bg-purple-500'
    },
    'Lampung Tengah': {
      title: 'Lampung Tengah',
      description: 'Kabupaten Lampung Tengah merupakan pusat pemerintahan dan ekonomi dengan berbagai potensi wisata.',
      attractions: ['Taman Nasional Way Kambas', 'Gunung Tanggamus', 'Danau Ranau', 'Air Terjun Way Lalaan'],
      culture: 'Pusat budaya Lampung dengan berbagai festival dan acara budaya yang rutin diselenggarakan.',
      food: 'Kuliner khas Lampung yang lengkap dengan berbagai hidangan tradisional.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'bg-red-500'
    }
  };

  const handleRegionClick = (regionName) => {
    console.log(`SimpleInteractiveMap: Region clicked - ${regionName}`);
    setSelectedRegion(regions[regionName]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRegion(null);
  };

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
            🗺️ Peta Interaktif Provinsi Lampung
          </h3>

          {/* SVG Map Container */}
          <div className="relative rounded-lg border-2 border-yellow-400 overflow-hidden shadow-inner bg-gradient-to-br from-green-50 to-blue-50">
            
            {/* SVG Interactive Map */}
            <svg viewBox="0 0 800 600" className="w-full h-auto" style={{ display: 'block' }}>
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
                </filter>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#D1FAE5', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#DBEAFE', stopOpacity: 1}} />
                </linearGradient>
              </defs>

              {/* Base Map Background */}
              <rect width="800" height="600" fill="url(#gradient1)"/>

              {/* Lampung Utara - Top Center */}
              <path
                d="M 300 50 L 500 50 L 520 120 L 500 180 L 300 180 L 280 120 Z"
                fill="#3B82F6"
                stroke="#fff"
                strokeWidth="3"
                filter="url(#shadow)"
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => handleRegionClick('Lampung Utara')}
              />
              <text x="400" y="120" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" className="pointer-events-none select-none">
                LAMPUNG UTARA
              </text>

              {/* Lampung Barat - Left Side */}
              <path
                d="M 80 200 L 250 200 L 270 320 L 250 440 L 80 440 L 50 320 Z"
                fill="#8B5CF6"
                stroke="#fff"
                strokeWidth="3"
                filter="url(#shadow)"
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => handleRegionClick('Lampung Barat')}
              />
              <text x="165" y="315" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="pointer-events-none select-none">
                LAMPUNG
              </text>
              <text x="165" y="340" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="pointer-events-none select-none">
                BARAT
              </text>

              {/* Lampung Tengah - Center */}
              <path
                d="M 290 210 L 510 210 L 530 320 L 510 430 L 290 430 L 270 320 Z"
                fill="#EF4444"
                stroke="#fff"
                strokeWidth="3"
                filter="url(#shadow)"
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => handleRegionClick('Lampung Tengah')}
              />
              <text x="400" y="315" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" className="pointer-events-none select-none">
                LAMPUNG TENGAH
              </text>

              {/* Lampung Timur - Right Side */}
              <path
                d="M 540 200 L 720 200 L 750 320 L 720 440 L 540 440 L 520 320 Z"
                fill="#10B981"
                stroke="#fff"
                strokeWidth="3"
                filter="url(#shadow)"
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => handleRegionClick('Lampung Timur')}
              />
              <text x="630" y="315" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="pointer-events-none select-none">
                LAMPUNG
              </text>
              <text x="630" y="340" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="pointer-events-none select-none">
                TIMUR
              </text>

              {/* Lampung Selatan - Bottom */}
              <path
                d="M 350 460 L 600 460 L 620 520 L 600 560 L 350 560 L 330 520 Z"
                fill="#F59E0B"
                stroke="#fff"
                strokeWidth="3"
                filter="url(#shadow)"
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => handleRegionClick('Lampung Selatan')}
              />
              <text x="475" y="515" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="pointer-events-none select-none">
                LAMPUNG SELATAN
              </text>
            </svg>

          </div>

          {/* Info & Legend */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm mb-4">
              <i className="fas fa-hand-pointer mr-2 text-blue-500"></i>
              Klik pada area daerah untuk melihat informasi detail
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <span className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1.5"></div>
                <span className="text-gray-700">Lampung Utara</span>
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1.5"></div>
                <span className="text-gray-700">Lampung Tengah</span>
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></div>
                <span className="text-gray-700">Lampung Timur</span>
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-1.5"></div>
                <span className="text-gray-700">Lampung Barat</span>
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1.5"></div>
                <span className="text-gray-700">Lampung Selatan</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Modal - Same as before */}
      {showModal && selectedRegion && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedRegion.image}
                alt={selectedRegion.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                {selectedRegion.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedRegion.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🏔️</span>
                    Tempat Wisata
                  </h3>
                  <ul className="space-y-2">
                    {selectedRegion.attractions.map((attraction, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-blue-500">📍</span>
                        {attraction}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🍽️</span>
                    Kuliner Khas
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedRegion.food}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">🎭</span>
                  Budaya & Tradisi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedRegion.culture}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleInteractiveMap;
