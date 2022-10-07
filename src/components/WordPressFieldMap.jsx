import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { getLists } from "../services/List";
import { getTags } from "../services/Tag";
import ImportNavbar from "./Import/ImportNavbar";
import Selectbox from "./Selectbox";
import WarningNotification from "./WarningNotification";

export default function WordPressFieldMap() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // holds user selected lists, tags, and status
  const [extra, setExtra] = useState([]);
  // holds map state
  const [mapState, setMapState] = useState([]);

  // holds selectbox currently selected lists
  const [lists, setLists] = useState([]);
  // holds selectbox currently selected tags
  const [tags, setTags] = useState([]);
  const [showWarning, setShowWarning] = useState("none");
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState([]);

  // get the state from calling component
  const state = location.state;

  // if current path is /contacts/import/csv/map replace the map and send back to /contacts/import/csv
  // this url will also be used for posting fetch request endpoint /contacts/import/csv for file and /contacts/import/raw for raw data
  const returnUrl = location.pathname.replace("/map", "");

  //   if no data is recieved through state object
  //   force redirect to previous import page
  if (!state) {
    return <Navigate to={returnUrl} />;
  }

  // get the state data from calling component
  //   const { contacts } = state.data;

  useEffect(() => {
    // Get lists
    getLists().then((results) => {
      results.data.map(function () {
        setLists(results.data);
      });
    });

    // Get tags
    getTags().then((results) => {
      setTags(results.data);
    });

    if ("native-wp" == location.state?.type) {
      setContacts(location.state?.data);
    }
  }, []);
  const importContacts = async () => {
    setLoading(true);
    const body = {
      contacts: contacts,
      ...extra, // lists, tags, status
    };

    if (!body["status"]) body["status"] = ["pending"];
    body.created_by = `${window.MRM_Vars.current_userID}`;
    console.log(body);
    try {
      let res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts/insert/wordpress`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.code == 201) {
        navigate("/contacts/import/confirmation", {
          state: { data: resJson.data },
        });
      } else {
        setShowWarning("block");
        setMessage(resJson.message);
      }
      setLoading(false);
      const timer = setTimeout(() => {
        setShowWarning("none");
      }, 3000);
      return () => clearTimeout(timer);
    } catch (e) {
      console.log(e);
      window.alert(e.message);
      setLoading(false);
    }
  };

  // handle status, lists, tags
  function handleExtraFields(e, name) {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);
    setExtra((prevState) => ({
      ...prevState,
      [name]: updatedOptions,
    }));
  }

  return (
    <>
      <div className="mintmrm-import-page">
        <div className="mintmrm-header">
          <div className="contact-details-breadcrumb import-contact-breadcrum">
            <div className="import-cotainer">
              <div className="mintmrm-container">
                <ul className="mintmrm-breadcrumb">
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li className="active">Import</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mintmrm-container">
          <div className="import-wrapper">
            <ImportNavbar />
            <div className="import-tabs-content upload-section">
              <h3>Select Fields to Map</h3>
              <span className="csv-title">
                Select which fields you wish to synchronize to their
                destinations.
              </span>
              <form className="select-field-form" action="">
                <div className="select-field-table">
                  <table>
                    <thead>
                      <tr>
                        <th>WordPress ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts?.map((contact) => {
                        return (
                          <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>
                              {contact.first_name} {contact.last_name}
                            </td>
                            <td>{contact.user_login}</td>
                            <td>{contact.user_email}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="profile-section">
                  <h3>Contact Profile</h3>

                  <div className="contact-profile">
                    <Selectbox
                      label="Status"
                      name="status"
                      options={[
                        {
                          title: "Pending",
                          id: "pending",
                        },
                        {
                          title: "Subscribed",
                          id: "subscribed",
                        },
                        {
                          title: "Unsubscribed",
                          id: "unsubscribed",
                        },
                      ]}
                      tags={false}
                      placeholder="Select Status"
                      multiple={false}
                      onSelect={handleExtraFields}
                    />
                    <Selectbox
                      label="Lists"
                      name="lists"
                      options={lists}
                      placeholder="Select List"
                      tags={false}
                      multiple={true}
                      onSelect={handleExtraFields}
                    />
                    <Selectbox
                      label="Tags"
                      name="tags"
                      options={tags}
                      placeholder="Select Tags"
                      tags={false}
                      multiple={true}
                      onSelect={handleExtraFields}
                    />
                  </div>
                </div>
              </form>

              <div className="import-button">
                <Link to={returnUrl}>
                  <button className="mintmrm-btn outline cancel-btn">
                    Cancel
                  </button>
                </Link>

                <button
                  className="import-confirm-button mintmrm-btn"
                  onClick={() => importContacts()}
                  loading={loading}
                >
                  Import
                  {loading && (
                    <span
                      className="mintmrm-loader"
                      style={{ display: "block" }}
                    ></span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WarningNotification display={showWarning} message={message} />
    </>
  );
}
