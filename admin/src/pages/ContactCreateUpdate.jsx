import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import BasePicker from "../components/BasePicker.jsx";
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
  let { id } = useParams();
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
    const contact = {
      ...contactDetails,
      tags: tags,
      lists: lists,
    };

    const res = await axios.post(`${config.baseURL}/contacts`, contact, {
      headers: {
        "Content-type": "application/json",
      },
    });

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
    }
    setLoading(false);
  }
  useEffect(() => {
    async function getContact() {
      if (id) {
        const res = await axios.get(`${config.baseURL}/contacts/${id}`, {
          headers: {
            "Content-type": "application/json",
          },
        });
        const resJson = res.data;
        console.log(resJson);
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
        <BasePicker endpoint="/tags" data={tags} setData={setTags} />
        <BasePicker endpoint="/lists" data={lists} setData={setLists} />
        <Button
          onClick={insertOrUpdateContact}
          appearance="primary"
          loading={loading}
        >
          Create Contact
        </Button>
      </Stack>
    </>
  );
};

export default ContactCreateUpdate;
