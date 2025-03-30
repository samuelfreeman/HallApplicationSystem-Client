import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowUp] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const student = localStorage.getItem("student");
    if (student) {
      setShowUp(false);
      setShowLogin(false);
    } else {
      setShowUp(true);
      setShowLogin(true);
    }
  }, []);

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-bold">
                <img className="w-10 h-8 sm:w-12 sm:h-10 md:w-16 md:h-14" src="/fav-3078db09.png" alt="Logo" />
              </NavLink>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8 md:p-5 md:justify-end md:w-[800px]">
              <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </NavLink>
              <NavLink to="/reservation" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Reservation
              </NavLink>
              <NavLink to="/complaint" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Compliant Desk
              </NavLink>
              <NavLink to="/applicantInfo" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Payment
              </NavLink>
              <NavLink to="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          {showRegister && (
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800">
                <NavLink to="/signup">Register</NavLink>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </div>
          )}
          {!showRegister && !showLogin && (
            <div className="hidden md:flex items-center">
              <Button className="bg-black text-white hover:bg-gray-800" onClick={handleClick}>
                Logout
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-x-0 top-16 bg-white border-b border-gray-200`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <NavLink to="/comingsoon" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
            About
          </NavLink>
          <NavLink to="/reservation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
            Reservation
          </NavLink>
          <NavLink to="/complaint" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
            Compliant Desk
          </NavLink>
          <NavLink to="/applicantInfo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
            Payment
          </NavLink>
          <NavLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
            Contact
          </NavLink>
          {showRegister && (
            <div className="px-3 py-2 space-y-2">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                <NavLink to="/signup">Register</NavLink>
              </Button>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </div>
          )}
          {!showRegister && !showLogin && (
            <div className="px-3 py-2">
              <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={handleClick}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
