import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h1 className="logo">AI Sky Writer</h1>
        <div>
          {token ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button className="auth-btn" onClick={() => navigate("/login")}>Login</button>
              <button className="auth-btn register" onClick={() => navigate("/register")}>Register</button>
            </>
          )}
        </div>
      </nav>

      <div className="hero">
        <h2>
          Experience the Future of Writing in <br />
          <span className="gradient-text">Augmented Reality</span>
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
