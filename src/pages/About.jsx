
import React from "react";
import {
    FaWind,
    FaBatteryFull,
    FaLightbulb,
    FaSolarPanel,
    FaChargingStation,
} from "react-icons/fa";
import { motion } from "framer-motion";
import solar from "../assets/solar.png";

const About = () => {
    return (
        <section className="bg-[#E6F8FE] font-[Poppins] text-center px-5 md:px-10 overflow-hidden">

            <motion.div
                className="mb-12 "
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h3 className="text-sm uppercase text-[#0f2f39] tracking-[2px] font-semibold mb-3">
                    About Us
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0f073e] leading-snug">
                    We Offer Special Solar <br /> Energy Solution
                </h2>
            </motion.div>


            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mb-14"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
            >

                {[
                    { icon: <FaWind className="text-[#4da3e0]" size={50} />, title: "Energy Solutions" },
                    { icon: <FaBatteryFull className="text-[#00b894]" size={50} />, title: "Global Expertise" },
                    { icon: <FaLightbulb className="text-[#ffb100]" size={50} />, title: "For Commercial" },
                    { icon: <FaSolarPanel className="text-[#74b9ff]" size={50} />, title: "Execute Project" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center text-center max-w-[220px]"
                        whileHover={{ scale: 1.08, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 150 }}
                    >
                        <div className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg mb-5">
                            {item.icon}
                        </div>
                        <h4 className="font-semibold text-[#0f2f39] text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Vast experience in power evacuation, land procurement.
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.button
                className="bg-[#ffcc00] hover:bg-[#f7b500] text-[#0f2f39] font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300 mb-20"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #f7b500" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                See More
            </motion.button>


            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 text-left lg:text-left">

                <motion.div
                    className="w-full lg:w-1/2 flex justify-center relative"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.img
                        src={solar}
                        alt="Solar Building"
                        className="w-[90%] max-w-[600px]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />


                    <motion.div
                        className="absolute -bottom-6 -right-6 w-[220px] h-[220px] rounded-full  to-transparent blur-2xl"
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.6, 0.8, 0.6],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    ></motion.div>
                </motion.div>


                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h4 className="uppercase text-[#0f2f39] text-sm font-semibold mb-3 tracking-[1px]">
                        Why Choose Us!
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0f073e] mb-6 leading-snug">
                        We’re Using Solar <br /> Power to Simplify
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-[550px]">
                        We’re able to offset expensive electricity prices because our
                        solar panels produce energy much more efficiently than traditional
                        utilities. You save money.
                    </p>

                    <div className="flex flex-col gap-8">
                        <motion.div
                            className="flex items-start gap-5"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="bg-[#77c043] w-14 h-14 rounded-full flex justify-center items-center shadow-md">
                                <FaSolarPanel className="text-white text-2xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#0f073e] text-lg">
                                    Alternative Solar Energy Solution
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Extreme attention to detail is the essence of Boo’s unique
                                    design. Mundi eu sea, liber option servicii.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-start gap-5"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="bg-[#77c043] w-14 h-14 rounded-full flex justify-center items-center shadow-md">
                                <FaChargingStation className="text-white text-2xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#0f073e] text-lg">
                                    Special Solar EV Charging Port
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Extreme attention to detail is the essence of Boo’s unique
                                    design. Mundi eu sea, liber option servicii.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="py-20" />
        </section>
    );
};

export default About;


