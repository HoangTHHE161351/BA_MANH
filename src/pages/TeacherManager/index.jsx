import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import TableTeacherManager from "src/components/sn-teacher-manager/TableTeacherManager";
import { FilterTable } from "src/components/sn-teacher-manager";
import { teacherActions } from "src/redux-store/store";

const TeacherManager = () => {
  const dispatch = useDispatch();
  const { filter, pagination } = useSelector((state) => state.teacherReducer);

  useEffect(() => {
    dispatch(teacherActions.getTeacherList({ ...filter, ...pagination, size: 30 }));
  }, [filter, pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(teacherActions.teacherReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<FilterTable />}>
      <TableTeacherManager />
    </AppTablePageLayout>
  );
};

export default TeacherManager;
