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
import { Link, useLocation} from "react-router-dom";

const UpdateTag = (props) => {

    const location = useLocation();

  const { endpoint = "/tags/" } = props;
  const plural = endpoint.replace("/", "");
  const singular = plural.substr(0, plural.length - 1);

  const [title, setTitle] = useState(location.state.title);
  const [slug, setSlug] = useState(location.state.slug);
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
    const res = await axios.put(
      `/wp-json/mrm/v1${endpoint}${location.state.id}`,
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
    const code = resJson.code;
    if (code == 201) {
      toaster.push(
        <Notification closable type="success" header="success" duration={2000}>
          Tag Updated
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
        <Input value={title} onChange={handleTitleChange}/>
      </InputGroup>

      <InputGroup style={styles}>
        <InputGroup.Addon>Slug</InputGroup.Addon>
        <Input value={slug} onChange={setSlug}/>
      </InputGroup>
        <Button
            onClick={() => insertData(title, slug)}
            appearance="primary"
            loading={loading}
        >
        Update Tag
        </Button>
        
    </Stack>
  );
};

export default UpdateTag;
