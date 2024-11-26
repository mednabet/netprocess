import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const menuItems = [
  { name: 'Accueil', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#modules' },
  { name: 'Avantages', href: '#features' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/212661550618";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Bar - Always visible on desktop */}
      <div className={`hidden lg:block py-2 ${
        scrolled ? 'bg-[#3f6f97]/90 backdrop-blur-sm' : 'bg-[#3f6f97]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a 
              href="mailto:contact@netprocess.ma" 
              className="text-sm text-white hover:text-[#9dc43c]"
            >
              contact@netprocess.ma
            </a>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-white">Lun - Ven: 9h00 - 18h00</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-white hover:text-[#9dc43c]"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp
              </a>
              <a
                href="tel:+212661550618"
                className="flex items-center text-sm text-white hover:text-[#9dc43c]"
              >
                <Phone className="h-4 w-4 mr-1" />
                +212 661 550618
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold tracking-tight">
              <span className={scrolled ? 'text-[#3f6f97]' : 'text-white'}>NET</span>
              <span className="text-[#9dc43c]">PROCESS</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base font-medium ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } hover:text-[#9dc43c] transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
            <button className="btn-secondary">
              Demander une démo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-[#9dc43c]`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3f6f97] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-base font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="tel:+212661550618"
                className="flex items-center px-3 py-2 text-base font-medium text-white bg-[#3f6f97] rounded-md hover:bg-[#2d5270]"
              >
                <Phone className="h-5 w-5 mr-2" />
                +212 661 550618
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </nav>
  );
}