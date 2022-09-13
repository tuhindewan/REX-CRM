import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Notification, Table, useToaster } from "rsuite";
import BaseTable from "../components/BaseTable/index";
import { useGlobalStore } from "../hooks/useGlobalStore";
const { Column, HeaderCell, Cell } = Table;
import Import from "../components/Icons/Import";
import Plus from "../components/Icons/Plus";
const leftMarkup = (
  <>
    <Link to="/contacts/import">
      <Button appearance="primary">+ Import</Button>
    </Link>
  </>
);

const Contacts = () => {
  useGlobalStore.setState({
    navbarMarkup: (
      <>
        <Link to="/contacts/import">
          <button className="import-btn soronmrm-btn outline">
            <Import />
            Import
          </button>
        </Link>

        <Link to="/contacts/create">
          <button className="add-contact-btn soronmrm-btn ">
            <Plus /> Add contact
          </button>
        </Link>
      </>
    ),
    hideGlobalNav: false
  });
  const toaster = useToaster();
  const location = useLocation();
  const navigate = useNavigate();

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
      setFilter({
        lists,
        tags,
        status,
      });
    } catch (err) {}
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
      <BaseTable endpoint="contacts" leftMarkup={leftMarkup}>
        {/* <Column width={50} align="center" fixed>
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
        </Column> */}
      </BaseTable>
    </>
  );
};

export default Contacts;
