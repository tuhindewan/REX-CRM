import { useState } from "react";
import CrossIcon from "./Icons/CrossIcon";

export default function EmailDrawer(props) {
  const { isClose, setIsClose, contact } = props;
  const [email, setEmail] = useState({
    email_address: contact.email,
    email_subject: "",
    email_body: "",
    sender_id: `${window.MRM_Vars.current_userID}`,
  });

  const closeSection = () => {
    setIsClose(!isClose);
  };

  const handleOnChange = async (event) => {
    event.persist();
    const { name, value } = event.target;

    setNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div
        class={
          props.isOpen && !isClose
            ? "mintmrm-step-settings-drawer show-drawer"
            : "mintmrm-step-settings-drawer"
        }
      >
        <span className="drawer-bg-overlay"></span>

        <div className="drawer-wrapper">
          <div className="drawer-header">
            {/* <!-- step title --> */}
            <h4 className="drawer-title">
              <span className="drawer-type">New Message</span>
            </h4>

            <span className="mintmrm-drawer-close" onClick={closeSection}>
              <CrossIcon />
            </span>
          </div>
          {/* <!-- /.drawer-header --> */}

          <div className="drawer-body">
            <div className="body-wrapper">
              <div className="email-to">
                <span className="">To:</span>
                <input
                  type="text"
                  disabled
                  name="email_address"
                  value={contact.email}
                />
              </div>
              <div className="email-subject">
                <span className="">Subject:</span>
                <input
                  type="text"
                  value={email.email_subject}
                  name="email_subject"
                  onChange={handleOnChange}
                />
              </div>
              <div className="email-body">
                <textarea
                  value={email.email_body}
                  name="email_body"
                  onChange={handleOnChange}
                />
              </div>
              <div className="body-footer">
                <button
                  className="contact-cancel mintmrm-btn outline"
                  onClick={closeSection}
                >
                  Cancel
                </button>
                <button type="submit" className="contact-save mintmrm-btn ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
