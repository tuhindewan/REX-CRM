import { Button, Table } from "rsuite";
import { Link } from "react-router-dom";
const { Column, HeaderCell, Cell } = Table;
import BaseTable from "../components/Base/BaseTable";
import { useSearchParams } from "react-router-dom";

async function filterContacts() {}

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
  const search = useSearchParams();
  const searchParams = new URLSearchParams("lists=[1,2,3]");

  console.log(JSON.parse(searchParams.get("lists")));

  return (
    <>
      <BaseTable endpoint="/contacts" leftMarkup={leftMarkup}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Title</HeaderCell>
          <Cell>
            {(rowData) => (
              <Link to={`/contacts/${rowData["id"]}`}>
                <div> {`${rowData["first_name"]} ${rowData["last_name"]}`}</div>
              </Link>
            )}
          </Cell>
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
