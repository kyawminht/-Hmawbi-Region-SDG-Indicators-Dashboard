import React, { useState } from 'react';
import Header from './components/Header';
import RegionMap from './components/RegionMap';
import IndicatorPanel from './components/IndicatorPanel';
import { regionsData } from './data/regionsData';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('hmawbi');

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Map */}
          <div>
            <RegionMap
              regions={regionsData}
              selectedRegion={selectedRegion}
              onRegionClick={handleRegionClick}
            />
          </div>

          {/* Right Column - Indicators */}
          <div>
            <IndicatorPanel regionData={regionsData[selectedRegion]} />
          </div>
        </div>

        {/* Footer note */}
        <footer className="mt-8 text-center text-xs text-gray-500">
          <p>Public Health SDG Indicators • Data as of 2024 • For official use only</p>
        </footer>
      </main>
    </div>
  );
}

export default App;