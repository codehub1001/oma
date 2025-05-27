import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Eye, X } from "lucide-react";

const designs = [
  {
    title: "Elegant Gown",
    image: "/img/glam1.jpg",
    description: "Graceful evening gown for premium occasions.",
  },
  {
    title: "Chic Jumpsuit",
    image: "/img/glam2.jpg",
    description: "Perfectly tailored for modern elegance.",
  },
  {
    title: "Casual Luxe",
    image: "/img/glam3.jpg",
    description: "Luxury meets comfort in everyday style.",
  },
  {
    title: "Wedding Glam",
    image: "/img/glam4.jpg",
    description: "Make your big day unforgettable.",
  },
   {
    title: "Wedding Glam",
    image: "/img/glam5.jpg",
    description: "Make your big day unforgettable.",
  },
   {
    title: "Wedding Glam",
    image: "/img/glam6.jpg",
    description: "Make your big day unforgettable.",
  },
];

export default function DesignShowcase() {
  const controls = useAnimation();
  const carouselRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // For modal image view
  const [modalDesign, setModalDesign] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      setTotalWidth(carouselRef.current.scrollWidth / 2); // half, because items duplicated
    }
  }, []);

  useEffect(() => {
    if (!totalWidth || isHovered) return;

    let start = null;
    const duration = totalWidth * 12; // slower duration for smoothness
    let rafId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      let progressRatio = elapsed / duration;

      if (progressRatio >= 1) {
        start = timestamp;
        progressRatio = 0;
      }

      controls.set({ x: -progressRatio * totalWidth });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [totalWidth, isHovered, controls]);

  // Variants for the heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16 select-none">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-pink-700 tracking-wide relative inline-block"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Our Signature Designs
          {/* Animated underline */}
          <motion.span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-pink-600 rounded-full"
            layoutId="underline"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            style={{ pointerEvents: "none" }}
          />
        </motion.h2>

        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab rounded-2xl shadow-lg"
          style={{ whiteSpace: "nowrap" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-8 px-2"
            animate={controls}
            drag="false"
            style={{ display: "inline-flex" }}
          >
            {[...designs, ...designs].map((design, index) => (
              <motion.div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white min-w-[300px] md:min-w-[350px] flex-shrink-0 inline-block cursor-pointer"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white rounded-b-3xl">
                  <h3 className="text-2xl font-semibold mb-1 drop-shadow-lg">
                    {design.title}
                  </h3>
                  <p className="text-sm mb-3 drop-shadow-md">{design.description}</p>
                  <button
                    onClick={() => setModalDesign(design)}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm font-semibold shadow-lg transition"
                  >
                    View Design <Eye className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Modal for enlarged image */}
      {modalDesign && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalDesign(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full rounded-lg overflow-hidden shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={() => setModalDesign(null)}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalDesign.image}
              alt={modalDesign.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-3xl font-semibold mb-1">{modalDesign.title}</h3>
              <p className="text-lg">{modalDesign.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
