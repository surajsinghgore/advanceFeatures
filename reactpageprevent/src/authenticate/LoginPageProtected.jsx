import { Outlet, Navigate } from "react-router-dom";

const LoginPageProtected = () => {
  const admin = localStorage.getItem("token");
  return admin ? <Navigate to="/admin/dashboard/" /> : <Outlet />;
};

export default LoginPageProtected;
