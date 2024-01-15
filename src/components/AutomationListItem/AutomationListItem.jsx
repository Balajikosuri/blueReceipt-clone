import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./style.css";
import { getFormattedNumberSystem } from "../utils/utils";
import { NavLink, useParams } from "react-router-dom";

const AutomationListItem = ({ AutomationItem }) => {
  const { id, Title, ItemsSent, Clicks, Revenue, Orders, AOV } = AutomationItem;
  const { autId } = useParams;
  console.log(autId)
  return (
    <li className="AutomationListItem">
      <NavLink to={`${id}`} className="d-flex flex-row w-100 m-0">
        <FaCartShopping size={30} className="me-3" />
        <div className="AutomationListItem-content w-100 d-flex flex-column">
          <div className="d-flex flex-row w-100 justify-content-between">
            <h5>{Title}</h5>
            <span className="">
              <b>${getFormattedNumberSystem(Revenue)}</b>
            </span>
          </div>
          <div className="d-flex flex-row  justify-content-between w-100">
            <p className="text-secondary fw-bold">
              {ItemsSent} sent | {Clicks} clicks
            </p>
            <p className="text-secondary me-0  fw-bold">
              {Orders} Orders | ${AOV} AOV
            </p>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default AutomationListItem;
