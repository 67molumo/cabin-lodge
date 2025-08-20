// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

export const fetchCabins = () => API.get('/cabins');
export const fetchFeaturedCabins = () => API.get('/cabins/featured');
export const fetchCabinById = (id) => API.get(`/cabins/${id}`);
export const createBooking = (data) => API.post('/bookings', data);
export const sendMessage = (data) => API.post('/contact', data);

export default API;