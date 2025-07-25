'use client';
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          The Security Challenge
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Security has become a major global concern. Manual evaluation of security cameras 
              is inefficient and time-consuming due to its tedious and repetitive nature. 
              Traditional systems are not cost-effective in the Pakistani context and often 
              lack cultural adaptation.
            </p>
            <p>
              Our solution transforms existing CCTVs into intelligent guardians, using advanced 
              deep learning to automatically detect violence and theft, providing instant alerts 
              and legal evidence collection.
            </p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-8xl animate-pulse">
              🛡️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;