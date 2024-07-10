import React, { memo, useState, useEffect, useCallback } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";
import { AppConfirmModal } from "src/components/Common";
import RoomModalEdit from "../TimeSlotsModalEdit";
import useDeleteTimeSlots from "../hooks/useDeleteTimeSlots";

const TimeSlotsTable = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [timeSlotsList, setTimeslotsList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/timeslots/all-timeslot?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data timeslots:", data);
        if (data.code === 200) {
          setTimeslotsList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // setUserList([]);
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching timeslots:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [page, size, getDataList]);

  const handleDeleteTimeSlots = useDeleteTimeSlots();
  const [dataSelected, setDataSelected] = useState(null);
  const [selectDelete, setSelectDelete] = useState(null);

  return (
    <AppTableLayout
      totalData={totalData}
      header={<HeaderTable />}
      isLoading={isFetching}
    >
      {timeSlotsList.map((data, index) => {
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
      <RoomModalEdit
        data={dataSelected}
        open={Boolean(dataSelected)}
        onClose={() => {
          setDataSelected(null);
        }}
      />
      <AppConfirmModal
        modalTitleProps={{
          title: "You are about to delete this time slot. Are you sure?",
        }}
        open={Boolean(selectDelete)}
        onCancel={() => setSelectDelete(null)}
        onClose={() => setSelectDelete(null)}
        onConfirm={() => {
          handleDeleteTimeSlots(selectDelete);
          setSelectDelete(null);
        }}
      />
    </AppTableLayout>
  );
};

export default memo(TimeSlotsTable);
