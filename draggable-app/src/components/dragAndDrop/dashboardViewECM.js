import React from "react";
import CaseTable from "./CaseTable";
import Watchlist from "./Watchlist";
import TotalOpenCases from "./TotalOpenCases";
import SLAViolations from "./SLAViolations";
import "./DashboardViewECM.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="dashboard-nav">Navigation</div>
      <div className="dashboard-header">
        <h2>Hi Steve!</h2>
        <p>Last login on 04-19-2024 at 01:06 pm from Safari on MacOs</p>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-right-grid">
          <div className="case-table">
            <CaseTable />
          </div>
          <div className="below-grid">
            <div className="total-open-cases">
              <TotalOpenCases />
            </div>
            <div className="sla-violations">
              <SLAViolations />
            </div>
          </div>
        </div>
        <div className="watchlist">
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
