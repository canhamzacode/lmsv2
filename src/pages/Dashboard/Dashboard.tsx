import { useAuth } from "../../providers/AuthProvider";
import Teacher from "./Teacher";
import Admin from "./Admin";
import User from "./User";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {user &&
        (user.role === "teacher" ? (
          <Teacher />
        ) : user.role === "admin" ? (
          <Admin />
        ) : user.role === "student" ? (
          <User />
        ) : (
          navigate("/login")
        ))}
    </>
  );
};

export default Dashboard;
