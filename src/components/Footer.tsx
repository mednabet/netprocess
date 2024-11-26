import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/netprocess', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/netprocess', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/netprocess', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/netprocess', label: 'Instagram' }
];

const quickLinks = [
  { name: 'Accueil', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Modules', href: '#modules' },
  { name: 'À propos', href: '#features' },
  { name: 'Contact', href: '#contact' }
];

const services = [
  'Intégration Odoo',
  'Formation',
  'Support Technique',
  'Développement sur mesure',
  'Migration de données'
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3f6f97] to-[#2d5270]">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold text-white">
                <span>NET</span>
                <span className="text-[#9dc43c]">PROCESS</span>
              </span>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Expert en solutions Odoo au Maroc. Plus de 15 ans d'expertise dans la transformation digitale des entreprises marocaines.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>197, Residence Le succès Bd La Résistance 6 ème étage, Casablanca</span>
              </li>
              <li>
                <a 
                  href="tel:+212661550618" 
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +212 661 550618
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@netprocess.ma"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  contact@netprocess.ma
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3" />
                Lun - Ven: 9h00 - 18h00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} NETPROCESS. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}