// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { sendMessage } from '../services/api';
import { useToast } from '../hooks/useToast';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const showToast = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Mokotakoti Forest Reserve, Tanzania',
      link: 'https://maps.google.com/?q=Mokotakoti+Forest+Reserve+Tanzania'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+255 712 345 678',
      link: 'tel:+255712345678'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@cabinlodge.co.tz',
      link: 'mailto:info@cabinlodge.co.tz'
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: 'Mon–Sun: 8AM–8PM',
      link: null
    }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: '#', 
      color: 'hover:text-pink-500' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: '#', 
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: '#', 
      color: 'hover:text-blue-400' 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-lodge text-light">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in <span className="text-accent">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto opacity-90"
            >
              Have questions about your stay? We'd love to hear from you. 
              Send us a message, and we'll get back within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-primary">We'd Love to Hear From You</h2>
                <p className="text-gray-600 text-lg">
                  Whether you're planning a romantic getaway, a family retreat, or a nature adventure, 
                  our team is here to help you create unforgettable memories.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-gray-600 hover:text-accent transition-colors"
                          >
                            {item.detail}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.detail}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="pt-6 border-t border-gray-200"
                >
                  <h3 className="font-semibold text-primary mb-4">Follow Our Journey</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 ${social.color} group`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-cabin"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                <ContactForm onSuccess={() => {
                  showToast('Message sent! We will reply soon.', 'success');
                }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Find Us in Mokotakoti</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of the Mokotakoti Forest Reserve, our lodge is easily accessible 
                while maintaining its secluded, peaceful atmosphere.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-cabin h-96 w-full relative"
            >
              <iframe
                title="Cabin Lodge Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375157.6545445879!2d39.0788508!3d-6.1633392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c139c8c7c5e0d%3A0x7a8c8c8c8c8c8c8c!2sMokotakoti%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              
              {/* Map Overlay for Loading State */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center opacity-0 pointer-events-none">
                <MapPin className="h-12 w-12 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;