"use client";
import Link from "next/link";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="SageDesk Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">SageDesk</span>
        </div>
        <Link href="/" className="px-4 py-2 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition">Switch to Agent/Admin</Link>
      </header>
      <main className="max-w-2xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
} 