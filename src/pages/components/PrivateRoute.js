import React from "react";
import {  Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoute({children}) {
  const { currentUser } = useAuth();
  const location = useLocation();

    if(!currentUser) {
        return (
            <Navigate to="/login" state={{from: location}} />
        );
    }

    return children;
}
