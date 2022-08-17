import axios from "axios";
import React, { useState, useEffect } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get("/wp-json/mrm/v1/contacts");
      const dataJson = data.data;
      setContacts(dataJson.data.data);
    }
    getData();
  }, []);
  return (
    <>
      <div>
        {" "}
        Contact Page
        {contacts.length > 0 &&
          contacts.map((contact, index) => {
            return (
              <div key={index}>
                <div>
                  {contact.first_name} {contact.last_name}
                </div>
                <div>{contact.email}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Contacts;
