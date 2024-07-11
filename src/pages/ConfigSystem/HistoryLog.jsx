import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import HeaderPageTable from "src/components/sn-manager-log/HeaderPageTable";
import { roomActions } from "src/redux-store/store";
import HistoryLogTableManager from "src/components/sn-manager-log/Table-log";

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
      <HistoryLogTableManager />
    </AppTablePageLayout>
  );
};

export default HistoryLog;
