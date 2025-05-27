import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";  // <-- Import Link

export default function Banner() {
  return (
    <div className="relative max-w-7xl mx-auto my-10 h-screen md:h-[90vh] rounded-3xl shadow-xl overflow-hidden">
      {/* Background Image */}
      <img
        src="/img/banner.png"
        alt="Oma Glamour"
        className="absolute w-full h-full object-cover top-0 left-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 px-6 sm:px-10 md:px-16 lg:px-24 h-full flex items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-xl sm:max-w-2xl lg:max-w-3xl bg-white/10 p-6 sm:p-8 md:p-10 rounded-2xl text-white backdrop-blur-md shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 animate-pulse" />
            Step Into Elegance with{" "}
            <span className="text-pink-300">Oma Glamour</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg font-medium mb-8 drop-shadow-md max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Discover the art of elegance with our curated fashion and beauty
            pieces. Be bold. Be beautiful. Be unforgettable.
          </motion.p>

          {/* Replace button with Link */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/store"
              className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
