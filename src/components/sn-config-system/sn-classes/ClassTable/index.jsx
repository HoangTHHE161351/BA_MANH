import React, { memo, useState, useEffect, useCallback } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";
import ClassModalEdit from "../ClassModalEdit";
import { AppConfirmModal } from "src/components/Common";
import useDeleteClass from "../hooks/useDeleteClass";

const ClassTable = () => {
  const [dataSelected, setDataSelected] = useState(null);
  const [dataDelete, setDataDelete] = useState(null);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [classesList, setClassroomList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/classroom/all-classroom?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data classroom:", data);
        if (data.code === 200) {
          setClassroomList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // Handle the case where data is not as expected
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching classroom:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [page, size, getDataList]);

  const handleDeleteClass = useDeleteClass();

  return (
    <AppTableLayout
      header={<HeaderTable />}
      isLoading={isFetching}
      totalData={totalData}
    >
      {classesList.map((item, index) => {
        const order = (page - 1) * size + (index + 1);
        return (
          <RowTable
            key={item.id}
            data={item}
            order={order}
            onEdit={() => setDataSelected(item)}
            onDelete={() => setDataDelete(item.id)}
          />
        );
      })}
      <ClassModalEdit
        open={Boolean(dataSelected)}
        onClose={() => setDataSelected(null)}
        data={dataSelected}
      />
      <AppConfirmModal
        open={Boolean(dataDelete)}
        onCancel={() => setDataDelete(null)}
        onClose={() => setDataDelete(null)}
        onConfirm={() => {
          handleDeleteClass(dataDelete);
          setDataDelete(null);
        }}
        modalTitleProps={{
          title: "Do you confirm to delete this class?",
        }}
      />
    </AppTableLayout>
  );
};

export default memo(ClassTable);
