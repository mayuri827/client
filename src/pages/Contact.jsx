

import React from "react";
import { motion } from "framer-motion";
import {
    FaUserAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaRegCommentDots,
    FaMapMarkerAlt,
    FaClock,
    FaSun,
} from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useSendContactMutation } from "../redux/apis/contactapi";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const [sendContact, { isLoading }] = useSendContactMutation();


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
                .nullable(),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await sendContact(values).unwrap();
                toast.success("Message sent successfully!");
                resetForm();
                setTimeout(() => navigate("/"), 2000);
            } catch (error) {
                toast.error("Something went wrong!");
            }
        },
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E6F8FE] to-white flex items-center justify-center py-14 px-5 font-[Poppins] relative overflow-hidden mt-9">

            <motion.div
                className="absolute top-20 left-10 w-[180px] h-[180px] bg-gradient-to-tr from-[#FFD43B]/50 via-[#FFEA00]/40 to-transparent rounded-full blur-3xl"
                animate={{ x: [0, 25, 0], y: [0, -25, 0], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="absolute bottom-10 right-10 w-[220px] h-[220px] bg-gradient-to-bl from-[#77c043]/40 via-[#FFD43B]/30 to-transparent rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-xl bg-white/70 shadow-[0_8px_40px_rgba(0,0,0,0.1)] rounded-3xl w-full max-w-5xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-[#ffffff2a]"
            >
                <div className="p-8 md:p-10 relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C2233] mb-8 text-center">
                        Connect With Us ☀️
                    </h2>

                    <form onSubmit={formik.handleSubmit} className="space-y-5">

                        <div className="relative group">
                            <FaUserAlt className="absolute top-3 left-4 text-[#77c043]" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full pl-11 pr-4 py-3 rounded-full border ${formik.touched.name && formik.errors.name
                                    ? "border-red-400"
                                    : "border-gray-300"
                                    } focus:ring-2 focus:ring-[#77c043] outline-none text-sm bg-white/70 shadow-inner`}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-red-500 text-xs mt-1 ml-3">{formik.errors.name}</p>
                            )}
                        </div>

                        <div className="relative group">
                            <FaEnvelope className="absolute top-3 left-4 text-[#77c043]" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full pl-11 pr-4 py-3 rounded-full border ${formik.touched.email && formik.errors.email
                                    ? "border-red-400"
                                    : "border-gray-300"
                                    } focus:ring-2 focus:ring-[#77c043] outline-none text-sm bg-white/70 shadow-inner`}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-xs mt-1 ml-3">{formik.errors.email}</p>
                            )}
                        </div>

                        <div className="relative group">
                            <FaPhoneAlt className="absolute top-3 left-4 text-[#77c043]" />
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Phone (optional)"
                                value={formik.values.mobile}
                                onChange={(e) =>
                                    formik.setFieldValue("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))
                                }
                                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#77c043] outline-none text-sm"
                            />

                            {formik.touched.mobile && formik.errors.mobile && (
                                <p className="text-red-500 text-xs mt-1 ml-3">{formik.errors.mobile}</p>
                            )}
                        </div>


                        <div className="relative group">
                            <FaRegCommentDots className="absolute top-3 left-4 text-[#77c043]" />
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="Message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full pl-11 pr-4 py-3 rounded-2xl border ${formik.touched.message && formik.errors.message
                                    ? "border-red-400"
                                    : "border-gray-300"
                                    } focus:ring-2 focus:ring-[#77c043] outline-none text-sm bg-white/70 shadow-inner resize-none`}
                            ></textarea>
                            {formik.touched.message && formik.errors.message && (
                                <p className="text-red-500 text-xs mt-1 ml-3">{formik.errors.message}</p>
                            )}
                        </div>


                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-4 bg-gradient-to-r from-[#0C2233] to-[#122B49] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-[0_0_25px_#77c043aa] transition-all duration-300 disabled:opacity-70"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </motion.button>
                    </form>
                </div>


                <div className="bg-[#0C2233] text-white flex flex-col justify-center items-start p-8 md:p-10 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#122B49]/30 to-[#0C2233]/90 rounded-3xl"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative z-10"
                    >
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                        <div className="flex flex-col gap-5 text-sm">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-[#FFD43B]" />
                                <p>NewRa Grids HQ, Pune, Maharashtra</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#FFD43B]" />
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#FFD43B]" />
                                <p>iamjumbo333@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaClock className="text-[#FFD43B]" />
                                <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4 mt-8"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD43B] to-[#FF9F1C] flex items-center justify-center shadow-xl animate-pulse">
                                <FaSun className="text-white text-lg" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base">Go Solar with Confidence</h4>
                                <p className="text-gray-300 text-xs">
                                    Start your clean energy journey with our experts.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;

