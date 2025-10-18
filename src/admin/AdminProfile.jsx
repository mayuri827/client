

import React from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import { useGetAdminDataQuery, useLogoutAdminMutation } from "../redux/apis/adminapi";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
    const navigate = useNavigate();
    const { data: adminData, isLoading, isError, error } = useGetAdminDataQuery();
    const [adminlogout] = useLogoutAdminMutation();

    const handleLogout = async () => {
        try {
            await adminlogout().unwrap();
            navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading admin data...</p>
            </div>
        );
    }

    if (isError || !adminData) {
        console.error("Admin fetch error:", error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Error fetching admin data.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
            <div className="relative bg-white shadow-2xl rounded-3xl w-full max-w-md p-6 md:p-8 flex flex-col items-center transition-transform transform hover:scale-[1.02]">


                <div className="absolute -top-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 shadow-xl">
                    <img
                        src="https://thumbs.dreamstime.com/b/admin-icon-vector-female-user-person-profile-avatar-symbol-business-flat-color-glyph-pictogram-sign-illustration-239872048.jpg"
                        alt="Admin"
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                </div>

                <div className="mt-20 flex flex-col items-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                        {adminData.name}
                    </h2>

                    <div className="flex flex-col gap-1 text-slate-600 mb-4">
                        <p>{adminData.email}</p>
                        <p>{adminData.mobile}</p>
                    </div>


                    <div className="w-full flex gap-6 mt-4 flex-wrap justify-center sm:justify-between">
                        <button className="flex-1 min-w-[270px] flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                            <FaEdit />
                            Edit Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex-1 min-w-[270px] flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 text-white py-3 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 opacity-10 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default AdminProfile;

