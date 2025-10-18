

// import React from "react";
// import green from "../assets/greenry.png";
// import About from "./About";

// const Home = () => {
//     return <>
//         <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between bg-[#E6F8FE] min-h-screen px-6 md:px-16 py-12 overflow-hidden font-['Poppins']">

//             {/* ===== LEFT SIDE TEXT ===== */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left space-y-7 z-10">
//                 <h1 className="text-4xl md:text-5xl lg:text-[66px] font-extrabold text-[#122B49] leading-tight tracking-tight">
//                     Make the future <br /> bright with{" "}
//                     <span className="text-[#FFD43B] font-extrabold">solar</span>{" "}
//                     <span className="text-[#FFD43B] font-extrabold">power.</span>
//                 </h1>

//                 <p className="text-[#344B60] text-lg md:text-xl font-medium max-w-[500px] mx-auto lg:mx-0">
//                     Take the mystery out of selecting and developing leaders.
//                 </p>

//                 {/* ===== BUTTONS ===== */}
//                 <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-6">
//                     <button className="bg-[#8BC34A] hover:bg-[#7CB342] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9CCC65]">
//                         VIEW MORE
//                     </button>

//                     <button className="bg-[#0C2233] hover:bg-[#081826] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#0C2233]">
//                         ABOUT US
//                     </button>
//                 </div>
//             </div>

//             {/* ===== RIGHT SIDE IMAGE ===== */}
//             <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 z-10">
//                 <img
//                     src={green}
//                     alt="solar city"
//                     className="w-full max-w-[620px] object-contain"
//                 />
//             </div>


//         </section>
//         <About />
//     </>
// };

// export default Home;




import React from "react";
import { motion } from "framer-motion";
import green from "../assets/greenry.png";
import About from "./About";
import Service from "./Service";

const Home = () => {
    return (
        <>
            <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between bg-[#E6F8FE] min-h-screen px-6 md:px-16 py-12 overflow-hidden font-['Poppins']">


                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left space-y-7 z-10"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-[66px] font-extrabold text-[#122B49] leading-tight tracking-tight"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        Make the future <br /> bright with{" "}
                        <span className="text-[#FFD43B] font-extrabold">solar</span>{" "}
                        <span className="text-[#FFD43B] font-extrabold">power.</span>
                    </motion.h1>

                    <motion.p
                        className="text-[#344B60] text-lg md:text-xl font-medium max-w-[500px] mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        Take the mystery out of selecting and developing leaders.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.07,
                                boxShadow: "0px 0px 25px #9CCC65",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#8BC34A] hover:bg-[#7CB342] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300"
                        >
                            VIEW MORE
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.07,
                                boxShadow: "0px 0px 25px #0C2233",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0C2233] hover:bg-[#081826] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300"
                        >
                            ABOUT US
                        </motion.button>
                    </motion.div>
                </motion.div>


                <motion.div
                    className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 z-10"
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <motion.img
                        src={green}
                        alt="solar city"
                        className="w-full max-w-[800px] object-contain"
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                <motion.div
                    className="absolute -bottom-20 -right-20 w-[300px] h-[300px]  rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
            </section>

            <About />
            <Service />
        </>
    );
};

export default Home;

