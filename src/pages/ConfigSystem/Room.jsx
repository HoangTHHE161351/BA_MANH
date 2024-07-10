import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import HeaderPageTable from "src/components/sn-config-system/sn-rooms/HeaderPageTable";
import RoomTable from "src/components/sn-config-system/sn-rooms/RoomTable";
import { roomActions } from "src/redux-store/store";

const Room = () => {
  const dispatch = useDispatch();

  const { searchKey, pagination } = useSelector((state) => state.roomReducer);
  useEffect(() => {
    dispatch(roomActions.getRoomList({ search: searchKey, ...pagination }));
  }, [searchKey, pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(roomActions.roomReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<HeaderPageTable />}>
      <RoomTable />
    </AppTablePageLayout>
  );
};

export default Room;
