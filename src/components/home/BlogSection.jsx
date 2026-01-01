import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLongArrowRight, 
  faCalendar, 
  faUser,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import fx21 from "../../pictures/fx21.jpg";
import px28 from "../../pictures/px28.jpg";
import fx20 from "../../pictures/fx20.jpg";
import px23 from "../../pictures/px23.jpg";

export default function BlogSection() {
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
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
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
            <motion.article
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card Container */}
              <motion.div 
                className="relative bg-gradient-to-b from-gray-900/50 to-zinc-950/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl"
                variants={hoverVariants}
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <motion.img
                    className="w-full h-full object-cover"
                    src={post.image}
                    alt={post.title}
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-lg">
                      <span className="text-white text-sm font-bold">
                        {post.date.split(" ")[0].slice(0, 3)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Read Time */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <FontAwesomeIcon icon={faClock} className="w-3 h-3 text-amber-400" />
                    <span className="text-white text-xs font-medium">{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faUser} className="w-3 h-3 text-amber-400" />
                      <span className="text-gray-300 text-sm font-medium">{post.author}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-amber-100 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <motion.div 
                    className="flex items-center gap-2 text-amber-400 font-semibold group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative">
                      Continue Reading
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    >
                      <FontAwesomeIcon 
                        icon={faLongArrowRight} 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-amber-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>

              {/* Floating Particles */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.sin(i) * 10, 0],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.article>
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
    </section>
  );
}