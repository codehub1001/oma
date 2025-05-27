import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const mediaItems = [
  { type: "image", src: "/img/glam1.jpg", alt: "Elegant wear" },
  { type: "image", src: "/img/glam2.jpg", alt: "Custom dress fitting" },
  { type: "image", src: "/img/glam3.jpg", alt: "Traditional outfit" },
  { type: "video", src: "/media/gallery4.mp4", alt: "Runway showcase" },
  { type: "video", src: "/media/gallery5.mp4", alt: "Behind the scenes" },
  { type: "image", src: "/media/gallery6.jpg", alt: "Bridal train style" },
  { type: "image", src: "/media/gallery7.jpg", alt: "Evening elegance" },
];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl font-extrabold text-center text-pink-700 mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Gallery
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl group shadow-xl bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-72 object-cover group-hover:opacity-80 transition duration-300"
                loading="lazy"
              />
            ) : (
              <div className="relative w-full h-72 overflow-hidden">
                <video
                  src={item.src}
                  muted
                  controls
                  className="w-full h-full object-cover group-hover:opacity-85 transition duration-300"
                />
                <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-1 w-12 h-12 group-hover:scale-110 transition duration-300" />
              </div>
            )}

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm">{item.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
