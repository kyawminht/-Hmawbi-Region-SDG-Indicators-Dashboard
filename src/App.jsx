import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import RegionMap from './components/RegionMap';
import IndicatorPanel from './components/IndicatorPanel';
import MobileIndicatorDrawer from './components/MobileIndicatorDrawer';
import { regionsData } from './data/regionsData';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('mch');
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

  // Auto-scroll to top of indicator panel when region changes
  useEffect(() => {
    if (!isMobile && indicatorPanelRef.current) {
      indicatorPanelRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [selectedRegion, isMobile]);

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
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 overflow-hidden">
        {!isMobile ? (
          // Desktop View - Side by side with fixed heights
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full overflow-hidden">
            {/* Left Column - Map (Fixed, no scroll) */}
            <div className="h-full overflow-hidden">
              <RegionMap
                regions={regionsData}
                selectedRegion={selectedRegion}
                onRegionClick={handleRegionClick}
              />
            </div>
            
            {/* Right Column - Indicators (Scrollable with ref) */}
            <div 
              ref={indicatorPanelRef}
              className="h-full overflow-y-auto pr-2 scroll-smooth"
            >
              <IndicatorPanel regionData={regionsData[selectedRegion]} />
            </div>
          </div>
        ) : (
          // Mobile View - Map with drawer
          <div className="h-full relative overflow-hidden">
            <div className="h-full overflow-hidden">
              <RegionMap
                regions={regionsData}
                selectedRegion={selectedRegion}
                onRegionClick={handleRegionClick}
              />
            </div>
            
            {/* Mobile Drawer for Indicators */}
            <MobileIndicatorDrawer
              isOpen={showMobileDrawer}
              onClose={handleCloseDrawer}
              regionData={regionsData[selectedRegion]}
            />
          </div>
        )}
      </main>

      {/* Footer - Fixed at bottom for desktop, hidden on mobile if drawer is open */}
      {(!isMobile || !showMobileDrawer) && (
        <footer className="flex-shrink-0 text-center text-xs text-gray-500 py-2 border-t bg-white">
          <p>Public Health SDG Indicators • Data as of 2024 • Hmawbi Township</p>
        </footer>
      )}
    </div>
  );
}

export default App;