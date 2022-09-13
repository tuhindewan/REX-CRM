import React, { useState } from "react";
import DynamicInput from "../DynamicInput";
import InputItem from "../InputItem";
import Selectbox from "../Selectbox";
import { submitCustomFields } from "../../services/CustomField";

export default function CustomFieldCreate() {

  const [ isShow, setIsShow ] = useState(false);
  const [ options, setOptions ] = useState([]);
  // Prepare contact object
  const [customFields, setCustomFields] = useState({
    title: "",
    type: "",
    options: [],
    group_id: 1
  });


  // Set custom fields type
  const onSelect = async (event) => {

    const { name, value } = event.target;

    if( 'category' ==  value.toString()){
      setIsShow(true)
    }else{
      setIsShow(false)
    }
    setCustomFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleOptionData = async (options) => {

    setOptions(options);

  }


  // Set custom fields title
  const handleChange = async (event) => {
    event.persist();
    const { name, value } = event.target;

    setCustomFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Custom fields create form submit
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    customFields.options = options;
    submitCustomFields( customFields ).then((results) => {
      console.log(results);
    });
  };

  return (
    <div className="create-contact">
      <div className="contact-container">
        <h2 className="conatct-heading">Add Custom Field</h2>

        <form onSubmit={handleSubmit}>
          <div className="add-contact-form">
            <div className="contact-form-body">
              <InputItem 
                label="Title" 
                name="title" 
                value={customFields.title}
                handleChange={handleChange}
                isRequired
              />
              <Selectbox
                label="Type"
                name="type"
                options={[
                  {
                    title: "Text",
                    id: "text",
                  },
                  {
                    title: "Date",
                    id: "date",
                  },
                  {
                    title: "Number",
                    id: "number",
                  },
                  {
                    title: "Category",
                    id: "category",
                  },
                ]}
                tags={false}
                placeholder="Select Type"
                multiple={false}
                value={customFields.type}
                onSelect={onSelect}
              />
              { isShow? <DynamicInput onOptionData={handleOptionData} /> : '' }
              
            </div>

            <div className="contact-button-field">
              <button className="contact-cancel soronmrm-btn outline">
                Cancel
              </button>
              <button type="submit" className="contact-save soronmrm-btn ">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
