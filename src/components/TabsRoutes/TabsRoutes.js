import React from "react";
import { Route, Routes } from "react-router-dom";
import TabAutomations from "../TabAutomations/TabAutomations";
import TabCampaigns from "../TabCampaigns/TabCampaigns";

const TabsRoutes = () => {
  return (
    <Routes>
      <Route exact path="/campaigns" element={<h1>campaigns</h1>}></Route>
      <Route exact path="/segments" element={<h1>segments</h1>}></Route>
      {/* <Route exact path="/automations" element={<TabAutomations />}></Route> */}
    </Routes>
  );
};

export default TabsRoutes;
