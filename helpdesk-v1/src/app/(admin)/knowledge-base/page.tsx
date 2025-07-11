import React from "react";

export default function KnowledgeBasePage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Knowledge Base</h1>
        <button className="px-4 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">+ New Article</button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="p-8 text-center text-gray-400 dark:text-gray-500 text-lg">Knowledge base articles and search coming soon.</div>
      </div>
    </div>
  );
} 