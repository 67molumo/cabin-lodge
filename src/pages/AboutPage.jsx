// src/pages/AboutPage.jsx
import { motion } from 'framer-motion';
import { 
  TreePine, 
  HandHeart, 
  Recycle, 
  Sunrise, 
  Flame, 
  Leaf, 
  UtensilsCrossed,
  Calendar
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  const coreValues = [
    {
      icon: TreePine,
      title: 'Respect for Nature',
      description: 'We protect the forest, use solar energy, and minimize waste to preserve this sacred land.'
    },
    {
      icon: HandHeart,
      title: 'Authentic Hospitality',
      description: 'Warm, personal service inspired by local traditions and genuine care.'
    },
    {
      icon: Recycle,
      title: 'Sustainable Living',
      description: 'Locally sourced food, eco-friendly materials, and support for the community.'
    }
  ];

  const experiences = [
    {
      icon: Sunrise,
      title: 'Morning yoga on the forest deck'
    },
    {
      icon: Flame,
      title: 'Evening storytelling by the firepit'
    },
    {
      icon: Leaf,
      title: 'Guided nature walks with local guides'
    },
    {
      icon: UtensilsCrossed,
      title: 'Farm-to-table meals with organic ingredients'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-lodge"></div>
          <div className="container mx-auto px-4 relative z-10 text-light text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About The <span className="text-accent">Cabin Lodge Mokotakoti</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl max-w-3xl mx-auto opacity-90"
            >
              A sanctuary where nature, comfort, and tradition come together.
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                <p className="text-lg text-gray-700">
                  The Cabin Lodge Mokotakoti began as a dream — to create a peaceful retreat where travelers could escape the noise of modern life and reconnect with nature.
                </p>
                <p className="text-lg text-gray-700">
                  Nestled in the heart of the Mokotakoti Forest Reserve, our lodge was built by hand using sustainable materials and traditional craftsmanship. Every cabin tells a story, every path leads to serenity.
                </p>
                <p className="text-lg text-gray-700">
                  Founded in 2018 by conservationist and architect <strong className="text-primary">James Mwinyi</strong>, our mission has always been simple: to offer a luxurious yet humble experience that honors the land and its people.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Lodge Founder"
                  className="rounded-2xl shadow-cabin"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white shadow-warm">
                  <div className="text-center">
                    <Calendar className="h-6 w-6 mx-auto mb-1" />
                    <div className="text-xs font-bold">2025</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-12"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 rounded-xl bg-light shadow-lg hover:shadow-cabin transition-shadow group"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-20 bg-gradient-lodge text-light">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              More Than a Stay
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl opacity-90 mb-12"
            >
              At The Cabin Lodge, every detail is designed to deepen your connection with nature and yourself.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {experiences.map((experience, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <experience.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-left">{experience.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-6"
            >
              Ready to Experience the Magic?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Join us for a stay that nourishes the soul. Whether it's a romantic escape, family retreat, or solo journey, we'll make it unforgettable.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-3"
              onClick={() => (window.location.href = '/rooms')}
            >
              Explore Cabins
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
