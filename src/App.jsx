// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from './hooks/useToast'; // ← Import here
import Home from './pages/Home';
import Cabins from './pages/Cabins';
import Contact from './pages/Contact';
import CabinDetailPage from './pages/CabinDetailPage';
import Gallery from './pages/Gallery';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import NotFound from './pages/NotFound';
import BookingPage from './pages/BookingPage'; // ← Add this
import RoomsPage from './pages/RoomsPage'; 
import AboutPage from './pages/AboutPage'; 
// Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/cabin/:id" element={<CabinDetailPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingPage />} /> 
        <Route path="/rooms" element={<RoomsPage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer />
    </Router>
  );
}

export default App;