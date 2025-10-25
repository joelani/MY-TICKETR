import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Tickets from "./Tickets";
import Overview from "./Overview";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [active, setActive] = useState("overview");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-white">Dashboard</h2>
        <button
          onClick={() => setActive("overview")}
          className={`text-left text-gray-300 text-lg py-2 px-3 rounded ${
            active === "overview" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActive("tickets")}
          className={`text-left text-gray-300 text-lg py-2 px-3 rounded ${
            active === "tickets" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          Tickets
        </button>
        <button
          onClick={logout}
          className="mt-auto text-left py-2 px-3 rounded hover:bg-red-700 text-red-400"
        >
          Logout
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
