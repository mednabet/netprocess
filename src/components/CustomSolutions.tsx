import React from 'react';
import { Database, BarChart2, Network } from 'lucide-react';

const solutions = [
  {
    title: 'GRAIN PROD',
    description: 'Solution intégrée pour la gestion de la production agricole et agroalimentaire au Maroc.',
    features: [
      'Traçabilité complète de la production',
      'Gestion des lots et de la qualité',
      'Suivi des coûts de production',
      'Planification des ressources'
    ],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80'
  },
  {
    title: 'SYNERGY',
    description: 'Plateforme collaborative pour l\'optimisation des processus métiers et la gestion de projets.',
    features: [
      'Gestion de projets avancée',
      'Workflows personnalisables',
      'Tableaux de bord en temps réel',
      'Intégration complète avec Odoo'
    ],
    icon: Network,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    title: 'DATABRIDGE',
    description: 'Solution de Business Intelligence pour l\'analyse et la visualisation des données d\'entreprise.',
    features: [
      'Analyses prédictives',
      'Rapports personnalisés',
      'Intégration multi-sources',
      'KPIs en temps réel'
    ],
    icon: BarChart2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
];

export default function CustomSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Solutions NETPROCESS
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions métiers développées sur mesure pour le marché marocain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <solution.icon className="h-6 w-6 text-[#3f6f97]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#9dc43c] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            En savoir plus sur nos solutions
          </button>
        </div>
      </div>
    </section>
  );
}