import React from 'react';
import { 
  CheckCircle, 
  BarChart2, 
  Globe2, 
  Shield, 
  Users, 
  Smartphone,
  Cloud,
  Settings
} from 'lucide-react';

const advantages = [
  {
    title: 'Solution Tout-en-Un',
    description: 'Plus de 30 applications métiers intégrées couvrant tous vos besoins : CRM, Ventes, Achats, Comptabilité, RH, et plus encore.',
    icon: CheckCircle,
    stats: '10000+ entreprises',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
  },
  {
    title: 'ROI Rapide',
    description: 'Retour sur investissement moyen de 200% la première année grâce à l\'automatisation et l\'optimisation des processus.',
    icon: BarChart2,
    stats: '200% ROI moyen',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    title: 'Conformité Locale',
    description: 'Entièrement adapté aux normes comptables et fiscales marocaines (DGI, liasse fiscale, TVA, IR, etc.).',
    icon: Shield,
    stats: '100% conforme',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Multi-Sociétés',
    description: 'Gérez plusieurs entreprises dans une seule instance avec une consolidation automatique des données.',
    icon: Globe2,
    stats: 'Illimité',
    image: 'https://images.unsplash.com/photo-1512138664757-360e0aad5132?auto=format&fit=crop&q=80'
  },
  {
    title: 'Applications Mobile & Web',
    description: 'Accédez à vos données depuis n\'importe où avec les applications mobiles natives iOS et Android.',
    icon: Smartphone,
    stats: '24/7 accès',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Cloud Sécurisé',
    description: 'Infrastructure cloud haute disponibilité avec backups automatiques et sécurité enterprise-grade.',
    icon: Cloud,
    stats: '99.9% uptime',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
  },
  {
    title: 'Personnalisation Avancée',
    description: 'Adaptez Odoo à vos besoins spécifiques avec des modules personnalisés et des workflows sur mesure.',
    icon: Settings,
    stats: '100% flexible',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Formation & Support',
    description: 'Formation complète en arabe et français, avec support technique local 24/7 par notre équipe d\'experts.',
    icon: Users,
    stats: 'Support 24/7',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  }
];

export default function OdooAdvantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Les Avantages d'Odoo
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une solution complète pour votre transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-bold">{advantage.stats}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <advantage.icon className="h-6 w-6 text-[#3f6f97]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            Découvrir toutes les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
}