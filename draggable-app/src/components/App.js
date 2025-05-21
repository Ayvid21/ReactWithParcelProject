import React from "react";
import "./App.css";
// import BalanceDetail from "./dragAndDrop/BalanceDetail";
import BalanceDetailResponsive from "./dragAndDrop/BalanceDetailResponsive";
// import Dashboard from "./dashboradData/Dashboard";
import DashboardViewECM from './dragAndDrop/dashboardViewECM'

const App = () => {
  return (
    <div className="App">
      {/* <BalanceDetail /> */}
      {/* <Dashboard /> */}

      {/* <BalanceDetailResponsive /> */}

      <DashboardViewECM />
    </div>
  );
};

export default App;
