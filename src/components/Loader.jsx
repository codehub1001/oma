import React from "react";
import { motion } from "framer-motion";

export function LogoLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.img
        src="/img/oglogo.png" // Replace with your logo path
        alt="Oma Glamour Logo"
        className="w-28 h-28 object-contain select-none"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1.1, 1.1, 0.8],
          rotate: [0, 360, 360, 0],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        draggable={false}
      />
    </div>
  );
}
