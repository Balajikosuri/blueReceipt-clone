import React from "react";
import AutomationListItem from "../AutomationListItem/AutomationListItem";
import "./style.css";

const initAutomationsList = [
  {
    id: 1,
    Title: "Abandoned Cart 7 Days",
    ItemsSent: 4024,
    Clicks: 124,
    Revenue: 5231,
    AOV: 150,
    Orders: 41,
  },
  {
    id: 2,
    Title: "Abandoned Cart 15 Min",
    ItemsSent: 4024,
    Clicks: 124,
    Revenue: 24521,
    AOV: 150,
    Orders: 41,
  },
  {
    id: 3,
    Title: "Abandoned Cart 15 Min",
    ItemsSent: 4024,
    Clicks: 124,
    Revenue: 24521,
    AOV: 150,
    Orders: 41,
  },
  {
    id: 4,
    Title: "Automation D",
    ItemsSent: 700,
    Clicks: 400,
    Revenue: 7500,
    AOV: 50.0,
    Orders: 150,
  },
  {
    id: 5,
    Title: "Automation E",
    ItemsSent: 600,
    Clicks: 350,
    Revenue: 6200,
    AOV: 56.36,
    Orders: 110,
  },
];

const TabAutomations = () => {
  return (
    <div className="w-100">
      <ul className="p-0 TabAutomationsList">
        {initAutomationsList.map((eachItem) => (
          <AutomationListItem key={eachItem.id} AutomationItem={eachItem} />
        ))}
      </ul>
    </div>
  );
};

export default TabAutomations;
