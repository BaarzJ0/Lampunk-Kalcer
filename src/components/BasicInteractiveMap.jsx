import React, { useState } from 'react';

const BasicInteractiveMap = () => {
  console.log('🔥 BasicInteractiveMap component rendering successfully');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const regions = {
    'Lampung Utara': {
      title: 'Lampung Utara',
      description: 'Kabupaten Lampung Utara adalah salah satu kabupaten di Provinsi Lampung yang kaya akan potensi wisata alam dan budaya.',
      attractions: ['Gunung Tanggamus', 'Air Terjun Way Lalaan', 'Danau Ranau', 'Taman Nasional Bukit Barisan Selatan'],
      culture: 'Budaya Lampung Utara dipengaruhi oleh tradisi Lampung asli dengan tarian dan musik tradisional yang khas.',
      food: 'Kuliner khas seperti Seruit, Gulai Taboh, dan berbagai hidangan ikan air tawar.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Timur': {
      title: 'Lampung Timur',
      description: 'Kabupaten Lampung Timur dikenal dengan keindahan pantainya dan potensi pertanian yang melimpah.',
      attractions: ['Pantai Tanjung Setia', 'Pantai Mutun', 'Pulau Pahawang', 'Pulau Kelagian'],
      culture: 'Budaya maritim yang kuat dengan tradisi nelayan dan festival laut yang meriah.',
      food: 'Seafood segar, kerupuk khas Lampung, dan berbagai olahan ikan laut.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Selatan': {
      title: 'Lampung Selatan',
      description: 'Kabupaten Lampung Selatan memiliki keindahan alam yang memukau dengan gunung dan pantai yang eksotis.',
      attractions: ['Gunung Rajabasa', 'Pantai Merak Belantung', 'Pantai Tanjung Bintang', 'Taman Nasional Way Kambas'],
      culture: 'Tradisi Lampung yang masih terjaga dengan berbagai upacara adat dan kesenian tradisional.',
      food: 'Kuliner tradisional Lampung seperti Tempoyak, Gulai Taboh, dan berbagai kue tradisional.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Barat': {
      title: 'Lampung Barat',
      description: 'Kabupaten Lampung Barat memiliki kekayaan alam yang luar biasa dengan hutan tropis dan gunung yang menjulang.',
      attractions: ['Gunung Pesagi', 'Danau Ranau', 'Air Terjun Curug Tujuh', 'Taman Nasional Bukit Barisan Selatan'],
      culture: 'Budaya Lampung asli yang masih sangat kental dengan berbagai ritual dan upacara tradisional.',
      food: 'Kuliner khas pegunungan dengan berbagai olahan sayuran dan daging.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Tengah': {
      title: 'Lampung Tengah',
      description: 'Kabupaten Lampung Tengah merupakan pusat pemerintahan dan ekonomi dengan berbagai potensi wisata.',
      attractions: ['Taman Nasional Way Kambas', 'Gunung Tanggamus', 'Danau Ranau', 'Air Terjun Way Lalaan'],
      culture: 'Pusat budaya Lampung dengan berbagai festival dan acara budaya yang rutin diselenggarakan.',
      food: 'Kuliner khas Lampung yang lengkap dengan berbagai hidangan tradisional.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  };

  const handleRegionClick = (regionName) => {
    console.log(`🎯 BasicInteractiveMap: Region clicked - ${regionName}`);
    setSelectedRegion(regions[regionName]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRegion(null);
  };

  return (
    <>
      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-gold">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-playfair font-bold text-dark-red mb-4">
              🗺️ PETA INTERAKTIF PROVINSI LAMPUNG
            </h3>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          {/* Map Visualization */}
          <div className="relative bg-linear-to-br from-green-100 via-blue-100 to-green-100 rounded-2xl p-8 min-h-[600px] border-4 border-green-400 shadow-inner">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
                {Array.from({ length: 144 }, (_, i) => (
                  <div key={i} className="border border-green-300 opacity-30"></div>
                ))}
              </div>
            </div>

            {/* Central Lampung Shape */}
            <div className="absolute inset-8 bg-linear-to-br from-green-300 to-green-500 rounded-xl border-4 border-green-600 shadow-lg">
              <div className="absolute inset-2 bg-linear-to-br from-green-200 to-green-400 rounded-lg opacity-50"></div>

              {/* Region Buttons - Large and Visible */}
              <div className="relative w-full h-full">
                {/* Lampung Utara */}
                <button
                  onClick={() => handleRegionClick('Lampung Utara')}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-pulse"
                >
                  🏔️ LAMPUNG UTARA
                </button>

                {/* Lampung Timur */}
                <button
                  onClick={() => handleRegionClick('Lampung Timur')}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-bounce"
                >
                  🌊 LAMPUNG TIMUR
                </button>

                {/* Lampung Selatan */}
                <button
                  onClick={() => handleRegionClick('Lampung Selatan')}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-pulse"
                >
                  🏖️ LAMPUNG SELATAN
                </button>

                {/* Lampung Barat */}
                <button
                  onClick={() => handleRegionClick('Lampung Barat')}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-bounce"
                >
                  🌲 LAMPUNG BARAT
                </button>

                {/* Lampung Tengah */}
                <button
                  onClick={() => handleRegionClick('Lampung Tengah')}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-pulse"
                >
                  🏛️ LAMPUNG TENGAH
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-yellow-400 rounded-full animate-spin shadow-lg"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full animate-spin shadow-lg opacity-75"></div>
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg border-2 border-gold">
              <h4 className="font-semibold text-dark-red mb-2">Legenda:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
                  <span>Daerah Interaktif</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                  <span>Navigasi</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                  <span>Area Lampung</span>
                </div>
              </div>
            </div>

            {/* Compass */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg border-2 border-gold">
              <div className="text-lg font-bold text-red-600">🧭</div>
              <div className="text-xs text-gray-600 font-bold mt-1">N</div>
            </div>
          </div>

          <div className="mt-8 text-center bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-red-700 font-semibold">
              <i className="fas fa-hand-pointer mr-2"></i>
              KLIK PADA TOMBOL MERAH DI ATAS UNTUK MELIHAT INFORMASI DETAIL SETIAP DAERAH!
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
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
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-dark-red rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-playfair font-bold text-dark-red mb-4">
                {selectedRegion.title}
              </h2>

              <p className="text-text-light leading-relaxed mb-6">
                {selectedRegion.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark-red mb-3 flex items-center">
                    <i className="fas fa-mountain mr-2 text-gold"></i>
                    Tempat Wisata
                  </h3>
                  <ul className="space-y-2">
                    {selectedRegion.attractions.map((attraction, index) => (
                      <li key={index} className="flex items-center text-text-light">
                        <i className="fas fa-map-marker-alt mr-2 text-red text-sm"></i>
                        {attraction}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-dark-red mb-3 flex items-center">
                    <i className="fas fa-utensils mr-2 text-gold"></i>
                    Kuliner Khas
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {selectedRegion.food}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-dark-red mb-3 flex items-center">
                  <i className="fas fa-theater-masks mr-2 text-gold"></i>
                  Budaya & Tradisi
                </h3>
                <p className="text-text-light leading-relaxed">
                  {selectedRegion.culture}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="btn btn-primary"
                >
                  <i className="fas fa-times mr-2"></i>
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

export default BasicInteractiveMap;
