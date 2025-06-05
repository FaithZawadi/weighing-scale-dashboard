import React from 'react';
import '/C:/Users/USER/weighing-scale-dashboard/src/index.css';

export default function Header() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-blue-500">
      <h1 className="text-3xl font-bold text-gray-800">Weighing Scale Monitoring Dashboard</h1>
      <p className="text-gray-500 mt-1">Real-time insights for your weighing scale network.</p>
    </div>
  );
}