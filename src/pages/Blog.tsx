import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  date: string;
  read_time: string;
  category: string;
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Fashion Trends in Sri Lanka for 2025",
    excerpt: "Discover the hottest fashion trends taking over Sri Lanka this year. From vibrant sarongs to modern fusion wear, here's what's trending.",
    content: "Fashion in Sri Lanka is evolving rapidly...",
    image_url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2025-01-15",
    read_time: "5 min read",
    category: "Fashion"
  },
  {
    id: 2,
    title: "How to Choose the Right Electronics for Your Home",
    excerpt: "Buying electronics can be overwhelming. Learn how to pick the best gadgets that fit your needs and budget without compromising on quality.",
    content: "When it comes to electronics...",
    image_url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2025-01-10",
    read_time: "7 min read",
    category: "Electronics"
  },
  {
    id: 3,
    title: "Home Decor Tips: Transform Your Space on a Budget",
    excerpt: "You don't need a big budget to make your home look amazing. Here are affordable home decor ideas that will transform any room.",
    content: "Decorating your home doesn't have to be expensive...",
    image_url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2025-01-05",
    read_time: "6 min read",
    category: "Home & Living"
  },
  {
    id: 4,
    title: "Skincare Routine for Tropical Weather: A Complete Guide",
    excerpt: "Living in Sri Lanka's tropical climate requires a special skincare approach. Learn the best products and routines for glowing skin.",
    content: "Tropical weather can be harsh on your skin...",
    image_url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2024-12-28",
    read_time: "8 min read",
    category: "Beauty"
  },
  {
    id: 5,
    title: "Accessorize Like a Pro: The Ultimate Guide",
    excerpt: "The right accessories can elevate any outfit. Discover how to choose and style accessories for every occasion.",
    content: "Accessories are the secret weapon of great style...",
    image_url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2024-12-20",
    read_time: "4 min read",
    category: "Accessories"
  },
  {
    id: 6,
    title: "Why WhatsApp Shopping is the Future in Sri Lanka",
    excerpt: "More Sri Lankans are turning to WhatsApp for shopping. Here's why this personalized approach is winning over traditional e-commerce.",
    content: "WhatsApp shopping offers a unique personal touch...",
    image_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2024-12-15",
    read_time: "5 min read",
    category: "Shopping"
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching blog posts
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Tips, Trends & Inspiration</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Discover the latest trends, shopping tips, and style inspiration from Ai Collection's.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.read_time}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
