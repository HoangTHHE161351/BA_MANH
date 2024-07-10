import React, { useState, useEffect } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";

const SemesterTable = () => {
  // const { semesterList, isFetching, totalData } = useSelector(
  //   (state) => state.semesterReducer
  // );
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [semesterList, setSemesterList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  function getDataList() {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/semester/all-semester?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data semester:", data);
        if (data.code === 200) {
          setSemesterList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // setUserList([]);
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching semester:", error);
        setIsFetching(false);
      });
  }

  useEffect(() => {
    getDataList();
  }, [page, size]);

  return (
    <AppTableLayout
      header={<HeaderTable />}
      isLoading={isFetching}
      totalData={totalData}
    >
      {semesterList?.map((data, index) => (
        <RowTable key={data.id} data={data} order={index + 1} />
      ))}
    </AppTableLayout>
  );
};

export default SemesterTable;
