import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminPagesProtected = () => {
  const admin = localStorage.getItem("token");
  return admin ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default AdminPagesProtected;
