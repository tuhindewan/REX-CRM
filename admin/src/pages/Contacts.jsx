import { Button, Table, SelectPicker, Stack } from "rsuite";
import { Link } from "react-router-dom";
const { Column, HeaderCell, Cell } = Table;
import BaseTable from "../components/Base/BaseTable";
import { useSearchParams } from "react-router-dom";
import BasePicker from "../components/Base/BasePicker";
import React, { useState, useEffect } from "react";

async function filterContacts() {}

const Contacts = () => {
  const search = useSearchParams();

  const searchParams = new URLSearchParams("lists=[1,2,3]");

  console.log(JSON.parse(searchParams.get("lists")));
  const [tags, setTags] = useState([]);
  const [lists, setLists] = useState([]);
  const [status, setStatus] = useState("pending");

  const statusData = ["pending", "subscribed", "unsubscribed", "bounced"].map(
    (data) => ({ label: data.toUpperCase(), value: data })
  );

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
                <Button appearance="primary">Filter</Button>
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
      </BaseTable>
    </>
  );
};

export default Contacts;
