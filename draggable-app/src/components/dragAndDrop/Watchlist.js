import React from 'react';
import { watchlistData } from './data';

const Watchlist = () => {
  return (
    <div>
      <h2>My Watchlist (05)</h2>
      {watchlistData.map((item) => (
        <div key={item.caseID} className="watchlist-item">
          <p>Priority: {item.priority}</p>
          <p>Status: {item.status}</p>
          <p>Assignee: {item.assignee}</p>
          <p>SLA Status: {item.slaStatus}</p>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
