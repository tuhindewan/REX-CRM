import { Link } from "react-router-dom";
import { __ } from "@wordpress/i18n";
import "../style/Navbar.css";
import routes from "../routes";
import { useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="navbar">
      <ul className="mrm-ul">
        {routes.map((route, index) => {
          if (!route.hideInMenu) {
            return (
              <li className="mrm-li" key={index}>
                <Link
                  className={
                    location.pathname == route.path
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
