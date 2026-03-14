// App.js
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import RegionMap from './components/RegionMap';
import IndicatorPanel from './components/IndicatorPanel';
import MobileIndicatorDrawer from './components/MobileIndicatorDrawer';
import RHCIndicators from './components/RHCIndicators';
import { regionsData } from './data/regionsData';
import { rhcData } from './data/rhcData';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('mch');
  const [viewMode, setViewMode] = useState('township');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  const indicatorPanelRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && indicatorPanelRef.current) {
      indicatorPanelRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [selectedRegion, isMobile, viewMode]);

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    if (isMobile) {
      setShowMobileDrawer(true);
    }
  };

  const handleCloseDrawer = () => {
    setShowMobileDrawer(false);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <Header 
        viewMode={viewMode} 
        onViewChange={handleViewChange}
      />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 overflow-hidden">
        {viewMode === 'township' ? (
          !isMobile ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full overflow-hidden">
              <div className="h-full overflow-hidden">
                <RegionMap
                  regions={regionsData}
                  selectedRegion={selectedRegion}
                  onRegionClick={handleRegionClick}
                />
              </div>
              
              <div 
                ref={indicatorPanelRef}
                className="h-full overflow-y-auto pr-2 scroll-smooth"
              >
                <IndicatorPanel regionData={regionsData[selectedRegion]} />
              </div>
            </div>
          ) : (
            <div className="h-full relative overflow-hidden">
              <div className="h-full overflow-hidden">
                <RegionMap
                  regions={regionsData}
                  selectedRegion={selectedRegion}
                  onRegionClick={handleRegionClick}
                />
              </div>
              
              <MobileIndicatorDrawer
                isOpen={showMobileDrawer}
                onClose={handleCloseDrawer}
                regionData={regionsData[selectedRegion]}
              />
            </div>
          )
        ) : (
          <div className="h-full overflow-y-auto">
            <RHCIndicators rhcData={rhcData} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;