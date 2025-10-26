import React from 'react';

const LanguagesPage = () => {
    const handleCardClick = () => {
      alert('Fitur detail akan segera tersedia!');
    };
  
    return (
      <div className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-8 relative inline-block">
          Languages & Food
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1623682247156-5bc97e9a0c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Bahasa Lampung" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Bahasa Lampung</h3>
              <p className="text-text-light leading-relaxed mb-4">Pelajari dialek dan aksara Lampung yang kaya akan filosofi dan budaya</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-primary text-sm py-2 px-4"
              >
                Pelajari
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Seruit" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Seruit</h3>
              <p className="text-text-light leading-relaxed mb-4">Nikmati hidangan ikan bakar khas Lampung dengan sambal tempoyak yang lezat</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-primary text-sm py-2 px-4"
              >
                Cicipi
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Gulai Taboh" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Gulai Taboh</h3>
              <p className="text-text-light leading-relaxed mb-4">Cicipi gulai ikan khas Lampung dengan kuah kuning yang gurih dan aromatik</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-primary text-sm py-2 px-4"
              >
                Cicipi
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Kerupuk Lampung" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Kerupuk Lampung</h3>
              <p className="text-text-light leading-relaxed mb-4">Temukan berbagai jenis kerupuk khas Lampung yang renyah dan lezat</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-primary text-sm py-2 px-4"
              >
                Cicipi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LanguagesPage;