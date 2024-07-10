import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import {
  FilterDeviceManage,
  TableDeviceManage,
} from "src/components/sn-manage-device";
import { deviceActions } from "src/redux-store/store";

const DeviceManager = () => {
  const dispatch = useDispatch();

  const { pagination } = useSelector((state) => state.deviceReducer);

  useEffect(() => {
    dispatch(deviceActions.getDeviceList(pagination));
  }, [pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(deviceActions.deviceReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<FilterDeviceManage />}>
      <TableDeviceManage />
    </AppTablePageLayout>
  );
};

export default DeviceManager;
