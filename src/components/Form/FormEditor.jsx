import React, { useEffect, useState } from "react";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";

const FormEditor = () => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);


  return (
    <>
      <form>
        <div className="add-contact-form">
          <div className="contact-form-body">
            <InputItem label="Title" name="form_title" />
            <div id="mrm-block-editor" className="getdave-sbe-block-editor block-editor"></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormEditor;
