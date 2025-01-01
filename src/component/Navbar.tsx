import React, { useState } from 'react';
import { Button } from '../../components/ui/button'



const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className="bg-white border-b sticky border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 p-1">
                            <a href="/" className="text-xl font-bold"><img className='w-16 h-14' src="/fav-3078db09.png" alt="" /></a>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8 md:p-5 md:justify-end md:w-[800px]">
                            <a href="#features" className="text-gray-900 hover:text-gray-700">Request Room</a>
                            <a href="#pricing" className="text-gray-900 hover:text-gray-700">Payments</a>
                            <a href="#contact" className="text-gray-900 hover:text-gray-700">Announcements</a>
                            <a href="#contact" className="text-gray-900 hover:text-gray-700">Help/Support</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <Button className="mr-4 bg-black text-white">Register</Button>

                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu} className="text-gray-900 pt-6 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <div className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className=" w-full  flex flex-col items-center  sm:px-3 p-4 space-y-2">
                        <a href="#features" className=" block text-gray-900 hover:text-gray-700">Request Room</a>
                        <a href="#pricing" className="block text-gray-900 hover:text-gray-700">Payments</a>
                        <a href="#contact" className="block text-gray-900 hover:text-gray-700">Announcements</a>
                        <a href="#contact" className="block text-gray-900 hover:text-gray-700">Help/Support</a>
                        
                        <Button className="mr-4 w-full bg-black text-white">Register</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
