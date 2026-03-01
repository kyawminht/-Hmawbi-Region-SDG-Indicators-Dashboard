import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RegionMap from './components/RegionMap';
import IndicatorPanel from './components/IndicatorPanel';
import MobileIndicatorDrawer from './components/MobileIndicatorDrawer';
import { regionsData } from './data/regionsData';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('mch');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    if (isMobile) {
      setShowMobileDrawer(true);
    }
  };

  const handleCloseDrawer = () => {
    setShowMobileDrawer(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {!isMobile ? (
          // Desktop View - Side by side
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <RegionMap
                regions={regionsData}
                selectedRegion={selectedRegion}
                onRegionClick={handleRegionClick}
              />
            </div>
            <div>
              <IndicatorPanel regionData={regionsData[selectedRegion]} />
            </div>
          </div>
        ) : (
          // Mobile View - Map with drawer
          <div className="relative">
            <RegionMap
              regions={regionsData}
              selectedRegion={selectedRegion}
              onRegionClick={handleRegionClick}
            />
            
            {/* Mobile Drawer for Indicators */}
            <MobileIndicatorDrawer
              isOpen={showMobileDrawer}
              onClose={handleCloseDrawer}
              regionData={regionsData[selectedRegion]}
            />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-gray-500">
          <p>Public Health SDG Indicators • Data as of 2024 • Hmawbi Township</p>
        </footer>
      </main>
    </div>
  );
}

export default App;