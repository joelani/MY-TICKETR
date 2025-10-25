// utils/ticketStorage.js

const STORAGE_KEY = "ticketapp_tickets";

// Fetch all tickets
export const getTickets = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save all tickets
const saveTickets = (tickets) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

// Create new ticket
export const createTicket = (ticket) => {
  const tickets = getTickets();
  const newTicket = {
    id: Date.now().toString(),
    ...ticket,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tickets.push(newTicket);
  saveTickets(tickets);
  return newTicket;
};

// Update ticket
export const updateTicket = (id, updatedData) => {
  const tickets = getTickets();
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) return null;

  tickets[index] = {
    ...tickets[index],
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };
  saveTickets(tickets);
  return tickets[index];
};

// Delete ticket
export const deleteTicket = (id) => {
  const tickets = getTickets().filter((t) => t.id !== id);
  saveTickets(tickets);
};

// Get ticket by ID
export const getTicketById = (id) => {
  const tickets = getTickets();
  return tickets.find((t) => t.id === id);
};
