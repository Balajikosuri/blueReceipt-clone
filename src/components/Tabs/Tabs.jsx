import React from "react";

import "./style.css";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import TabAutomations from "../TabAutomations/TabAutomations";
import TabsRoutes from "../TabsRoutes/TabsRoutes";

const Tabs = () => {
  
  return (
    <div className="card card-body mt-4 mb-2">
      <ul className="tabs-bar">
        <li>
          <NavLink className="navLinkItem " to={`automations`}>
            Automations
          </NavLink>
        </li>
        <li>
          <NavLink to={`campaigns`}>Campaigns</NavLink>
        </li>
        <li>
          <NavLink to={`segments`}>Segments</NavLink>
        </li>
      </ul>
      <div className="card card-body">
        <Outlet />
      </div>
    </div>
  );
};

export default Tabs;
