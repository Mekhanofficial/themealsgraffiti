import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillSendFill, BsWhatsapp } from "react-icons/bs";

export default function ContactInfo({ backgroundImage }) {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-xl sm:text-2xl" />,
      title: "Visit our Restaurant",
      content: (
        <a
          href="https://www.google.com/maps?q=2+Aro+Ologolo+Rd,+Lekki+Peninsula+II,+Lagos+106104,+Nigeria"
          className="text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          2 Aro Ologolo Rd, Lekki Peninsula II,
          <br /> Lagos 106104, Lagos, Nigeria
        </a>
      ),
      gradient: "from-orange-600 to-orange-400"
    },
    {
      icon: <FaPhone className="text-xl sm:text-2xl" />,
      title: "Call us",
      content: (
        <div className="space-y-1">
          <a
            href="tel:+2349160002471"
            className="text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1 block"
          >
            +234 916 000 2471
          </a>
          <a
            href="tel:+2349160002472"
            className="text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1 block"
          >
            +234 916 000 2472
          </a>
        </div>
      ),
      gradient: "from-orange-700 to-orange-500"
    },
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
      title: "Email",
      content: (
        <a
          href="mailto:Themealsgraffiti@gmail.com"
          className="text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1 block break-all md:break-normal overflow-hidden text-ellipsis"
        >
          Themealsgraffiti@gmail.com
        </a>
      ),
      gradient: "from-orange-800 to-orange-600"
    },
    {
      icon: <FaClock className="text-xl sm:text-2xl" />,
      title: "Opening Hours",
      content: (
        <div className="space-y-1">
          <p className="text-gray-300 text-sm sm:text-base">Monday - Friday: 8:00 AM - 10:00 PM</p>
          <p className="text-gray-300 text-sm sm:text-base">Saturday - Sunday: 9:00 AM - 11:00 PM</p>
          <p className="text-orange-400 text-xs sm:text-sm mt-1">Happy Hour: 4:00 PM - 6:00 PM Daily</p>
        </div>
      ),
      gradient: "from-orange-900 to-orange-700"
    }
  ];

  const socialMedia = [
    { icon: <FaInstagram />, label: "Instagram", url: "#" },
    { icon: <FaFacebook />, label: "Facebook", url: "#" },
    { icon: <FaTwitter />, label: "Twitter", url: "#" },
    { icon: <BsWhatsapp />, label: "WhatsApp", url: "#" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-0 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            GET IN TOUCH
          </h1>
          <div className="flex items-center justify-center mt-4 md:mt-6">
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
            <BsFillSendFill className="mx-3 sm:mx-4 md:mx-6 text-orange-500 animate-pulse text-xl sm:text-2xl" />
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
          </div>
          <p className="mt-6 md:mt-8 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            We're here to serve you better. Whether you have questions, feedback, or just want to say hello,
            our team is ready to connect with you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8"
          >
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl border border-zinc-700/50 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-white">
                Contact <span className="text-orange-500">Information</span>
              </h2>
              <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                Find all the ways to reach us. Our friendly staff is always ready to assist you with any inquiries.
              </p>

              {/* Contact Cards Grid - FIXED LAYOUT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, translateY: -3 }}
                    className="bg-zinc-900/80 p-4 md:p-5 rounded-xl border border-zinc-700/30 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer min-h-[140px] sm:min-h-[150px] flex flex-col"
                  >
                    <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                      <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-orange-500/20 transition-shadow flex-shrink-0 mt-1`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0"> {/* Added min-w-0 for proper text truncation */}
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 md:mb-2 flex items-center">
                          {item.title}
                          <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse flex-shrink-0"></span>
                        </h3>
                        <div className="text-gray-300 text-sm md:text-base overflow-hidden">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-zinc-700/50">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">Connect With Us</h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 md:p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/30 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
                    >
                      <div className="text-xl md:text-2xl text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                        {social.icon}
                      </div>
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
                <p className="mt-3 md:mt-4 text-gray-400 text-sm md:text-base">
                  Follow us for daily updates, special offers, and behind-the-scenes content!
                </p>
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-orange-500/20"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 flex items-center">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full mr-2 animate-pulse flex-shrink-0"></span>
                Emergency Contact
              </h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                For urgent matters outside business hours, please use our emergency line.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-gray-400">24/7 Emergency Line</p>
                  <a 
                    href="tel:+2349160009999" 
                    className="text-xl md:text-2xl font-bold text-white hover:text-orange-400 transition-colors block break-all md:break-normal"
                  >
                    +234 916 000 9999
                  </a>
                </div>
                <div className="px-3 py-1 md:px-4 md:py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg flex-shrink-0">
                  <span className="text-orange-400 font-semibold text-sm md:text-base">24/7</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Interactive Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] rounded-2xl overflow-hidden group">
              {/* Main Image */}
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                src={backgroundImage}
                alt="Contact background - Our restaurant ambiance"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              
              {/* Interactive Elements Overlay */}
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                    Experience Our <span className="text-orange-400">Ambiance</span>
                  </h3>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                    Visit us to experience the perfect blend of exquisite cuisine and a welcoming atmosphere.
                    Our restaurant is designed to make every moment special.
                  </p>
                  
                  {/* Interactive Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 md:mb-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">150+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Daily Guests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">4.9</div>
                      <div className="text-xs sm:text-sm text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-400">Support</div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group text-sm sm:text-base"
                  >
                    <FaMapMarkerAlt className="mr-2 text-sm sm:text-base" />
                    Get Directions on Google Maps
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>
                </motion.div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute top-8 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-orange-500/20 rounded-full blur-xl"></div>
              
              {/* Interactive Pin */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/4 left-1/4"
              >
                <div className="relative">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-sm sm:text-base" />
                  </div>
                  <div className="absolute -inset-3 sm:-inset-4 bg-orange-500 rounded-full opacity-20 animate-ping"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
        ></motion.div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};