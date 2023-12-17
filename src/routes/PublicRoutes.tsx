import { useAuth } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const authenticated = isAuthenticated();

  if (authenticated) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoute;
