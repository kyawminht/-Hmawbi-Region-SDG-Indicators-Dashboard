// components/RHCIndicators.jsx
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from 'recharts';

const RHCIndicators = ({ rhcData }) => {
  const [selectedCategory, setSelectedCategory] = useState('environment');
  const [selectedIndicator, setSelectedIndicator] = useState('Water');

  // Professional color palette for all 6 centers
  const CENTER_COLORS = {
    'MCH': '#94A3B8',     // Slate
    '၀ါး': '#3B82F6',     // Blue
    'မြောင်း': '#10B981',  // Emerald Green
    'ရွှေ': '#F59E0B',    // Amber
    'ရေ': '#8B5CF6',     // Violet
    'ဆပ်': '#EF4444',     // Red
  };

  // All Categories and Indicators from Excel
  const categories = [
    {
      id: 'mch',
      name: 'Maternal & Child Health',
      icon: '👶',
      color: '#EC4899',
      indicators: [
        { key: '3.1.1', label: 'Maternal Mortality Ratio', description: 'per 100,000 live births', target: 86, unit: '', targetType: 'less' },
        { key: '3.1.2', label: 'Skilled Birth Attendance', description: '% of births', target: 85, unit: '%', targetType: 'greater' },
        { key: '3.2.1', label: 'Under-5 Mortality Rate', description: 'per 1,000 live births', target: 36, unit: '', targetType: 'less' },
        { key: '3.2.2', label: 'Neonatal Mortality Rate', description: 'per 1,000 live births', target: 21, unit: '', targetType: 'less' },
        { key: '3.2.3', label: 'Infant Mortality Rate', description: 'per 1,000 live births', target: 32, unit: '', targetType: 'less' }
      ]
    },
    {
      id: 'communicable',
      name: 'Communicable Diseases',
      icon: '🦠',
      color: '#EF4444',
      indicators: [
        { key: '3.3.2 CNR', label: 'TB Cases Notification Rate', description: 'notification rate', target: 580, unit: '', targetType: 'less' },
        { key: '3.3.2 TSR', label: 'Treatment Success Rate', description: 'TB treatment success %', target: 88, unit: '%', targetType: 'greater' },
        { key: '3.3.3 Malaria', label: 'Malaria Incidence', description: 'Annual Parasite Incidence', target: 0, unit: '', targetType: 'less' },
        { key: '3.3.3 Dengue', label: 'Dengue Case Fatality Rate', description: 'CFR %', target: 1, unit: '%', targetType: 'less' },
        { key: '3.3.5 Leprosy', label: 'New Leprosy Cases', description: 'number of cases', target: 0, unit: '', targetType: 'less' },
        { key: '3.3.5 Rabies', label: 'Suspected Rabies Cases', description: 'number of cases', target: 0, unit: '', targetType: 'less' }
      ]
    },
    {
      id: 'ncd',
      name: 'NCD',
      icon: '❤️',
      color: '#F97316',
      indicators: [
        { key: 'NCD', label: 'NCD Clinic Coverage', description: 'coverage %', target: 100, unit: '%', targetType: 'greater' }
      ]
    },
    {
      id: 'srh',
      name: 'SRH',
      icon: '👥',
      color: '#A855F7',
      indicators: [
        { key: '3.7.1', label: 'Contraceptive Prevalence Rate', description: 'CPR %', target: 60, unit: '%', targetType: 'greater' },
        { key: '3.7.2', label: 'Adolescent Birth Rate', description: 'birth rate %', target: 10, unit: '%', targetType: 'less' }
      ]
    },
    {
      id: 'school',
      name: 'School Health',
      icon: '📚',
      color: '#06B6D4',
      indicators: [
        { key: 'BMI', label: 'BMI < -2SD', description: '% of primary students', target: 0, unit: '%', targetType: 'less' },
        { key: 'Deworming', label: 'Deworming Coverage', description: 'school-based coverage %', target: 100, unit: '%', targetType: 'greater' },
        { key: 'Underweight', label: 'Underweight Children', description: '0-59 months %', target: 0, unit: '%', targetType: 'less' }
      ]
    },
    {
      id: 'vaccines',
      name: 'Vaccines',
      icon: '💉',
      color: '#14B8A6',
      indicators: [
        { key: 'HPV', label: 'HPV Coverage', description: 'vaccination %', target: 90, unit: '%', targetType: 'greater' },
        { key: 'MR2', label: 'MR2 Coverage', description: 'Measles Rubella %', target: 95, unit: '%', targetType: 'greater' },
        { key: 'Penta3', label: 'Penta 3 Coverage', description: 'vaccination %', target: 95, unit: '%', targetType: 'greater' }
      ]
    },
    {
      id: 'environment',
      name: 'Environment Health',
      icon: '🌍',
      color: '#6B7280',
      indicators: [
        { key: 'Water', label: 'Safe Drinking Water', description: 'population with access %', target: 100, unit: '%', targetType: 'greater' },
        { key: 'Sanitation', label: 'Basic Sanitation', description: 'population with access %', target: 100, unit: '%', targetType: 'greater' },
        { key: 'Handwashing', label: 'Hand-washing Facility', description: 'with soap and water %', target: 100, unit: '%', targetType: 'greater' },
        { key: 'Injuries', label: 'Occupational Injuries', description: 'frequency rate %', target: 1, unit: '%', targetType: 'less' }
      ]
    }
  ];

  // Get current category indicators
  const currentCategory = categories.find(c => c.id === selectedCategory);
  const currentIndicator = currentCategory?.indicators.find(i => i.key === selectedIndicator) || currentCategory?.indicators[0];

  // All centers
  const centers = ['MCH', '၀ါး', 'မြောင်း', 'ရွှေ', 'ရေ', 'ဆပ်'];

  // Prepare data for the chart
  const prepareChartData = () => {
    return centers.map(center => ({
      name: center,
      value: rhcData[center]?.[selectedIndicator] || 0,
      color: CENTER_COLORS[center]
    }));
  };

  const chartData = prepareChartData();

  // Check if value meets target
  const meetsTarget = (value, indicator) => {
    if (!indicator) return false;
    if (indicator.targetType === 'greater') {
      return value >= indicator.target;
    } else {
      return value <= indicator.target;
    }
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const indicator = currentIndicator;
      const targetMet = meetsTarget(data.value, indicator);

      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{data.name}</p>
          <p className="text-sm text-gray-600 mt-1">
            Value: <span className="font-bold" style={{ color: data.color }}>{data.value}{indicator?.unit}</span>
          </p>
          <p className="text-sm text-gray-600">
            Target: {indicator?.target}{indicator?.unit}
          </p>
          <p className={`text-xs mt-2 ${targetMet ? 'text-green-600' : 'text-red-600'}`}>
            {targetMet ? '✓ Meeting target' : '✗ Not meeting target'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          SDG Health Indicators Dashboard
        </h1>
        <p className="text-gray-500">
          Hmawbi Township • 7 Categories • 27 Indicators • 6 Centers
        </p>
      </div>


      {/* Main Content - Categories on Left, Chart on Right */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Categories and Indicators */}
        <div className="lg:w-80 space-y-4">
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Browse by Category</h3>
            <div className="space-y-1">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedIndicator(category.indicators[0].key);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id ? category.color : 'transparent'
                  }}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="flex-1 text-left">{category.name}</span>
                  <span className="text-xs opacity-75">{category.indicators.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Indicators */}
          {currentCategory && (
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                {currentCategory.icon} {currentCategory.name} Indicators
              </h3>
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {currentCategory.indicators.map(indicator => (
                  <button
                    key={indicator.key}
                    onClick={() => setSelectedIndicator(indicator.key)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedIndicator === indicator.key
                        ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{indicator.label}</span>
                      <span className="text-xs text-gray-400">{indicator.unit}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{indicator.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Chart */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {currentIndicator?.label}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {currentIndicator?.description} • Target: {currentIndicator?.target}{currentIndicator?.unit}
              {currentIndicator?.targetType === 'greater' ? ' ↑' : ' ↓'}
            </p>
          </div>
          
          <div className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" tick={{ fontSize: 12, fill: '#4B5563' }} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#4B5563', fontWeight: 500 }}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  name="Value"
                  barSize={35}
                  radius={[0, 4, 4, 0]}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
            <div className="flex flex-wrap gap-4">
              {centers.map(center => (
                <div key={center} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CENTER_COLORS[center] }} />
                  <span className="text-xs text-gray-600">{center}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-gray-400 border-dashed border-t-2" />
              <span className="text-xs text-gray-500">Target: {currentIndicator?.target}{currentIndicator?.unit}</span>
            </div>
          </div>
        </div>
      </div>

     {/* Center Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {centers.map(center => (
          <div key={center} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CENTER_COLORS[center] }} />
              <h3 className="font-semibold text-gray-700">{center}</h3>
            </div>
            <p className="text-2xl font-bold" style={{ color: CENTER_COLORS[center] }}>
              {rhcData[center]?.[selectedIndicator] || 0}{currentIndicator?.unit}
            </p>
            <p className="text-xs text-gray-500 mt-1 truncate">
              {currentIndicator?.label}
            </p>
          </div>
        ))}
      </div>
      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {currentCategory?.icon} {currentCategory?.name} - Detailed Data
        </h3>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Center
              </th>
              {currentCategory?.indicators.map(indicator => (
                <th key={indicator.key} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {indicator.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {centers.map((center, idx) => (
              <tr key={center} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CENTER_COLORS[center] }} />
                    {center}
                  </div>
                </td>
                {currentCategory?.indicators.map(indicator => {
                  const value = rhcData[center]?.[indicator.key] || 0;
                  const targetMet = meetsTarget(value, indicator);
                  
                  return (
                    <td key={indicator.key} className="px-4 py-3 text-sm">
                      <span className={targetMet ? 'text-green-600 font-semibold' : 'text-gray-900'}>
                        {value}{indicator.unit}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-700">2025 Target</td>
              {currentCategory?.indicators.map(indicator => (
                <td key={indicator.key} className="px-4 py-3 text-sm font-medium text-blue-600">
                  {indicator.target}{indicator.unit}
                  <span className="ml-1 text-xs">
                    {indicator.targetType === 'greater' ? '↑' : '↓'}
                  </span>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RHCIndicators;