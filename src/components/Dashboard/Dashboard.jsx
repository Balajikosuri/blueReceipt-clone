import React from "react";
import "./style.css";
import LiveChart from "../LineChart/LiveLineChart ";
import Tabs from "../Tabs/Tabs";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import StatsHeader from "../StatsHeader/StatsHeader";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardHeader />
      {/* stats_header */}
      <StatsHeader />
      <div className="card card-body w-100 h-50">
        <LiveChart />
      </div>
      {/* Tabs */}
      <Tabs className="h-60" />
    </div>
  );
};

export default Dashboard;
