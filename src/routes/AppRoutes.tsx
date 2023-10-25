import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Auth/LandingPage";
import AuthLayout from "../layout/AuthLayout";
import Admin from "../pages/Dashboard/Admin";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="/dashboard/admin"
        element={
          <PrivateRoute roles={["admin"]}>
            <Admin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
