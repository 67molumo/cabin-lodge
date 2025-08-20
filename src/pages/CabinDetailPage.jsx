// src/pages/CabinDetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchCabinById, createBooking } from '../services/api';
import { useToast } from '../hooks/useToast';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BookingForm from '../components/booking/BookingForm';

const CabinDetailPage = () => {
  const { id } = useParams();
  const [cabin, setCabin] = useState(null);
  const [loading, setLoading] = useState(true);
  const showToast = useToast();

  useEffect(() => {
    const loadCabin = async () => {
      try {
        const res = await fetchCabinById(id);
        if (res.data.success) {
          setCabin(res.data.cabin);
        } else {
          showToast('Cabin not found.', 'error');
        }
      } catch (err) {
        console.error(err);
        showToast('Failed to load cabin details.', 'error');
      } finally {
        setLoading(false);
      }
    };
    loadCabin();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-primary">Loading cabin details...</p>
        </div>
      </div>
    );
  }

  if (!cabin) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-light">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-500">Cabin Not Found</h2>
          <Link to="/cabins" className="btn-primary mt-6 inline-block">
            Back to Cabins
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="bg-light py-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6">
              <Link to="/" className="text-secondary hover:underline">Home</Link> >{' '}
              <Link to="/cabins" className="text-secondary hover:underline">Cabins</Link> >{' '}
              <span className="text-gray-500">{cabin.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={cabin.image_url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                    alt={cabin.title}
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Thumbnail Gallery (mini) */}
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {[1, 2, 3].map((n) => (
                    <img
                      key={n}
                      src={`https://source.unsplash.com/random/300x200?forest,cabin,nature${n}`}
                      alt="Cabin view"
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0 border-2 border-accent opacity-80 hover:opacity-100 cursor-pointer"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Right: Details & Booking */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h1 className="text-4xl font-bold text-primary">{cabin.title}</h1>
                <p className="text-xl text-secondary">${cabin.price} <span className="text-gray-600">/ night</span></p>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{cabin.description || 'A peaceful retreat surrounded by pine trees and mountain views. Perfect for couples and small families.'}</p>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Amenities</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {cabin.amenities?.map((amenity, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="text-accent mr-2">•</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capacity */}
                <div className="flex items-center space-x-6 text-gray-600">
                  <span>🛏️ <strong>{cabin.capacity}</strong> guests</span>
                  <span>🌲 Forest View</span>
                </div>

                {/* Booking Form */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Book This Cabin</h3>
                  <BookingForm cabinId={cabin.id} cabinTitle={cabin.title} onSuccess={() => {
                    showToast('Booking request sent! We will contact you shortly.', 'success');
                  }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Extra Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Your Nature Escape Awaits</h2>
            <p className="text-lg text-gray-600 mb-8">
              Wake up to birdsong, breathe in the fresh forest air, and unwind in complete tranquility. 
              All our cabins are designed to blend comfort with nature.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/gallery" className="btn-primary">
                View Gallery
              </Link>
              <Link to="/contact" className="btn-secondary">
                Ask a Question
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CabinDetailPage;