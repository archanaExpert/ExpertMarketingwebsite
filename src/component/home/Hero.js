'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const images = [
  '/gpsb.svg',
  '/camra2.svg',
  '/gpsb.svg',
   '/camra2.svg',
  '/gpsb.svg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh]   overflow-hidden">
    
     <div
  className="w-full h-full bg-cover bg-no-repeat bg-center transition-all duration-1000"
  style={{ backgroundImage: `url(${images[currentIndex]})` }}
></div>

      <div className="absolute inset-0 bg-blue-900/50 z-10" />

   
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center ">
        <h1 className="text-2xl md:text-6xl   font-bold ">Welcome to Expert Solution</h1>
        <p className=" text-orange-300 md:text-2xl max-w-2xl">
         Complete Security & Tracking Solutions for Your Business
        </p>
        <p className=" md:text-2xl max-w-2xl">GPS Tracking | CCTV Cameras |HD Cameras| P2M2 Networking</p>
         <Link href="/contact">
        <button className='bg-orange-400 p-2 m-4 rounded-2xl'>Contact Now</button>
        </Link>
       
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-20"
      >
        ❯
      </button>


      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Hero;
