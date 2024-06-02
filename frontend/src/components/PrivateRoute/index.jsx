import React from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ children }) {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoute;
