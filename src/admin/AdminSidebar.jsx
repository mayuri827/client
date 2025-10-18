
import React from "react";
import {
    FaUserShield,
    FaPlusCircle,
    FaCalendarAlt,
    FaSignOutAlt,
    FaBars,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogoutAdminMutation } from "../redux/Apis/adminapi";
import { toast } from "react-toastify";

const AdminSidebar = ({ isOpen, setIsOpen }) => {
    const [logout, { isLoading }] = useLogoutAdminMutation();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            toast.success("Logout Successful!");
            navigate("/login");
        } catch (err) {
            toast.error("Logout failed. Please try again.");
        }
    };

    const menu = [
        {
            name: "Admin Profile",
            icon: <FaUserShield size={18} className="text-yellow-400" />,
            path: "/admin/adminprofile",
        },
        {
            name: "Contact-List",
            icon: <FaPlusCircle size={18} className="text-green-400" />,
            path: "/admin/contacttable",
        },
        {
            name: "Settings",
            icon: <FaCalendarAlt size={18} className="text-orange-400" />,
            path: "#",
        },
    ];

    return (
        <>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 bg-[#1e4f5e] text-white p-3 rounded-md shadow-md"
            >
                <FaBars />
            </button>


            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#261131] to-[#1f2a44] text-white 
          shadow-lg transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="p-4 text-center border-b border-gray-600">
                    <h2 className="text-2xl font-bold text-yellow-400">NewRa Grids</h2>
                </div>

                <ul className="flex-1 flex flex-col p-4 gap-4">
                    {menu.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300
                  ${location.pathname === item.path
                                        ? "bg-indigo-600 text-white shadow-lg"
                                        : "hover:bg-[#475569] text-white"
                                    }`}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}

                    <li className="mt-auto">
                        <button
                            onClick={handleLogout}
                            disabled={isLoading}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 w-full disabled:opacity-50"
                        >
                            <FaSignOutAlt size={18} />
                            <span>{isLoading ? "Logging out..." : "Logout"}</span>
                        </button>
                    </li>
                </ul>
            </aside>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default AdminSidebar;














