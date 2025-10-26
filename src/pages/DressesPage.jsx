import React from 'react';

const DressesPage = () => {
    const handleCardClick = () => {
      alert('Fitur detail akan segera tersedia!');
    };
  
    return (
      <div className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-red mb-8 relative inline-block">
          Traditional Dresses
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gold"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Siger" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Siger</h3>
              <p className="text-text-light leading-relaxed mb-4">Mahkota tradisional Lampung yang menjadi simbol kebesaran dan keagungan wanita Lampung</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-secondary text-sm py-2 px-4"
              >
                Lihat Detail
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1590766940554-153a0b48a220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Tapis" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Tapis</h3>
              <p className="text-text-light leading-relaxed mb-4">Kain tenun tradisional Lampung dengan motif kaya makna dan filosofi</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-secondary text-sm py-2 px-4"
              >
                Lihat Detail
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1622446278194-7368c6e1d962?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pakaian Adat Pria" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Pakaian Adat Pria</h3>
              <p className="text-text-light leading-relaxed mb-4">Kenali pakaian adat pria Lampung yang terdiri dari baju pangsi, selempang, dan ikat kepala</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-secondary text-sm py-2 px-4"
              >
                Lihat Detail
              </button>
            </div>
          </div>
          
          <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Aksesoris" 
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Aksesoris Tradisional</h3>
              <p className="text-text-light leading-relaxed mb-4">Temukan berbagai aksesoris tradisional Lampung seperti gelang, kalung, dan pending</p>
              <button 
                onClick={handleCardClick}
                className="btn btn-secondary text-sm py-2 px-4"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DressesPage;