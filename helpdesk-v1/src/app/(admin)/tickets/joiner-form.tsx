"use client";
import React from "react";

export default function JoinerForm() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">New Joiner Ticket</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Enter full name" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Start Date</label>
          <input type="date" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-500" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Department</label>
          <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option>-- Select department (Snipe-IT) --</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Manager</label>
          <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option>-- Select manager (Snipe-IT) --</option>
          </select>
        </div>
        <button type="submit" className="px-6 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">Submit Joiner Ticket</button>
      </form>
    </div>
  );
} 