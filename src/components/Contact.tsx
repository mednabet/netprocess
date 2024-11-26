import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const contactInfo = {
  address: '197, Residence Le succès Bd La Résistance 6 ème étage, Casablanca, Maroc',
  phone: '+212 661 550618',
  email: 'contact@netprocess.ma',
  hours: 'Lun - Ven: 9h00 - 18h00'
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message envoyé avec succès!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-gray-50 py-24">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Prêt à transformer votre entreprise ? Contactez-nous dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#3f6f97] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">{contactInfo.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#3f6f97] flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone}`} className="ml-3 text-gray-700 hover:text-[#3f6f97]">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#3f6f97] flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="ml-3 text-gray-700 hover:text-[#3f6f97]">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-[#3f6f97] flex-shrink-0" />
                  <span className="ml-3 text-gray-700">{contactInfo.hours}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9401.28815871695!2d-7.614040417679138!3d33.58305403577746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3dca39eb36b%3A0x62dcda5a8e9b313e!2sNETPROCESS!5e0!3m2!1sfr!2sma!4v1697558121945!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NETPROCESS Location"
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3f6f97] focus:ring-[#3f6f97] sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3f6f97] focus:ring-[#3f6f97] sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3f6f97] focus:ring-[#3f6f97] sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3f6f97] focus:ring-[#3f6f97] sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3f6f97] hover:bg-[#2d5270] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6f97] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}