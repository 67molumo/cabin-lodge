// src/pages/Cabins.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CabinCard from '../components/cabins/CabinCard';
import { fetchCabins } from '../services/api';
import { useToast } from '../hooks/useToast';

const Cabins = () => {
  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);
  const showToast = useToast();

  useEffect(() => {
    const loadCabins = async () => {
      try {
        const res = await fetchCabins();
        setCabins(res.data.data);
      } catch (err) {
        console.error(err);
        showToast('Failed to load cabins.', 'error');
      } finally {
        setLoading(false);
      }
    };
    loadCabins();
  }, []);

  if (loading) {
    return <CabinLoadingState />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Cabins
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your perfect retreat. Each cabin is designed for comfort, 
                privacy, and a deep connection with nature.
              </p>
            </motion.div>

            {/* Cabin Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cabins.length > 0 ? (
                cabins.map((cabin) => (
                  <CabinCard key={cabin.id} cabin={cabin} />
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No cabins available at the moment.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Loading Skeleton
const CabinLoadingState = () => (
  <div className="min-h-screen pt-20 bg-light">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="h-10 bg-gray-200 rounded mx-auto w-64 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded mx-auto w-96"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow animate-pulse">
            <div className="h-60 bg-gray-200"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Cabins;