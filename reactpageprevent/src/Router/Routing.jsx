import AdminPagesProtected from "../authenticate/AdminPagesProtected";
import Dashboard from "../page/admin/Dashboard";
import Login from "../page/auth/Login";
import { useNavigate, createBrowserRouter } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);
};

import LoginPageProtected from "../authenticate/LoginPageProtected";
import { useEffect } from "react";
const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/auth",
    element: <LoginPageProtected />,
    children: [
      {
        path: "login",
        element: (
          // <AuthLayout>
          <Login />
          // </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPagesProtected />,
    children: [
      {
        path: "dashboard",
        element: (
          // <DashboardLayout>
          <Dashboard />
          // </DashboardLayout>
        ),
      },
    ],
  },
]);

export default Routing;
