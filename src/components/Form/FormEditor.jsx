import React, { useEffect, useState } from "react";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";

const FormEditor = () => {

  const [formData, setValues] = useState({
    title: "",
  });

// Set values from Title form
  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };
  const  saveForm =  async () =>{
    const storedBlocks = window.localStorage.getItem( 'getmrmblocks' );
    const  post_data = {
      title : formData.title,
      form_body : storedBlocks
    }
    const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post_data),
    });
    const responseData = await res.json();
    console.log(responseData)
  }

  return(
      <>

        <div className="add-contact-form">
          <div className="contact-form-body">
            <InputItem
                label="Title"
                name="title"
                handleChange={handleChange}
                value={formData.title}
            />
            <button type="submit" className="contact-save mintmrm-btn " onClick={saveForm}>
              Save
            </button>
            <div id="mrm-block-editor" className="getdave-sbe-block-editor block-editor"></div>
          </div>
        </div>

      </>
  )
};

export default FormEditor;
