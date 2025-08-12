"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "/gpsb.svg",
  "/camra2.svg",
  "/gpsb.svg",
  "/camra2.svg",
  "/gpsb.svg",
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
  key={currentIndex}
  className="absolute inset-0 min-h-28 bg-cover bg-bottom md:bg-center transition-all duration-1000 ease-in-out"
  style={{
    backgroundImage: `url(${images[currentIndex]})`,
  }}
/>


      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl sm:text-9xl md:text-6xl lg:text-7xl font-extrabold mb-1 drop-shadow-2xl leading-tight tracking-wide">
          Welcome to <span className="text-orange-500">Expert Solution</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-300 max-w-2xl mb-2">
          Complete Security & Tracking Solutions for Your Business
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-6">
          GPS Tracking | CCTV Cameras | HD Cameras | P2M2 Networking
        </p>
        <Link href="/contact">
          <button className="bg-orange-500/90 hover:bg-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg md:text-xl shadow-xl transition-transform hover:scale-105 backdrop-blur-md border border-white/20">
            Contact Now
          </button>
        </Link>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full z-20 backdrop-blur-md transition border border-white/30"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full z-20 backdrop-blur-md transition border border-white/30"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === currentIndex
                ? "bg-orange-500 scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
