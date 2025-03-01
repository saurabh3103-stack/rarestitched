import React from 'react';

const Loader = () => {
  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    zIndex: 1000, // Ensure it's on top of other elements
  };

  const loaderStyle = {
    border: '8px solid #f3f3f3', // Light grey
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={loaderContainerStyle}>
        <div style={loaderStyle}></div>
      </div>
    </>
  );
};

export default Loader;