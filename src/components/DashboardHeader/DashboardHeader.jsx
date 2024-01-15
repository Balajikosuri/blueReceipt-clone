import React from "react";
import "./style.css";
import { MdDateRange } from "react-icons/md";

const DashboardHeader = () => {
  const greetUser = (username) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "Good morning";

    if (currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    return `${greeting} ${username.split(" ")[0]}`;
  };

  const getCurrentFormattedDate = () => {
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-In", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(currentDate);

    return formattedDate;
  };

  return (
    <div className="Dashboard-header">
      <div className="d-flex flex-row avatar-container">
        <div className="avatar-notif-container">
          <img
            className="user-avatar Dashboard-avatar"
            src="https://img.freepik.com/free-photo/indian-hindu-girl-traditional-violet-saree-sitting-cafe-table_627829-1989.jpg?size=626&ext=jpg&ga=GA1.1.406501541.1702974435&semt=ais"
            alt="avatar"
          />
          <span className="notification-badge">5</span>
        </div>
        <div className="ms-3">
          <h2 className="mb-0 ">{greetUser("Oguz Yagiz Kara")}</h2>
          <p className="text-secondary date-day-desc ">
            Here are your stats for Today {getCurrentFormattedDate()}
          </p>
        </div>
      </div>
      <div className="today-date-container mr-auto">
        <button
          className="d-flex g-2 align-items-center transparent-btn"
          value={new Date()}
        >
          <MdDateRange className="mr-3" />
          <span className="ms-1 me-2">Today</span>
        </button>
        <span className="ms-4 fw-bold ">Compare To</span>
        {/* drop down selector  grp*/}
        <div className="clas btn-group  bg-transparent p-1">
          <button
            type="button"
            className="btn btn-light dropdown-toggle bg-transparent border-none transparent-btn "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Previous Period
          </button>
          <ul className="dropdown-menu">
            <li>
              <p></p>
            </li>
            <li>
              <p className="dropdown-item" href="#">
                last month
              </p>
            </li>
            <li>
              <p className="dropdown-item" href="#">
                last 3 Months
              </p>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <p className="dropdown-item" href="#">
                last 6 Months
              </p>
            </li>
            <li>
              <p className="dropdown-item" href="#">
                last 9 Months
              </p>
            </li>
            <li>
              <p className="dropdown-item" href="#">
                last 12 Months
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
