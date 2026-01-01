import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLongArrowRight, 
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import px23 from "../../pictures/px23.jpg";
import fx28 from "../../pictures/fx28.jpg";
import fx21 from "../../pictures/fx21.jpg";
import fx20 from "../../pictures/fx20.jpg";
import fx26 from "../../pictures/fx26.jpg";
import px28 from "../../pictures/px28.jpg";
import BlogPostCard from "./BlogPostCard";

export default function BlogGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const blogPosts = [
    {
      image: px28,
      date: "January 9, 2025",
      author: "Rose",
      title: "New menu added. You can exchange your taste",
      readTime: "5 min read",
      excerpt: "Experience culinary innovation with our latest additions, crafted by award-winning chefs.",
    },
    {
      image: fx20,
      date: "November 29, 2024",
      author: "Abraham",
      title: "Explore our exciting menu updates for a new experience",
      readTime: "4 min read",
      excerpt: "Dive into seasonal flavors and reinvented classics that redefine dining excellence.",
    },
    {
      image: px23,
      date: "July 1, 2024",
      author: "Shady",
      title: "Discover our chef's specials crafted with love",
      readTime: "6 min read",
      excerpt: "Behind-the-scenes look at our signature dishes and the passion that creates them.",
    },
    {
      image: fx26,
      date: "December 10, 2024",
      author: "John",
      title: "Introducing our seasonal menu: taste of winter warmth",
      readTime: "5 min read",
      excerpt: "Warm up with our winter specials featuring hearty comfort foods and seasonal ingredients.",
    },
    {
      image: fx21,
      date: "August 15, 2023",
      author: "Emily",
      title: "How our chefs are inspired by local flavors",
      readTime: "4 min read",
      excerpt: "Discover how local ingredients and cultural heritage shape our culinary creations.",
    },
    {
      image: fx28,
      date: "January 5, 2025",
      author: "Alex",
      title: "Behind the scenes: A day in the life of a chef",
      readTime: "7 min read",
      excerpt: "Get an exclusive look at the daily routines and creative processes of our master chefs.",
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 lg:py-32">
      {/* Animated background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${fx21})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/95 to-zinc-950/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full border border-orange-500/30 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
              CULINARY JOURNAL
            </span>
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Latest
            </span>
            <span className="text-white ml-4">Insights</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore culinary artistry, seasonal innovations, and behind-the-scenes stories from our master chefs.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16 lg:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Articles
              <FontAwesomeIcon 
                icon={faLongArrowRight} 
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}