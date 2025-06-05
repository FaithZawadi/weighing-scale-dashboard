import React from 'react';

const StatusBadge = ({ status }) => {
  const statusColors = {
    operational: 'bg-green-100 text-green-700',
    offline: 'bg-red-100 text-red-700',
    error: 'bg-yellow-100 text-yellow-800'
  };
  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusColors[status.toLowerCase()]}`}>{status}</span>
  );
};

export default function ScaleTable({ scales }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Weighing Scale Data</h2>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">Scale ID</th>
            <th className="p-2">Location</th>
            <th className="p-2">Status</th>
            <th className="p-2">Last Weight</th>
            <th className="p-2">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {scales.map(scale => (
            <tr key={scale.scale_id} className="border-b">
              <td className="p-2 font-semibold text-gray-700">{scale.scale_id}</td>
              <td className="p-2">{scale.location_name}</td>
              <td className="p-2"><StatusBadge status={scale.status} /></td>
              <td className="p-2">{scale.last_weight_reading > 0 ? `${scale.last_weight_reading} kg` : 'N/A'}</td>
              <td className="p-2">{new Date(scale.last_updated).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
