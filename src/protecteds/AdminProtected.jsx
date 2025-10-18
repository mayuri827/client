
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ compo }) => {
    const { admin } = useSelector((state) => state.adminauth)


    if (!admin) {
        return <Navigate to="/login" replace />;
    }


    return <>{compo}</>;
};

export default AdminProtected;
