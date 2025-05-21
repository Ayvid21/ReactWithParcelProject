import React from 'react';
import slaViolations from '/Users/divya.singh2/Desktop/react/draggable-app/src/components/dragAndDrop/slaViolation.jpg'; // Adjust the path as needed


const SLAViolations = () => {
  return (
    <div>
      <h2>SLA Violations</h2>
      <div className="widget-content">
      <img src={slaViolations} alt="Chart Placeholder" style={{ width: '90%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default SLAViolations;
