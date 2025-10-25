import { Link, useLocation } from "react-router-dom";
import { LogOut, Home, FileText, Settings } from "lucide-react";

export default function Sidebar({ onLogout }) {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path ? "bg-blue-600 text-white" : "text-gray-300";

  return (
    <aside className="bg-gray-900 text-gray-100 w-64 min-h-screen flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        TicketApp
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 ${active(
            "/dashboard"
          )}`}
        >
          <Home size={18} /> Dashboard
        </Link>

        <Link
          to="/tickets"
          className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 ${active(
            "/tickets"
          )}`}
        >
          <FileText size={18} /> My Tickets
        </Link>

        <Link
          to="/settings"
          className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 ${active(
            "/settings"
          )}`}
        >
          <Settings size={18} /> Settings
        </Link>
      </nav>

      <button
        onClick={onLogout}
        className="flex items-center justify-center gap-2 p-4 border-t border-gray-700 hover:bg-red-600 transition"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
