import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserData } from "../Types";

interface AuthContextType {
  user: UserData | null | undefined;
  updateUser: (user: UserData) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserData | null | undefined>(undefined);

  useEffect(() => {
    // Load user data from local storage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleLogOut = () => {
    localStorage.removeItem("user"); // Remove user data from local storage
    setUser(null); // Set the user to null in the context
  };

  const updateUser = (user: UserData) => {
    localStorage.setItem("user", JSON.stringify(user)); // Store user data in local storage
    setUser(user); // Set the user in the context
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const authContextValue: AuthContextType = {
    user,
    updateUser,
    logout: handleLogOut,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
