import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#900633] border-t border-[#7a0450]">
      <div className="mx-auto max-w-screen-xl py-16 px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo & Contact Info */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <img
              height={200}
              width={150}
              src="/Aamusted logo (2).png"
              alt="AAMUSTED Logo"
              className="object-contain"
            />
            <div className="text-white space-y-3 text-center lg:text-left">
              <p className="flex items-center gap-2">
                <MapPin size={20} /> Kumasi, Ghana
              </p>
              <p className="flex items-center gap-2">
                <Phone size={20} /> +233 123 456 789
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} /> support@aamusted.edu.gh
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4 text-white">
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="/about" className="hover:underline hover:opacity-90 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline hover:opacity-90 transition">
                    Hall Rules
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline hover:opacity-90 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline hover:opacity-90 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Student Resources</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="/register" className="hover:underline hover:opacity-90 transition">
                    Room Registration
                  </a>
                </li>
                <li>
                  <a href="/payment" className="hover:underline hover:opacity-90 transition">
                    Payment Portal
                  </a>
                </li>
                <li>
                  <a href="/bookroom" className="hover:underline hover:opacity-90 transition">
                    Room Availability
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Admin</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="/" className="hover:underline hover:opacity-90 transition">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/bookroom" className="hover:underline hover:opacity-90 transition">
                    Room Allocations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Hall Info</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="/receipt" className="hover:underline hover:opacity-90 transition">
                    Booking Receipt
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline hover:opacity-90 transition">
                    Hall Executives
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center lg:justify-end items-center space-x-6">
          <span className="text-white font-semibold">Connect with us:</span>
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-300 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-gray-300 transition"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-center py-6">
        <p className="text-xs text-white font-semibold">
          &copy; 2025 AAMUSTED Hall Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
