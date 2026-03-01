import React from 'react';
import IndicatorCard from './IndicatorCard';

const MobileIndicatorDrawer = ({ isOpen, onClose, regionData }) => {
  if (!isOpen || !regionData) return null;

  return (
    <>
      {/* Drawer - No backdrop, just the drawer itself */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
           style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        
        {/* Drag Handle Bar - for visual cue */}
        <div className="sticky top-0 bg-white pt-2 px-4 border-b border-gray-200 z-50">
          <div className="flex justify-center mb-1">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center pb-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{regionData.name}</h2>
              <p className="text-sm text-gray-600">{regionData.myanmarName}</p>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Close drawer"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 pb-8">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Health SDG Indicators - 2025</p>
          </div>
          
          <div className="space-y-4">
            {regionData.indicators.map((indicator) => (
              <IndicatorCard key={indicator.id} indicator={indicator} />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Status Legend</h3>
            <div className="flex gap-4 text-xs">
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
      </div>
    </>
  );
};

export default MobileIndicatorDrawer;