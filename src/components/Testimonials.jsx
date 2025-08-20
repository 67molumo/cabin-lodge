// src/components/Testimonials.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Itumeleng & Thabo",
    location: "Thaba-Tseka, Hleoheng",
    text: "Our honeymoon at The Cabin Lodge was pure magic. Waking up to birdsong, the cozy fireplace, and the starlit sky — everything was perfect. We’ll be back!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359148-b7d08fe0e6ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "David Mofolo.",
    location: "Ha penapena, maseru",
    text: "Peaceful, luxurious, and surrounded by nature. The staff was warm and welcoming. Best weekend getaway I’ve had in years.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Teboho morena",
    location: "Hamyenye, Maputsoe",
    text: "A true escape from city life. The cabin was spotless, the view breathtaking, and the air so fresh. I feel reborn after this retreat.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108789-75889774a148?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    name: "The molumo Family",
    location: "Hleoheng, Naleli",
    text: "We celebrated our anniversary here — private, romantic, and unforgettable. The team even arranged a surprise candlelit dinner. Thank you!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from guests who found peace, love, and adventure at our lodge.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-light p-8 rounded-2xl shadow-lg text-center relative"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-secondary opacity-20 mb-4 select-none">“</div>

              {/* Text */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                {current.text}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Guest Info */}
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-primary">{current.name}</h4>
                  <p className="text-sm text-gray-500">{current.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-light flex items-center justify-center hover:bg-accent transition z-10 shadow-md"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-light flex items-center justify-center hover:bg-accent transition z-10 shadow-md"
            aria-label="Next testimonial"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;