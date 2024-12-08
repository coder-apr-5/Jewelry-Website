import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Timeless Elegance, Modern Design
          </h1>
          <p className="text-xl text-white mb-8">
            Discover our collection of handcrafted jewelry pieces
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};