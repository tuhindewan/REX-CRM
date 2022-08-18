import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Pagination, Stack, Placeholder, Loader } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const BaseTable = (props) => {
  const { endpoint = "/contacts", children, height = 420 } = props;
  const [data, setContacts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getData() {
      setLoaded(false);
      const res = await axios.get(
        `/wp-json/mrm/v1${endpoint}?per-page=${perPage}&page=${page}`
      );
      const resJson = res.data;
      const data = resJson.data.data;
      const count = resJson.data.count;
      console.log(data);
      setContacts(data);
      setCount(count);
      setLoaded(true);
    }
    getData();
  }, [perPage, page]);
  return (
    <>
      <div>
        <div>
          {data.length == 0 && !loaded && (
            <Placeholder.Paragraph
              style={{ marginTop: 30 }}
              graph="square"
              active={true}
              rows={20}
            />
          )}
        </div>
        <div>
          {data.length == 0 && loaded && (
            <div>
              No {endpoint.replace("/", "")} in the database. You can start by
              creating new{" "}
              {endpoint.replace("/", "").substr(0, endpoint.length - 2)}.
            </div>
          )}
        </div>
        <div>
          {data.length > 0 && (
            <>
              <Table height={height} data={data}>
                {children}
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BaseTable;
