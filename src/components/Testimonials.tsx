import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Laurent',
    role: 'CEO, TechStart',
    content: 'Un développeur exceptionnel qui a su transformer notre vision en réalité. Le résultat dépasse nos attentes.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Pierre Dubois',
    role: 'Directeur Marketing, InnovCorp',
    content: 'La qualité du travail et le professionnalisme sont remarquables. Je recommande vivement ses services.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Témoignages</h2>
          <p className="text-gray-400">Ce que disent mes clients</p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-[#FF4500]/20" />
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FF4500] p-2 rounded-full text-white hover:bg-[#FF4500]/90 transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FF4500] p-2 rounded-full text-white hover:bg-[#FF4500]/90 transition-colors">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}