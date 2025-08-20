// src/components/cabins/CabinCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CabinCard = ({ cabin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
<img
  src={cabin.image_url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
  alt={cabin.title}
  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
/>
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
          ${cabin.price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{cabin.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{cabin.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary">
            {cabin.capacity} guests · {cabin.amenities?.slice(0, 2).join(', ')}
          </span>
          <Link
            to={`/cabin/${cabin.id}`}
            className="btn-secondary text-sm px-4 py-1.5"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CabinCard;