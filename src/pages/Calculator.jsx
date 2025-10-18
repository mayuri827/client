import React, { useState } from "react";
import { FaSun, FaBolt, FaLeaf, FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";

const SolarCalculator = () => {
    const [usage, setUsage] = useState("");
    const [tariff, setTariff] = useState("");
    const [sunlight, setSunlight] = useState("");
    const [efficiency, setEfficiency] = useState("");
    const [result, setResult] = useState(null);

    const calculateSavings = () => {
        if (!usage || !tariff || !sunlight || !efficiency) {
            alert("Please fill in all fields!");
            return;
        }

        const monthly = usage * tariff * sunlight * (efficiency / 100);
        const yearly = monthly * 12;
        setResult({ monthly, yearly });
    };

    return (
        <div className="min-h-screen mt-16 flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0f2f1] to-[#c8e6c9] p-8 relative overflow-hidden">



            <motion.div
                className="absolute top-20 right-10 text-yellow-400 text-7xl opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <FaSun />
            </motion.div>

            <motion.div
                className="absolute bottom-16 left-10 text-green-400 text-6xl opacity-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <FaLeaf />
            </motion.div>


            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl w-[800px] bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-10 flex flex-col md:flex-row items-center md:space-x-10 relative z-10"
            >

                <div className="flex-1 w-full space-y-5">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent mb-6 text-center md:text-left">
                        ☀️ Smart Solar Savings Calculator
                    </h2>

                    <div className="space-y-4">

                        <div>
                            <label className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                                <FaBolt className="text-yellow-500" /> Current Usage (kWh)
                            </label>
                            <input
                                type="number"
                                value={usage}
                                onChange={(e) => setUsage(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>


                        <div>
                            <label className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                                <FaCoins className="text-amber-500" /> Tariff Rate (₹/kWh)
                            </label>
                            <input
                                type="number"
                                value={tariff}
                                onChange={(e) => setTariff(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>


                        <div>
                            <label className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                                <FaSun className="text-yellow-400" /> Sunlight Hours/Day
                            </label>
                            <input
                                type="number"
                                value={sunlight}
                                onChange={(e) => setSunlight(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>


                        <div>
                            <label className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                                <FaLeaf className="text-green-600" /> Efficiency (%)
                            </label>
                            <input
                                type="number"
                                value={efficiency}
                                onChange={(e) => setEfficiency(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={calculateSavings}
                            className="mt-6 w-full py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-400/40 transition"
                        >
                            Calculate Savings
                        </motion.button>
                    </div>
                </div>


                {result && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 mt-8 md:mt-0 bg-gradient-to-br from-teal-50 to-green-100 p-8 rounded-2xl shadow-inner text-center space-y-6 relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute top-0 right-0 text-yellow-400 text-5xl opacity-40"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <FaCoins />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-green-700">
                            🌿 Estimated Savings
                        </h3>

                        <p className="text-lg text-gray-700">
                            Monthly Savings:
                            <span className="block text-3xl font-extrabold text-teal-700 mt-1">
                                ₹ {result.monthly.toFixed(2)}
                            </span>
                        </p>

                        <p className="text-lg text-gray-700">
                            Yearly Savings:
                            <span className="block text-3xl font-extrabold text-teal-700 mt-1">
                                ₹ {result.yearly.toFixed(2)}
                            </span>
                        </p>

                        <motion.div
                            className="mt-4 text-green-500 text-lg font-medium"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Great job! You’re helping the planet 🌎
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default SolarCalculator;

