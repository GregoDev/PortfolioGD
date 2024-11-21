import React, { useState } from 'react';
import { Code, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-[#FF4500]" />
            <span className="text-white font-bold text-xl">Coder</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#temoignages" className="text-gray-300 hover:text-white transition-colors">Témoignages</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-[#FF4500] text-white px-4 py-2 rounded-lg hover:bg-[#FF4500]/90 transition-colors">
              Rejoignez-nous
            </button>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm`}>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#temoignages" className="text-gray-300 hover:text-white transition-colors">Témoignages</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}