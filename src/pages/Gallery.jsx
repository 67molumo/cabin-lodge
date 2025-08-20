// src/pages/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ImageGallery from '../components/gallery/ImageGallery';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-light">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl max-w-3xl mx-auto opacity-90"
            >
              Step into the serenity of The Cabin Lodge Mokotakoti. 
              Every view is a postcard, every moment a memory.
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <ImageGallery />
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;