import React from 'react';
import { 
  BarChart2, 
  Users, 
  ShoppingCart, 
  Warehouse, 
  Calculator, 
  Building2,
  FileText,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const modules = [
  {
    title: 'Comptabilité Marocaine',
    description: 'Plan comptable marocain, liasse fiscale, TVA, IR, états de synthèse conformes aux normes OMPIC.',
    features: [
      'Déclarations TVA automatisées',
      'Liasse fiscale normalisée',
      'États financiers réglementaires',
      'Gestion des retenues à la source'
    ],
    icon: Calculator,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Gestion RH & Paie',
    description: 'Gestion complète de la paie et RH selon le code du travail marocain.',
    features: [
      'Bulletins de paie conformes',
      'CNSS & AMO intégrées',
      'Gestion des congés légaux',
      'IR sur salaires automatisé'
    ],
    icon: Users,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80'
  },
  {
    title: 'Gestion Commerciale',
    description: 'Solution complète pour la gestion des ventes et achats au Maroc.',
    features: [
      'Devis et factures en arabe',
      'Gestion des bons de commande',
      'Suivi des paiements clients',
      'Gestion des remises commerciales'
    ],
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Gestion des Stocks',
    description: 'Contrôle optimal des stocks et de la logistique.',
    features: [
      'Inventaire multi-dépôts',
      'Traçabilité des lots',
      'Gestion des numéros de série',
      'Valorisation des stocks'
    ],
    icon: Warehouse,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80'
  },
  {
    title: 'CRM & Ventes',
    description: 'Suivi commercial et gestion de la relation client.',
    features: [
      'Pipeline de ventes',
      'Suivi des opportunités',
      'Gestion des contrats',
      'Rapports commerciaux'
    ],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    title: 'Immobilisations',
    description: 'Gestion des actifs et amortissements selon les normes marocaines.',
    features: [
      'Plans d\'amortissement',
      'Réévaluation des actifs',
      'Cession d\'immobilisations',
      'États réglementaires'
    ],
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    title: 'Gestion Documentaire',
    description: 'Archivage et suivi des documents légaux et commerciaux.',
    features: [
      'Classement automatique',
      'Workflow de validation',
      'Archivage numérique',
      'Recherche avancée'
    ],
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80'
  },
  {
    title: 'Business Intelligence',
    description: 'Tableaux de bord et analyses pour la prise de décision.',
    features: [
      'KPIs personnalisés',
      'Rapports automatisés',
      'Analyses prédictives',
      'Export multi-formats'
    ],
    icon: BarChart2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
];

export default function OdooModules() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Modules Odoo Adaptés au Maroc
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Solutions métiers complètes et conformes à la réglementation marocaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <module.icon className="h-6 w-6 text-[#3f6f97]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#9dc43c] mr-2 flex-shrink-0" />
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
            Demander une démonstration
          </button>
        </div>
      </div>
    </section>
  );
}