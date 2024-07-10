import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import {
  HeaderTablePage,
  SemesterTable,
} from "src/components/sn-config-system/sn-semester";
import { semesterActions } from "src/redux-store/store";

const Semester = () => {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state.semesterReducer);

  useEffect(() => {
    dispatch(semesterActions.getSemesterListRequest(pagination));
  }, [pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(semesterActions.semesterReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<HeaderTablePage />}>
      <SemesterTable />
    </AppTablePageLayout>
  );
};

export default Semester;
