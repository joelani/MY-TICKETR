import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTickets } from "../../services/ticketService";

export default function Overview() {
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const inProgress = tickets.filter((t) => t.status === "in_progress").length;
  const closed = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className="p-6 text-gray-100">
      {/* Greeting */}
      <h2 className="text-3xl font-bold mb-2">
        Welcome back, {user?.name || "User"} 👋
      </h2>
      <p className="text-gray-400 mb-6">
        Here’s a quick summary of your ticket activity.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h3 className="text-gray-400 text-sm">Total Tickets</h3>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h3 className="text-gray-400 text-sm">Open</h3>
          <p className="text-3xl font-bold text-green-400">{open}</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h3 className="text-gray-400 text-sm">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-400">{inProgress}</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h3 className="text-gray-400 text-sm">Closed</h3>
          <p className="text-3xl font-bold text-gray-400">{closed}</p>
        </div>
      </div>

      {/* Recent Tickets */}
      <h3 className="text-xl font-semibold mb-3">Recent Tickets</h3>
      {tickets.length === 0 ? (
        <p className="text-gray-400">No tickets found.</p>
      ) : (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-700 text-sm uppercase">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets
                .slice(-5)
                .reverse()
                .map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-700">
                    <td className="p-3">{ticket.title}</td>
                    <td className="p-3 capitalize">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          ticket.status === "open"
                            ? "bg-green-600"
                            : ticket.status === "in_progress"
                            ? "bg-yellow-600"
                            : "bg-gray-500"
                        }`}
                      >
                        {ticket.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-400">
                      {new Date(ticket.id).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
