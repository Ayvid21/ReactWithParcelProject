import React from 'react';
import { caseData } from './data';

const CaseTable = () => {
  return (
    <div>
      <h2>My Queue (06)</h2>
      <input type="text" placeholder="Search by Case ID" />
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Case Type</th>
              <th>Step ID</th>
              <th>Task</th>
              <th>Target Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {caseData.map((item) => (
              <tr key={item.caseID}>
                <td>{item.caseID}</td>
                <td>{item.caseType}</td>
                <td>{item.stepID}</td>
                <td>{item.task}</td>
                <td>{item.targetDate}</td>
                <td>{item.priority}</td>
                <td>{item.status}</td>
                <td>
                  <button>Add to My Watchlist</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaseTable;
