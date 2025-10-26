import React from 'react';
import bajuadat1 from "../assets/Dresses/bajuadat1.png";
import bajuadat2 from "../assets/Dresses/bajuadat2.png";
import bajuadat3 from "../assets/Dresses/bajuadat3.png";
import bajuadat4 from "../assets/Dresses/bajuadat4.png";

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
            <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all lg:row-span-2">
            <img 
              src={bajuadat1} 
              alt="Siger" 
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Siger</h3>
              <p className="text-text-light leading-relaxed mb-4">
                Siger adalah mahkota keemasan bertingkat yang menjadi simbol keagungan wanita Lampung. Dengan 9 lekukan (Pepadun) atau 7 lekukan (Saibatin), mahkota ini melambangkan filosofi Piil Pesenggiri menjaga harga diri dan kehormatan. Siger kini menjadi ikon Provinsi Lampung yang diabadikan dalam Menara Siger sebagai simbol kebanggaan masyarakat.
              </p>
            </div>
          </div>
          
            <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all lg:row-span-2">
            <img 
              src={bajuadat2}
              alt="Tapis" 
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Tapis</h3>
              <p className="text-text-light leading-relaxed mb-4">
                Kain Tapis adalah tenun tradisional Lampung dengan sulaman benang emas dan perak yang memiliki motif-motif bermakna filosofis. Motif Perahu melambangkan perjalanan hidup, Pucuk Rebung simbol kemakmuran, dan motif Burung mencerminkan ketinggian derajat. Kain ini berfungsi sebagai lambang kesucian, warisan pusaka, dan penanda status sosial dalam masyarakat adat Lampung.
              </p>
            </div>
          </div>
            
            <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all lg:row-span-2">
            <img 
              src={bajuadat3} 
              alt="Pakaian Adat Pria" 
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Pakaian Adat Pria</h3>
              <p className="text-text-light leading-relaxed mb-4">
                Pakaian adat pria Lampung terdiri dari Kaway (baju putih) yang melambangkan kesucian, Sarung Tumpal dari tenun emas, Selikap Jungsarat sebagai selempang bahu, dan Kikat Manuk Meghem sebagai penutup kepala. Dilengkapi dengan Keris yang diselipkan di pinggang, busana ini menciptakan sosok pria Lampung yang gagah, berwibawa, dan berkedudukan tinggi dalam masyarakat adat.
              </p>
            </div>
          </div>
            
            <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all lg:col-span-3">
            <img 
              src={bajuadat4}
              alt="Aksesoris" 
              className="w-full h-80 lg:h-115 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 lg:p-8">
              <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">Aksesoris Tradisional</h3>
              <p className="text-text-light leading-relaxed mb-4">
                Pakaian adat pria Lampung terdiri dari Kaway (baju putih) yang melambangkan kesucian, Sarung Tumpal dari tenun emas, Selikap Jungsarat sebagai selempang bahu, dan Kikat Manuk Meghem sebagai penutup kepala. Dilengkapi dengan Keris yang diselipkan di pinggang, busana ini menciptakan sosok pria Lampung yang gagah, berwibawa, dan berkedudukan tinggi dalam masyarakat adat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DressesPage;