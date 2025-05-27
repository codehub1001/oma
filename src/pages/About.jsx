import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-3xl shadow-2xl">
      <motion.h2
        className="text-4xl font-extrabold text-pink-700 mb-12 text-center tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        About Oma Glamour
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Text Content */}
        <motion.div
          className="md:w-2/3 text-gray-900 space-y-8 text-lg leading-relaxed font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <p>
            Founded by the visionary <strong>Joy Umunna</strong>, Oma Glamour is a
            premium tailoring brand renowned for its exquisite craftsmanship,
            timeless designs, and celebration of African heritage. Since its
            inception, Oma Glamour has been dedicated to transforming fabric into
            works of art — empowering clients to embrace their unique style and
            radiate confidence on every occasion.
          </p>

          <p>
            Joy’s passion for fashion and cultural storytelling fuels every
            collection, blending traditional tailoring techniques with
            contemporary elegance. Her commitment to quality, detail, and personal
            connection ensures that every garment tells a story — your story.
          </p>

          <p>
            At Oma Glamour, we believe that clothing is more than fabric; it’s an
            expression of identity, pride, and grace. Join us as we continue to
            innovate and inspire, weaving dreams into reality one stitch at a time.
          </p>

          <blockquote className="border-l-4 border-pink-600 pl-6 italic text-pink-700 font-semibold mt-10 tracking-wide">
            &quot;Fashion is not just what you wear; it’s how you tell your story to the world.&quot; — Joy Umunna
          </blockquote>
        </motion.div>

        {/* CEO Photo & Info */}
        <motion.div
          className="md:w-1/3 flex flex-col items-center space-y-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <motion.img
            src="/img/joy-umunna.jpg"
            alt="Joy Umunna, Founder of Oma Glamour"
            className="rounded-full shadow-2xl w-56 h-56 object-cover border-4 border-pink-300"
            loading="lazy"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(219,39,119,0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <h3 className="text-3xl font-bold text-pink-700 tracking-wide">
            Joy Umunna
          </h3>
          <p className="text-gray-700 font-semibold tracking-wide">
            Founder & Creative Director
          </p>
          <p className="text-gray-600 max-w-xs font-serif leading-relaxed">
            A trailblazer in fashion design and cultural storytelling, Joy
            combines heritage and modernity to create stunning bespoke garments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
