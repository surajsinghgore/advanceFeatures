import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, admin!</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
