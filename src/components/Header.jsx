// components/Header.jsx
import React from 'react';

const Header = ({ children, viewMode, onViewChange }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
          {/* Title Section */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Hmawbi Township SDG Indicators
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Health SDG Performance Dashboard • Data as of 2025
            </p>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => onViewChange('township')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                viewMode === 'township'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Township View
            </button>
            <button
              onClick={() => onViewChange('rhc')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                viewMode === 'rhc'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              RHC Comparison
            </button>
          </div>

          {/* Additional children if any */}
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;