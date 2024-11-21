import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400">Discutons de votre projet</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-[#FF4500] p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Téléphone</h3>
                <p className="text-gray-400">+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#FF4500] p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Email</h3>
                <p className="text-gray-400">contact@thomasdubois.dev</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#FF4500] p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Adresse</h3>
                <p className="text-gray-400">Paris, France</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="bg-white/5 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
              />
            </div>
            <input
              type="text"
              placeholder="Sujet"
              value={formData.sujet}
              onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
              className="w-full bg-white/5 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
            />
            <button
              type="submit"
              className="w-full bg-[#FF4500] text-white px-6 py-3 rounded-lg hover:bg-[#FF4500]/90 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Envoyer</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}