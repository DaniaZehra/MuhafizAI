'use client';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-32 text-center relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
            Realtime Violence & Theft Detection System
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered security solution that monitors CCTV footage in real-time, 
            instantly detecting suspicious activities and alerting relevant parties
          </p>
          <button
            onClick={scrollToDemo}
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/25 transform"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;