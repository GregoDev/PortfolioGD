import React from 'react';
import { FileDown, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Thomas Dubois
                <span className="block text-[#FF4500]">Développeur Full Stack</span>
              </h1>
              <p className="text-xl text-gray-400">
                Création d'applications web modernes et performantes avec une expertise en React et Node.js
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-[#FF4500] text-white px-6 py-3 rounded-lg hover:bg-[#FF4500]/90 transition-colors">
                <FileDown className="h-5 w-5" />
                <span>Télécharger CV</span>
              </button>
              <button className="flex items-center space-x-2 border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                <Briefcase className="h-5 w-5" />
                <span>Mes Projets</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Portrait professionnel"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4500]/20 to-transparent rounded-2xl" />
            </div>
            <div className="absolute inset-0 -rotate-6 border-2 border-[#FF4500] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}