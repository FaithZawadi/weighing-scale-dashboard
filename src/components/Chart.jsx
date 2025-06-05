import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ChartSection() {
  return (
    <div className="bg-white mt-6 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
      <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
        <Sparkles className="text-purple-500" />
        Recent Weight Readings & Operational Status (Future Feature)
      </h2>
      <p className="mt-2 text-gray-600">
        This section is designed to integrate dynamic charts for visualizing weight trends, operational uptime,
        and historical data, providing deeper analytical insights into scale performance.
      </p>
    </div>
  );
}