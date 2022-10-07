import React, { useEffect, useState } from "react";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";

const FormEditor = () => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const  saveForm = () =>{
    const storedBlocks = window.localStorage.getItem( 'getmrmblocks' );
    const res =  fetch(`${window.MRM_Vars.api_base_url}mrm/v1/save-mrm-form/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(storedBlocks),
    });
    // const responseData =  res.json();
    // const code = responseData?.code;

  }

  return (
    <>
        <div className="add-contact-form">
          <div className="contact-form-body">
            <InputItem label="Title" name="form_title" />
            <button type="submit" className="contact-save mintmrm-btn " onClick={saveForm}>
              Save
            </button>
            <div id="mrm-block-editor" className="getdave-sbe-block-editor block-editor"></div>
          </div>
        </div>
    </>
  );
};

export default FormEditor;
