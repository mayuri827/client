import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#0f3042] text-white font-[Poppins] tracking-wide">

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-2xl font-semibold mb-3 leading-snug">
                        Preserve nature <br />
                        with a theme made <br />
                        for true green life.
                    </h2>

                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <div className="bg-[#10394d] p-3 rounded-full">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p>(+2) 0109 -1812-347 (+2)</p>
                                <p>0109 -1812-347</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-[#10394d] p-3 rounded-full">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p>greenly_help@gmail.com</p>
                                <p>info@yourdomain.com</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-[#10394d] p-3 rounded-full">
                                <FaMapMarkerAlt />
                            </div>
                            <p>201 Stokes Isle Apt. 896, New York 1001</p>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
                    <p className="text-sm mb-4 leading-relaxed">
                        Stay always in touch! Subscribe to our newsletter.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-[#10394d] w-full sm:w-auto flex-1 px-4 py-3 rounded-md text-white placeholder-gray-300 focus:outline-none"
                        />
                        <button className="bg-[#9bdc28] hover:bg-[#8cc526] text-black font-semibold px-6 py-3 rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>


            <div className="border-t border-[#1d4d5f] py-6 text-sm">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6">
                    <p>Copyright © 2022 Greenly, All Rights Reserved.</p>


                    <div className="flex items-center gap-4 text-lg">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Legal Terms</a>
                        <a href="#" className="hover:underline">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
