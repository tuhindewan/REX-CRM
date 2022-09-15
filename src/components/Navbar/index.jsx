import { __ } from "@wordpress/i18n";
import { Link, useLocation } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import routes from "../../routes";

import "./style.css";

export default function Navbar() {
  const location = useLocation();
  const navbarMarkup = useGlobalStore((state) => state.navbarMarkup);
  const hideGlobalNav = useGlobalStore((state) => state.hideGlobalNav);

  return (
    <>
      {!hideGlobalNav && (
        <div className="mintmrm-header">
          <div className="mintmrm-container">
            <div className="header-wrapper">
              <div className="site-logo">
                <Link to="/">
                  <img
                    src="/wp-content/plugins/mrm/admin/assets/images/contact-logo.png"
                    alt=""
                  />
                </Link>
              </div>

              <nav className="mintmrm-navbar">
                <ul className="navbar-ul">
                  {routes.map((route, index) => {
                    if (!route.hideInMenu) {
                      return (
                        <li
                          className={
                            location.pathname == route.path
                              ? "navbar-li active"
                              : "navbar-li "
                          }
                          key={index}
                        >
                          <Link to={route.path}>
                            {__(route.title, "mintmrm")}
                          </Link>

                          {route.bage && (
                            <span className="bage">{route.bage}</span>
                          )}
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>

              <div className="navbar-buttons">{navbarMarkup}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
