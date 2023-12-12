import { useAuth } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: string[];
}) => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const authenticated = isAuthenticated();

  const userHasRequiredRole = user && roles.includes(user.role);

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!userHasRequiredRole) {
    return "Acess Denied";
  }

  return children;
};

export default PrivateRoute;
