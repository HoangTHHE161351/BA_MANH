import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import { FilterTable, TableUserManager } from "src/components/sn-user-manager";
import { userActions } from "src/redux-store/store";

const UserManager = () => {
  const dispatch = useDispatch();
  const { filter, pagination } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(userActions.getUserList({ ...filter, ...pagination }));
  }, [filter, pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(userActions.userReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<FilterTable />}>
      <TableUserManager />
    </AppTablePageLayout>
  );
};

export default UserManager;
