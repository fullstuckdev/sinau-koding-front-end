import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const token = localStorage.getItem("accessToken");

  console.log(token)

  if (!token) {
    return <Navigate to="/login" />;
  }else if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard">
      <h2>Welcome, {user.firstName}</h2>
      <div className="user-info">
        <img src={user.image} alt="Profile" />
        <p>Email: {user.email}</p>
        <p>
          Full Name: {user.firstName} {user.lastName}
        </p>
        <p>Gender: {user.gender}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
