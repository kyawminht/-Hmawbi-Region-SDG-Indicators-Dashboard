import React from 'react';

const statusColors = {
  good: 'bg-green-50 border-green-300 text-green-800',
  warning: 'bg-amber-50 border-amber-300 text-amber-800',
  critical: 'bg-red-50 border-red-300 text-red-800'
};

const IndicatorCard = ({ indicator }) => {
  const colorClass = statusColors[indicator.status] || statusColors.good;
  
  return (
    <div className={`rounded-lg border p-4 ${colorClass}`}>
      <h3 className="text-sm font-medium mb-2">{indicator.title}</h3>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold">{indicator.value}</span>
        <span className="text-sm opacity-75">{indicator.unit}</span>
      </div>
      <div className="mt-2 text-sm border-t border-current border-opacity-20 pt-2">
        <span className="font-medium">Target: </span>
        <span>{indicator.target}</span>
      </div>
    </div>
  );
};

export default IndicatorCard;