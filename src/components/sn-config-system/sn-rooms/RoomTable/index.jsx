import React, { memo, useState, useEffect, useCallback } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";
import { AppConfirmModal } from "src/components/Common";
import useDeleteRoom from "../hooks/useDeleteRoom";
import RoomModalEdit from "../RoomModalEdit";

const TimeSlotsTable = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [roomList, setRoomList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/room/all-rooms?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data room:", data);
        if (data.code === 200) {
          setRoomList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // Handle the case where data is not as expected
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching room:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [page, size, getDataList]);

  const handleDeleteRoom = useDeleteRoom();
  const [dataSelected, setDataSelected] = useState(null);
  const [selectDelete, setSelectDelete] = useState(null);

  return (
    <AppTableLayout
      totalData={totalData}
      header={<HeaderTable />}
      isLoading={isFetching}
    >
      {roomList.map((data, index) => {
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
          title: "You are about to delete this room. Are you sure?",
        }}
        open={Boolean(selectDelete)}
        onCancel={() => setSelectDelete(null)}
        onClose={() => setSelectDelete(null)}
        onConfirm={() => {
          handleDeleteRoom(selectDelete);
          setSelectDelete(null);
        }}
      />
    </AppTableLayout>
  );
};

export default memo(TimeSlotsTable);
