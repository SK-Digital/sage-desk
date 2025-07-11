import React from "react";

export default function AssetsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Assets</h1>
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 mb-8">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
          Asset management is handled in Snipe-IT. This page provides a view-only summary of key asset data, such as laptop stock, by linking to Snipe-IT.
        </p>
        <a
          href="https://snipeit.example.com" // Replace with actual Snipe-IT URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition"
        >
          Open Snipe-IT
        </a>
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Laptop Stock</h2>
        <div className="text-gray-400 dark:text-gray-500 text-center">
          Laptop stock and other asset data will be displayed here via Snipe-IT integration.
        </div>
      </div>
    </div>
  );
} 