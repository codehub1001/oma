import React from "react";
import { Instagram, Facebook, Mail, Phone, User, MessageCircle, Send } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-lg overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-pink-700 mb-12 flex items-center justify-center gap-3">
        <Send className="w-8 h-8 text-pink-600" />
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
        {/* Contact Form */}
        <motion.form
          className="w-full md:w-1/2 space-y-6"
          action="mailto:omaglamour@example.com"
          method="POST"
          encType="text/plain"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500" />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500" />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <div className="relative">
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm resize-none"
              />
              <MessageCircle className="absolute left-3 top-4 text-pink-500" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </motion.form>

        {/* Contact Info + Social Icons */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-3 text-lg text-gray-700">
            <p>
              <Mail className="inline mr-2 text-pink-600" />
              omaglamour@example.com
            </p>
            <p>
              <Phone className="inline mr-2 text-pink-600" />
              +234 901 234 5678
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xl font-semibold text-pink-700 mb-4">
              Connect With Us
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-3xl text-pink-600">
              {[
                {
                  href: "https://instagram.com/omaglamour",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://facebook.com/omaglamour",
                  icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://wa.me/2347040884968",
                  icon: RiWhatsappFill,
                  label: "WhatsApp",
                },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-pink-500 transition-colors duration-200"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
