import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800">
          Hmawbi Region SDG Indicators Dashboard
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Sustainable Development Goals | Health Indicators by Region
        </p>
      </div>
    </header>
  );
};

export default Header;