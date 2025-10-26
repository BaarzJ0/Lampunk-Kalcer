import React from 'react';

const TestMap = () => {
  console.log('TestMap component is rendering');
  
  return (
    <div className="bg-red-500 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-4">Test Map Component</h3>
      <p className="text-white">Jika Anda melihat ini, komponen berfungsi!</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <button className="bg-white text-red-500 py-2 px-4 rounded hover:bg-gray-100">
          Lampung Utara
        </button>
        <button className="bg-white text-red-500 py-2 px-4 rounded hover:bg-gray-100">
          Lampung Timur
        </button>
        <button className="bg-white text-red-500 py-2 px-4 rounded hover:bg-gray-100">
          Lampung Selatan
        </button>
        <button className="bg-white text-red-500 py-2 px-4 rounded hover:bg-gray-100">
          Lampung Barat
        </button>
      </div>
    </div>
  );
};

export default TestMap;
