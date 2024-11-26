import React from 'react';
import { CheckCircle, XCircle, TrendingUp, Clock, Puzzle, Monitor } from 'lucide-react';

const comparisons = [
  {
    feature: 'Coût Total (3 ans)',
    odoo: '60% moins cher',
    others: '2-3x plus cher',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    feature: 'Temps de Déploiement',
    odoo: '2-3 mois',
    others: '6-12 mois',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80'
  },
  {
    feature: 'Intégration',
    odoo: 'Native et complète',
    others: 'Complexe et coûteuse',
    icon: Puzzle,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80'
  },
  {
    feature: 'Interface Utilisateur',
    odoo: 'Moderne et intuitive',
    others: 'Complexe et datée',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80'
  }
];

export default function CompetitiveEdge() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Odoo vs Autres Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez pourquoi Odoo est le meilleur choix pour votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <item.icon className="h-6 w-6 text-[#3f6f97]" />
                  <h3 className="ml-2 text-lg font-semibold text-gray-900">
                    {item.feature}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-2 text-gray-600">Odoo: {item.odoo}</span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="ml-2 text-gray-600">Autres: {item.others}</span>
                  </div>
                </div>
              </div>
              <div className="h-48 relative">
                <img
                  src={item.image}
                  alt={item.feature}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}