import React, { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Youssef Benjelloun',
    role: 'Directeur Général',
    company: 'Marwa (Groupe Aksal)',
    image: '/testimonials/youssef.jpg',
    content: 'Odoo nous a permis de gérer efficacement plus de 85 points de vente au Maroc. La solution s\'est avérée particulièrement performante pour notre gestion de stock et notre comptabilité.',
    rating: 5
  },
  {
    name: 'Karim Tazi',
    role: 'Directeur des Systèmes d\'Information',
    company: 'Richbond Group',
    image: '/testimonials/karim.jpg',
    content: 'Nous utilisons Odoo depuis 2018 pour gérer notre production industrielle. Le système MRP d\'Odoo nous aide à optimiser notre chaîne de production et à réduire nos coûts de 30%.',
    rating: 5
  },
  {
    name: 'Nadia El Fassi',
    role: 'Responsable Financier',
    company: 'HPS Worldwide',
    image: '/testimonials/nadia.jpg',
    content: 'La migration vers Odoo a transformé notre gestion financière. Le système est parfaitement adapté aux normes comptables marocaines et nous permet de gérer efficacement nos opérations internationales.',
    rating: 5
  }
];

export default function Testimonials() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Témoignages Clients
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className={`h-12 w-12 rounded-full overflow-hidden ${
                  imageErrors[testimonial.name] 
                    ? 'flex items-center justify-center text-lg font-semibold text-gray-700 bg-gray-200' 
                    : 'bg-gray-100'
                }`}>
                  {imageErrors[testimonial.name] ? (
                    <span>{getInitials(testimonial.name)}</span>
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      onError={() => handleImageError(testimonial.name)}
                    />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}