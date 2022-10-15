import { Link } from "react-router-dom";
import { Button, Table } from "rsuite";
import BaseTable from "../components/BaseTable/index";
import Import from "../components/Icons/Import";
import Plus from "../components/Icons/Plus";
import { useGlobalStore } from "../hooks/useGlobalStore";

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
  
  return (
      <BaseTable endpoint="contacts" leftMarkup={leftMarkup}></BaseTable>
  );
};

export default Contacts;
