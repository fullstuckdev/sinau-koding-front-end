import {NavLink, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <NavLink to="profile">Profile</NavLink> |{" "}
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
