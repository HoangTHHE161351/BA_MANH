import React, { memo, useState, useEffect, useCallback } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";
import { AppConfirmModal } from "src/components/Common";
import useDeleteCurriculum from "../hooks/useDeleteCurriculum";
import CurriculumModalEdit from "../CurriculumModalEdit";
//
const CurriculumTable = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [curriculumList, setCurriculumList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/curriculum/all-curriculum?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data curriculum:", data);
        if (data.code === 200) {
          setCurriculumList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // Handle the case where data is not as expected
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching curriculum:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [page, size, getDataList]);

  const handleDeleteCurriculum = useDeleteCurriculum();
  const [dataSelected, setDataSelected] = useState(null);
  const [selectDelete, setSelectDelete] = useState(null);

  return (
    <AppTableLayout
      totalData={totalData}
      header={<HeaderTable />}
      isLoading={isFetching}
    >
      {curriculumList.map((data, index) => {
        const order = (page - 1) * size + index + 1;
        return (
          <RowTable
            key={data.id}
            data={data}
            order={order}
            onEdit={() => setDataSelected(data)}
            onDelete={() => setSelectDelete(data.id)}
          />
        );
      })}
      <CurriculumModalEdit
        data={dataSelected}
        open={Boolean(dataSelected)}
        onClose={() => {
          setDataSelected(null);
        }}
      />
      <AppConfirmModal
        modalTitleProps={{
          title: "You are about to delete this curriculum. Are you sure?",
        }}
        open={Boolean(selectDelete)}
        onCancel={() => setSelectDelete(null)}
        onClose={() => setSelectDelete(null)}
        onConfirm={() => {
          handleDeleteCurriculum(selectDelete);
          setSelectDelete(null);
        }}
      />
    </AppTableLayout>
  );
};

export default memo(CurriculumTable);
