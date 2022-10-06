import React, { useEffect, useState } from "react";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";

const FormEditor = () => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const el = document.getElementById("form-block-id");
    console.log(el);
  }, []);

  return (
    <>
      <form>
        <div className="add-contact-form">
          <div className="contact-form-body">
            <InputItem label="Title" name="form_title" />
            <div id="form-block-id">fdsaf</div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormEditor;
