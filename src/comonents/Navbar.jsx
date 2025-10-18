
import React, { useState, useEffect } from "react"
import { FiPhone, FiMenu, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        };
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-[#E6F8FF]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center font-sans">

                <div className="flex items-center space-x-2">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.vVdWq5gSdRU18Wsl25f1SAHaEK?pid=Api&P=0&h=180" alt="logo" className="w-10 h-10" />
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">NewRa Grids</h1>
                        <p className="text-xs tracking-wide text-gray-500">SOLAR ENERGY</p>
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-8 text-[#082431] font-semibold">
                    <Link
                        to=""
                        className="relative text-[#082431] hover:text-[#7fc241] transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#7fc241] hover:after:w-full after:transition-all after:duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/solarmap"
                        className="relative text-[#082431] hover:text-[#7fc241] transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#7fc241] hover:after:w-full after:transition-all after:duration-300"
                    >
                        Solarmap
                    </Link>
                    <Link
                        to="/calculator"
                        className="relative text-[#082431] hover:text-[#7fc241] transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#7fc241] hover:after:w-full after:transition-all after:duration-300"
                    >
                        Calculator
                    </Link>
                    <Link
                        to="/gallary"
                        className="relative text-[#082431] hover:text-[#7fc241] transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#7fc241] hover:after:w-full after:transition-all after:duration-300"
                    >
                        Gallary
                    </Link>
                    <Link
                        to="/contact"
                        className="relative text-[#082431] hover:text-[#7fc241] transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#7fc241] hover:after:w-full after:transition-all after:duration-300"
                    >
                        Contact Us
                    </Link>
                </nav>


                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center text-[#082431] font-semibold">
                        <FiPhone className="text-[#7fc241] mr-2" size={20} />
                        <span>1 800 458 56 97</span>
                    </div>
                    <Link to="/login" className="bg-[#fccf15] hover:bg-[#ffdb4d] text-[#082431] font-bold rounded-full px-6 py-2 transition-all">
                        Login
                    </Link>
                </div>


                <button
                    className="md:hidden text-[#082431] focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#f3f9fd] text-center py-4 space-y-4 font-semibold text-[#082431]">
                    <Link to="" className="block hover:text-[#7fc241] transition duration-300">Home</Link>
                    <Link to="/solarmap" className="block hover:text-[#7fc241] transition duration-300">Solarmap</Link>
                    <Link to="/calculator" className="block hover:text-[#7fc241] transition duration-300">Calculator</Link>
                    <Link to="/gallary" className="block hover:text-[#7fc241] transition duration-300">Gallary</Link>
                    <Link to="/contact" className="block hover:text-[#7fc241] transition duration-300">Contact Us</Link>
                    <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-center items-center text-[#082431] font-semibold">
                            <FiPhone className="text-[#7fc241] mr-2" size={20} />
                            <span>1 800 458 56 97</span>
                        </div>
                        <button className="mt-3 bg-[#fccf15] hover:bg-[#ffdb4d] text-[#082431] font-bold rounded-full px-6 py-2 transition-all">
                            Contact us
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

