// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">The Cabin Lodge</h3>
            <p className="opacity-90 mb-4">
              A peaceful retreat in the heart of nature. Experience comfort, 
              serenity, and unforgettable memories at Mokotakoti.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-light hover:text-accent transition-colors p-2 rounded-lg hover:bg-light/10"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-light hover:text-accent transition-colors p-2 rounded-lg hover:bg-light/10"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-light hover:text-accent transition-colors p-2 rounded-lg hover:bg-light/10"
                aria-label="Like us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/cabins" 
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors flex items-center"
                >
                  Cabins
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors flex items-center"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors flex items-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 opacity-90">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  Mokotakoti Maputsoe<br />
                  Lesotho
                </address>
              </div>
              
              <div className="flex items-center gap-3 opacity-90">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+255712345678" 
                  className="hover:text-accent transition-colors"
                >
                  +255 712 345 678
                </a>
              </div>
              
              <div className="flex items-center gap-3 opacity-90">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@cabinlodge.co.tz" 
                  className="hover:text-accent transition-colors"
                >
                  info@cabinlodge.co.tz
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-light/20 my-8" />

        <div className="text-center">
          <p className="opacity-75 mb-2">
            &copy; {new Date().getFullYear()} The Cabin Lodge Mokotakoti. All rights reserved.
          </p>
          <p className="opacity-60 text-sm">
            Crafted with ❤️ for nature lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;