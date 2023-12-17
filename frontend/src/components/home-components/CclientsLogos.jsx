import React, { useState, useEffect } from 'react';
import CclientsLogosMobile from './CclientsLogosMobile';
import CclientsLogosLaptop from './CclientsLogosLaptop';

function CclientsLogos() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 991 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div>
        {isMobileOrTablet ? (
          // Component to show on mobile or tablet
          <>
          <CclientsLogosMobile/>
        
          </>) : (
          // Component to show on laptop or large screens
          <>
          <CclientsLogosLaptop/>
          </>
        )}
      </div>
    </>
  );
}

export default CclientsLogos;



