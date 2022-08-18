import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
import BaseTable from "../components/BaseTable";

const Contacts = () => {
  return (
    <>
      
      <BaseTable endpoint="/contacts">
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
