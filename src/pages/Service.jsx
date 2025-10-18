

import React from "react";
import { motion } from "framer-motion";
import {
    FaSolarPanel,
    FaWind,
    FaLeaf,
    FaBatteryFull,
    FaPhoneAlt,
} from "react-icons/fa";

const services = [
    { id: 1, icon: <FaBatteryFull />, title: "Energy Savings", desc: "Compelling for a renewable energy service" },
    { id: 2, icon: <FaSolarPanel />, title: "Solar Panel", desc: "Compelling for a renewable energy service" },
    { id: 3, icon: <FaLeaf />, title: "Eco Friendly", desc: "Compelling for a renewable energy service" },
    { id: 4, icon: <FaWind />, title: "Wind Turbines", desc: "Compelling for a renewable energy service" },
    { id: 5, icon: <FaSolarPanel />, title: "Smart Solutions", desc: "Compelling for a renewable energy service" },
    { id: 6, icon: <FaPhoneAlt />, title: "Contact Us", desc: "Reach out to our expert team for solar solutions" },
    { id: 7, icon: <FaLeaf />, title: "Eco Friendly", desc: "Compelling for a renewable energy service" },
    { id: 8, icon: <FaWind />, title: "Wind Turbines", desc: "Compelling for a renewable energy service" },
];

const Service = () => {
    return (
        <section className="py-13 bg-[#E6F8FE] font-[Poppins] text-center">
            <div className="mb-12 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
                    We Provide Professional <br className="hidden sm:block" /> Energy Solutions
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative bg-[#f6fbf7] border border-[#e7e7e7] rounded-2xl py-10 px-6 shadow-md cursor-pointer group"
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="text-green-600 text-6xl">{service.icon}</span>
                        </motion.div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                            {service.title}
                        </h3>

                        <p className="text-gray-500 text-sm mb-5">{service.desc}</p>

                        {service.title === "Contact Us" ? (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-600 text-white py-2 px-5 rounded-full hover:bg-green-700 transition-all duration-300"
                            >
                                Contact Now
                            </motion.button>
                        ) : (
                            <div className="flex justify-center items-center text-green-600 gap-2 cursor-pointer hover:underline">
                                <span className="text-sm font-medium">Read More</span>
                                <span className="text-lg">↗</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Service;
