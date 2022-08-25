import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import BasePicker from "../components/Base/BasePicker.jsx";
import {
  Button,
  Stack,
  InputGroup,
  Input,
  Notification,
  useToaster,
  SelectPicker,
} from "rsuite";
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
    phone: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
    status: "pending",
  });
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [lists, setLists] = useState([]);

  const statusData = ["pending", "subscribed", "unsubscribed", "bounced"].map(
    (data) => ({ label: data.toUpperCase(), value: data })
  );
  const handleContactDetailsChange = (value, event) => {
    setContactDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: value,
      };
    });
  };
  const handleContactStatusChange = (key, value) => {
    setContactDetails((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  async function insertOrUpdateContact() {
    setLoading(true);
    let res = null;
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
        fields: {
          ...contactDetails,
        },
      };
      res = await axios.put(`${config.baseURL}/contacts/${id}`, contact, {
        headers: {
          "Content-type": "application/json",
        },
      });
    }

    const resJson = res.data;
    console.log(resJson);
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
    } else {
    }
    setLoading(false);
  }

  async function sendMail() {
    navigate(`/contacts/${id}/message`);
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
            existing_tags: resJson.data.tags,
            existing_lists: resJson.data.lists,
            tags: [],
            lists: [],
          };
          console.log(details);
          setContactDetails(details);
        }
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
          console.log(allEmails);
          setEmails(allEmails);
        }
        console.log(emailResJson);
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
        alignItems="top"
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

          <InputGroup style={styles}>
            <InputGroup.Addon>Phone</InputGroup.Addon>
            <Input
              name="phone"
              value={contactDetails["phone"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>
          <InputGroup style={styles}>
            <InputGroup.Addon>Address Line 1</InputGroup.Addon>
            <Input
              name="address_line_1"
              value={contactDetails["address_line_1"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>
          <InputGroup style={styles}>
            <InputGroup.Addon>Address Line 2</InputGroup.Addon>
            <Input
              name="address_line_2"
              value={contactDetails["address_line_2"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>
          <InputGroup style={styles}>
            <InputGroup.Addon>City</InputGroup.Addon>
            <Input
              name="city"
              value={contactDetails["city"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>
          <InputGroup style={styles}>
            <InputGroup.Addon>State</InputGroup.Addon>
            <Input
              name="state"
              value={contactDetails["state"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>
          <InputGroup style={styles}>
            <InputGroup.Addon>Country</InputGroup.Addon>
            <Input
              name="country"
              value={contactDetails["country"]}
              onChange={handleContactDetailsChange}
            />
          </InputGroup>
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
        </Stack>
        <Stack
          spacing={10}
          justifyContent="center"
          alignItems="top"
          style={{ margin: 10 }}
          direction="column"
        >
          {id && (
            <Button
              onClick={sendMail}
              appearance="primary"
              loading={loading}
              block
            >
              Send Mail
            </Button>
          )}
          {id && (
            <Button
              onClick={addNote}
              appearance="primary"
              loading={loading}
              block
            >
              Add Note
            </Button>
          )}
          <div>
            <div style={{ fontWeight: "bold" }}>Tags</div>
            {contactDetails.existing_tags?.map((item) => {
              return <span key={item["slug"]}>{item["title"]} | </span>;
            })}
          </div>
          <BasePicker endpoint="/tags" data={tags} setData={setTags} />
          <div>
            <div style={{ fontWeight: "bold" }}>Lists</div>
            {contactDetails.existing_lists?.map((item) => {
              return <span key={item["slug"]}>{item["title"]} | </span>;
            })}
          </div>
          <BasePicker endpoint="/lists" data={lists} setData={setLists} />
          {id && (
            <div>
              <div style={{ fontWeight: "bold" }}>All Emails To this User</div>
              <hr />
              {emails.map((email) => {
                return (
                  <div>
                    {email["email_subject"]} | {email["created_at"]}
                  </div>
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
