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
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gold">
          <h3 className="text-2xl font-playfair font-bold text-dark-red mb-8 text-center">
            🗺️ Peta Interaktif Provinsi Lampung
          </h3>

          {/* Simple Map Layout */}
          <div className="relative bg-linear-to-br from-green-100 to-blue-100 rounded-lg p-8 min-h-[500px] border-2 border-gold overflow-hidden shadow-inner">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>
            </div>

            {/* Lampung Map Shape (Simplified) */}
            <div className="absolute inset-4 bg-linear-to-br from-green-200 to-green-300 rounded-lg border-2 border-green-400 opacity-80">
              {/* Region Buttons */}
              <button
                onClick={() => handleRegionClick('Lampung Utara')}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red text-white py-3 px-6 rounded-full font-semibold hover:bg-dark-red hover:scale-105 transition-all shadow-lg border-2 border-white animate-pulse"
              >
                🏔️ Lampung Utara
              </button>

              <button
                onClick={() => handleRegionClick('Lampung Timur')}
                className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-red text-white py-3 px-6 rounded-full font-semibold hover:bg-dark-red hover:scale-105 transition-all shadow-lg border-2 border-white animate-bounce"
              >
                🌊 Lampung Timur
              </button>

              <button
                onClick={() => handleRegionClick('Lampung Selatan')}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red text-white py-3 px-6 rounded-full font-semibold hover:bg-dark-red hover:scale-105 transition-all shadow-lg border-2 border-white animate-pulse"
              >
                🏖️ Lampung Selatan
              </button>

              <button
                onClick={() => handleRegionClick('Lampung Barat')}
                className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-red text-white py-3 px-6 rounded-full font-semibold hover:bg-dark-red hover:scale-105 transition-all shadow-lg border-2 border-white animate-bounce"
              >
                🌲 Lampung Barat
              </button>

              <button
                onClick={() => handleRegionClick('Lampung Tengah')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red text-white py-3 px-6 rounded-full font-semibold hover:bg-dark-red hover:scale-105 transition-all shadow-lg border-2 border-white animate-pulse"
              >
                🏛️ Lampung Tengah
              </button>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-gold rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-gold rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gold rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gold rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* Compass */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
              <div className="text-xs text-gray-600 font-bold">N</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-text-light text-sm mb-4">
              <i className="fas fa-hand-pointer mr-2 text-red"></i>
              Klik pada nama daerah berwarna merah untuk melihat informasi detail
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <span className="flex items-center">
                <div className="w-3 h-3 bg-red rounded-full mr-1"></div>
                Daerah Interaktif
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-gold rounded-full mr-1"></div>
                Titik Navigasi
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-1"></div>
                Area Lampung
              </span>
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
    </>
  );
};

export default SimpleInteractiveMap;
