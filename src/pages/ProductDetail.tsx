import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, ShoppingBag, Check, Minus, Plus, Star } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import { getProductWhatsAppLink } from '../lib/whatsapp';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number | null;
  category: string;
  image_url: string;
  featured: boolean;
}

function StarRating({ rating = 4.5, reviews = 12 }: { rating?: number; reviews?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'text-amber-400 fill-amber-400'
                : i === fullStars && hasHalf
                ? 'text-amber-400 fill-amber-400/50'
                : 'text-gray-300 fill-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {rating} ({reviews} reviews)
      </span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === Number(id));
        setProduct(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">Product not found.</p>
          <Link to="/products" className="mt-4 inline-block text-amber-600 font-medium hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const displayPrice = product.discount_price && product.discount_price < product.price
    ? product.discount_price
    : product.price;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-0 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full min-h-[320px] md:min-h-[560px] object-cover object-center"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 md:p-10 flex flex-col justify-center"
          >
            <span className="inline-block bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {product.name}
            </h1>

            <div className="mb-4">
              <StarRating />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                LKR {displayPrice.toLocaleString()}
              </p>
              {product.discount_price && product.discount_price < product.price && (
                <p className="text-xl text-gray-400 line-through">
                  LKR {product.price.toLocaleString()}
                </p>
              )}
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-3 mb-8">
              {['Genuine quality guaranteed', 'Island-wide delivery available', 'Pay on delivery options'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Check className="w-4 h-4 text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity:</span>
              <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-semibold text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Total: <span className="font-semibold text-gray-900 dark:text-white">LKR {(displayPrice * quantity).toLocaleString()}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getProductWhatsAppLink(product.name, displayPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-600 font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
