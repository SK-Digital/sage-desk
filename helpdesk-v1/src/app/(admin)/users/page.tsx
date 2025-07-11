import React from "react";

export default function UsersPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
        <button className="px-4 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">+ Invite User</button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="p-8 text-center text-gray-400 dark:text-gray-500 text-lg">User table/list coming soon.</div>
      </div>
    </div>
  );
} 