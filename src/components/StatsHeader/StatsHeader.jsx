import React from "react";
import "./style.css";
import StatsCard from "../StatsCard/StatsCard";
import { getFormattedNumberSystem } from "../utils/utils";

const StatsHeader = () => {
  
  return (
    <div className="stats_header">
      {/* revenue stats-card */}
      <StatsCard
        title={"Total Revenue "}
        titlePercentage={"+12.5"}
        contentStats={`$ ${getFormattedNumberSystem(32621.72)}`}
        footerDes={"433 order"}
      />
      {/* subscribers stats-card */}

      <StatsCard
        title={"Subscribers "}
        titlePercentage={+32.5}
        contentStats={`$ ${getFormattedNumberSystem(484205)}`}
        footerDes={"$56 Average orders"}
      />

      {/*Conversations stats-card */}
      <StatsCard
        title={"Conversations"}
        titlePercentage={"-3.4"}
        contentStats={`$ ${getFormattedNumberSystem(552553)}`}
        footerDes={"5min Average Response Time"}
      />
      {/* Popup Conversations Rate  */}
      <StatsCard
        title={"Popup Conversations Rate"}
        titlePercentage={32.5}
        titlePercentageCss={"bg-danger text-white"}
        contentStats={"25%"}
        footerDes={"5% Sales Conversation Rate"}
      />
    </div>
  );
};

export default StatsHeader;
