import React from 'react';
import { Code, BookOpen, MessageSquare, Activity } from 'lucide-react';

const services = [
  {
    title: 'Intégration Odoo Personnalisée',
    description: 'Implémentation sur mesure d\'Odoo adaptée aux spécificités du marché marocain. Expertise locale et support continu.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Formation Odoo Certifiée',
    description: 'Formations complètes en français et arabe pour vos équipes. Certification officielle Odoo et support pédagogique adapté.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Support Technique 24/7',
    description: 'Assistance technique continue et maintenance de votre système Odoo. Équipe basée au Maroc pour une réactivité maximale.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
  },
  {
    title: 'Développement Modules Spécifiques',
    description: 'Création de modules personnalisés pour répondre aux exigences légales et fiscales marocaines. Solutions adaptées à votre secteur.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Services Odoo au Maroc
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Solutions complètes de gestion d'entreprise adaptées au marché marocain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NETPROCESS",
          "description": "Expert Odoo au Maroc - Solutions ERP, formation et support technique",
          "url": "https://netprocess.ma",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "197, Residence Le succès Bd La Résistance 6 ème étage",
            "addressLocality": "Casablanca",
            "addressCountry": "MA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+212661550618",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.linkedin.com/company/netprocess",
            "https://www.facebook.com/netprocess"
          ]
        })}
      </script>
    </section>
  );
}