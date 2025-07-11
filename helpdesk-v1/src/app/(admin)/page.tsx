import React from "react";

const stats = [
  { label: "Total Tickets", value: 128 },
  { label: "Tickets Today", value: 7 },
  { label: "Open Tickets", value: 23 },
  { label: "Closed Tickets", value: 105 },
];

const recentTickets = [
  { id: "#1238", subject: "Monitor not working", status: "Open", created: "2024-06-06" },
  { id: "#1237", subject: "Leaver offboarding", status: "Closed", created: "2024-06-04" },
  { id: "#1236", subject: "Office chair broken", status: "Open", created: "2024-06-03" },
  { id: "#1235", subject: "New joiner onboarding", status: "In Progress", created: "2024-06-02" },
  { id: "#1234", subject: "Cannot access VPN", status: "Open", created: "2024-06-01" },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Welcome to SageDesk</h1>
      {/* Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 flex flex-col items-center shadow-sm hover:teal-glow"
          >
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
            <div className="text-gray-700 dark:text-gray-300 text-lg font-medium text-center">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Recent Tickets */}
      <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 hover:teal-glow">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Most Recent Tickets</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Subject</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Created</th>
            </tr>
          </thead>
          <tbody>
            {recentTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-4 py-2 text-gray-900 dark:text-white">{ticket.id}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{ticket.subject}</td>
                <td className="px-4 py-2"><span className="px-2 py-1 rounded bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400 text-xs font-semibold">{ticket.status}</span></td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{ticket.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
