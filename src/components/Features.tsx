import React from 'react';
import { Globe2, Users, Languages } from 'lucide-react';

const features = [
  {
    title: 'Solution Internationale',
    description: 'Odoo est utilisé dans plus de 120 pays et traduit en plus de 50 langues.',
    icon: Globe2
  },
  {
    title: 'Support Local',
    description: 'Une équipe d\'experts basée au Maroc pour vous accompagner.',
    icon: Users
  },
  {
    title: 'Multi-langues',
    description: 'Interface disponible en arabe, français et anglais.',
    icon: Languages
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
              Pourquoi choisir NETPROCESS ?
            </h2>
            
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3f6f97] text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
                alt="Interface Odoo"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#714b67] text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Années d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}