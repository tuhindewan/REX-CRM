import { Button, Table } from "rsuite";
import { Link } from "react-router-dom";
const { Column, HeaderCell, Cell } = Table;
import BaseTable from "../components/BaseTable";
import Import from "./ImportContacts";

const leftMarkup = (
  <>
    <Link to="/contacts/create">
      <Button appearance="primary">+ Create</Button>
    </Link>
    <Link to="/contacts/import">
      <Button appearance="primary">+ Import</Button>
    </Link>
  </>
);
const Contacts = () => {
  return (
    <>
      <BaseTable endpoint="/contacts" leftMarkup={leftMarkup}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="first_name" />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="last_name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
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
