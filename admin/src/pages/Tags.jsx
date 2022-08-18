import BaseTable from "../components/BaseTable";
import { Table } from "rsuite";
const { HeaderCell, Cell, Column } = Table;
import BaseCreate from "../components/BaseCreate";

const Tags = () => {
  return (
    <>
      <BaseCreate endpoint="/tags" />
      <BaseTable endpoint="/tags">
        <Column width={100} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Slug</HeaderCell>
          <Cell dataKey="slug" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Created At</HeaderCell>
          <Cell dataKey="created_at" />
        </Column>
      </BaseTable>
    </>
  );
};

export default Tags;
