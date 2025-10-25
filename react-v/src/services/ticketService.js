// src/services/ticketService.js
const getUserKey = () => {
  const session = JSON.parse(localStorage.getItem("ticketapp_session"));
  return session ? `ticketapp_tickets_${session.email}` : null;
};

export function getTickets() {
  const key = getUserKey();
  if (!key) return [];
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function addTicket(ticket) {
  const key = getUserKey();
  if (!key) return;
  const tickets = getTickets();
  const newTicket = { ...ticket, id: Date.now() };
  localStorage.setItem(key, JSON.stringify([...tickets, newTicket]));
}

export function updateTicket(id, updatedData) {
  const key = getUserKey();
  if (!key) return;
  const tickets = getTickets().map((t) =>
    t.id === id ? { ...t, ...updatedData } : t
  );
  localStorage.setItem(key, JSON.stringify(tickets));
}

export function deleteTicket(id) {
  const key = getUserKey();
  if (!key) return;
  const tickets = getTickets().filter((t) => t.id !== id);
  localStorage.setItem(key, JSON.stringify(tickets));
}
