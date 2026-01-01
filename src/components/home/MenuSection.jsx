import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faUtensils, faCoffee, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import homeMenuChef from "../../pictures/homeMenuChef.jpg";
import fx11 from "../../pictures/fx11.jpg";
import fx12 from "../../pictures/fx12.jpg";
import fx13 from "../../pictures/fx13.jpg";

export default function MenuSection() {
  const [selectedMenu, setSelectedMenu] = useState("breakfast");
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  // Calculate content height for equal height layout
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current && window.innerWidth >= 1024) {
        const height = contentRef.current.offsetHeight;
        setContentHeight(height);
      } else {
        setContentHeight(0); // Reset for mobile/tablet
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    // Initial delay to ensure content is rendered
    const timer = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timer);
    };
  }, [selectedMenu]); // Recalculate when menu changes

  const menuItems = {
    breakfast: [
      {
        name: "Banana Bread",
        extra: "RECOMMENDED",
        price: "#2500",
        description: "Freshly baked banana bread, soft and delicious with a hint of sweetness.",
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description: "A juicy, crispy chicken fillet served in a long, soft bun with all the toppings.",
      },
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description: "A hearty serving of flavorful Jollof rice, perfect for sharing at parties.",
      },
      {
        name: "Plain Fried Rice",
        extra: "CHEF CHOICE",
        price: "#1000",
        description: "A simple yet delicious fried rice made with fresh vegetables and seasoned to perfection.",
      },
      {
        name: "Plantain",
        price: "#1000",
        description: "Golden fried plantain slices, crispy on the outside and tender on the inside.",
      },
      {
        name: "Peppered Chicken",
        price: "#4000",
        description: "Spicy grilled chicken seasoned with peppers and herbs, served with a kick.",
      },
      {
        name: "Burgers",
        price: "#5000",
        description: "Juicy beef burger served with lettuce, tomato, and a special sauce.",
      },
    ],
    brunch: [
      {
        name: "Banana Bread Medium",
        extra: "RECOMMENDED",
        price: "#2000",
        description: "A larger portion of our signature banana bread, perfect for sharing.",
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description: "A crispy chicken fillet served with fresh lettuce, tomato, and mayo in a soft bun.",
      },
      {
        name: "Meat Pie",
        price: "#1000",
        description: "Flaky pastry filled with a savory mix of seasoned meat and vegetables.",
      },
      {
        name: "Chicken Pie",
        price: "#1200",
        description: "Flaky pastry filled with tender chicken and a rich, creamy filling.",
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description: "A crispy chicken sandwich served with lettuce, tomato, and mayo.",
      },
      {
        name: "Long Bun Chicken Sandwich",
        extra: "CHEF CHOICE",
        price: "#3000",
        description: "A juicy chicken fillet served in a long bun, with fresh toppings and a savory sauce.",
      },
    ],
    lunch: [
      {
        name: "Pineapple Shrimps Fried Rice",
        extra: "RECOMMENDED",
        price: "#2500",
        description: "A delightful mix of shrimps, fried rice, and tangy pineapple chunks.",
      },
      {
        name: "Jambalaya Rice",
        price: "#2200",
        description: "A spiced rice dish with a mix of chicken, sausage, and shrimp, all cooked together.",
      },
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description: "A rich and flavorful Jollof rice, cooked to perfection and perfect for lunch gatherings.",
      },
      {
        name: "Special Shrimps Fried Rice",
        extra: "SEASONAL",
        price: "#2000",
        description: "Shrimps fried rice, a seasonal favorite with an extra dose of flavor.",
      },
      {
        name: "Asun Coconut Rice",
        price: "#1700",
        description: "A fusion of coconut rice served with tender grilled beef, perfect for a tropical touch.",
      },
      {
        name: "White Rice x Stew",
        price: "#1000",
        description: "Simple and classic white rice served with a rich, flavorful stew.",
      },
      {
        name: "Coleslaw",
        price: "#1000",
        description: "A refreshing side of creamy coleslaw, perfect to balance any meal.",
      },
    ],
    dinner: [
      {
        name: "Grilled Chicken",
        extra: "RECOMMENDED",
        price: "#4000",
        description: "Juicy grilled chicken with a smoky flavor, served with your choice of sides.",
      },
      {
        name: "Peppered Turkey",
        price: "#5000",
        description: "Tender turkey grilled with pepper and seasoning, served hot.",
      },
      {
        name: "Crispy Chicken",
        price: "#3000",
        description: "Crispy fried chicken, golden brown on the outside, juicy on the inside.",
      },
      {
        name: "Peppered Snail",
        price: "#5000",
        description: "Tender snails cooked in a rich, spicy pepper sauce, a delicacy served seasonally.",
      },
      {
        name: "Peppered Fried Cracker Fish",
        price: "#4000",
        description: "Crispy fried fish served with a spicy pepper sauce, perfect for seafood lovers.",
      },
      {
        name: "Peppered Fried Hake Fish",
        price: "#4000",
        description: "Fried hake fish seasoned with spicy pepper sauce, served crispy and hot.",
      },
      {
        name: "Stewed Titus",
        extra: "SEASONAL",
        price: "#3000",
        description: "A classic stew made with tender Titus fish, cooked in a rich, flavorful sauce.",
      },
    ],
  };

  const menuCategories = [
    { id: "breakfast", label: "Breakfast", icon: faCoffee },
    { id: "brunch", label: "Brunch", icon: faSun },
    { id: "lunch", label: "Lunch", icon: faUtensils },
    { id: "dinner", label: "Dinner", icon: faMoon },
  ];

  const getMenuImage = () => {
    switch (selectedMenu) {
      case "breakfast":
        return homeMenuChef;
      case "brunch":
        return fx11;
      case "lunch":
        return fx12;
      case "dinner":
        return fx13;
      default:
        return homeMenuChef;
    }
  };

  // Safely get menu items for the selected category
  const getCurrentMenuItems = () => {
    return menuItems[selectedMenu] || menuItems.breakfast;
  };

  return (
    <section className="relative py-16 md:py-24 bg-zinc-950 overflow-hidden" ref={containerRef}>
      {/* Fixed Background Pattern - Increased opacity and added a fallback background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.98)),
            url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: 'cover, 80px 80px',
          backgroundBlendMode: 'normal'
        }}
      ></div>

      {/* Alternatively, you can use a simpler background pattern with more visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90"></div>
      
      {/* Subtle orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full mb-4">
            CULINARY DELIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-orange-500">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover carefully crafted dishes for every occasion, made with the freshest ingredients and passion.
          </p>
        </motion.div>

        {/* Category Tabs - Fixed click issue */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedMenu(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                selectedMenu === category.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={category.icon} className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* Changed to items-stretch */}
          {/* Image Section - Now with dynamic height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-full" // Added h-full
          >
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl h-full" // Added h-full
              style={{ 
                height: contentHeight > 0 ? `${contentHeight}px` : 'auto',
                minHeight: '400px' // Fallback minimum height
              }}
            >
              <img
                src={getMenuImage()}
                alt={`${selectedMenu} menu`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" // Changed to h-full
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">
                  {selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1)}
                </span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-orange-500/30 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-orange-500/20 rounded-full z-0"></div>
          </motion.div>

          {/* Menu Items - Ref for height measurement */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 h-full flex flex-col" // Added h-full and flex-col
          >
            <div className="flex-grow space-y-6"> {/* Wrapper for menu items with flex-grow */}
              {getCurrentMenuItems().slice(0, 5).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 hover:bg-zinc-800/70 transition-all duration-300 border border-zinc-800 hover:border-orange-500/30"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                          {item.name}
                        </h3>
                        {item.extra && (
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-bold rounded-full">
                            {item.extra}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-orange-500">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button - Stays at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6 mt-auto" // Added mt-auto to push to bottom
            >
              <Link to="/menu">
                <button className="group w-full lg:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25">
                  <span>View Full Menu</span>
                  <FontAwesomeIcon 
                    icon={faLongArrowRight} 
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </button>
              </Link>
              <p className="text-gray-500 text-sm text-center mt-4">
                Showing {Math.min(5, getCurrentMenuItems().length)} of {getCurrentMenuItems().length} items
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 text-gray-500">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500/50"></div>
            <span className="text-sm font-medium">Fresh Ingredients Daily</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500/50"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Made more visible */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-orange-500/30 rounded-full blur-md z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-orange-500/20 rounded-full blur-md z-0"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-orange-500/25 rounded-full blur-sm z-0"></div>
    </section>
  );
}