"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const BarChartOne = dynamic(() => import("@/components/charts/bar/BarChartOne"), { ssr: false });
const LineChartOne = dynamic(() => import("@/components/charts/line/LineChartOne"), { ssr: false });

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "agents", label: "Agent Performance" },
  { key: "customers", label: "Department Stats" },
  { key: "completion", label: "Completion Times" },
];

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Analytics Dashboard</h1>
      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition border-2 ${
              activeTab === tab.key
                ? "bg-brand-500 text-white border-brand-500"
                : "bg-brand-50 text-brand-700 border-transparent dark:bg-brand-900 dark:text-brand-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Stat Boxes */}
          <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 flex flex-col items-center shadow-sm hover:teal-glow">
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Total Tickets</div>
            <div className="text-4xl font-bold text-brand-500 mb-1">542</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">All time</div>
          </div>
          <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 flex flex-col items-center shadow-sm hover:teal-glow">
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Open Tickets</div>
            <div className="text-4xl font-bold text-brand-500 mb-1">38</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Currently open</div>
          </div>
          <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 flex flex-col items-center shadow-sm hover:teal-glow">
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Avg. Completion Time</div>
            <div className="text-4xl font-bold text-brand-500 mb-1">2.3 days</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</div>
          </div>
          <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 flex flex-col items-center shadow-sm hover:teal-glow">
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Joiners / Leavers</div>
            <div className="text-4xl font-bold text-brand-500 mb-1">22 / 12</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">This month</div>
          </div>
        </div>
      )}
      {activeTab === "agents" && (
        <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 hover:teal-glow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Agent Performance</h2>
          <div className="w-full h-40 bg-transparent rounded-lg flex items-center justify-center mb-4">
            <BarChartOne label="Tickets Closed by Agent" categories={["Jane Doe","John Smith","Alex Lee"]} seriesData={[58, 42, 67]} />
          </div>
          <ul className="space-y-2">
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>Jane Doe</span><span className="text-green-600 font-semibold">+8%</span></li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>John Smith</span><span className="text-red-600 font-semibold">-3%</span></li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>Alex Lee</span><span className="text-green-600 font-semibold">+12%</span></li>
          </ul>
        </div>
      )}
      {activeTab === "customers" && (
        <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 hover:teal-glow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tickets by Department</h2>
          <div className="w-full h-40 bg-transparent rounded-lg flex items-center justify-center mb-4">
            <BarChartOne label="Tickets by Department" categories={["HR","Finance","IT","Support","Facilities","Legal","Marketing"]} seriesData={[32, 21, 45, 38, 17, 9, 24]} />
          </div>
          <ul className="space-y-2">
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>HR</span><span className="text-green-600 font-semibold">+5%</span></li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>Finance</span><span className="text-red-600 font-semibold">-2%</span></li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>IT</span><span className="text-green-600 font-semibold">+9%</span></li>
          </ul>
        </div>
      )}
      {activeTab === "completion" && (
        <div className="rounded-xl border border-brand-500 bg-white dark:bg-gray-900 p-6 overflow-x-auto hover:teal-glow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Completion Times</h2>
          <div className="w-full min-w-[600px] h-80 bg-transparent rounded-lg flex items-center justify-center mb-4 border border-brand-500" style={{overflow: 'hidden'}}>
            <LineChartOne />
          </div>
          <ul className="space-y-2 text-right">
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>Avg. Completion</span><span className="font-semibold">2.3 days</span></li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>Fastest</span><span className="font-semibold">1 hour</span></li>
            <li className="flex justify-between text-gray-700 dark:text-gray-300"><span>Slowest</span><span className="font-semibold">7 days</span></li>
          </ul>
        </div>
      )}
    </div>
  );
} 