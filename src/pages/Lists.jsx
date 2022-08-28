import BaseTable from "../components/Base/BaseTable";
import { Table, Button, useToaster, Notification } from "rsuite";
const { HeaderCell, Cell, Column } = Table;
import BaseCreate from "../components/Base/BaseCreate";
import { Link ,useParams, useNavigate} from "react-router-dom";
import axios from "axios";


const leftMarkup = (
  <Link to="/lists/create">
    <Button appearance="primary">Create List</Button>
  </Link>
);

const TitleCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props}>
        <Link to={`/lists/update/${rowData.id}`}  state={ 
          {id: rowData.id,
           title: rowData.title, 
           slug: rowData.slug}
          }>
          <div> {rowData.title}</div>
        </Link> 
    </Cell>
  );
};

const Lists = () => {
  const toaster = useToaster();
  const navigate = useNavigate();

  async function handleDelete (id) {
  
    const res = await axios.delete(
      `/wp-json/mrm/v1/lists/${id}`,
      {
      headers: {
          "Content-type": "application/json",
      },
      }
    )

    if (res.data.code === 200){
      toaster.push(
          <Notification closable type="success" header="success" duration={2000}>
            List deleted
          </Notification>,
          {
            placement: "bottomEnd",
          }
      );
      }else {
        //error message
      }
  }


  return (
    <>
      <BaseTable endpoint="/lists" leftMarkup={leftMarkup}>
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
        
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell> Action </HeaderCell>
            <Cell>
            {rowData => (
              <span>
                <button onClick={() => handleDelete(rowData.id)}> Delete </button>
              </span>
            )}
            </Cell>
        </Column>
      </BaseTable>
    </>
  );
};

export default Lists;
