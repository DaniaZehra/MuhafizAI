'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black/50 border-t border-purple-500/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Muhafiz AI</h4>
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing security with intelligent surveillance technology tailored for modern needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@securevision.ai</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>Violence Detection</p>
              <p>Theft Detection</p>
              <p>Security Analytics</p>
              <p>Custom Solutions</p>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-500/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Muhafiz AI. All rights reserved. Protecting communities through intelligent surveillance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
