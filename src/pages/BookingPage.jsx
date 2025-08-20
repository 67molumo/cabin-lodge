// src/pages/BookingPage.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Home, 
  Shield, 
  Phone, 
  Leaf, 
  Eye,
  Users,
  DollarSign
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BookingForm from '../components/booking/BookingForm';
import { useToast } from '../hooks/useToast';

const BookingPage = () => {
  const showToast = useToast();
  const [cabinId] = useState(1);
  const [cabinTitle] = useState('Forest View Cabin');

  // Simulated cabin data (in real app, fetch from API)
  const cabin = {
    title: 'Forest View Cabin',
    description: 'Nestled among pine trees with panoramic views of the valley. Perfect for couples and small families seeking peace and nature.',
    price: 180,
    capacity: 4,
    amenities: ['WiFi', 'Fireplace', 'Private Balcony', 'Mountain View', 'Kitchenette', 'Heated Floors'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  };

  const whyBookReasons = [
    {
      icon: Home,
      title: 'Authentic Nature Stay',
      description: 'No city noise, just birdsong and fresh air.'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'No payment now. Confirm later.'
    },
    {
      icon: Phone,
      title: 'Personal Service',
      description: 'We reply within 24 hours.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Solar-powered, low-impact design.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-light">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${cabin.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-lodge"></div>

          <div className="container mx-auto px-4 relative z-10 text-light text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Book <span className="text-accent">{cabin.title}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto opacity-90"
            >
              {cabin.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center justify-center gap-2"
            >
              <DollarSign className="h-6 w-6 text-accent" />
              <span className="text-3xl font-bold text-accent">{cabin.price}</span>
              <span className="text-lg opacity-80"> / night</span>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-cabin"
                id="booking-form-anchor"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Your Booking Details</h2>
                <p className="text-gray-600 mb-6">
                  Fill in your details and we'll confirm your stay within 24 hours.
                </p>
                <BookingForm
                  cabinId={cabinId}
                  cabinTitle={cabinTitle}
                  onSuccess={() => {
                    showToast('Booking request sent! We will contact you shortly.', 'success');
                  }}
                />
              </motion.div>

              {/* Right: Info & Trust */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Cabin Highlights */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Cabin Features</h3>
                  <ul className="space-y-3">
                    {cabin.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 text-accent mr-2" />
                    <span>Max guests: <strong className="text-primary">{cabin.capacity}</strong></span>
                  </div>
                </div>

                {/* Why Book With Us */}
                <div className="bg-gradient-to-br from-secondary/10 to-primary/5 p-6 rounded-xl border border-secondary/20">
                  <h3 className="text-xl font-semibold text-primary mb-6">Why Book With Us?</h3>
                  <ul className="space-y-4">
                    {whyBookReasons.map((reason, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">
                          <reason.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <span className="font-semibold text-primary">{reason.title}</span>
                          <span className="text-gray-600"> – {reason.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nature Tip */}
                <div className="bg-accent/10 p-6 rounded-xl border border-accent/20 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Nature Tip</h4>
                  <p className="text-sm text-gray-600">
                    Wake up at dawn to hear the forest come alive. Look for colobus monkeys in the treetops!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-lodge text-light text-center">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Escape?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto opacity-90 mb-8"
            >
              Disconnect from the world and reconnect with nature. Your peaceful retreat awaits.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-3"
              onClick={() => document.querySelector('#booking-form-anchor')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;