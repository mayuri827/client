
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useLoginAdminMutation } from "../redux/Apis/adminapi";

const Login = () => {
    const navigate = useNavigate();
    const [adminLogin, { data, isLoading, isSuccess, isError, error }] =
        useLoginAdminMutation();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid email").required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            adminLogin(values);
            resetForm();
        },
    });


    useEffect(() => {
        if (isSuccess) {
            toast.success("Admin Login Successfully ✅");
            navigate("/admin/adminprofile");
        }
    }, [isSuccess, navigate]);


    useEffect(() => {
        if (isError) {
            const msg = error?.data?.message || "Something went wrong 🚫";
            toast.error(msg);
        }
    }, [isError, error]);

    const handleClass = (field) =>
        `w-full p-3 mb-4 rounded-md ${formik.touched[field] && formik.errors[field]
            ? "border-2 border-red-500 bg-gray-100"
            : "border border-gray-200 bg-gray-100"
        } focus:outline-none focus:ring-2 focus:ring-orange-400`;

    return (

        // console.log("{adminEmail:mayuri@gmail.com,pass:Mayuri@123}")

        <div className="min-h-screen flex justify-center items-center bg-[#fff6f6] px-4" >
            <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-lg bg-white">


                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-10"
                >
                    <div className="me-60">
                        <h1 className="mt-[-20px] ">{`Email : mayuri@gmail.com`}</h1>
                        <h1 className=" ">{`Pass :Mayuri@123`}</h1>
                    </div>

                    <h1 className="text-3xl font-bold mb-2">NewRa Grids</h1>
                    <p className="text-gray-700 mb-6 text-lg text-center">
                        Sign Into Your Account
                    </p>

                    <form onSubmit={formik.handleSubmit} className="w-full">
                        <input
                            {...formik.getFieldProps("email")}
                            type="email"
                            placeholder="Email Address"
                            className={handleClass("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mb-2">{formik.errors.email}</p>
                        )}

                        <input
                            {...formik.getFieldProps("password")}
                            type="password"
                            placeholder="Password"
                            className={handleClass("password")}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs mb-2">{formik.errors.password}</p>
                        )}

                        <div className="flex justify-between items-center w-full mb-4 text-sm text-gray-600">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="hover:text-orange-500">
                                Forgot Password
                            </a>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </motion.button>
                    </form>

                    <p className="mt-4 text-gray-600 text-center">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-orange-500 font-semibold">
                            Register here
                        </Link>
                    </p>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white flex flex-col justify-center items-center relative p-10 md:rounded-l-[150px]"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl font-bold mb-4 text-center"
                    >
                        WELCOME TO SOLAR ADMIN
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center text-lg max-w-sm leading-relaxed"
                    >
                        Let’s power the world with clean and green energy.
                        Manage your solar projects efficiently with Logdy Admin Panel ⚡
                    </motion.p>
                </motion.div>
            </div>


        </div >
    );
};

export default Login;

