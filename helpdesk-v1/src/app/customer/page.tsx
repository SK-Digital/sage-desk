"use client";
import Link from "next/link";

export default function CustomerHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Welcome to SageDesk Support</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Submit a new request or view your existing tickets below.</p>
      <Link href="/customer/new-ticket" className="px-4 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition mb-8 inline-block">Submit New Ticket</Link>
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Your Tickets</h2>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-gray-400 dark:text-gray-500 text-center">
          No tickets yet. Your submitted tickets will appear here.
        </div>
      </div>
    </div>
  );
} 