import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock, Heart, Shield, Truck } from 'lucide-react';
import { getWhatsAppDirectLink } from '../lib/whatsapp';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Ai Collection's</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Your trusted online shopping destination in Sri Lanka. Quality products, personalized service, delivered to your door.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Ai Collection's was founded with a simple mission: to bring quality products to every corner of Sri Lanka through the convenience of online shopping. We believe that everyone deserves access to great fashion, electronics, and home essentials without the hassle of crowded stores.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            By combining a curated product selection with the personal touch of WhatsApp ordering, we've created a shopping experience that's both modern and warmly human. No complicated checkouts — just message us and we'll handle the rest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: Heart, title: 'Customer First', desc: 'Your satisfaction drives everything we do.' },
            { icon: Shield, title: 'Quality Assured', desc: 'We only stock genuine, reliable products.' },
            { icon: Truck, title: 'Fast Delivery', desc: 'Quick island-wide shipping to your doorstep.' },
          ].map((val) => (
            <div key={val.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 text-center">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <val.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{val.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{val.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">WhatsApp / Phone</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">076 402 5965</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Address</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Nagalagam Street, Colombo 14, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Usually within minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">How to Order</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Message us on WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={getWhatsAppDirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
