import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("ticketapp_session"));
    if (session) setUser(session);
  }, []);

  // Signup
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) return { success: false, message: "User already exists" };

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("ticketapp_users", JSON.stringify(users));

    localStorage.setItem("ticketapp_session", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  // Login
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!existingUser)
      return { success: false, message: "Invalid email or password" };

    localStorage.setItem("ticketapp_session", JSON.stringify(existingUser));
    setUser(existingUser);
    return { success: true };
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
