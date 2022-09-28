import { useState } from "react";
import { submitNote } from "../services/Note";
import CrossIcon from "./Icons/CrossIcon";
import SuccessfulNotification from "./SuccessfulNotification";

export default function NoteDrawer(props) {
  const { isCloseNote, setIsCloseNote } = props;
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState({
    description: "",
    title: "MRM Note",
    type: "MRM Note",
  });

  const closeSection = () => {
    setIsCloseNote(!isCloseNote);
  };

  const handleOnChange = async (event) => {
    event.persist();
    const { name, value } = event.target;

    setNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    submitNote(note, props.contactID).then((response) => {
      if (201 === response.code) {
        setShowNotification("block");
        setMessage(response?.message);
        setIsCloseNote(!isCloseNote);
        setNote({
          description: "",
          title: "MRM Note",
          type: "MRM Note",
        });
      } else {
        // Validation messages
        if (200 == response.code) {
          setErrors({
            ...errors,
            description: response?.message,
          });
        } else {
          setErrors({
            ...errors,
            type: response?.message,
          });
        }
      }
    });
  };
  return (
    <>
      <div
        class={
          props.isOpenNote && !isCloseNote
            ? "mintmrm-step-settings-drawer show-drawer"
            : "mintmrm-step-settings-drawer"
        }
      >
        <span className="drawer-bg-overlay"></span>

        <div className="drawer-wrapper ConditionFields">
          <div className="drawer-header">
            {/* <!-- step title --> */}
            <h4 className="drawer-title">
              <span className="drawer-type">Add Note</span>
            </h4>

            {/* <!-- Add Condition title --> */}

            <span className="mintmrm-drawer-close" onClick={closeSection}>
              <CrossIcon />
            </span>
          </div>
          {/* <!-- /.drawer-header --> */}

          <div className="drawer-body">
            <form onSubmit={handleSubmit}>
              <div className="body-wrapper">
                <div className="body-title">
                  <h5>Write a Note</h5>
                  <span>
                    {2000 - note.description.length} characters remaining
                  </span>
                </div>
                <div className="text-area">
                  <textarea
                    value={note.description}
                    name="description"
                    onChange={handleOnChange}
                  />
                  <p className="error-message">{errors?.description}</p>
                </div>
                <div className="note-footer">
                  {/* <Smile />
              <Attachment /> */}
                  <button type="submit" className="add-btn mintmrm-btn ">
                    Add Note
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
}
