import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Auth/LandingPage";
import AuthLayout from "../layout/AuthLayout";
import Admin from "../pages/Dashboard/Admin";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/dashboard" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
