import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

interface User {
  name: string;
  email: string;
  picture: string;
}

interface AuthContextType {
  user: User | null;
  login: (credential: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Silent login hook
  const silentLogin = useGoogleLogin({
    flow: "implicit",
    prompt: "none",
    onSuccess: (tokenResponse) => {
      if (tokenResponse.access_token) {
        fetchUserInfo(tokenResponse.access_token);
      }
    },
    onError: () => {
      console.log("Silent login failed");
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    if (token) {
      validateToken(token);
    } else {
      silentLogin();
    }

    // 🔄 Setup refresh every 45 minutes
    const refreshInterval = setInterval(() => {
      console.log("Refreshing Google session silently...");
      silentLogin();
    }, 45 * 60 * 1000); // 45 min

    return () => clearInterval(refreshInterval);
  }, []);

  const validateToken = async (token: string) => {
    try {
      const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
      if (!res.ok) throw new Error("Invalid token");

      const data = await res.json();
      const userData: User = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
      setUser(userData);
    } catch (error) {
      console.error("Token validation failed:", error);
      localStorage.removeItem("id_token");
      silentLogin(); // fallback to re-login
    }
  };

  const fetchUserInfo = async (access_token: string) => {
    try {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      const data = await res.json();
      const userData: User = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
      setUser(userData);
      localStorage.setItem("id_token", access_token);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  const login = (credential: string) => {
    localStorage.setItem("id_token", credential);
    const decoded: any = jwtDecode(credential);
    const userData: User = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    };
    setUser(userData);
  };

  const logout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("id_token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};