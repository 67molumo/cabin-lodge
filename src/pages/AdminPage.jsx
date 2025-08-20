// src/pages/AdminPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import API from '../services/api'; // ✅ Only import default API

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login', { replace: true });
    } else {
      loadData();
    }
  }, [navigate]);

  const loadData = async () => {
    try {
      // ✅ Use API.get() for bookings and messages
      const bookingsRes = await API.get('/bookings');
      const messagesRes = await API.get('/contact');

      setBookings(bookingsRes.data.data || []);
      setMessages(messagesRes.data.data || []);
    } catch (err) {
      console.error('Failed to load data:', err);
      alert('Failed to load data. Please log in again.');
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-primary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>

          {/* Bookings Table */}
          <section className="bg-white shadow-md rounded-xl mb-10 overflow-hidden">
            <h2 className="text-2xl font-semibold p-6 border-b bg-primary text-light">Recent Bookings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Guest</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cabin</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Dates</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Guests</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookings.length > 0 ? (
                    bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{b.name}</div>
                            <div className="text-sm text-gray-500">{b.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{b.cabin_name || 'N/A'}</td>
                        <td className="px-6 py-4 text-gray-700">
                          {b.check_in} → {b.check_out}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{b.guests}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                        No bookings yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Messages */}
          <section className="bg-white shadow-md rounded-xl overflow-hidden">
            <h2 className="text-2xl font-semibold p-6 border-b bg-secondary text-light">Contact Messages</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">From</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Subject</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Message</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {messages.length > 0 ? (
                    messages.map((m) => (
                      <tr key={m.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{m.name}</div>
                            <div className="text-sm text-gray-500">{m.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{m.subject}</td>
                        <td className="px-6 py-4 max-w-md truncate text-gray-700">{m.message}</td>
                        <td className="px-6 py-4 text-gray-500 text-sm">
                          {new Date(m.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        No messages yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;