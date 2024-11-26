import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Bureau moderne avec équipement informatique"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f6f97]/90 to-[#714b67]/90 z-10" />
      
      <div className="relative z-20 text-white text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Expert Odoo au Maroc | Solutions ERP Intégrées
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-100">
          Transformez votre entreprise avec NETPROCESS, leader de l'intégration Odoo au Maroc. 
          Solutions ERP personnalisées pour PME et grandes entreprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Demander une démo gratuite
          </button>
          <button className="btn-secondary">
            Découvrir nos services
          </button>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "NETPROCESS Odoo ERP",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "MAD",
            "availability": "https://schema.org/InStock"
          },
          "provider": {
            "@type": "Organization",
            "name": "NETPROCESS",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Casablanca",
              "addressCountry": "MA"
            }
          }
        })}
      </script>
    </div>
  );
}