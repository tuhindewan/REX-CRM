import { Link } from "react-router-dom";
import { __ } from "@wordpress/i18n";
import "../style/Navbar.css";
import routes from "../routes";
import { useLocation } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="navbar">
      <ul className="mrm-ul">
        {routes.map((route, index) => {
          const routeString = route.path.replace("/", "").split("?")[0];
          if (!route.hideInMenu) {
            return (
              <li className="mrm-li" key={index}>
                <Link
                  className={
                    location.pathname.includes(routeString)
                      ? "mrm-a mrm-active"
                      : "mrm-a"
                  }
                  to={route.path}
                >
                  {__(route.title, "mrm")}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
