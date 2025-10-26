import React, { useState, useEffect } from 'react';

const WonderfulPage = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }, []);
    
    const handleCardClick = () => {
      alert('Fitur detail akan segera tersedia!');
    };

    if (loading) {
      return (
        <div className="py-20 px-5 md:px-10 max-w-6xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red mx-auto mb-4"></div>
          <p className="text-text-light">Memuat konten...</p>
        </div>
      );
    }
  
    return (
      <div className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-8 relative inline-block">
          Wonderful Lampung
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pantai Lampung" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Pantai Indah</h3>
              <p className="text-text-light leading-relaxed mb-4">Nikmati keindahan pantai-pantai eksotis di Lampung dengan pasir putih dan air biru jernih</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-gold text-sm py-2 px-4"
              >
                Jelajahi
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Gunung Lampung" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Gunung Bersejarah</h3>
              <p className="text-text-light leading-relaxed mb-4">Jelajahi keindahan alam pegunungan dengan sejarah panjang di Lampung</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-gold text-sm py-2 px-4"
              >
                Jelajahi
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Taman Nasional" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Taman Nasional</h3>
              <p className="text-text-light leading-relaxed mb-4">Temukan keanekaragaman hayati di taman nasional Way Kambas dan Bukit Barisan Selatan</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-gold text-sm py-2 px-4"
              >
                Jelajahi
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723a9ce6890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pulau Pahawang" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Pulau Tropis</h3>
              <p className="text-text-light leading-relaxed mb-4">Kunjungi pulau-pulau tropis seperti Pahawang dan Kelagian untuk snorkeling dan diving</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-gold text-sm py-2 px-4"
              >
                Jelajahi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WonderfulPage;