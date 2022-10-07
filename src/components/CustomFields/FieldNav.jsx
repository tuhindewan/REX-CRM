import { __ } from "@wordpress/i18n";
import { Link, useLocation } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import routes from "../../routes";
import Plus from "../Icons/Plus";

export default function FieldNav() {
  const location = useLocation();
  useGlobalStore.setState({
    hideGlobalNav: true,
  });

  return (
    <div className="mintmrm-header">
      <div className="mintmrm-container">
        <div className="header-wrapper">
          <div className="site-logo">
            <Link to="#">Custom Fields</Link>
          </div>

          <nav className="mintmrm-navbar">
            <ul className="navbar-ul">
              {routes.map((route, index) => {
                if (route.settingsMenu) {
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
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
          <div className="navbar-buttons">
            <Link to="/custom-fields/create">
              <button className="add-contact-btn mintmrm-btn ">
                <Plus /> Add Custom Fields
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
