import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserData } from "../Types";

interface AuthContextType {
  user: UserData | null;
  updateUser: (user: UserData) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  token: String | null;
  updateToken: (token: String) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  useEffect(() => {
    localStorage.setItem("user", user ? JSON.stringify(user) : "");
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [user, token]);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  const updateUser = (newUser: UserData) => {
    setUser(newUser);
  };
  const updateToken = (token: String) => {
    setToken(token as string);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const authContextValue: AuthContextType = {
    user,
    updateUser,
    logout: handleLogOut,
    isAuthenticated,
    token,
    updateToken,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
