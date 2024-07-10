import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import ClassTable from "src/components/sn-config-system/sn-classes/ClassTable";
import HeaderPageTable from "src/components/sn-config-system/sn-classes/HeaderPageTable";
import { classesActions } from "src/redux-store/store";

const Classes = () => {
  const dispatch = useDispatch();

  const { searchKey, pagination } = useSelector(
    (state) => state.classesReducer
  );
  useEffect(() => {
    dispatch(
      classesActions.getClassesList({ search: searchKey, ...pagination })
    );
  }, [searchKey, pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(classesActions.classReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<HeaderPageTable />}>
      <ClassTable />
    </AppTablePageLayout>
  );
};

export default Classes;
