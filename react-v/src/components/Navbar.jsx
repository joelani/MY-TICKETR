import { LogOut, TicketCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  //  Check login state on mount
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    setIsLoggedIn(!!session);
  }, []);

  //  Handle logout
  const handleLogout = () => {
    if (window.confirm("Logout?")) {
      // localStorage.removeItem("ticketapp_session");
      logout();
      setIsLoggedIn(false);
      navigate("/signup");
    }
  };

  return (
    <div className="relative z-999">
      <nav className="max-w-[1200px] mt-6 flex items-center justify-between border border-blue-900 px-6 py-4 rounded-full text-gray-800 text-sm relative bg-white/70 backdrop-blur-md shadow-sm mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <TicketCheck width="28" height="28" className="text-blue-700" />
          <h1 className="text-lg font-semibold">My TicketR</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ml-8">
          <Link
            to="/"
            className="relative overflow-hidden h-6 group font-medium"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Home
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              Home
            </span>
          </Link>

          <Link
            to="/dashboard"
            className="relative overflow-hidden h-6 group font-medium"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Dashboard
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              Dashboard
            </span>
          </Link>

          <Link
            to="/dashboard"
            state={{ defaultTab: "tickets" }}
            className="relative overflow-hidden h-6 group font-medium"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              My Tickets
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              My Tickets
            </span>
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 shadow"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-300 hover:bg-red-400 text-red-600 px-5 py-2 rounded-full text-sm font-medium transition duration-300 shadow"
            >
              <span>Logout</span>
              <LogOut className="w-5 h-5 text-red-600" />
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 z-100 h-screen left-0 w-full bg-white/95 backdrop-blur-md shadow-md flex flex-col items-center gap-5 py-6 md:hidden text-base ">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/dashboard"
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard"
              state={{ defaultTab: "tickets" }}
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              My Tickets
            </Link>
            {!isLoggedIn ? (
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
              >
                Get Started
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="mt-auto flex bg-red-300 hover:bg-red-400 text-red-600 gap-3 px-5 py-2 rounded-full font-medium transition"
              >
                <span>Logout</span>
                <LogOut className="w-7 h-7 text-red-600" />
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
