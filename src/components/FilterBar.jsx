import React from 'react';

export default function FilterBar({ scales, regionFilter, statusFilter, onRegionChange, onStatusChange }) {
  const uniqueRegions = ['All', ...new Set(scales.map(s => s.location_name))];
  const statuses = ['All', 'Operational', 'Offline', 'Error'];

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Filter by Region:</label>
        <select
          className="w-full md:w-60 p-2 border rounded-md"
          value={regionFilter}
          onChange={(e) => onRegionChange(e.target.value)}
        >
          {uniqueRegions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Filter by Status:</label>
        <select
          className="w-full md:w-60 p-2 border rounded-md"
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          {statuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
