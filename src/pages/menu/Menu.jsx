import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, ChefHat, Coffee, Sun, UtensilsCrossed, Moon, Sparkles } from "lucide-react";

// Import images
import heroBg from "../../pictures/px28.jpg";
import menuBg from "../../pictures/fx14.jpg";
import newsletterImg from "../../pictures/fx22.jpg";
import { menuItems } from "../../components/menu/MenuData";
import MenuItemCard from "../../components/menu/MenuItemCard";
import Pagination from "../../components/menu/Pagination";
import NewsletterSection from "../../components/shared/Newsletter";
import HeaderPage from "../../components/layout/Header";
import CartSidebar from "../../components/menu/CardSideBar";

export default function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
  const itemsPerPage = 8;

  const menuCategories = [
    { id: "all", label: "All Items", Icon: Sparkles, color: "from-orange-500 to-amber-500" },
    { id: "breakfast", label: "Breakfast", Icon: Coffee, color: "from-amber-500 to-yellow-500" },
    { id: "brunch", label: "Brunch", Icon: Sun, color: "from-yellow-500 to-orange-500" },
    { id: "lunch", label: "Lunch", Icon: UtensilsCrossed, color: "from-emerald-500 to-teal-500" },
    { id: "dinner", label: "Dinner", Icon: Moon, color: "from-indigo-500 to-purple-500" },
  ];

  const totalPages = Math.ceil(menuItems[selectedMenu].length / itemsPerPage);
  const paginatedItems = menuItems[selectedMenu].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addToCart = (product) => {
    setSelectedProducts((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    // Trigger pulse animation
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  const removeFromCart = (productName) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => item.name !== productName)
    );
  };

  const updateQuantity = (productName, newQuantity) => {
    if (newQuantity < 1) return;
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, item) => {
      const price = parseInt(item.price.replace(/#/g, ""), 10);
      return total + price * item.quantity;
    }, 0);
  };

  const sendWhatsAppMessage = () => {
    if (selectedProducts.length === 0) return;

    const phoneNumber = "+2349160002471";
    let message = `Hello, I would like to order the following items:\n\n`;

    selectedProducts.forEach((item) => {
      message += `*${item.name}* - ${item.price} x ${item.quantity} = #${
        parseInt(item.price.replace(/#/g, ""), 10) * item.quantity
      }\n`;
    });

    message += `\n*Total:* #${calculateTotal()}\n\nPlease let me know the next steps for completing my order.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
    setSelectedProducts([]);
    setShowCart(false);
  };

  return (
    <div className="overflow-x-hidden bg-black">
      <HeaderPage />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: 0,
                }}
                animate={{
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + 50 + "%",
                    Math.random() * 100 + "%",
                  ],
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + 50 + "%",
                    Math.random() * 100 + "%",
                  ],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30 mb-6">
              <ChefHat className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-mono text-sm tracking-widest">
                CULINARY EXCELLENCE
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Menu</span>
            </h1>
            
            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Explore our carefully crafted selection of dishes, made with passion and the finest ingredients
            </p>
            
            <div className="flex items-center justify-center gap-2 text-orange-500">
              <Link to="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Menu</span>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-orange-400/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-orange-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={menuBg}
            alt="Menu background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Selection</span>
            </h2>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
              Browse through our categories to find your perfect meal
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {menuCategories.map((category) => {
              const Icon = category.Icon;
              const isActive = selectedMenu === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedMenu(category.id);
                    setCurrentPage(1);
                  }}
                  className={`group relative overflow-hidden px-6 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                      : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-orange-500/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.label}</span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Cart Toggle Button */}
          <div className="fixed left-6 bottom-4 z-40" id="cart-button">
            <motion.button
              onClick={() => setShowCart(!showCart)}
              className={`relative p-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-2xl shadow-orange-500/30 ${
                cartPulse ? 'ring-4 ring-orange-400/50' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={cartPulse ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <ShoppingCart className="w-6 h-6" />
              {selectedProducts.length > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    rotate: [0, 360],
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 500, damping: 15 },
                    rotate: { duration: 0.5, ease: "easeInOut" }
                  }}
                  key={selectedProducts.length}
                >
                  {selectedProducts.length}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Menu Items Grid */}
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedItems.map((item, index) => (
                <MenuItemCard
                  key={`${selectedMenu}-${index}`}
                  item={item}
                  index={index}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </AnimatePresence>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection image={newsletterImg} />

      {/* Cart Sidebar */}
      <CartSidebar
        showCart={showCart}
        setShowCart={setShowCart}
        selectedProducts={selectedProducts}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        calculateTotal={calculateTotal}
        sendWhatsAppMessage={sendWhatsAppMessage}
      />
    </div>
  );
}