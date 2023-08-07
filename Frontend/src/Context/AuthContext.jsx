import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, verityTokenRequest } from "../Api/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un Provider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errores, setErrors] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      setErrors(null);
    } catch (error) {
      console.error(error);
      if (error.response) {
        setErrors(error.response.data);
      } else {
        setErrors("Ocurrió un error al procesar la solicitud.");
      }
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verityTokenRequest(cookies.token);

        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
        }

        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, loading, logout, isAuthenticated, errores }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
