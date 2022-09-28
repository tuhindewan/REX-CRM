import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Table, useToaster } from "rsuite";
import BaseTable from "../components/BaseTable/index";
import Import from "../components/Icons/Import";
import Plus from "../components/Icons/Plus";
import { useGlobalStore } from "../hooks/useGlobalStore";
const { Column, HeaderCell, Cell } = Table;
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
        <Link to="/contacts/import/csv">
          <button className="import-btn mintmrm-btn outline">
            <Import />
            Import
          </button>
        </Link>

        <Link to="/contacts/create">
          <button className="add-contact-btn mintmrm-btn ">
            <Plus /> Add contact
          </button>
        </Link>
      </>
    ),
    hideGlobalNav: false,
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
      <BaseTable endpoint="contacts" leftMarkup={leftMarkup}></BaseTable>
    </>
  );
};

export default Contacts;
