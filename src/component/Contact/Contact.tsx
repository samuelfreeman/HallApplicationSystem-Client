import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Navbar from "../Navbar.jsx";
import NavInfo from "../NavInfo.tsx";

function Contact() {
  return (
    <>
      <Navbar />
      <NavInfo title="Contact" />

      <section className="my-10 lg:mx-[100px] px-6 lg:px-16 font-Inter max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-[#900633]">Hall Admin Contact Info</h2>

        <hr className="my-4 border-gray-300" />

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">

          {/* Left Side - Contact Details */}
          <div className="flex-1 space-y-6 text-gray-700">
            <div className="flex items-center gap-3 text-lg">
              <Phone className="text-[#900633]" />
              <span>Phone Number: <a href="tel:08100000000" className="text-[#900633] hover:underline">08100000000</a></span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Mail className="text-[#900633]" />
              <span>Email: <a href="mailto:aamusted@gmail.com" className="text-[#900633] hover:underline">aamusted@gmail.com</a></span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="text-[#900633]" />
              <span>Address: AAMUSTED Campus, Kumasi, Ghana</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-6 mt-6">
              <a href="#" aria-label="Facebook" className="text-[#900633] hover:text-pink-600 transition">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#900633] hover:text-pink-600 transition">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#900633] hover:text-pink-600 transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-[#900633]">Send us a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (Form submission handling to be implemented)");
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#900633]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#900633]"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows= {5}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#900633]"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#900633] text-white font-semibold rounded py-3 hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="AAMUSTED Location"
            src="https://www.google.com/maps/embed/v1/search?q=AAMUSt&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
