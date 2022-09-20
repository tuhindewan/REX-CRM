import { __ } from "@wordpress/i18n";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";
import CampaignsLogo from "./Icons/CampaignsLogo";
import Plus from "./Icons/Plus";
import { useGlobalStore } from "../hooks/useGlobalStore";

export default function CampaignsNavbar() {
  const location = useLocation();
  useGlobalStore.setState({
    hideGlobalNav: true,
  });

  return (
    <div className="mintmrm-header">
      <div className="mintmrm-container">
        <div className="header-wrapper">
          <div className="site-logo">
            <Link to="/">
              <CampaignsLogo />
            </Link>
          </div>

          <nav className="mintmrm-navbar">
            <ul className="navbar-ul">
              {routes.map((route, index) => {
                if (route.campaignMenu) {
                  return (
                    <li
                      className={
                        location.pathname == route.path
                          ? "navbar-li active"
                          : "navbar-li "
                      }
                      key={index}
                    >
                      <Link to={route.path}>{__(route.title, "mintmrm")}</Link>

                      {route.bage && <span className="bage">{route.bage}</span>}
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          <div className="navbar-buttons">
            <Link to="/campaigns/create">
              <button className="add-contact-btn mintmrm-btn ">
                <Plus /> Add Campaign
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
