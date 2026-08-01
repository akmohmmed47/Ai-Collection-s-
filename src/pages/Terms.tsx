import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terms & Conditions</h1>
          </motion.div>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing and using Ai Collection's website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. About Our Service</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ai Collection's is an online store based in Sri Lanka. We sell fashion, electronics, accessories, home & living, and beauty products. Orders are placed via WhatsApp, and we offer island-wide delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Ordering & Payment</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>All orders are confirmed through WhatsApp communication.</li>
              <li>Prices are listed in Sri Lankan Rupees (LKR).</li>
              <li>We accept cash on delivery and bank transfers.</li>
              <li>Product availability is subject to stock levels.</li>
              <li>We reserve the right to refuse or cancel any order.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Delivery</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We offer island-wide delivery across Sri Lanka. Delivery times vary depending on your location. We aim to deliver within 2–5 business days for Colombo and 5–10 business days for other areas. Delivery charges may apply based on location and order value.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Returns & Refunds</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Items can be returned within 7 days of delivery if defective or incorrect.</li>
              <li>Items must be unused and in original packaging.</li>
              <li>Refunds are processed within 5–7 business days after inspection.</li>
              <li>Contact us via WhatsApp to initiate a return.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Product Accuracy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We make every effort to display product colors and details accurately. However, actual colors may vary slightly due to screen settings and lighting conditions. Product descriptions are provided to the best of our knowledge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All content on this website, including images, logos, text, and designs, is the property of Ai Collection's and is protected by copyright laws. Unauthorized use or reproduction is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ai Collection's shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid for the product in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              These terms are governed by the laws of Sri Lanka. Any disputes shall be resolved through amicable negotiation or through the courts of Sri Lanka.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10. Contact Information</h2>
            <div className="text-gray-600 dark:text-gray-300">
              <p><strong>Business Name:</strong> Ai Collection's</p>
              <p><strong>Email:</strong> akmohmmed47@gmail.com</p>
              <p><strong>Phone:</strong> 076 402 5965</p>
              <p><strong>Address:</strong> Nagalagam Street, Colombo 14, Sri Lanka</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
