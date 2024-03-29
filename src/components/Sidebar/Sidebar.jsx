import React from "react";
import { BiSolidConversation } from "react-icons/bi";
import { BsFillChatHeartFill } from "react-icons/bs";
import { CgList } from "react-icons/cg";
import { FaDashcube } from "react-icons/fa";
import { PiArrowsLeftRightBold, PiLineSegmentsBold } from "react-icons/pi";
import { SiCompilerexplorer } from "react-icons/si";
import { TbCopy } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

import "./style.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/*  */}
      <ul className="sidebar_logo_search mb-1">
        <li>
          <Link
            className="navLink-item app-logo"
            id="disable-hover"
            to="/dashboard"
          >
            <img
              src="https://assets.website-files.com/6076eab79e12ed151f2a03f6/6076eec561cd5d0f52ca83f8_Branding.svg"
              alt="logo"
            />
          </Link>
        </li>

        <li>
          <input
            className="searchbar disabled mb-1"
            type="search"
            placeholder="Search"
          />
        </li>
      </ul>
      <hr className="mb-1 mt-0" />
      <ul className="sidebar-menu">
        <li>
          <NavLink className="navLink-item" to="/dashboard">
            <FaDashcube size={20} />
            <span className="ms-2">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/conversation">
            <BiSolidConversation size={22} />
            <span className="ms-2">Conversation</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/automations">
            <SiCompilerexplorer size={20} />
            <span className="ms-2">Automations</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/campaigns">
            <CgList size={20} />
            <span className="ms-2">Campaigns</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/popup">
            <TbCopy size={20} />
            <span className="ms-2">Popup</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/live-chat">
            <BsFillChatHeartFill size={18} className=" me-2" />
            Live Chat
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/segments">
            <PiLineSegmentsBold size={20} />
            <span className="ms-2">Segments </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink-item" to="/integrations">
            <PiArrowsLeftRightBold size={20} />
            <span className="ms-2"> Integrations</span>
          </NavLink>
        </li>
      </ul>
      {/* logged user avatar */}
      <div className="d-flex flex-row avatar-container mb-1">
        <img
          className="user-avatar"
          src="https://img.freepik.com/free-photo/indian-hindu-girl-traditional-violet-saree-sitting-cafe-table_627829-1989.jpg?size=620&ext=jpg&ga=GA1.1.406501541.1702974435&semt=ais"
          alt="avatar"
        />
        <div className="ms-3">
          <p className="fw-6 user-name">
            <strong>Oguz Yagiz Kara</strong>
          </p>
          <span className="text-secondary user-store-name">Store Name</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
