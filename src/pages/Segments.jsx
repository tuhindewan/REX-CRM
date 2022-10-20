// import BaseTable from "../components/Base/BaseTable";
// import { Table, Button } from "rsuite";
// const { HeaderCell, Cell, Column } = Table;
// import BaseCreate from "../components/Base/BaseCreate";
// import { Link ,useParams} from "react-router-dom";




// const TitleCell = ({ rowData, dataKey, ...props }) => {
//   return (
//     <Cell {...props}>
//         <Link to={`/segments/update/${rowData.id}`}  state={ 
//           {id: rowData.id,
//            title: rowData.title, 
//            slug: rowData.slug}
//           }>
//           <div> {rowData.title}</div>
//         </Link> 
//     </Cell>
//   );
// };

const Segments = () => {
  return (
    <>
      {/* <BaseTable endpoint="/segments">
        <Column width={100} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Title</HeaderCell>
          <TitleCell dataKey="title">
          </TitleCell>
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Slug</HeaderCell>
          <Cell dataKey="slug" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Created At</HeaderCell>
          <Cell dataKey="created_at" />
        </Column>
      </BaseTable> */}
    </>
  );
};

export default Segments;
