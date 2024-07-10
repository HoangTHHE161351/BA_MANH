import React, { memo, useState, useEffect, useCallback } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";
import DetailModal from "../DetailModal";

const TableManageStudent = () => {
  const [open, setOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState(null);
  // const { students, isFetching, totalData, pagination } = useSelector(
  //   (state) => state.studentReducer
  // );

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [students, setStudentList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/student/search-student?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data student:", data);
        if (data.code === 200) {
          setStudentList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // Handle the case where data is not as expected
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching student:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [page, size, getDataList]);

  return (
    <>
      <AppTableLayout
        totalData={totalData}
        header={<HeaderTable />}
        isLoading={isFetching}
      >
        {students.map((row, index) => {
          const order = (page - 1) * size + (index + 1);
          return (
            <RowTable
              key={row.id}
              data={row}
              order={order}
              onViewDetail={() => {
                setRowSelected(row);
                setOpen(true);
              }}
            />
          );
        })}
      </AppTableLayout>
      <DetailModal
        data={rowSelected}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default memo(TableManageStudent);
