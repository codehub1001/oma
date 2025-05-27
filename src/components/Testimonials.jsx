import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // removed buttons for auto-scroll

const testimonials = [
  {
    name: "Amara Johnson",
    quote:
      "Wearing Oma Glamour made me feel like royalty on my special day. The craftsmanship is unmatched!",
    role: "Bride",
  },
  {
    name: "Tolu Adebayo",
    quote:
      "Their designs are timeless. I receive compliments every time I wear one of their pieces.",
    role: "Fashion Influencer",
  },
  {
    name: "Nina Okoro",
    quote:
      "The attention to detail and personalized service was fantastic. Highly recommend Oma Glamour!",
    role: "Entrepreneur",
  },
  {
    name: "Nina Okoro",
    quote:
      "The attention to detail and personalized service was fantastic. Highly recommend Oma Glamour!",
    role: "Entrepreneur",
  },
  {
    name: "Nina Okoro",
    quote:
      "The attention to detail and personalized service was fantastic. Highly recommend Oma Glamour!",
    role: "Entrepreneur",
  },
  // Add more testimonials as needed
];

export default function TestimonialCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    let rafId;
    const scrollSpeed = 0.5; // px per frame, adjust for speed

    const step = () => {
      if (!carouselRef.current) return;

      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (carouselRef.current.scrollLeft >= maxScrollLeft) {
        carouselRef.current.scrollLeft = 0; // loop back to start
      } else {
        carouselRef.current.scrollLeft += scrollSpeed;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-pink-700 mb-10">
        What Our Clients Say
      </h2>

      <div className="relative">
        {/* Optional: Remove these buttons if you want pure auto-scroll */}
        {/* <button
          aria-label="Scroll Left"
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          aria-label="Scroll Right"
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}

        <motion.div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          // disable manual drag/scroll if you want fully auto
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {testimonials.map(({ name, quote, role }, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-80 p-6 rounded-2xl bg-white/30 border border-white/20 backdrop-blur-md shadow-lg text-gray-900"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-base italic mb-6">“{quote}”</p>
              <div>
                <p className="font-semibold text-lg text-pink-700">{name}</p>
                <p className="text-sm text-gray-700">{role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
