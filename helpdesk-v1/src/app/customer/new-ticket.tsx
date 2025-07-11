"use client";

export default function CustomerNewTicket() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Submit a New Ticket</h1>
      <form className="space-y-6 max-w-lg">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Subject</label>
          <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Brief summary of your issue" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-500" rows={5} placeholder="Describe your issue in detail" />
        </div>
        <button type="submit" className="px-6 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">Submit Ticket</button>
      </form>
    </div>
  );
} 