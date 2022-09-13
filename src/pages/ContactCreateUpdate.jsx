import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  Notification,
  SelectPicker,
  Stack,
  useToaster,
} from "rsuite";
import BasePicker from "../components/Base/BasePicker.jsx";
import config from "../config.js";

const ContactCreateUpdate = (props) => {
  // if id is defined then it is an update page otherwise it is an create page
  let { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const toaster = useToaster();
  const [contactDetails, setContactDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    meta_fields: {
      phone: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      country: "",
    },
    status: "pending",
  });
  const [emails, setEmails] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [lists, setLists] = useState([]);
  const [customFields, setCustomFields] = useState({
    title: "",
    type: "",
  });
  const [refreshContact, setRefeshContact] = useState(true);

  const refresh = () => {
    setRefeshContact((prev) => !prev);
  };

  const statusData = ["pending", "subscribed", "unsubscribed", "bounced"].map(
    (data) => ({ label: data.toUpperCase(), value: data })
  );
  const typeData = ["text", "radio", "checkbox", "number"].map((data) => ({
    label: data.toUpperCase(),
    value: data,
  }));
  const handleContactDetailsChange = (value, event) => {
    setContactDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: value,
      };
    });
  };
  const handleContactDetailsChangeMeta = (value, event) => {
    setContactDetails((prevState) => {
      return {
        ...prevState,
        meta_fields: {
          ...prevState.meta_fields,
          [event.target.name]: value,
        },
      };
    });
  };

  const handleCustomFieldsChange = (value, event) => {
    setCustomFields((prevState) => {
      return {
        ...prevState,
        [event.target.name]: value,
      };
    });
  };

  const handleFieldTypeChange = (key, value) => {
    setCustomFields((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const handleContactStatusChange = (key, value) => {
    setContactDetails((prevState) => {
      return {
        ...prevState,
        status: value,
      };
    });
  };
  async function insertOrUpdateContact() {
    setLoading(true);
    let res = null;
    console.log(contactDetails);
    if (!id) {
      // create contact
      let contact = {
        ...contactDetails,
        tags: tags,
        lists: lists,
      };
      res = await axios.post(`${config.baseURL}/contacts`, contact, {
        headers: {
          "Content-type": "application/json",
        },
      });
    } else {
      // update contact
      let contact = {
        ...contactDetails,
      };
      delete contact["tags"];
      delete contact["lists"];
      console.log(contact);
      res = await axios.put(`${config.baseURL}/contacts/${id}`, contact, {
        headers: {
          "Content-type": "application/json",
        },
      });
    }

    const resJson = res.data;
    const code = resJson.code;
    if (code == 201) {
      toaster.push(
        <Notification closable type="success" header="success" duration={2000}>
          Created new contact
        </Notification>,
        {
          placement: "bottomEnd",
        }
      );
      navigate("/contacts");
    } else {
    }
    setLoading(false);
  }

  async function sendMail() {
    navigate(`/contacts/${id}/message`);
  }
  async function createCustomField() {
    let custom_fileds = {
      ...customFields,
      slug: customFields["title"],
    };
    let res = await axios.post(
      `${config.baseURL}/custom-fields`,
      custom_fileds,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }

  async function addGroupsToContact(type) {
    let body = {};
    if (type == "lists") {
      body["lists"] = lists;
    } else {
      body["tags"] = tags;
    }
    res = await axios.post(`${config.baseURL}/contacts/${id}/groups`, body, {
      headers: {
        "Content-type": "application/json",
      },
    });
    refresh();
  }

  async function removeGroupsToContact(groupId) {
    const res = await axios.delete(
      `/wp-json/mrm/v1/contacts/${id}/groups`,
      {
        data: {
          groups: [groupId],
        },
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (res.data.code === 200) {
      toaster.push(
        <Notification closable type="success" header="success" duration={2000}>
          res.data.message
        </Notification>,
        {
          placement: "bottomEnd",
        }
      );
    } else {
      //error message
    }
  }
  async function addNote() {
    navigate(`/contacts/${id}/note`);
  }
  // load contact details in update page
  useEffect(() => {
    async function getContact() {
      if (id) {
        const res = await axios.get(`${config.baseURL}/contacts/${id}`, {
          headers: {
            "Content-type": "application/json",
          },
        });
        const resJson = res.data;
        if ((resJson.code = 200)) {
          let details = {
            ...resJson.data,
          };
          console.log(details);
          setContactDetails(details);
        }

        // Get All emails for this contact
        const emailRes = await axios.get(
          `${config.baseURL}/contacts/${id}/get-emails`,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const emailResJson = emailRes.data;
        if ((emailResJson.code = 200)) {
          const allEmails = emailResJson.data.data;
          setEmails(allEmails);
        }

        // Get All Notes for this contact
        const noteRes = await axios.get(
          `${config.baseURL}/contact/${id}/notes`,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const noteResJson = noteRes.data;

        if (noteResJson.code == 200) {
          const allNotes = noteResJson.data.data;
          setNotes(allNotes);
        }
      }
    }
    getContact();
  }, [id]);
  const styles = {
    margin: "10px",
    width: "40vw",
  };

  return (
    <>
      <Stack
        spacing={10}
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ margin: 10 }}
        direction="row"
      >
        <Stack
          spacing={10}
          justifyContent="flex-start"
          alignItems="center"
          style={{ margin: 10 }}
          direction="column"
        >
          <InputGroup style={styles}>
            <InputGroup.Addon>First Name</InputGroup.Addon>
            <Input
              name="first_name"
              value={contactDetails["first_name"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>

          <InputGroup style={styles}>
            <InputGroup.Addon>Last Name</InputGroup.Addon>
            <Input
              name="last_name"
              value={contactDetails["last_name"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>

          <InputGroup style={styles}>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Input
              name="email"
              value={contactDetails["email"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>

          {id && (
            <>
              <InputGroup style={styles}>
                <InputGroup.Addon>Phone</InputGroup.Addon>
                <Input
                  name="phone"
                  value={contactDetails["meta_fields"]["phone"]}
                  onChange={handleContactDetailsChangeMeta}
                />
              </InputGroup>
              <InputGroup style={styles}>
                <InputGroup.Addon>Address Line 1</InputGroup.Addon>
                <Input
                  name="address_line_1"
                  value={contactDetails["meta_fields"]["address_line_1"]}
                  onChange={handleContactDetailsChangeMeta}
                />
              </InputGroup>
              <InputGroup style={styles}>
                <InputGroup.Addon>Address Line 2</InputGroup.Addon>
                <Input
                  name="address_line_2"
                  value={contactDetails["meta_fields"]["address_line_2"]}
                  onChange={handleContactDetailsChangeMeta}
                />
              </InputGroup>
              <InputGroup style={styles}>
                <InputGroup.Addon>City</InputGroup.Addon>
                <Input
                  name="city"
                  value={contactDetails["meta_fields"]["city"]}
                  onChange={handleContactDetailsChangeMeta}
                />
              </InputGroup>
              <InputGroup style={styles}>
                <InputGroup.Addon>State</InputGroup.Addon>
                <Input
                  name="state"
                  value={contactDetails["meta_fields"]["state"]}
                  onChange={handleContactDetailsChangeMeta}
                />
              </InputGroup>
              <InputGroup style={styles}>
                <InputGroup.Addon>Country</InputGroup.Addon>
                <Input
                  name="country"
                  value={contactDetails["meta_fields"]["country"]}
                  onChange={handleContactDetailsChangeMeta}
                />
              </InputGroup>
            </>
          )}
          <SelectPicker
            styles={styles}
            menuAutoWidth
            data={statusData}
            label="Status"
            name="status"
            defaultValue="pending"
            value={contactDetails["status"]}
            block
            onChange={(value, item, event) => {
              handleContactStatusChange("status", value);
            }}
          />

          <Button
            onClick={insertOrUpdateContact}
            appearance="primary"
            loading={loading}
            block
          >
            {id ? "Update" : "Create"} Contact
          </Button>
          {id && (
            <>
              <InputGroup style={styles}>
                <InputGroup.Addon>Field Title</InputGroup.Addon>
                <Input
                  name="title"
                  value={customFields["title"]}
                  onChange={handleCustomFieldsChange}
                />
              </InputGroup>
              <SelectPicker
                styles={styles}
                menuAutoWidth
                data={typeData}
                label="Type"
                name="type"
                value={customFields["type"]}
                onChange={(value, item, event) => {
                  handleFieldTypeChange("type", value);
                }}
              />
              <Button onClick={createCustomField} appearance="primary" block>
                Create Custom Field
              </Button>
            </>
          )}
        </Stack>
        <Stack
          spacing={10}
          justifyContent="center"
          alignItems="flex-start"
          style={{ margin: 10 }}
          direction="column"
        >
          <div>
            <div style={{ fontWeight: "bold" }}>Tags</div>
            {contactDetails.tags?.map((item) => {
              return (
                <div key={item["slug"]}>
                  <span>{item["title"]}</span>
                  <span
                    style={{ color: "red" }}
                    onClick={() => removeGroupsToContact(item["id"])}
                  >
                    {" "}
                    | X |{" "}
                  </span>
                </div>
              );
            })}
          </div>
          <BasePicker endpoint="/tags" data={tags} setData={setTags} />
          {id && (
            <Button
              onClick={() => addGroupsToContact("tags")}
              appearance="primary"
            >
              Add Tag
            </Button>
          )}
          <div>
            <div style={{ fontWeight: "bold" }}>Lists</div>
            {contactDetails.lists?.map((item) => {
              return (
                <>
                  <span key={item["slug"]}>{item["title"]}</span>
                  <span
                    style={{ color: "red" }}
                    onClick={() => removeGroupsToContact(item["id"])}
                  >
                    {" "}
                    | X |{" "}
                  </span>
                </>
              );
            })}
          </div>
          <BasePicker endpoint="/lists" data={lists} setData={setLists} />
          {id && (
            <Button
              onClick={() => addGroupsToContact("lists")}
              appearance="primary"
            >
              Add Lists
            </Button>
          )}
          {id && (
            <div>
              {id && (
                <Button onClick={sendMail} appearance="primary" block>
                  Send Mail
                </Button>
              )}

              <div style={{ fontWeight: "bold" }}>All Emails To this User</div>

              <hr />
              {emails.map((email, index) => {
                return (
                  <div key={index}>
                    {email["email_subject"]} | {email["created_at"]}
                  </div>
                );
              })}
            </div>
          )}
          {id && (
            <div>
              {id && (
                <Button onClick={addNote} appearance="primary" block>
                  Add Note
                </Button>
              )}
              <div style={{ fontWeight: "bold" }}>All Notes To this User</div>
              <hr />
              {notes.map((note) => {
                return (
                  <p>
                    <Link to={"../contacts/" + id + "/note/" + note["id"]}>
                      {note["title"]} | {note["created_at"]}
                    </Link>
                  </p>
                );
              })}
            </div>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default ContactCreateUpdate;
