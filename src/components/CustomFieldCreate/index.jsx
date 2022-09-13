import React, { useState } from "react";
import DynamicInput from "../DynamicInput";
import InputItem from "../InputItem";
import Selectbox from "../Selectbox";

export default function CustomFieldCreate() {

  const [ isShow, setIsShow ] = useState(false);
  const onSelect = (event) => {

    if( 'category' ==  event.target.value.toString()){
      setIsShow(true)
    }else{
      setIsShow(false)
    }
  };

  return (
    <div className="create-contact">
      <div className="contact-container">
        <h2 className="conatct-heading">Add Custom Field</h2>

        <form>
          <div className="add-contact-form">
            <div className="contact-form-body">
              <InputItem label="Title" name="title" isRequired />
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
                onSelect={onSelect}
              />
              { isShow?
              <DynamicInput /> : ''
            }
              
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
