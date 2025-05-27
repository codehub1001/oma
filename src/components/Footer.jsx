import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-pink-100 px-6 py-12 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Oma Glamour</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Elevating your style with timeless elegance and exquisite tailoring.
            Crafted with passion for your special moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#designs"
                className="hover:text-pink-400 transition-colors duration-200"
              >
                Our Designs
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-pink-400 transition-colors duration-200"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-pink-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              <span>123 Elegance St, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+2348012345678" className="hover:text-pink-400 transition-colors duration-200">
                +234 801 234 5678
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:contact@omaglamour.com" className="hover:text-pink-400 transition-colors duration-200">
                contact@omaglamour.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/omaglamour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/omaglamour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com/omaglamour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/company/omaglamour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-pink-700 pt-6 text-center text-xs text-pink-300 select-text">
        &copy; {new Date().getFullYear()} Oma Glamour. All rights reserved.
      </div>
    </footer>
  );
}
