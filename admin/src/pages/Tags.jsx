import BaseTable from "../components/Base/BaseTable";
import React, { useState, useEffect } from "react";
import { Button, Table, useToaster, Notification } from "rsuite";
const { HeaderCell, Cell, Column } = Table;
import BaseCreate from "../components/Base/BaseCreate";
import CreateTag from "../components/Tag/CreateTag";
import { Link ,useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const leftMarkup = (
  <Link to="/tags/create">
    <Button appearance="primary">Create Tag</Button>
  </Link>
);


const TitleCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props}>
        <Link to={`/tags/update/${rowData.id}`}  state={ 
          {id: rowData.id,
           title: rowData.title, 
           slug: rowData.slug}
          }>
          <div> {rowData.title}</div>
        </Link> 
    </Cell>
  );
};




const Tags = () => {
  const toaster = useToaster();
  const navigate = useNavigate();

  async function handleDelete (id) {
  
    const res = await axios.delete(
      `/wp-json/mrm/v1/tags/${id}`,
      {
      headers: {
          "Content-type": "application/json",
      },
      }
    )
    console.log(res.data.code);

    if (res.data.code === 200){
      toaster.push(
          <Notification closable type="success" header="success" duration={2000}>
            Tag deleted
          </Notification>,
          {
            placement: "bottomEnd",
          }
      );
      }else {
        //error message
      }
      navigate('/tags');
  } 
  
  return (
    <>
      {/* <BaseCreate endpoint="/tags" /> */}
      {/* <CreateTag endpoint="/tags/"/> */}

      <BaseTable endpoint="/tags" leftMarkup={leftMarkup}>
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

export default Tags;
