import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Stack, InputGroup, Input } from "rsuite";

const BaseCreate = (props) => {
  const { endpoint = "/lists" } = props;
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (value) => {
    console.log(value);
    setTitle(value);
  };
  async function insertData(title, slug) {
    setLoading(true);
    const res = await axios.post(
      `/wp-json/mrm/v1${endpoint}`,
      {},
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const resJson = res.data;
    const data = resJson.data.code;
    setLoading(false);
  }
  const styles = {
    width: 300,
    marginBottom: 10,
  };
  return (
    <Stack>
      <InputGroup style={styles}>
        <InputGroup.Addon> Title</InputGroup.Addon>
        <Input value={title} onChange={handleTitleChange} />
      </InputGroup>

      <InputGroup style={styles}>
        <Input value={slug} onChange={setSlug}/>
        <InputGroup.Addon>Slug</InputGroup.Addon>
      </InputGroup>

    </Stack>
  );
};

export default BaseTable;
