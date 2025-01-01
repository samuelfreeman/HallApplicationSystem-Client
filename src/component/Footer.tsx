import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Hall Management System. All Rights Reserved.</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
