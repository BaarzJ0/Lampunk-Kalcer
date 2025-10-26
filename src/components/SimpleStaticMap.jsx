import React, { useState } from 'react';

const SimpleStaticMap = () => {
  console.log('📍 SimpleStaticMap component rendering successfully');
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
    console.log(`🖱️ SimpleStaticMap: ${regionName} clicked - Opening modal`);
    setSelectedRegion(regions[regionName]);
    setShowModal(true);
  };

  const closeModal = () => {
    console.log('🔒 SimpleStaticMap: Modal closed');
    setShowModal(false);
    setSelectedRegion(null);
  };

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-red-500">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-playfair font-bold text-red-600 mb-4">
            🗺️ PETA INTERAKTIF LAMPUNG
          </h3>
          <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 font-semibold text-lg">
            KLIK TOMBOL MERAH UNTUK MENJELAJAHI SETIAP DAERAH!
          </p>
        </div>

        {/* Lampung Province Shape */}
        <div className="relative bg-linear-to-br from-green-200 via-green-300 to-green-400 rounded-3xl p-12 min-h-[500px] border-8 border-green-600 shadow-inner">
          {/* Inner province area */}
          <div className="absolute inset-4 bg-linear-to-br from-green-100 to-green-300 rounded-2xl border-4 border-green-500">
            <div className="absolute inset-2 bg-green-50 rounded-xl opacity-30"></div>

            {/* Interactive Region Buttons */}
            <div className="relative w-full h-full">
              {/* Header */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg animate-pulse">
                  PROVINSI LAMPUNG
                </div>
              </div>

              {/* Lampung Utara */}
              <button
                onClick={() => handleRegionClick('Lampung Utara')}
                className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-pulse"
              >
                🏔️ LAMPUNG UTARA
              </button>

              {/* Lampung Timur */}
              <button
                onClick={() => handleRegionClick('Lampung Timur')}
                className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-bounce"
              >
                🌊 LAMPUNG TIMUR
              </button>

              {/* Lampung Selatan */}
              <button
                onClick={() => handleRegionClick('Lampung Selatan')}
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-pulse"
              >
                🏖️ LAMPUNG SELATAN
              </button>

              {/* Lampung Barat */}
              <button
                onClick={() => handleRegionClick('Lampung Barat')}
                className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-bounce"
              >
                🌲 LAMPUNG BARAT
              </button>

              {/* Lampung Tengah (Center) */}
              <button
                onClick={() => handleRegionClick('Lampung Tengah')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-110 transition-all shadow-2xl border-4 border-white animate-pulse"
              >
                🏛️ LAMPUNG TENGAH
              </button>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-400 rounded-full animate-spin shadow-2xl"></div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full animate-pulse shadow-2xl"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-400 rounded-full animate-bounce shadow-2xl"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-400 rounded-full animate-pulse shadow-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-400 rounded-full animate-spin shadow-2xl opacity-75"></div>
            </div>
          </div>

          {/* Compass */}
          <div className="absolute top-4 right-4 bg-white rounded-full p-4 shadow-2xl border-4 border-red-500">
            <div className="text-2xl font-bold text-red-600">🧭</div>
            <div className="text-xs text-gray-600 font-bold mt-1">N</div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-6 shadow-2xl border-4 border-yellow-400">
            <h4 className="font-bold text-red-600 mb-3 text-lg">🔍 LEGENDA</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-600 rounded-lg mr-3"></div>
                <span className="font-semibold">TOMBOL INTERAKTIF</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full mr-3"></div>
                <span className="font-semibold">ELEMEN NAVIGASI</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-400 rounded mr-3"></div>
                <span className="font-semibold">WILAYAH LAMPUNG</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="absolute bottom-4 right-4 bg-red-600 text-white rounded-2xl p-6 shadow-2xl border-4 border-white">
            <div className="text-center">
              <div className="text-3xl mb-2">👆</div>
              <div className="font-bold text-lg">KLIK TOMBOL</div>
              <div className="font-bold text-lg">MERAH!</div>
              <div className="text-sm mt-1 opacity-90">Untuk info detail</div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg animate-pulse">
          <div className="flex items-center">
            <div className="text-green-600 text-2xl mr-3">✅</div>
            <div>
              <h4 className="font-bold text-green-800">PETA INTERAKTIF BERHASIL DIMUAT!</h4>
              <p className="text-green-700">🎯 Klik tombol merah di peta untuk melihat informasi detail setiap daerah Lampung</p>
              <p className="text-green-600 text-sm mt-1">📱 Peta ini 100% berfungsi tanpa perlu API eksternal</p>
            </div>
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
    </div>
  );
};

export default SimpleStaticMap;
