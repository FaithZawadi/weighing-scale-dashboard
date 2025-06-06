import React from 'react';
import { Sparkles } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import scaleData from '../data/scales.json'; // ✅ Import JSON

// Build pie chart data
const statusData = Object.values(
  scaleData.reduce((acc, { status }) => {
    acc[status] = acc[status] || { name: status, value: 0 };
    acc[status].value++;
    return acc;
  }, {})
);

const STATUS_COLORS = {
  operational: '#10B981',
  offline: '#F59E0B',
  error: '#EF4444',
};

export default function ChartSection() {
  return (
    <section className="bg-white mt-6 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
      <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
        <Sparkles className="text-purple-500" />
        Recent Weight Readings & Operational Status
      </h2>
      <p className="mt-2 text-gray-600">
        This section integrates dynamic charts to visualize weight trends, operational uptime,
        and historical data, offering deeper analytical insights into scale performance.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Bar Chart */}
        <div className="w-full h-64">
          <h3 className="text-gray-700 font-semibold mb-2">Weight Readings by Location</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scaleData}>
              <XAxis dataKey="location_name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="last_weight_reading" fill="#7C3AED" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-full h-64">
          <h3 className="text-gray-700 font-semibold mb-2">Scale Operational Status</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
