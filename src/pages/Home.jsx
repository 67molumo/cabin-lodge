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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Image from local public folder */}
          <div
            className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/mokota17.jpg')", // ✅ Points to public/images/mokota17.jpg
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-light px-4"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Welcome to <br />
              <span className="text-accent">The Cabin Lodge Mokotakoti</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Escape to nature in our serene forest cabins. 
              Peace, comfort, and breathtaking views await.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                to="/cabins"
                className="btn-primary inline-block text-lg mr-6"
              >
                Explore Cabins
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-block text-lg"
              >
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
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-full overflow-hidden">
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
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
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
