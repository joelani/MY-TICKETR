// src/services/ticketService.js
const STORAGE_KEY = "ticketapp_tickets";

export function getTickets() {
  const tickets = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return tickets;
}

export function addTicket(ticket) {
  const tickets = getTickets();
  const newTicket = { id: Date.now(), ...ticket };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...tickets, newTicket]));
  return newTicket;
}

export function updateTicket(id, updatedTicket) {
  const tickets = getTickets();
  const newTickets = tickets.map((t) =>
    t.id === id ? { ...t, ...updatedTicket } : t
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newTickets));
}

export function deleteTicket(id) {
  const tickets = getTickets().filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}
