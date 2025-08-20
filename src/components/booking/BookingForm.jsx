// src/components/booking/BookingForm.jsx
import { useState } from 'react';
import { createBooking } from '../../services/api';
import { useToast } from '../../hooks/useToast';


const BookingForm = ({ cabinId, cabinTitle, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    guests: 1,
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const showToast = useToast();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.check_in) newErrors.check_in = 'Check-in date is required';
    if (!formData.check_out) newErrors.check_out = 'Check-out date is required';
    if (new Date(formData.check_out) <= new Date(formData.check_in))
      newErrors.check_out = 'Check-out must be after check-in';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await createBooking({
        ...formData,
        cabin_id: cabinId,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        check_in: '',
        check_out: '',
        guests: 1,
        message: '',
      });
      onSuccess();
    } catch (err) {
      showToast('Booking failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <input
            type="date"
            value={formData.check_in}
            onChange={(e) => setFormData({ ...formData, check_in: e.target.value })}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none ${
              errors.check_in ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.check_in && <p className="text-red-500 text-sm mt-1">{errors.check_in}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <input
            type="date"
            value={formData.check_out}
            onChange={(e) => setFormData({ ...formData, check_out: e.target.value })}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none ${
              errors.check_out ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.check_out && <p className="text-red-500 text-sm mt-1">{errors.check_out}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <select
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map(n => (
            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
          placeholder="E.g., early check-in, anniversary celebration..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Request Booking'}
      </button>
    </form>
  );
};

export default BookingForm;