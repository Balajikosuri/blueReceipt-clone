import React from "react";
// import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Conversation from "../Conversation/Conversation";
import Automations from "../Automations/Automations";
import Campaigns from "../Campaigns/Campaigns";
import Popup from "../Popup/Popup";
import LiveChat from "../LiveChat/LiveChat";
import Segments from "../Segments/Segments";
import Integrations from "../Integrations/Integrations";
import Dashboard from "../Dashboard/Dashboard";
import TabAutomations from "../TabAutomations/TabAutomations";
import TabCampaigns from "../TabCampaigns/TabCampaigns";
import TabSegments from "../TabSegments/TabSegments";

const ContentRoutes = () => {
  return (
    <div className="ContentRoutes">
      <Routes>
        <Route exact path="dashboard" element={<Dashboard />}>
          <Route exact path="automations" element={<TabAutomations />}></Route>
          <Route exact path="campaigns" element={<TabCampaigns />}></Route>
          <Route exact path="segments" element={<TabSegments />}></Route>
        </Route>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="conversation" element={<Conversation />}></Route>
        <Route exact path="automations" element={<Automations />}></Route>
        <Route exact path="campaigns" element={<Campaigns />}></Route>
        <Route exact path="popup" element={<Popup />}></Route>
        <Route exact path="live-chat" element={<LiveChat />}></Route>
        <Route exact path="segments" element={<Segments />}></Route>
        <Route exact path="integrations" element={<Integrations />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ContentRoutes;
