import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Stack,
  InputGroup,
  Input,
  Notification,
  useToaster,
} from "rsuite";

const BaseCreate = (props) => {
  const { endpoint = "/lists" } = props;
  const plural = endpoint.replace("/", "");
  const singular = plural.substr(0, plural.length - 1);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const toaster = useToaster();

  const handleTitleChange = (value) => {
    setTitle(value);
    setSlug(value.toLowerCase().replace(/[\W_]+/g, "-"));
  };
  async function insertData(title, slug) {
    if (title.length < 3) {
      toaster.push(
        <Notification closable type="error" header="error" duration={2000}>
          Title should be at least 3 or more characters long.
        </Notification>,
        {
          placement: "bottomEnd",
          duration: 2000,
        }
      );
      return;
    }
    setLoading(true);
    const res = await axios.post(
      `/wp-json/mrm/v1${endpoint}`,
      {
        title,
        slug,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const resJson = res.data;
    console.log(resJson);
    const code = resJson.code;
    if (code == 201) {
      toaster.push(
        <Notification closable type="success" header="success" duration={2000}>
          Created new {singular}
        </Notification>,
        {
          placement: "bottomEnd",
        }
      );
      setTitle("");
      setSlug("");
    }
    setLoading(false);
  }
  const styles = {
    width: 300,
  };
  return (
    <Stack
      spacing={10}
      justifyContent="flex-start"
      alignItems="center"
      style={{ margin: 10 }}
    >
      <InputGroup style={styles}>
        <InputGroup.Addon> Title</InputGroup.Addon>
        <Input value={title} onChange={handleTitleChange} />
      </InputGroup>

      <InputGroup style={styles}>
        <InputGroup.Addon>Slug</InputGroup.Addon>
        <Input value={slug} onChange={setSlug} />
      </InputGroup>
      <Button
        onClick={() => insertData(title, slug)}
        appearance="primary"
        loading={loading}
      >
        Create {singular}
      </Button>
    </Stack>
  );
};

export default BaseCreate;
