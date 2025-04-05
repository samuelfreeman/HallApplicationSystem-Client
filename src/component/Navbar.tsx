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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 w-screen">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-bold">
                <img className="w-10 h-8 sm:w-12 sm:h-10 md:w-16 md:h-14" src="/fav-3078db09.png" alt="Logo" />
              </NavLink>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8 md:p-5 md:justify-end md:w-[800px]">
              <NavLink to="/about" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
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
              <NavLink to="/signup">
              <Button className="bg-black text-white hover:bg-gray-800">
                Register
              </Button>
              </NavLink>
              <NavLink to="/login">
              <Button className="bg-black text-white hover:bg-gray-800">
               Login
              </Button>
              </NavLink>
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
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-x-0 top-16 bg-white border-b border-gray-200 overflow-y-auto max-h-[calc(100vh-4rem)]`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/comingsoon" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/reservation" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Reservation
          </NavLink>
          <NavLink 
            to="/complaint" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Compliant Desk
          </NavLink>
          <NavLink 
            to="/applicantInfo" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Payment
          </NavLink>
          <NavLink 
            to="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          {showRegister && (
            <div className="px-3 py-2 space-y-2">
               <NavLink to="/signup" onClick={() => setIsOpen(false)}><Button className="w-full bg-black text-white hover:bg-gray-800">
               Register
              </Button>
              </NavLink>
              <NavLink to="/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
             Login
              </Button>
              </NavLink>
            </div>
          )}
          {!showRegister && !showLogin && (
            <div className="px-3 py-2">
              <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={() => {
                handleClick();
                setIsOpen(false);
              }}>
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
