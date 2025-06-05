import React, { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MapSection from './components/ScaleMap';
import ScaleTable from './components/ScaleTable';
import ChartSection from './components/Chart';
import scaleData from './data/scales.json';
import './index.css';

function App() {
  const [regionFilter, setRegionFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredData = scaleData.filter(scale => {
    return (
      (regionFilter === 'All' || scale.location_name === regionFilter) &&
      (statusFilter === 'All' || scale.status.toLowerCase() === statusFilter.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 p-4 md:p-6 lg:p-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Fun Header Card */}
        <div className="bg-white/80 border-l-8 border-pink-400 p-6 rounded-2xl shadow-lg">
          <Header />
        </div>

        {/* Filter Bar in pastel card */}
        <div className="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-xl shadow">
          <FilterBar
            scales={scaleData}
            regionFilter={regionFilter}
            statusFilter={statusFilter}
            onRegionChange={setRegionFilter}
            onStatusChange={setStatusFilter}
          />
        </div>

        {/* Main content: Map and Table side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl shadow-md">
            <MapSection scales={filteredData} />
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow-md">
            <ScaleTable scales={filteredData} />
          </div>
        </div>

        {/* Chart Section (Purple-ish Card) */}
        <div className="bg-purple-100 border-l-4 border-purple-400 p-4 rounded-xl shadow-md">
          <ChartSection />
        </div>
        
      </div>
    </div>
  );
}

export default App;
