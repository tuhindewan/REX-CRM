import BaseTable from "../components/BaseTable";
import { Table } from "rsuite";
const { HeaderCell, Cell, Column } = Table;
const Tags = () => {
  return (
    <BaseTable endpoint="/tags" height={600}>
      <Column width={100} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="ID" />
      </Column>
      <Column width={150} align="left" flexGrow={1}>
        <HeaderCell>Title</HeaderCell>
        <Cell dataKey="title" />
      </Column>
      <Column width={150} align="left" flexGrow={1}>
        <HeaderCell>Created At</HeaderCell>
        <Cell dataKey="created_at" />
      </Column>
    </BaseTable>
  );
};

export default Tags;
