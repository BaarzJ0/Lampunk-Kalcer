import React, { useState, useEffect, useRef } from 'react';

const GoogleMapComponent = () => {
  console.log('GoogleMapComponent rendering');
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const regions = {
    'Lampung Utara': {
      title: 'Lampung Utara',
      position: { lat: -4.8, lng: 104.5 },
      description: 'Kabupaten Lampung Utara adalah salah satu kabupaten di Provinsi Lampung yang kaya akan potensi wisata alam dan budaya.',
      attractions: ['Gunung Tanggamus', 'Air Terjun Way Lalaan', 'Danau Ranau', 'Taman Nasional Bukit Barisan Selatan'],
      culture: 'Budaya Lampung Utara dipengaruhi oleh tradisi Lampung asli dengan tarian dan musik tradisional yang khas.',
      food: 'Kuliner khas seperti Seruit, Gulai Taboh, dan berbagai hidangan ikan air tawar.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Timur': {
      title: 'Lampung Timur',
      position: { lat: -5.2, lng: 105.5 },
      description: 'Kabupaten Lampung Timur dikenal dengan keindahan pantainya dan potensi pertanian yang melimpah.',
      attractions: ['Pantai Tanjung Setia', 'Pantai Mutun', 'Pulau Pahawang', 'Pulau Kelagian'],
      culture: 'Budaya maritim yang kuat dengan tradisi nelayan dan festival laut yang meriah.',
      food: 'Seafood segar, kerupuk khas Lampung, dan berbagai olahan ikan laut.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Selatan': {
      title: 'Lampung Selatan',
      position: { lat: -5.5, lng: 104.8 },
      description: 'Kabupaten Lampung Selatan memiliki keindahan alam yang memukau dengan gunung dan pantai yang eksotis.',
      attractions: ['Gunung Rajabasa', 'Pantai Merak Belantung', 'Pantai Tanjung Bintang', 'Taman Nasional Way Kambas'],
      culture: 'Tradisi Lampung yang masih terjaga dengan berbagai upacara adat dan kesenian tradisional.',
      food: 'Kuliner tradisional Lampung seperti Tempoyak, Gulai Taboh, dan berbagai kue tradisional.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Barat': {
      title: 'Lampung Barat',
      position: { lat: -5.0, lng: 103.8 },
      description: 'Kabupaten Lampung Barat memiliki kekayaan alam yang luar biasa dengan hutan tropis dan gunung yang menjulang.',
      attractions: ['Gunung Pesagi', 'Danau Ranau', 'Air Terjun Curug Tujuh', 'Taman Nasional Bukit Barisan Selatan'],
      culture: 'Budaya Lampung asli yang masih sangat kental dengan berbagai ritual dan upacara tradisional.',
      food: 'Kuliner khas pegunungan dengan berbagai olahan sayuran dan daging.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Lampung Tengah': {
      title: 'Lampung Tengah',
      position: { lat: -4.8, lng: 105.0 },
      description: 'Kabupaten Lampung Tengah merupakan pusat pemerintahan dan ekonomi dengan berbagai potensi wisata.',
      attractions: ['Taman Nasional Way Kambas', 'Gunung Tanggamus', 'Danau Ranau', 'Air Terjun Way Lalaan'],
      culture: 'Pusat budaya Lampung dengan berbagai festival dan acara budaya yang rutin diselenggarakan.',
      food: 'Kuliner khas Lampung yang lengkap dengan berbagai hidangan tradisional.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  };

  useEffect(() => {
    const initializeMap = () => {
      if (window.google && mapRef.current) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: -4.8, lng: 104.8 }, // Center of Lampung
          zoom: 8,
          mapTypeId: 'terrain',
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }, { lightness: 17 }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
            }
          ]
        });

        setMap(mapInstance);

          // Add markers for each region
          Object.entries(regions).forEach(([key, region]) => {
            console.log(`Adding marker for ${key}`);
            const marker = new window.google.maps.Marker({
              position: region.position,
              map: mapInstance,
              title: region.title,
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#B22222" stroke="#ffffff" stroke-width="2"/>
                    <text x="20" y="25" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${key.charAt(key.length - 1)}</text>
                  </svg>
                `),
                scaledSize: new window.google.maps.Size(40, 40),
                anchor: new window.google.maps.Point(20, 20)
              }
            });

            // Add click listener to marker
            marker.addListener('click', () => {
              console.log(`Marker clicked for ${key}`);
              setSelectedRegion(region);
              setShowModal(true);
            });

            // Add info window
            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="padding: 10px; max-width: 200px;">
                  <h3 style="margin: 0 0 5px 0; color: #8B0000; font-size: 16px;">${region.title}</h3>
                  <p style="margin: 0; color: #666; font-size: 12px;">Klik untuk informasi lebih lanjut</p>
                </div>
              `
            });

            marker.addListener('mouseover', () => {
              infoWindow.open(mapInstance, marker);
            });

            marker.addListener('mouseout', () => {
              infoWindow.close();
            });
          });
      }
    };

    // Check if Google Maps is loaded
    if (window.google) {
      initializeMap();
    } else {
      // Wait for Google Maps to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogleMaps);
          initializeMap();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkGoogleMaps);
      }, 10000);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setSelectedRegion(null);
  };

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gold">
          <h3 className="text-2xl font-playfair font-bold text-dark-red mb-6 text-center">
            Peta Interaktif Provinsi Lampung
          </h3>
          
          {/* Google Map Container */}
          <div 
            ref={mapRef} 
            className="w-full h-96 rounded-lg border-2 border-gold"
            style={{ minHeight: '400px' }}
          ></div>
          
          <p className="text-center text-text-light mt-4 text-sm">
            <i className="fas fa-hand-pointer mr-2"></i>
            Klik pada marker untuk melihat informasi detail setiap daerah
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

export default GoogleMapComponent;
