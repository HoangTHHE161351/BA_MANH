import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import HeaderPageTable from "src/components/sn-attendance-manager/HeaderPageTable";
import { roomActions } from "src/redux-store/store";
import AttendanceTableManager from "src/components/sn-attendance-manager/AttendanceTable";

const HistoryLog = () => {
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
      <AttendanceTableManager />
    </AppTablePageLayout>
  );
};

export default HistoryLog;
