import React from "react";
const Hero = ({ children, img, disableOverlay }) => {
  return (
    <div
   
    >
      <div className={!disableOverlay ? "hero-overlay" : ""}>
        <div className="container hero-container">{children}</div>
      </div>
    </div>
  );
};

export default Hero;