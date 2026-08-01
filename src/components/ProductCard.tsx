import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const displayPrice = product.discount_price && product.discount_price < product.price
    ? product.discount_price
    : product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/30 transition-shadow duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-700">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 dark:bg-gray-900/80 backdrop-blur text-xs font-semibold text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          {product.discount_price && product.discount_price < product.price && (
            <div className="absolute top-3 right-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                SALE
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-1 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
              LKR {displayPrice.toLocaleString()}
            </span>
            {product.discount_price && product.discount_price < product.price && (
              <span className="text-sm text-gray-400 line-through">
                LKR {product.price.toLocaleString()}
              </span>
            )}
          </div>
          <a
            href={getProductWhatsAppLink(product.name, displayPrice)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-3 py-2 rounded-full transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}
