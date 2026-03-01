import React from 'react';

const RegionMap = ({ regions, selectedRegion, onRegionClick }) => {
  const getRegionColor = (regionId) => {
    if (selectedRegion === regionId) {
      return 'fill-blue-600 stroke-blue-800 stroke-2';
    }
    return 'fill-blue-200 stroke-blue-400 hover:fill-blue-300 cursor-pointer transition-colors duration-150';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Hmawbi Township - Health Facility Map</h2>
      <div className="aspect-square w-full max-w-2xl mx-auto">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full"
          style={{ minHeight: '450px' }}
        >
          {/* Background - Township Boundary */}
          <path 
            d="M50,50 L750,80 L780,300 L700,520 L500,550 L250,570 L80,500 L30,300 L50,50" 
            fill="#e6f0fa" 
            stroke="#2c5282" 
            strokeWidth="3"
            strokeDasharray="none"
          />
          
          {/* Main River - Hmawbi Creek */}
          <path 
            d="M100,400 Q250,350 400,380 Q550,410 700,350" 
            fill="none" 
            stroke="#4299e1" 
            strokeWidth="8" 
            opacity="0.6"
          />
          <path 
            d="M100,420 Q250,370 400,400 Q550,430 700,370" 
            fill="none" 
            stroke="#4299e1" 
            strokeWidth="6" 
            opacity="0.4"
          />
          
          {/* Main Roads */}
          <path 
            d="M150,100 L650,150" 
            stroke="#a0aec0" 
            strokeWidth="4" 
            strokeDasharray="10,10"
          />
          <path 
            d="M200,200 L600,450" 
            stroke="#a0aec0" 
            strokeWidth="4" 
            strokeDasharray="10,10"
          />
          <path 
            d="M120,500 L680,520" 
            stroke="#a0aec0" 
            strokeWidth="4" 
            strokeDasharray="10,10"
          />

          {/* MCH - Main Central Health (Largest facility in township center) */}
          <g onClick={() => onRegionClick('mch')} className="cursor-pointer">
            <path
              d="M350,250 L450,230 L470,320 L380,340 L340,290 Z"
              className={getRegionColor('mch')}
              strokeWidth="2"
            />
            <circle cx="400" cy="280" r="8" fill="white" stroke="black" strokeWidth="2" />
            <text
              x="400"
              y="220"
              textAnchor="middle"
              className="text-sm font-bold fill-gray-800 pointer-events-none"
            >
              MCH
            </text>
            <text
              x="400"
              y="240"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              Main Central Health
            </text>
          </g>

          {/* ေြမာင်းတကာ RHC - Northern Area */}
          <g onClick={() => onRegionClick('yaeman')} className="cursor-pointer">
            <path
              d="M180,80 L280,70 L290,150 L200,160 L160,120 Z"
              className={getRegionColor('yaeman')}
              strokeWidth="2"
            />
            <circle cx="220" cy="115" r="6" fill="white" stroke="black" />
            <text
              x="220"
              y="50"
              textAnchor="middle"
              className="text-xs font-medium fill-gray-800 pointer-events-none"
            >
             မြောင်းတကာ
            </text>
            <text
              x="220"
              y="70"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ဆပ်သွားတော RHC - Northeast */}
          <g onClick={() => onRegionClick('satthwar')} className="cursor-pointer">
            <path
              d="M580,60 L670,70 L660,150 L570,140 L540,100 Z"
              className={getRegionColor('satthwar')}
              strokeWidth="2"
            />
            <circle cx="610" cy="105" r="6" fill="white" stroke="black" />
            <text
              x="610"
              y="30"
              textAnchor="middle"
              className="text-xs font-medium fill-gray-800 pointer-events-none"
            >
              ဆပ်သွားတော
            </text>
            <text
              x="610"
              y="50"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ရွှေလှေကြီး RHC - Eastern */}
          <g onClick={() => onRegionClick('shwethal')} className="cursor-pointer">
            <path
              d="M620,380 L710,360 L720,440 L640,460 L590,420 Z"
              className={getRegionColor('shwethal')}
              strokeWidth="2"
            />
            <circle cx="660" cy="410" r="6" fill="white" stroke="black" />
            <text
              x="660"
              y="340"
              textAnchor="middle"
              className="text-xs font-medium fill-gray-800 pointer-events-none"
            >
              ရွှေလှေကြီး
            </text>
            <text
              x="660"
              y="360"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ဝါးနက်ချောင်း RHC - Southern */}
          <g onClick={() => onRegionClick('warnet')} className="cursor-pointer">
            <path
              d="M120,480 L220,470 L240,550 L130,560 L90,520 Z"
              className={getRegionColor('mch')}
              strokeWidth="2"
            />
            <circle cx="170" cy="515" r="6" fill="white" stroke="black" />
            <text
              x="170"
              y="440"
              textAnchor="middle"
              className="text-xs font-medium fill-gray-800 pointer-events-none"
            >
              ဝါးနက်ချောင်း
            </text>
            <text
              x="170"
              y="460"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ဝါးနက်ချောင်း RHC - fix color */}
          <g onClick={() => onRegionClick('warnet')} className="cursor-pointer">
            <path
              d="M120,480 L220,470 L240,550 L130,560 L90,520 Z"
              className={getRegionColor('warnet')}
              strokeWidth="2"
            />
            <circle cx="170" cy="515" r="6" fill="white" stroke="black" />
            <text
              x="170"
              y="440"
              textAnchor="middle"
              className="text-xs font-medium fill-gray-800 pointer-events-none"
            >
              ဝါးနက်ချောင်း
            </text>
            <text
              x="170"
              y="460"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* Sub Health Center - Small facility near MCH */}
          <g onClick={() => onRegionClick('subcenter')} className="cursor-pointer">
            <ellipse
              cx="500"
              cy="300"
              rx="25"
              ry="20"
              className={getRegionColor('subcenter')}
              strokeWidth="2"
            />
            <circle cx="500" cy="300" r="4" fill="white" stroke="black" />
            <text
              x="500"
              y="270"
              textAnchor="middle"
              className="text-xs fill-gray-800 pointer-events-none"
            >
              Sub
            </text>
            <text
              x="500"
              y="285"
              textAnchor="middle"
              className="text-xs fill-gray-600 pointer-events-none"
            >
              Center
            </text>
          </g>

          {/* Villages/Small communities (dots) */}
          <circle cx="280" cy="180" r="3" fill="#2d3748" />
          <circle cx="520" cy="200" r="3" fill="#2d3748" />
          <circle cx="350" cy="400" r="3" fill="#2d3748" />
          <circle cx="450" cy="450" r="3" fill="#2d3748" />
          
          {/* Village labels */}
          <text x="290" y="175" className="text-[8px] fill-gray-500">ရွာမ</text>
          <text x="530" y="195" className="text-[8px] fill-gray-500">အနောက်ရွာ</text>

          {/* Scale bar */}
          <rect x="50" y="580" width="100" height="4" fill="#4a5568" />
          <text x="50" y="575" className="text-[8px] fill-gray-600">0</text>
          <text x="145" y="575" className="text-[8px] fill-gray-600">5 km</text>

          {/* North arrow */}
          <path d="M730,50 L740,30 L750,50 L740,45 L740,70 L730,70 L730,45 Z" fill="#4a5568" />
          <text x="740" y="25" className="text-[8px] fill-gray-600" textAnchor="middle">N</text>

          {/* Legend */}
          <g className="legend" transform="translate(600, 500)">
            <rect width="120" height="70" fill="white" fillOpacity="0.9" stroke="#cbd5e0" rx="4" />
            <text x="10" y="20" className="text-[9px] font-bold fill-gray-700">Legend</text>
            <circle cx="20" cy="35" r="6" fill="#bfdbfe" stroke="#3182ce" />
            <text x="35" cy="40" className="text-[8px] fill-gray-600">Health Facility</text>
            <circle cx="20" cy="55" r="6" fill="#2563eb" stroke="#1e40af" />
            <text x="35" y="60" className="text-[8px] fill-gray-600">Selected</text>
          </g>
        </svg>
      </div>
      
      {/* Facility Information */}
      <div className="grid grid-cols-2 gap-3 mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${selectedRegion === 'mch' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded`}></div>
            <span className="text-xs">MCH</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${selectedRegion === 'yaeman' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded`}></div>
            <span className="text-xs">‌မြောင်းတကာ RHC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${selectedRegion === 'satthwar' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded`}></div>
            <span className="text-xs">ဆပ်သွားတော RHC</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${selectedRegion === 'shwethal' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded`}></div>
            <span className="text-xs">ရွှေလှေကြီး RHC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${selectedRegion === 'warnet' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded`}></div>
            <span className="text-xs">ဝါးနက်ချောင်း RHC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${selectedRegion === 'subcenter' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded-full`}></div>
            <span className="text-xs">Sub Health Center</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-3">
        Click any health facility to view indicators • Hmawbi Township, Yangon Region
      </p>
    </div>
  );
};

export default RegionMap;