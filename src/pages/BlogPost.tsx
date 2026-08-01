import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, MessageCircle } from 'lucide-react';
import { getWhatsAppDirectLink } from '../lib/whatsapp';

const samplePosts = [
  {
    id: 1,
    title: "Top 10 Fashion Trends in Sri Lanka for 2025",
    excerpt: "Discover the hottest fashion trends taking over Sri Lanka this year.",
    content: `Fashion in Sri Lanka is evolving rapidly, blending traditional elegance with modern styles. As we step into 2025, several exciting trends are dominating the local fashion scene.

## 1. Sustainable Fashion
Sri Lankan consumers are increasingly conscious about sustainability. Eco-friendly fabrics, locally sourced materials, and ethical production practices are becoming the norm rather than the exception.

## 2. Fusion Wear
The perfect blend of Western and Eastern styles continues to gain popularity. Think saree-inspired gowns, kurta-style tops paired with jeans, and modern takes on the traditional sarong.

## 3. Bold Colors & Prints
Vibrant colors reflecting Sri Lanka's tropical landscape are in vogue. From emerald greens to sunset oranges, bold is beautiful this year.

## 4. Minimalist Accessories
Less is more when it comes to accessories. Delicate jewelry pieces, simple handbags, and understated watches are the go-to choices.

## 5. Comfortable Footwear
With the tropical climate in mind, breathable and comfortable footwear is essential. Stylish sandals, espadrilles, and lightweight sneakers are trending.

At Ai Collection's, we curate the best fashion pieces that align with these trends. Shop our latest collection via WhatsApp and stay ahead of the fashion curve!`,
    image_url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2025-01-15",
    read_time: "5 min read",
    category: "Fashion"
  },
  {
    id: 2,
    title: "How to Choose the Right Electronics for Your Home",
    excerpt: "Buying electronics can be overwhelming. Learn how to pick the best gadgets.",
    content: `When it comes to electronics, making the right choice can save you money and frustration. Here's a comprehensive guide to help you choose the best electronics for your home.

## Understand Your Needs
Before making any purchase, assess what you actually need. Are you looking for entertainment, productivity, or convenience? This will help narrow down your options.

## Set a Budget
Electronics can range from budget-friendly to premium. Setting a realistic budget helps you focus on products that offer the best value for your money.

## Research Brands & Reviews
Not all brands are created equal. Look for brands with good after-sales service in Sri Lanka. Read customer reviews to understand real-world performance.

## Check Warranty & Support
Always verify warranty terms and local service availability. Products with local warranty support are preferable for hassle-free repairs.

## Energy Efficiency
With rising electricity costs, energy-efficient appliances can save you money in the long run. Look for energy ratings before purchasing.

At Ai Collection's, we stock genuine electronics with warranty support. Message us on WhatsApp for personalized recommendations!`,
    image_url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2025-01-10",
    read_time: "7 min read",
    category: "Electronics"
  },
  {
    id: 3,
    title: "Home Decor Tips: Transform Your Space on a Budget",
    excerpt: "You don't need a big budget to make your home look amazing.",
    content: `Decorating your home doesn't have to be expensive. With a little creativity and smart shopping, you can transform any space into a beautiful haven.

## Start with a Plan
Before buying anything, visualize what you want each room to look like. Create a mood board with colors, textures, and styles you love.

## Declutter First
Sometimes the best decor decision is removing items rather than adding them. A clean, organized space instantly looks more appealing.

## Use Mirrors Strategically
Mirrors can make small spaces appear larger and reflect natural light. Place them opposite windows for maximum effect.

## Add Greenery
Indoor plants are affordable decor items that bring life to any room. Choose low-maintenance varieties if you're new to plant care.

## Mix High and Low
Combine a few quality statement pieces with budget-friendly accessories. This creates a curated look without breaking the bank.

Shop our home & living collection at Ai Collection's for affordable decor that elevates your space!`,
    image_url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2025-01-05",
    read_time: "6 min read",
    category: "Home & Living"
  },
  {
    id: 4,
    title: "Skincare Routine for Tropical Weather: A Complete Guide",
    excerpt: "Living in Sri Lanka's tropical climate requires a special skincare approach.",
    content: `Tropical weather can be harsh on your skin. The combination of heat, humidity, and strong UV rays requires a tailored skincare routine.

## Morning Routine
Start your day with a gentle cleanser to remove overnight oil buildup. Follow with a vitamin C serum for antioxidant protection, then a lightweight moisturizer and broad-spectrum sunscreen.

## Evening Routine
Double cleanse to remove makeup, sunscreen, and daily grime. Use a hydrating toner, followed by a niacinamide serum to control oil and minimize pores. Finish with a nourishing night cream.

## Weekly Treatments
Exfoliate 1-2 times per week to remove dead skin cells. Use a clay mask weekly to deep-clean pores and control excess oil.

## Key Ingredients for Tropical Skin
- **Vitamin C**: Brightens and protects
- **Niacinamide**: Controls oil and minimizes pores
- **Hyaluronic Acid**: Hydrates without heaviness
- **Salicylic Acid**: Prevents breakouts

## Lifestyle Tips
Stay hydrated, eat antioxidant-rich foods, and always wear sunscreen even on cloudy days.

Find quality skincare products at Ai Collection's. Message us on WhatsApp for product recommendations!`,
    image_url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2024-12-28",
    read_time: "8 min read",
    category: "Beauty"
  },
  {
    id: 5,
    title: "Accessorize Like a Pro: The Ultimate Guide",
    excerpt: "The right accessories can elevate any outfit.",
    content: `Accessories are the secret weapon of great style. They can transform a basic outfit into a stunning ensemble. Here's how to master the art of accessorizing.

## Less is More
Don't wear every accessory you own at once. Choose 2-3 key pieces that complement each other and your outfit.

## Match Metals
Stick to one metal tone per outfit for a polished look. Mixing gold and silver can work, but requires careful coordination.

## Consider the Occasion
Delicate pieces work best for formal events, while bold statement accessories are perfect for casual outings and parties.

## Balance Proportions
If you're wearing a statement necklace, keep earrings minimal. If your earrings are bold, skip the necklace and opt for a bracelet.

## Invest in Classics
A quality leather wallet, a versatile watch, and a pair of classic sunglasses are timeless investments that elevate any look.

Browse our accessories collection at Ai Collection's for pieces that complete your style!`,
    image_url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2024-12-20",
    read_time: "4 min read",
    category: "Accessories"
  },
  {
    id: 6,
    title: "Why WhatsApp Shopping is the Future in Sri Lanka",
    excerpt: "More Sri Lankans are turning to WhatsApp for shopping.",
    content: `WhatsApp shopping offers a unique personal touch that traditional e-commerce platforms simply cannot match. Here's why this trend is taking over Sri Lanka.

## Personalized Service
Unlike automated websites, WhatsApp shopping connects you directly with a real person who can answer questions, provide recommendations, and offer personalized deals.

## Instant Communication
No more waiting for email replies or navigating complex support tickets. Get instant answers to your product questions.

## Trust & Transparency
Seeing a real phone number and speaking to a real person builds trust. You can verify product availability, ask for real photos, and negotiate before purchasing.

## Convenience
Order from anywhere, anytime. No need to create accounts, remember passwords, or fill lengthy checkout forms.

## Cash on Delivery
Many WhatsApp sellers offer cash on delivery, which is preferred by customers who are cautious about online payments.

At Ai Collection's, we combine the convenience of online browsing with the personal touch of WhatsApp shopping. Browse our products on the website and order directly via WhatsApp!`,
    image_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    author: "Ai Collection's Team",
    date: "2024-12-15",
    read_time: "5 min read",
    category: "Shopping"
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = samplePosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">Article not found.</p>
          <Link to="/blog" className="mt-4 inline-block text-amber-600 font-medium hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.read_time}
            </span>
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Liked this article? Check out our latest products!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Shop Now
              </Link>
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
