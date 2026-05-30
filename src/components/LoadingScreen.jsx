import React from 'react';

/**
 * LoadingScreen - Overlays the screen during initial load with smooth glassmorphism style.
 */
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-logo-box">
        <span>⚡</span>
      </div>
      <h1 className="loading-title text-gradient">Village Vignani</h1>
      <p style={{ color: 'var(--white-muted)', marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
        Next-Gen IoT Hub
      </p>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
