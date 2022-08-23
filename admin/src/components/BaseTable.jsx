import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Table,
  Pagination,
  Stack,
  Placeholder,
  Loader,
  Button,
  Input,
  InputGroup,
  Whisper,
  Tooltip,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
const { Column, HeaderCell, Cell } = Table;
import "../style/BaseTable.css";

const BaseTable = (props) => {
  const { endpoint = "/contacts", children, height = 420, leftMarkup } = props;
  const [data, setContacts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      setLoaded(false);
      const res = await axios.get(
        `/wp-json/mrm/v1${endpoint}?${
          search.length >= 3 ? "search=" + search + "&" : ""
        }per-page=${perPage}&page=${page}`
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
  }, [perPage, page, refresh]);

  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };
  const styles = {
    width: 300,
  };
  return (
    <>
      <div>
        <div>
          <Stack
            spacing={10}
            justifyContent="flex-end"
            alignItems="center"
            style={{ margin: 10 }}
          >
            <Stack
              spacing={10}
              justifyContent="flex-start"
              alignItems="center"
              style={{ margin: 10 }}
            >
              {leftMarkup}
            </Stack>
            <InputGroup style={styles}>
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>
              <Whisper
                trigger="focus"
                placement="top"
                speaker={
                  <Tooltip>
                    Search Terms should at least have 3 characters
                  </Tooltip>
                }
              >
                <Input value={search} onChange={setSearch} />
              </Whisper>
            </InputGroup>
            <Button onClick={toggleRefresh} appearance="primary">
              {search.length >= 3 ? "Search" : "Refresh"}
            </Button>
          </Stack>
        </div>
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
        <div className="mrm-spacing">
          {data.length == 0 && loaded && (
            <div>
              Did not find any {endpoint.replace("/", "")} in the database.
            </div>
          )}
        </div>
        <div>
          {data.length > 0 && (
            <>
              <Table height={height} data={data}>
                {children}
              </Table>
              <div style={{ padding: 20, margin: 20 }}>
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
                  onChangeLimit={(value) => {
                    setPage(1);
                    setPerPage(value);
                  }}
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
