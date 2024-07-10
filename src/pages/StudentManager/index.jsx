import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import {
  FilterTable,
  TableManageStudent,
} from "src/components/sn-manage-student";
import { curriculumActions, studentActions } from "src/redux-store/store";

const StudentManager = () => {
  const dispatch = useDispatch();
  const { filter, pagination } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    dispatch(studentActions.getStudentList({ ...filter, ...pagination }));
  }, [dispatch, filter, pagination]);

  useEffect(() => {
    dispatch(curriculumActions.getCurriculumList({}));
    return () => {
      dispatch(studentActions.studentReset());
      dispatch(curriculumActions.curriculumReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<FilterTable />}>
      <TableManageStudent />
    </AppTablePageLayout>
  );
};

export default StudentManager;
