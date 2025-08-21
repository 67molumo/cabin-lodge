// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trees, Home as HomeIcon, Mountain, ChevronDown } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-light">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/mokota17.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-light px-4 max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Welcome to <br />
              <span className="text-accent">The Cabin Lodge Mokotakoti</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90"
            >
              Escape to nature in our serene forest cabins. 
              Peace, comfort, and breathtaking views await.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 space-x-0 sm:space-x-6"
            >
              <Link to="/cabins" className="btn-primary px-6 py-2 text-lg">
                Explore Cabins
              </Link>
              <Link to="/contact" className="btn-secondary px-6 py-2 text-lg">
                Book Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-light opacity-70" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Serene Location',
                  desc: 'Nestled in the heart of nature, surrounded by forests and fresh air.',
                  icon: Trees,
                },
                {
                  title: 'Luxury Cabins',
                  desc: 'Fully equipped cabins with modern comforts and rustic charm.',
                  icon: HomeIcon,
                },
                {
                  title: 'Unforgettable Views',
                  desc: 'Panoramic views of mountains, forests, and starry night skies.',
                  icon: Mountain,
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-5 rounded-xl bg-white shadow group hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Home;
