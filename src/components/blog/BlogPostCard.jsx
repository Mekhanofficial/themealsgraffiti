import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLongArrowRight, 
  faUser,
  faClock 
} from "@fortawesome/free-solid-svg-icons";

export default function BlogPostCard({ post }) {
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
    <motion.article
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
  );
}

// PropTypes validation
BlogPostCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};