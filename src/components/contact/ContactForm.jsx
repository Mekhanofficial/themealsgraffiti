import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, User, MessageSquare, Bell } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      // Reset form or show success message
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    }, 1500);
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 20px rgba(249, 115, 22, 0.2)" },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-4">
            <Mail className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Message</span>
          </h1>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have questions or special requests? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="bg-gradient-to-b from-gray-900/50 to-zinc-950/70 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-400" />
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-900/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="John Doe"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400" />
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-900/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
            </div>

            {/* Phone and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400" />
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-900/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="+234 123 456 7890"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-3">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-900/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="Reservation Inquiry"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-400" />
                Your Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 bg-gray-900/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none"
                placeholder="Tell us about your inquiry or special request..."
                required
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>

            {/* Newsletter Checkbox */}
            <motion.div 
              className="flex items-center p-4 bg-gray-900/40 rounded-xl border border-gray-800/30"
              whileHover={{ backgroundColor: "rgba(63, 63, 70, 0.4)" }}
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="sr-only"
                />
                <label 
                  htmlFor="newsletter" 
                  className="flex items-center cursor-pointer"
                >
                  <div className={`w-5 h-5 mr-3 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                    formData.newsletter 
                      ? "bg-orange-500 border-orange-500" 
                      : "bg-transparent border-gray-600"
                  }`}>
                    {formData.newsletter && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Bell className="w-4 h-4 text-orange-400" />
                    <span>Send me updates about new menus, events, and promotions</span>
                  </div>
                </label>
              </div>
            </motion.div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                className={`group relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl overflow-hidden ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                
                {/* Button gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Button shine effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["0%", "500%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.button>
              
              <p className="text-center text-gray-400 text-sm mt-4">
                We typically respond within 24 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}