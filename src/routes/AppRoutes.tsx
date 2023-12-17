import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Auth/LandingPage";
import AuthLayout from "../layout/AuthLayout";
import Admin from "../pages/Dashboard/Admin";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
// import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import Teacher from "../pages/Dashboard/Teacher";
import StudentProfile from "../pages/Student/StudentProfile";
import StudentResult from "../pages/Student/StudentResult";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import UpdateProfile from "../pages/Student/UpdateProfile";
import ViewTeachers from "../pages/Admin/ViewTeachers";
import ViewGrades from "../pages/Admin/ViewGrades";

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
      <Route
        path="/dashboard"
        element={
          <PrivateRoute roles={["admin", "student", "teacher"]}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/update-profile"
        element={
          <PrivateRoute roles={["student"]}>
            <UpdateProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/teachers"
        element={
          <PrivateRoute roles={["admin"]}>
            <ViewTeachers />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/grades"
        element={
          <PrivateRoute roles={["admin"]}>
            <ViewGrades />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/profile"
        element={
          <PrivateRoute roles={["student"]}>
            <StudentProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/result"
        element={
          // <PrivateRoute roles={["admin"]}>
          <StudentResult />
          // </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/teacher"
        element={
          // <PrivateRoute roles={["admin"]}>
          <Teacher />
          // </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
