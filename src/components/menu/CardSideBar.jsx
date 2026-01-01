import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingCart, MessageCircle } from "lucide-react";

export default function CartSidebar({ 
  showCart, 
  setShowCart, 
  selectedProducts, 
  removeFromCart, 
  updateQuantity, 
  calculateTotal,
  sendWhatsAppMessage 
}) {
  const formatPrice = (price) => {
    return parseInt(price.replace(/#/g, ""), 10);
  };

  return (
    <>
      {showCart && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCart(false)}
          />

          {/* Cart Panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-zinc-900 to-black shadow-2xl shadow-black/50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
          >
            {/* Header - Fixed Height */}
            <div className="flex-shrink-0 p-6 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Your Order</h3>
                  {selectedProducts.length > 0 && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {selectedProducts.length}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart Items - Scrollable Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                {selectedProducts.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64">
                    <ShoppingCart className="w-16 h-16 text-zinc-700 mb-4" />
                    <p className="text-zinc-400 text-lg mb-4">Your cart is empty</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedProducts.map((item, index) => (
                      <motion.div
                        key={`${item.name}-${index}`}
                        className="bg-gradient-to-br from-zinc-800/50 to-black/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex gap-4">
                          {/* Item Image */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-lg overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-white font-medium truncate">{item.name}</h4>
                              <span className="text-orange-400 font-bold flex-shrink-0 ml-2">
                                #{formatPrice(item.price) * item.quantity}
                              </span>
                            </div>
                            
                            <p className="text-zinc-400 text-sm mb-3">{item.price} each</p>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center text-white font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.name)}
                                className="p-2 text-red-400 hover:text-red-300 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Fixed Height */}
            {selectedProducts.length > 0 && (
              <div className="flex-shrink-0 p-6 border-t border-zinc-800">
                {/* Total */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span>#{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Delivery Fee</span>
                    <span className="text-green-400">Calculated at checkout</span>
                  </div>
                  <div className="pt-3 border-t border-zinc-800">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">Total</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                        #{calculateTotal()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={sendWhatsAppMessage}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Complete Order via WhatsApp</span>
                  </motion.button>
                  
                  <button
                    onClick={() => setShowCart(false)}
                    className="w-full py-3 bg-gradient-to-r from-zinc-800 to-black text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}

CartSidebar.propTypes = {
  showCart: PropTypes.bool.isRequired,
  setShowCart: PropTypes.func.isRequired,
  selectedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  calculateTotal: PropTypes.func.isRequired,
  sendWhatsAppMessage: PropTypes.func.isRequired
};