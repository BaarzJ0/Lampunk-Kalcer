import React from 'react';

const VideoPage = () => {
  const handleCardClick = () => {
    alert('Fitur detail akan segera tersedia!');
  };

  return (
    <>
      <h1
        className="text-4xl font-extrabold text-black mt-10 text-center"
        style={{ fontFamily: "'Cinzel', serif", letterSpacing: 1, color: "#810d11ff" }}
      >
        WHAT IS LAMPUNG?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/example1"
              frameBorder="0"
              allowFullScreen
              title="Festival Sekura Lampung"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">
              Festival Sekura Lampung
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Saksikan keunikan Festival Sekura yang menjadi ikon budaya Lampung
            </p>
            <button
              onClick={handleCardClick}
              className="btn btn-primary text-sm py-2 px-4"
            >
              Tonton Sekarang
            </button>
          </div>
        </div>

        <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/example2"
              frameBorder="0"
              allowFullScreen
              title="Tari Sembah Lampung"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">
              Tari Sembah Lampung
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Nikmati keindahan Tari Sembah yang menggambarkan sikap hormat masyarakat Lampung
            </p>
            <button
              onClick={handleCardClick}
              className="btn btn-primary text-sm py-2 px-4"
            >
              Tonton Sekarang
            </button>
          </div>
        </div>

        <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/example3"
              frameBorder="0"
              allowFullScreen
              title="Kuliner Khas Lampung"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">
              Kuliner Khas Lampung
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Jelajahi kelezatan kuliner khas Lampung dalam video dokumenter ini
            </p>
            <button
              onClick={handleCardClick}
              className="btn btn-primary text-sm py-2 px-4"
            >
              Tonton Sekarang
            </button>
          </div>
        </div>

        <div className="content-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/example4"
              frameBorder="0"
              allowFullScreen
              title="Wisata Alam Lampung"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-playfair font-bold text-dark-red mb-3">
              Wisata Alam Lampung
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Temukan keindahan alam Lampung dari pantai hingga gunung dalam video ini
            </p>
            <button
              onClick={handleCardClick}
              className="btn btn-primary text-sm py-2 px-4"
            >
              Tonton Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
