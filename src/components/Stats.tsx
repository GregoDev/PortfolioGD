import React from 'react';
import { Code2, Users, Trophy, Clock } from 'lucide-react';

const stats = [
  {
    number: '150+',
    label: 'Projets Complétés',
    icon: Code2,
  },
  {
    number: '80+',
    label: 'Clients Satisfaits',
    icon: Users,
  },
  {
    number: '15+',
    label: 'Récompenses',
    icon: Trophy,
  },
  {
    number: '5+',
    label: "Années d'Expérience",
    icon: Clock,
  },
];

export default function Stats() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-[#FF4500] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}