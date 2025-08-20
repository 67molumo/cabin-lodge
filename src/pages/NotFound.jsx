// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-accent/10 rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10 px-4"
      >
        <div className="text-9xl font-black text-primary mb-4 opacity-20">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          Oops! The page you're looking for doesn't exist. Maybe you took a wrong turn in the forest.
        </p>
        <Link
          to="/"
          className="btn-primary inline-block text-lg px-8 py-3 hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Back to Home 🌲
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;