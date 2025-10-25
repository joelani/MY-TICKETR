import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Tickets from "./pages/Dashboard/Tickets";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";
import DashboardHome from "./pages/Dashboard/DashboardHome";

function App() {
  const location = useLocation();

  // Hide Navbar & Footer on dashboard and other app pages
  const hideNavbarFooter = location.pathname.startsWith("/dashboard");
  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested routes inside the dashboard */}
          <Route index element={<Dashboard />} /> {/* summary stats page */}
          <Route path="tickets" element={<Tickets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
