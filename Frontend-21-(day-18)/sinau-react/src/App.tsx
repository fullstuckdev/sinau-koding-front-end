import "./App.css";
import Layout from "./layout/Layout";
import About from "./page/About";
import Dashboard from "./page/Dashboard";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./page/Profile";
import Settings from "./page/Settings";
import ProductDetail from "./page/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
