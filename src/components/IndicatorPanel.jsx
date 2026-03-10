import React from 'react';
import IndicatorCard from './IndicatorCard';

const IndicatorPanel = ({ regionData }) => {
  if (!regionData) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-500 text-center">Select a health facility to view indicators</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{regionData.myanmarName}</h2>
       
        <p className="text-sm text-gray-500 mt-2">Health SDG Indicators - 2025</p>
      </div>
      
      <div className="space-y-4">
        {regionData.indicators.map((indicator) => (
          <IndicatorCard key={indicator.id} indicator={indicator} />
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Status Legend</h3>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded"></span>
            <span className="text-gray-600">Good</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-amber-500 rounded"></span>
            <span className="text-gray-600">Warning</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-red-500 rounded"></span>
            <span className="text-gray-600">Critical</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          *Compared against National SDG targets
        </p>
      </div>
    </div>
  );
};

export default IndicatorPanel;