// src/components/gallery/ImageGallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Use local images from public/images
const images = [
  { id: 1, src: '/images/mokota_1.jpg', category: 'Cabin', alt: 'Luxury cabin in forest' },
  { id: 2, src: '/images/mokota2.jpg', category: 'Nature', alt: 'Forest path in morning light' },
  { id: 3, src: '/images/mokota3.jpg', category: 'Interior', alt: 'Cozy cabin interior with fireplace' },
  { id: 4, src: '/images/mokota4.jpg', category: 'View', alt: 'Mountain view from balcony' },
  { id: 5, src: '/images/mokota5.jpg', category: 'Dining', alt: 'Outdoor dining under stars' },
  { id: 6, src: '/images/mokota6.jpg', category: 'Nature', alt: 'Mist rising from forest' },
  { id: 7, src: '/images/mokota7.jpg', category: 'Cabin', alt: 'Cabin with wooden deck' },
  { id: 8, src: '/images/mokota8.jpg', category: 'Interior', alt: 'Rustic bedroom with view' },
  { id: 9, src: '/images/mokota9.jpg', category: 'Nature', alt: 'Sunrise over the forest' },
  { id: 10, src: '/images/mokota10.jpg', category: 'Cabin', alt: 'Front view of cabin at dusk' },
  { id: 11, src: '/images/mokota11.jpg', category: 'Interior', alt: 'Living room with fireplace' },
  { id: 12, src: '/images/mokota12.jpg', category: 'View', alt: 'Panoramic valley view' },
];

const categories = ['All', 'Cabin', 'Nature', 'Interior', 'View', 'Dining'];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary text-light shadow-md'
                  : 'bg-white text-gray-700 hover:bg-secondary hover:text-light shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => handleImageClick(img)}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  // Optional: Add error fallback
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Loaded';
                  }}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition"
                >
                  ✕
                </button>
                <p className="text-light text-center mt-2 text-sm">{selectedImage.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}