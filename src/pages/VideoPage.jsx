import React from 'react';

const VideoPage = () => {
  // Data dengan youtubeId
  const videos = [
    { id: 1, title: 'VIDEO 1', youtubeId: "S9M-1t9Be9U" },
    { id: 2, title: 'VIDEO 2', youtubeId: "oPjREWreEhE" },
    { id: 3, title: 'VIDEO 3', youtubeId: "hh8yLJyZb3o" },
    { id: 4, title: 'VIDEO 4', youtubeId: "CE5eKcCJlcU" },
    { id: 5, title: 'VIDEO 5', youtubeId: "ZWMJYDHkMCk" },
    { id: 6, title: 'VIDEO 6', youtubeId: "GaqJF8d7uFo" },
    { id: 7, title: 'VIDEO 7', youtubeId: "POG2GZf9_jM" },
    { id: 8, title: 'VIDEO 8', youtubeId: "6hPpa0K9sCk" },
    { id: 9, title: 'VIDEO 9', youtubeId: "cVZZZWGoDpQ" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Judul Atas */}
      <div className="pt-12 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-3xl sm:text-4xl md:text-4xl font-bold uppercase tracking-wider text-[#810d11] mb-4 text-center"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            LAMPUNG KALCER VIDEO
          </h1>
          <p className="text-gray-600 text-lg text-center">
            Jelajahi keindahan dan budaya Lampung melalui video-video menarik
          </p>
        </div>
      </div>

      {/* FULL WIDTH GOLD */}
      <div className="w-full bg-[#E2D893] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group relative">
                {/* Responsive iframe */}
                <div className="relative w-full aspect-[16/9] bg-black rounded-lg overflow-hidden border-2 border-white shadow-sm">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full h-full"
                  />
                  {/* Label Video */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-1">
                    <p className="text-black font-bold text-sm uppercase">
                      {video.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>

      {/* White Space Section Bawah */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </div>
    </div>
  );
};

export default VideoPage;
