import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Notification,
  SelectPicker,
  Stack,
  Table,
  useToaster,
} from "rsuite";
import BasePicker from "../components/Base/BasePicker";
import BaseTable from "../components/Base/BaseTable";
const { Column, HeaderCell, Cell } = Table;

const Contacts = () => {
  const toaster = useToaster();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const [tags, setTags] = useState([]);
  const [lists, setLists] = useState([]);
  const [status, setStatus] = useState("pending");
  const [filter, setFilter] = useState({});
  const [refreshFilter, setRefreshFilter] = useState(true);
  const statusData = ["pending", "subscribed", "unsubscribed", "bounced"].map(
    (data) => ({ label: data.toUpperCase(), value: data })
  );

  async function handleDelete(id) {
    const res = await axios.delete(`/wp-json/mrm/v1/contacts/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.data.code === 200) {
      toaster.push(
        <Notification closable type="success" header="success" duration={2000}>
          Contact deleted
        </Notification>,
        {
          placement: "bottomEnd",
        }
      );
    } else {
      //error message
    }
  }

  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const lists = JSON.parse(searchParams.get("lists"));
      const tags = JSON.parse(searchParams.get("tags"));
      const status = searchParams.get("status");
      console.log(lists);
      console.log(tags);
      console.log(status);
      setFilter({
        lists,
        tags,
        status,
      });
    } catch (err) {
      console.log(err);
    }
  }, [refreshFilter]);

  function filterContacts() {
    const listArr = lists.map((item) => item.id);
    const tagArr = tags.map((item) => item.id);
    toggleRefreshFilter();
    navigate(
      `/contacts?lists=[${listArr}]&tags=[${tagArr.toString()}]&status=${status}`
    );
  }

  function resetFilter() {
    toggleRefreshFilter();
    navigate("/contacts");
  }

  function toggleRefreshFilter() {
    setRefreshFilter((prev) => !prev);
  }

  return (
    <>
      <BaseTable
        endpoint="/contacts"
        leftMarkup={
          <>
            <Stack
              spacing={10}
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: 10 }}
              wrap
            >
              <Stack
                spacing={10}
                justifyContent="center"
                alignItems="center"
                style={{ margin: 10 }}
                wrap
              >
                <BasePicker
                  endpoint="/tags"
                  data={tags}
                  setData={setTags}
                  width={150}
                />
                <BasePicker
                  endpoint="/lists"
                  data={lists}
                  setData={setLists}
                  width={150}
                />
                <SelectPicker
                  menuAutoWidth
                  data={statusData}
                  label="Status"
                  name="status"
                  defaultValue="pending"
                  value={status}
                  block
                  onChange={setStatus}
                />
                <Button appearance="primary" onClick={filterContacts}>
                  Filter
                </Button>
                <Button appearance="primary" onClick={resetFilter}>
                  Reset
                </Button>
              </Stack>
              <Stack
                spacing={10}
                justifyContent="center"
                alignItems="center"
                // style={{ margin: 10 }}
              >
                <Link to="/contacts/create">
                  <Button appearance="primary">+ Create</Button>
                </Link>
                <Link to="/contacts/import">
                  <Button appearance="primary">+ Import</Button>
                </Link>
              </Stack>
            </Stack>
          </>
        }
      >
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Name</HeaderCell>
          <Cell>
            {(rowData) => (
              <Link to={`/contacts/update/${rowData["id"]}`}>
                <div> {`${rowData["first_name"]} ${rowData["last_name"]}`}</div>
              </Link>
            )}
          </Cell>
        </Column>

        <Column width={200}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>
        <Column width={200}>
          <HeaderCell>Lists</HeaderCell>
          <Cell>
            {(rowData) =>
              rowData.lists.map((item) => {
                return <span key={item["slug"]}>{item["title"]}</span>;
              })
            }
          </Cell>
        </Column>

        <Column width={200}>
          <HeaderCell>Tags</HeaderCell>
          <Cell>
            {(rowData) =>
              rowData.tags.map((item) => {
                return <span key={item["slug"]}>{item["title"]}</span>;
              })
            }
          </Cell>
        </Column>

        <Column width={200} flexGrow={1}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell> Action </HeaderCell>
          <Cell>
            {(rowData) => (
              <span>
                <button onClick={() => handleDelete(rowData.id)}>
                  {" "}
                  Delete{" "}
                </button>
              </span>
            )}
          </Cell>
        </Column>
      </BaseTable>
    </>
  );
};

export default Contacts;
