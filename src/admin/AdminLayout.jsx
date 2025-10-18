


import React, { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex min-h-screen bg-gray-100">

            <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <main
                className={`flex-1 p-6 w-full transition-all duration-300
                    ${isOpen ? "md:ml-64" : "md:ml-64"}`}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;


