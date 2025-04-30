import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import HeaderPage from "../components/Header";
import FooterPage from "../components/Footer";

// Import all images
import plainfried from "../pictures/plainfried.jpg";
import pineshrimprice from "../pictures/pineshrimprice.jpg";
import jollof from "../pictures/jollof.jpg";
import shrimpfriedrice from "../pictures/shrimpfriedrice.jpg";
import coconutrice from "../pictures/coconutrice.jpeg";
import chineserice from "../pictures/chineserice.jpg";
import riceandstew from "../pictures/riceandstew.jpg";
import grilledchicken from "../pictures/grilledchic.jpg";
import grilledchicmed from "../pictures/grilledchicmed.avif";
import pepperedchic from "../pictures/pepperedchic.jpg";
import stewedbeef from "../pictures/stewedbeef.jpg";
import crispychic from "../pictures/crispychic.jpg";
import pepperedbeef from "../pictures/pepperedbeef.jpg";
import croaker from "../pictures/croaker.jpg";
import hakefish from "../pictures/hakefish.jpg";
import stewedtitus from "../pictures/stewedtitus.jpg";
import coleslaw from "../pictures/coleslaw.jpg";
import dodo from "../pictures/dodo.jpg";
import moi from "../pictures/moi.jpg";
import pepperedsnail from "../pictures/pepperedsnail.jpg";
import bananabread from "../pictures/bananabread.jpg";
import bananabmed from "../pictures/bananabmed.jpg";
import meatpie from "../pictures/meatpie.jpg";
import chickenpie from "../pictures/chickenpie.jpg";
import jamdou from "../pictures/jamdou.jpg";
import sausage from "../pictures/sausage.jpg";
import chickensandwich from "../pictures/chickensandwich.jpg";
import longbun from "../pictures/longbun.jpg";
import burgers from "../pictures/burgers.jpg";
import chocolatevan from "../pictures/chocolatevan.jpg";
import fx14 from "../pictures/fx14.jpg";
import fx22 from "../pictures/fx22.jpg";
import px27 from "../pictures/px28.jpg";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function MenuPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const itemsPerPage = 8;

  const menuItems = {
    all: [
      {
        name: "White Rice & Stew",
        price: "#1000",
        description: "Steamed white rice served with spicy tomato stew",
        image: riceandstew,
      },
      {
        name: "Grilled Chicken",
        price: "#4000",
        description: "Juicy grilled chicken",
        image: grilledchicken,
      },
      {
        name: "Special Shrimps FriedRice",
        price: "#2000",
        description: "Deluxe fried rice with jumbo shrimp",
        image: shrimpfriedrice,
      },
      {
        name: "Grilled Chicken Medium",
        price: "#3500",
        description: "Medium-sized grilled chicken",
        image: grilledchicmed,
      },
      {
        name: "Peppered Chicken",
        price: "#4000",
        description: "Spicy peppered chicken",
        image: pepperedchic,
      },
      {
        name: "Chinese Rice",
        price: "#1500",
        description: "Authentic Chinese-style fried rice",
        image: chineserice,
      },
      {
        name: "Crispy Chicken",
        price: "#3000",
        description: "Crunchy fried crispy chicken",
        image: crispychic,
      },
      {
        name: "Plantain",
        price: "#1000",
        description: "Fried sweet plantains",
        image: dodo,
      },
      {
        name: "Stewed Beef",
        price: "#1500",
        description: "Beef cooked in rich tomato sauce",
        image: stewedbeef,
      },
      {
        name: "Moi Moi",
        price: "#1000",
        description: "Steamed bean pudding",
        image: moi,
      },
      {
        name: "Banana Bread",
        price: "#2500",
        description: "Moist homemade banana bread",
        image: bananabread,
      },
      {
        name: "Banana Bread Medium",
        price: "#2000",
        description: "Medium-sized banana bread",
        image: bananabmed,
      },
      {
        name: "Meat Pie",
        price: "#1000",
        description: "Flaky pastry stuffed with minced meat",
        image: meatpie,
      },
      {
        name: "Chicken Pie",
        price: "#1200",
        description: "Pastry filled with seasoned chicken",
        image: chickenpie,
      },
      {
        name: "Jam Doughnuts",
        price: "#700",
        description: "Soft doughnuts filled with jam",
        image: jamdou,
      },
      {
        name: "Sausage",
        price: "#1000",
        description: "Savory sausage snack",
        image: sausage,
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description: "Grilled chicken sandwich with lettuce and mayo",
        image: chickensandwich,
      },
      {
        name: "Burgers",
        price: "#5000",
        description: "Juicy beef or chicken burger",
        image: burgers,
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description: "Long bun sandwich with crispy chicken",
        image: longbun,
      },
      {
        name: "Peppered Beef",
        price: "#1500",
        description: "Spicy beef chunks",
        image: pepperedbeef,
      },
      {
        name: "Peppered Snail",
        price: "#5000",
        description: "Delicacy of spicy cooked snails",
        image: pepperedsnail,
      },
      {
        name: "Peppered Fried Croaker Fish",
        price: "#4000",
        description: "Spicy deep-fried croaker fish",
        image: croaker,
      },
      {
        name: "Peppered Fried Hake Fish",
        price: "#4000",
        description: "Crispy fried hake fish with pepper sauce",
        image: hakefish,
      },
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description: "Classic Nigerian party jollof rice",
        image: jollof,
      },
      {
        name: "Pineapple Shrimps Fried Rice",
        price: "#2500",
        description: "Fried rice with shrimp and pineapple",
        image: pineshrimprice,
      },
      {
        name: "Plain Fried Rice",
        price: "#1000",
        description: "Simple fried rice with vegetables",
        image: plainfried,
      },
      {
        name: "Asun Coconut Rice",
        price: "#1700",
        description: "Coconut rice with spicy goat meat (asun)",
        image: coconutrice,
      },
      {
        name: "Stewed Titus",
        price: "#3000",
        description: "Titus fish cooked in tomato stew",
        image: stewedtitus,
      },
      {
        name: "Coleslaw",
        price: "#1000",
        description: "Creamy coleslaw salad",
        image: coleslaw,
      },
      {
        name: "Chocolate & Vanilla Cookies",
        price: "#500",
        description: "Freshly baked chocolate and vanilla cookies",
        image: chocolatevan,
      },
    ],
    breakfast: [
      {
        name: "Banana Bread",
        price: "#2500",
        description: "Freshly baked banana bread, soft and delicious",
        image: bananabread,
      },
      {
        name: "Banana Bread Medium",
        price: "#2000",
        description: "Medium-sized banana bread, perfect for sharing",
        image: bananabmed,
      },
      {
        name: "Jam Doughnuts",
        price: "#700",
        description: "Soft, fluffy doughnuts filled with sweet fruit jam",
        image: jamdou,
      },
      {
        name: "Chocolate x Vanilla Cookies",
        price: "#500",
        description: "Decadent mix of chocolate and vanilla cookies",
        image: chocolatevan,
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description: "Crispy chicken fillet with lettuce, tomato, and mayo",
        image: chickensandwich,
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description: "Juicy chicken fillet in a long bun with toppings",
        image: longbun,
      },
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description: "Flavorful Jollof rice, perfect for sharing",
        image: jollof,
      },
      {
        name: "Plain Fried Rice",
        price: "#1000",
        description: "Simple fried rice with fresh vegetables",
        image: plainfried,
      },
      {
        name: "Plantain",
        price: "#1000",
        description: "Golden fried plantain slices",
        image: dodo,
      },
      {
        name: "Stewed Beef",
        price: "#1500",
        description: "Tender beef in rich tomato sauce",
        image: stewedbeef,
      },
      {
        name: "Peppered Chicken",
        price: "#4000",
        description: "Spicy grilled chicken with herbs",
        image: pepperedchic,
      },
      {
        name: "Peppered Beef",
        price: "#1500",
        description: "Tender beef in spicy pepper sauce",
        image: pepperedbeef,
      },
      {
        name: "Burgers",
        price: "#5000",
        description: "Juicy beef burger with special sauce",
        image: burgers,
      },
    ],
    brunch: [
      {
        name: "Meat Pie",
        price: "#1000",
        description: "Flaky pastry with seasoned meat and vegetables",
        image: meatpie,
      },
      {
        name: "Chicken Pie",
        price: "#1200",
        description: "Pastry with tender chicken and creamy filling",
        image: chickenpie,
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description: "Crispy chicken sandwich with fresh toppings",
        image: chickensandwich,
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description: "Chicken fillet in long bun with savory sauce",
        image: longbun,
      },
    ],
    lunch: [
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description: "Rich and flavorful Jollof rice",
        image: jollof,
      },
      {
        name: "Pineapple Shrimps Fried Rice",
        price: "#2500",
        description: "Fried rice with shrimp and pineapple",
        image: pineshrimprice,
      },
      {
        name: "Plain Fried Rice",
        price: "#1000",
        description: "Fried rice with fresh vegetables",
        image: plainfried,
      },
      {
        name: "Special Shrimps FriedRice",
        price: "#2000",
        description: "Seasonal favorite with extra flavor",
        image: shrimpfriedrice,
      },
      {
        name: "Asun Coconut Rice",
        price: "#1700",
        description: "Coconut rice with grilled beef",
        image: coconutrice,
      },
      {
        name: "White Rice x Stew",
        price: "#1000",
        description: "White rice with rich, flavorful stew",
        image: riceandstew,
      },
      {
        name: "Coleslaw",
        price: "#1000",
        description: "Creamy coleslaw salad",
        image: coleslaw,
      },
      {
        name: "Chinese Rice",
        price: "#1500",
        description: "Fried rice with authentic Chinese spices",
        image: chineserice,
      },
    ],
    dinner: [
      {
        name: "Stewed Beef",
        price: "#1500",
        description: "Tender beef in rich tomato sauce",
        image: stewedbeef,
      },
      {
        name: "Grilled Chicken",
        price: "#4000",
        description: "Chicken seasoned with herbs and spices",
        image: grilledchicken,
      },
      {
        name: "Crispy Chicken",
        price: "#3000",
        description: "Crispy fried chicken with dipping sauce",
        image: crispychic,
      },
      {
        name: "Peppered Snail",
        price: "#5000",
        description: "Spicy cooked snails for seafood lovers",
        image: pepperedsnail,
      },
      {
        name: "Peppered Fried Fish",
        price: "#4000",
        description: "Fried fish with spicy pepper sauce",
        image: croaker,
      },
    ],
  };

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pagination
  const totalPages = Math.ceil(menuItems[selectedMenu].length / itemsPerPage);
  const paginatedItems = menuItems[selectedMenu].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Add to cart function
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
  };

  // Remove from cart function
  const removeFromCart = (productName) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => item.name !== productName)
    );
  };

  // Update quantity in cart
  const updateQuantity = (productName, newQuantity) => {
    if (newQuantity < 1) return;
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return selectedProducts.reduce((total, item) => {
      const price = parseInt(item.price.replace(/#/g, ""), 10);
      return total + price * item.quantity;
    }, 0);
  };

  // WhatsApp order function for multiple items
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
      <div className="overflow-x-hidden">

    <>
      <HeaderPage />

      {/* Hero Section */}
      <section className="relative h-screen flex -mt-24 top-1 items-center justify-center overflow-x-hidden">
        <div className="absolute inset-0 bg-black/80 z-0" />
        <img
          src={px27}
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />

        <motion.div
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-orange-500 text-lg md:text-xl">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>{" "}
            / Menu
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="relative py-20">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0">
          <img
            src={fx14}
            alt="Menu background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-500 text-lg font-medium mb-2">
              Delicious Selection
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Explore Our Menu
            </h3>

            {/* Menu Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["all", "breakfast", "brunch", "lunch", "dinner"].map((menu) => (
                <motion.button
                  key={menu}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedMenu === menu
                      ? "bg-orange-500 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  onClick={() => {
                    setSelectedMenu(menu);
                    setCurrentPage(1);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Cart Indicator */}
          <div className="fixed right-6 bottom-24 z-40">
            <button
              onClick={() => setShowCart(!showCart)}
              className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition flex items-center justify-center relative"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              {selectedProducts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {selectedProducts.length}
                </span>
              )}
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {paginatedItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-orange-500 font-bold">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-zinc-300 mb-4">{item.description}</p>

                  <motion.button
                    onClick={() => addToCart(item)}
                    className="w-full relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300"></div>

                    <div className="relative z-10 flex items-center justify-center gap-2 py-2 px-4">
                      <span className="text-white font-medium text-lg relative">
                        Add to Cart
                      </span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                className="px-5 py-2 bg-zinc-700/80 text-white rounded-lg disabled:opacity-50 transition hover:bg-zinc-600/80"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span className="text-white font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                className="px-5 py-2 bg-zinc-700/80 text-white rounded-lg disabled:opacity-50 transition hover:bg-zinc-600/80"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-end">
          <motion.div
            className="bg-zinc-800 w-full max-w-md h-full overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Your Order</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-zinc-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              {selectedProducts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-zinc-300">Your cart is empty</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {selectedProducts.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-zinc-700/50 p-4 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">
                              {item.name}
                            </h4>
                            <p className="text-orange-500">{item.price}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-zinc-600 rounded-lg">
                            <button
                              onClick={() =>
                                updateQuantity(item.name, item.quantity - 1)
                              }
                              className="px-3 py-1 text-white hover:bg-zinc-600"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.name, item.quantity + 1)
                              }
                              className="px-3 py-1 text-white hover:bg-zinc-600"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="text-red-500 hover:text-red-400 p-2"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-zinc-700 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-300">Subtotal:</span>
                      <span className="text-white font-medium">
                        #{calculateTotal()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-300">Delivery Fee:</span>
                      <span className="text-white font-medium">TBD</span>
                    </div>
                    <div className="flex justify-between items-center text-lg mt-4">
                      <span className="text-white font-bold">Total:</span>
                      <span className="text-orange-500 font-bold">
                        #{calculateTotal()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={sendWhatsAppMessage}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>Complete Order via WhatsApp</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

          <motion.div
               className="flex flex-col md:flex-row relative z-10"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
               <motion.img
                 className="w-full md:w-1/2 h-48 md:h-72"
                 src={fx22}
                 alt="Newsletter Background"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true }}
               />
     
               <motion.div
                 className="w-full md:w-1/2 bg-zinc-950 text-center p-4 md:p-6"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true }}
               >
                 <motion.h2
                   className="text-orange-500 text-lg md:text-2xl font-mono font-semibold mb-3"
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   viewport={{ once: true }}
                 >
                   NEWSLETTER
                 </motion.h2>
                 <motion.h1
                   className="text-2xl md:text-4xl font-bold text-white mb-3"
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   viewport={{ once: true }}
                 >
                   Subscribe to Our Newsletter
                 </motion.h1>
                 <motion.h3
                   className="text-sm md:text-lg text-white mb-4"
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.6 }}
                   viewport={{ once: true }}
                 >
                   To get the latest updates, offers, and promotions
                 </motion.h3>
                 <motion.div
                   className="flex flex-col md:flex-row items-center justify-center"
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 0.8 }}
                   viewport={{ once: true }}
                 >
                   <input
                     className="w-full md:w-3/4 p-3 bg-transparent border-2 border-zinc-600 text-white placeholder-zinc-400 mb-4 md:mb-0 md:mr-4"
                     type="email"
                     placeholder="Enter your email"
                   />
                   <button className="w-full md:w-auto px-5 py-2 text-zinc-800 font-semibold bg-white hover:bg-orange-500 hover:text-white transition">
                     Subscribe
                   </button>
                 </motion.div>
                 <motion.h3
                   className="text-lg md:text-xl mt-4 text-white"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 1 }}
                   viewport={{ once: true }}
                 >
                   Call for Reservation
                   <a href="tel:+2349160002472">
                     <span className="text-orange-500 underline ml-2">
                       +234 916 000 2472
                     </span>
                   </a>
                 </motion.h3>
               </motion.div>
             </motion.div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-orange-500 text-white p-3 w-12 h-12 rounded-full shadow-lg hover:bg-orange-600 transition flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </>
    </div>
  );
}