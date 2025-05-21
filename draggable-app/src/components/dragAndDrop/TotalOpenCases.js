import React from 'react';
import totalOpenCases from '/Users/divya.singh2/Desktop/react/draggable-app/src/components/dragAndDrop/totalOpenCases.jpg'; // Adjust the path as needed

const TotalOpenCases = () => {
  return (
    <div>
      <h2>Total Open Cases</h2>
      <div className="widget-content">
        <img src={totalOpenCases} alt="Chart Placeholder" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default TotalOpenCases;
