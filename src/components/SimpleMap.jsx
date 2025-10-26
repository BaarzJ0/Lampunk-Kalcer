import React, { useState } from 'react';

const SimpleMap = () => {
  console.log('SimpleMap component is rendering');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const regions = {
    'Lampung Utara': {
      title: 'Lampung Utara',
      description: 'Kabupaten Lampung Utara adalah salah satu kabupaten di Provinsi Lampung yang kaya akan potensi wisata alam dan budaya.',
      attractions: ['Gunung Tanggamus', 'Air Terjun Way Lalaan', 'Danau Ranau'],
      culture: 'Budaya Lampung Utara dipengaruhi oleh tradisi Lampung asli.',
      food: 'Kuliner khas seperti Seruit, Gulai Taboh.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Timur': {
      title: 'Lampung Timur',
      description: 'Kabupaten Lampung Timur dikenal dengan keindahan pantainya dan potensi pertanian yang melimpah.',
      attractions: ['Pantai Tanjung Setia', 'Pantai Mutun', 'Pulau Pahawang'],
      culture: 'Budaya maritim yang kuat dengan tradisi nelayan.',
      food: 'Seafood segar, kerupuk khas Lampung.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Selatan': {
      title: 'Lampung Selatan',
      description: 'Kabupaten Lampung Selatan memiliki keindahan alam yang memukau dengan gunung dan pantai yang eksotis.',
      attractions: ['Gunung Rajabasa', 'Pantai Merak Belantung', 'Taman Nasional Way Kambas'],
      culture: 'Tradisi Lampung yang masih terjaga dengan berbagai upacara adat.',
      food: 'Kuliner tradisional Lampung seperti Tempoyak, Gulai Taboh.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Barat': {
      title: 'Lampung Barat',
      description: 'Kabupaten Lampung Barat memiliki kekayaan alam yang luar biasa dengan hutan tropis dan gunung yang menjulang.',
      attractions: ['Gunung Pesagi', 'Danau Ranau', 'Air Terjun Curug Tujuh'],
      culture: 'Budaya Lampung asli yang masih sangat kental.',
      food: 'Kuliner khas pegunungan dengan berbagai olahan sayuran.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Tengah': {
      title: 'Lampung Tengah',
      description: 'Kabupaten Lampung Tengah merupakan pusat pemerintahan dan ekonomi dengan berbagai potensi wisata.',
      attractions: ['Taman Nasional Way Kambas', 'Gunung Tanggamus', 'Danau Ranau'],
      culture: 'Pusat budaya Lampung dengan berbagai festival dan acara budaya.',
      food: 'Kuliner khas Lampung yang lengkap dengan berbagai hidangan tradisional.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  };

  const handleRegionClick = (regionName) => {
    console.log('Region clicked:', regionName);
    setSelectedRegion(regions[regionName]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRegion(null);
  };

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Simple Map Container */}
        <div className="bg-linear-to-br from-green-100 to-blue-100 rounded-lg shadow-lg p-8 relative overflow-hidden">
          <h3 className="text-2xl font-playfair font-bold text-dark-red mb-6 text-center">
            Peta Interaktif Provinsi Lampung
          </h3>
          
          {/* Simple Map Layout */}
          <div className="relative h-96 bg-linear-to-br from-green-200 to-blue-200 rounded-lg border-2 border-gold">
            {/* Region Buttons */}
            <button 
              onClick={() => handleRegionClick('Lampung Utara')}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red text-white py-2 px-4 rounded-full font-medium hover:bg-dark-red hover:scale-105 transition-all text-sm"
            >
              Lampung Utara
            </button>
            
            <button 
              onClick={() => handleRegionClick('Lampung Timur')}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red text-white py-2 px-4 rounded-full font-medium hover:bg-dark-red hover:scale-105 transition-all text-sm"
            >
              Lampung Timur
            </button>
            
            <button 
              onClick={() => handleRegionClick('Lampung Selatan')}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red text-white py-2 px-4 rounded-full font-medium hover:bg-dark-red hover:scale-105 transition-all text-sm"
            >
              Lampung Selatan
            </button>
            
            <button 
              onClick={() => handleRegionClick('Lampung Barat')}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red text-white py-2 px-4 rounded-full font-medium hover:bg-dark-red hover:scale-105 transition-all text-sm"
            >
              Lampung Barat
            </button>
            
            <button 
              onClick={() => handleRegionClick('Lampung Tengah')}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red text-white py-2 px-4 rounded-full font-medium hover:bg-dark-red hover:scale-105 transition-all text-sm"
            >
              Lampung Tengah
            </button>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-gold rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 bg-gold rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gold rounded-full"></div>
          </div>
          
          <p className="text-center text-text-light mt-4 text-sm">
            Klik pada daerah untuk melihat informasi detail
          </p>
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

export default SimpleMap;
