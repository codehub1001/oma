import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Heart,
  Users,
  Feather,
  Clock,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Craftsmanship",
    description:
      "Each garment is crafted with precision and care by skilled artisans, ensuring unmatched quality and elegance.",
  },
  {
    icon: Feather,
    title: "Lightweight Comfort",
    description:
      "Our designs prioritize comfort without compromising style, using breathable and luxurious fabrics.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "We listen closely to your vision and tailor every piece to match your unique personality and occasion.",
  },
  {
    icon: CheckCircle2,
    title: "Timely Delivery",
    description:
      "We respect your schedule and guarantee prompt delivery without sacrificing quality or attention to detail.",
  },
  {
    icon: Heart,
    title: "Passion for Elegance",
    description:
      "Our love for fashion shines through every stitch, creating garments that make you feel confident and radiant.",
  },
  {
    icon: Clock,
    title: "Lasting Durability",
    description:
      "We use premium materials that maintain their beauty and structure, ensuring your designs last for years to come.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-pink-50/60 via-white/50 to-pink-50/60 rounded-3xl shadow-xl select-none">
      <motion.h2
        className="text-4xl font-extrabold text-center text-pink-700 mb-12 tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Why Choose Oma Glamour?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-pink-700 text-white rounded-full p-5 mb-6 inline-flex shadow-md">
              <Icon size={36} strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-semibold text-pink-700 mb-3">{title}</h3>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
