import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Tickets from "./Tickets";
import Overview from "./Overview";
import { LayoutDashboard, Ticket, LogOut, TicketCheck } from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [active, setActive] = useState("overview");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 max-md:w-fit max-md:px-2 bg-gray-900 p-4 flex flex-col">
        <h2 className="flex items-center gap-3 text-left text-xl font-bold mb-8 text-white">
          <TicketCheck size={32} />
          <span className=" hidden md:block">My TicketR</span>
        </h2>
        <button
          onClick={() => setActive("overview")}
          className={`flex items-center gap-3 text-left text-gray-300 text-lg py-2 px-3 rounded 
              ${active === "overview" ? "bg-gray-700" : "hover:bg-gray-800"}`}
        >
          <LayoutDashboard size={20} />
          <span className="hidden md:inline">Overview</span>
        </button>
        <button
          onClick={() => setActive("tickets")}
          className={`flex items-center gap-3 text-left text-gray-300 text-lg py-2 px-3 rounded 
              ${active === "tickets" ? "bg-gray-700" : "hover:bg-gray-800"}`}
        >
          <Ticket size={20} />
          <span className="hidden md:inline">Tickets</span>
        </button>
        <button
          onClick={logout}
          className="mt-auto flex items-center gap-3 text-left py-2 px-3 rounded hover:bg-red-700 text-red-400"
        >
          <LogOut size={20} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </aside>

      {/* Main Section */}
      <main className="flex-1 bg-gray-950 text-white p-6">
        {active === "overview" && (
          <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
        )}
        {active === "overview" && <Overview />}
        {active === "tickets" && <Tickets />}
      </main>
    </div>
  );
}
