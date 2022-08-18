import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Pagination, Stack, Placeholder, Loader } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        `/wp-json/mrm/v1/contacts?per-page=${perPage}&page=${page}`
      );
      const dataJson = data.data;
      const contacts = dataJson.data.data;
      const count = dataJson.data.count;
      console.log(contacts);
      setContacts(contacts);
      setCount(count);
    }
    getData();
  }, [perPage, page]);
  return (
    <>
      <div>
        <div>
          {contacts.length == 0 && (
            // <Stack spacing={6} direction="row" alignItems="center" justifyContent="center">
            //   <Placeholder.Paragraph rows={8} />
            <Placeholder.Paragraph
              style={{ marginTop: 30 }}
              graph="square"
              active={true}
              rows={10}
            />
            //  <Loader size="md" center content="Loading" />
            // </Stack>
          )}
        </div>
        <div>
          {contacts.length > 0 && (
            <div>
              <Table height={420} data={contacts}>
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
                  <HeaderCell>City</HeaderCell>
                  <Cell dataKey="city" />
                </Column>
                <Column width={200} flexGrow={1}>
                  <HeaderCell>Email</HeaderCell>
                  <Cell dataKey="email" />
                </Column>
              </Table>
              <div style={{ padding: 20 }}>
                <Pagination
                  prev
                  next
                  first
                  last
                  ellipsis
                  boundaryLinks
                  maxButtons={5}
                  size="xs"
                  layout={["total", "-", "limit", "|", "pager", "skip"]}
                  total={count}
                  limitOptions={[10, 20, 30]}
                  limit={perPage}
                  activePage={page}
                  onChangePage={setPage}
                  onChangeLimit={setPerPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contacts;
