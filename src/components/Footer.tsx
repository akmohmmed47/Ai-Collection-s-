import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { getWhatsAppDirectLink } from '../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Ai Collection's"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted online store for quality fashion, electronics, accessories, and home essentials. Order directly via WhatsApp for fast, personalized service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Home</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Categories</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Shop All</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>076 402 5965</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Nagalagam Street, Colombo 14, Sri Lanka</span>
              </li>
              <li>
                <a
                  href={getWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors mt-2"
                >
                  <Phone className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ai Collection's. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
