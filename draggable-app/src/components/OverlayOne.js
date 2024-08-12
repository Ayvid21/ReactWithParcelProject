import React, { useEffect, useRef } from 'react';
import './Overlay.css'; // Assuming your CSS for OverlayOne

const OverlayOne = ({ onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Function to handle outside click
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener for outside clicks
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="overlay">
      <div className="overlay-content" ref={overlayRef}>
        <h2>Overlay One</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OverlayOne;
