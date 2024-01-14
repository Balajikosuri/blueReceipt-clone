import React from "react";
import "./style.css";
const StatsCard = ({
  title,
  titlePercentage,
  contentStats,
  footerDes,
  titlePercentageCss,
}) => {
  return (
    <div className=" stats-card">
      <p className="text-secondary">
        {title}{" "}
        <span
          className={`card_sub_element fw-bolder ${
            titlePercentage[0] === "-" ? "negative-stats" : ""
          }`}
        >
          {titlePercentage}%
        </span>
      </p>

      <h4>{contentStats}</h4>
      <p className="text-secondary">{footerDes}</p>
    </div>
  );
};

export default StatsCard;
