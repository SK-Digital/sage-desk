"use client";

import React, { useState } from "react";
import Link from "next/link";

// Ticket type
interface Ticket {
  id: string;
  subject: string;
  status: string;
  assignee: string;
  created: string;
  team: string;
}

const TEAMS = [
  { key: "all", label: "All Tickets" },
  { key: "elc", label: "Employee Life Cycle" },
  { key: "it", label: "IT Support" },
  { key: "facilities", label: "Facilities" },
];

const TICKETS: Ticket[] = [
  { id: "#1234", subject: "Cannot access VPN", status: "Open", assignee: "Jane Doe", created: "2024-06-01", team: "it" },
  { id: "#1235", subject: "New joiner onboarding", status: "In Progress", assignee: "John Smith", created: "2024-06-02", team: "elc" },
  { id: "#1236", subject: "Office chair broken", status: "Open", assignee: "Alex Lee", created: "2024-06-03", team: "facilities" },
  { id: "#1237", subject: "Leaver offboarding", status: "Closed", assignee: "Jane Doe", created: "2024-06-04", team: "elc" },
];

export default function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [activeTeam, setActiveTeam] = useState("all");

  const filteredTickets = activeTeam === "all"
    ? TICKETS
    : TICKETS.filter((t) => t.team === activeTeam);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tickets</h1>
        <button className="px-4 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">+ New Ticket</button>
      </div>
      {/* Team Tabs */}
      <div className="flex gap-2 mb-6">
        {TEAMS.map((team) => (
          <button
            key={team.key}
            onClick={() => setActiveTeam(team.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition border-2 ${
              activeTeam === team.key
                ? "bg-brand-500 text-white border-brand-500"
                : "bg-brand-50 text-brand-700 border-transparent dark:bg-brand-900 dark:text-brand-200"
            }`}
          >
            {team.label}
          </button>
        ))}
      </div>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <input
          type="text"
          placeholder="Search tickets..."
          className="w-full sm:w-64 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        {/* Add filter dropdowns here as needed */}
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Subject</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Assignee</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Created</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400 dark:text-gray-500">No tickets for this team.</td>
              </tr>
            ) : (
              filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">{ticket.id}</td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{ticket.subject}</td>
                  <td className="px-4 py-2"><span className="px-2 py-1 rounded bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400 text-xs font-semibold">{ticket.status}</span></td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{ticket.assignee}</td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{ticket.created}</td>
                  <td className="px-4 py-2 text-right">
                    <button className="text-brand-500 hover:underline" onClick={() => { setIsModalOpen(true); setSelectedTicket(ticket); }}>View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Ticket Details Modal */}
      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-10 relative border border-brand-500 hover:teal-glow">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedTicket.id}</h2>
            <div className="mb-6 text-lg text-gray-800 dark:text-gray-200">{selectedTicket.subject}</div>
            <div className="mb-3">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Status:</span> <span className="px-2 py-1 rounded bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400 text-xs font-semibold">{selectedTicket.status}</span>
            </div>
            <div className="mb-3">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Assignee:</span> <span className="text-gray-800 dark:text-gray-200">{selectedTicket.assignee}</span>
            </div>
            <div className="mb-3">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Created:</span> <span className="text-gray-800 dark:text-gray-200">{selectedTicket.created}</span>
            </div>
            <div className="mt-8">
              <button className="px-6 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">Add Comment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 