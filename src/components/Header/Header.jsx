import "./style.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="mobile-header ">
      <nav className="navbar w-100 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navLink-item" to="/dashboard">
            <img
              src="https://assets.website-files.com/6076eab79e12ed151f2a03f6/6076eec561cd5d0f52ca83f8_Branding.svg"
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="mobile-navLinks-container navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <NavLink className="navLink-item" to="/dashboard">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Dashboard
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/conversation">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Conversation
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/automations">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Automations
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/campaigns">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Campaigns
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/popup">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Popup
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/live-chat">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Live Chat
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/segments">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Segments
                    </span>
                  </NavLink>
                </li>
                <li data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                  <NavLink className="navLink-item" to="/integrations">
                    <span data-bs-toggle="collapse" href="#navbarNavAltMarkup">
                      Integrations
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
