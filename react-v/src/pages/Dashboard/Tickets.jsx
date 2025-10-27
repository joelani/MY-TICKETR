import { useState, useEffect } from "react";

import { toast } from "react-hot-toast";
import {
  getTickets,
  addTicket,
  updateTicket,
  deleteTicket,
} from "../../services/ticketService";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return toast.error("Title is required!");
    if (!["open", "in_progress", "closed"].includes(form.status))
      return toast.error("Invalid status value!");

    if (editing) {
      updateTicket(editing, form);
      toast.success("Ticket updated!");
      setEditing(null);
    } else {
      addTicket(form);
      toast.success("Ticket created!");
    }

    setForm({ title: "", description: "", status: "open" });
    setTickets(getTickets());
  };

  const handleEdit = (ticket) => {
    setEditing(ticket.id);
    setForm({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
    });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      deleteTicket(id);
      toast.success("Ticket deleted!");
      setTickets(getTickets());
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🎟️ Ticket Management</h2>

      {/* Ticket Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-xl shadow-md mb-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Title *</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Status *</label>
            <select
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {editing ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>

      {/* Ticket List */}
      <div className="space-y-4">
        {tickets.length === 0 ? (
          <p className="text-gray-400">No tickets yet.</p>
        ) : (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-semibold">{ticket.title}</h3>
                <p className="text-sm text-gray-400">{ticket.description}</p>
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                    ticket.status === "open"
                      ? "bg-green-600"
                      : ticket.status === "in_progress"
                      ? "bg-amber-500"
                      : "bg-gray-500"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(ticket)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
