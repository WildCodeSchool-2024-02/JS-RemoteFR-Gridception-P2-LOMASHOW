import { createContext, useContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const data = {
    username: "lomashow",
    password: "benoitlegoat",
    likedMovies: "movies",
  };

  const contextValue = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
      data,
    }),
    [authenticated, setAuthenticated, data]
  );

  useEffect(() => {
    const storedLogin = localStorage.getItem("logged");

    if (storedLogin === "true" && authenticated === false) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
