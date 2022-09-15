import { __ } from "@wordpress/i18n";
import { Link, useLocation } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import routes from "../../routes";
import { useState, useEffect } from "react";

import "./style.css";

export default function Navbar(props) {
  const {refresh, setRefresh} = props;
  const location = useLocation();
  const navbarMarkup = useGlobalStore((state) => state.navbarMarkup);
  const hideGlobalNav = useGlobalStore((state) => state.hideGlobalNav);

  const [contactCount, setContactCount] = useState(0);
  const [listCount, setListCount] = useState(0);
  const [tagCount, setTagCount] = useState(0);

  const [contactShow, setContactShow] = useState(0);
  const [listShow, setListShow] = useState(0);
  const [tagShow, setTagShow] = useState(0);

  const [change, setChange] = useState(false);

  useEffect(() => {
    const getCount = async () => {
      const contactData = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts?page=1&per-page=1`
      );
      const contactJson = await contactData.json();
      if (contactJson.code == 200) {
        setContactCount(contactJson.data.count);
      }

      const listData = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/lists?page=1&per-page=1`
      );
      const listJson = await listData.json();
      if (listJson.code == 200) {
        setListCount(listJson.data.count);
      }

      const tagData = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/tags?page=1&per-page=1`
      );
      const tagJson = await tagData.json();
      if (tagJson.code == 200) {
        setTagCount(tagJson.data.count);
      }
    };
    getCount();
  }, [change]);

  return (
    <>
      {!hideGlobalNav && (
        <div className="soronmrm-header">
          <div className="soronmrm-container">
            <div className="header-wrapper">
              <div className="site-logo">
                <Link to="/">
                  <img
                    src="/wp-content/plugins/mrm/admin/assets/images/contact-logo.png"
                    alt=""
                  />
                </Link>
              </div>

              <nav className="soronmrm-navbar">
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
                            {__(route.title, "soronmrm")}
                          </Link>

                          {route.bage && (
                            <span className="bage">{route.bage}</span>
                          )}
                          {route.title === "All Contacts" ? (
                            <span className="bage">{contactCount}</span>
                          ) : route.title === "Lists" ? (
                            <span className="bage">{listCount}</span>
                          ) : route.title === "Tags" ? (
                            <span className="bage">{tagCount}</span>
                          ) : (
                            ""
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
