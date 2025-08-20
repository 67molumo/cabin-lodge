// src/pages/RoomsPage.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trees, Home, Lock, Bed } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CabinCard from '../components/cabins/CabinCard';
import { fetchCabins } from '../services/api';
import { useToast } from '../hooks/useToast';

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const showToast = useToast();

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const res = await fetchCabins();
        const mockRooms = [
          {
            id: 1,
            title: 'Forest View Cabin',
            description: 'Panoramic forest views from your private balcony.',
            price: 180,
            capacity: 4,
            amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Balcony'],
            image_url: '/images/mokota17.jpg', // ✅ No url()
          },
          {
            id: 2,
            title: 'Rustic Treehouse',
            description: 'Sleep among the treetops in this handcrafted retreat.',
            price: 160,
            capacity: 2,
            amenities: ['WiFi', 'Heating', 'Private Deck', 'Nature Sounds'],
            image_url: '/images/mokota5.jpg', // ✅ No url()
          },
          {
            id: 3,
            title: 'Luxury Eco-Pod',
            description: 'Glass-walled pod with 360° forest immersion.',
            price: 200,
            capacity: 3,
            amenities: ['Spa Tub', 'AC', 'Kitchenette', 'WiFi'],
            image_url: '/images/mokota16.jpg', // ✅ No url()
          },
        ];

        // Use real data or fallback to mock
        setRooms(res.data?.data?.length ? res.data.data : mockRooms);
      } catch (err) {
        console.error('Failed to load rooms:', err);
        showToast('Using demo rooms. Check your internet or backend.', 'error');
        setRooms([
          {
            id: 1,
            title: 'Forest View Cabin',
            description: 'Panoramic forest views from your private balcony.',
            price: 180,
            capacity: 4,
            amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Balcony'],
            image_url: '/images/mokota14.jpg', // ✅ No url()
          },
                    {
            id: 2,
            title: 'Forest View Cabin',
            description: 'Panoramic forest views from your private balcony.',
            price: 180,
            capacity: 4,
            amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Balcony'],
            image_url: '/images/mokota16.jpg', // ✅ No url()
          },
                    {
            id: 3,
            title: 'Forest View Cabin',
            description: 'Panoramic forest views from your private balcony.',
            price: 180,
            capacity: 4,
            amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Balcony'],
            image_url: '/images/mokota12.jpg', // ✅ No url()
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    loadRooms();
  }, []);

  const whyChooseFeatures = [
    {
      icon: Trees,
      title: 'Nature Immersion',
      description: 'Surrounded by forest, fresh air, and wildlife.'
    },
    {
      icon: Home,
      title: 'Luxury Comfort',
      description: 'Modern amenities in a rustic, peaceful setting.'
    },
    {
      icon: Lock,
      title: 'Private & Secure',
      description: 'Each room has its own space and key access.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-lodge text-light overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/images/mokota3.jpg')", // ✅ Correct
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-accent">Forest Rooms</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto opacity-90"
            >
              Each room is a peaceful retreat designed to blend luxury with nature. 
              Wake up to birdsong and mountain views.
            </motion.p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Explore Our Rooms</h2>
              <p className="text-xl text-gray-600">
                Choose your perfect forest escape. All rooms include modern comforts and private balconies.
              </p>
            </motion.div>

            {loading ? (
              <RoomLoadingState />
            ) : rooms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {rooms.map((room, i) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CabinCard cabin={room} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bed className="h-10 w-10 text-accent" />
                </div>
                <p className="text-2xl text-gray-500 mb-2">No rooms available yet</p>
                <p className="text-gray-400">Check back soon or contact us for availability.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Rooms */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-12">Why Guests Love Our Rooms</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Loading Skeleton
const RoomLoadingState = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
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
);

export default RoomsPage;