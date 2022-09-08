import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

export const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
