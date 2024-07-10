import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import CurriculumTable from "src/components/sn-config-system/sn-curriculum/CurriculumTable";
import HeaderTablePage from "src/components/sn-config-system/sn-curriculum/HeaderTablePage";
import { curriculumActions } from "src/redux-store/store";

const Curriculum = () => {
  const dispatch = useDispatch();
  const { searchKey, pagination } = useSelector(
    (state) => state.curriculumReducer
  );

  useEffect(() => {
    dispatch(
      curriculumActions.getCurriculumList({ search: searchKey, ...pagination })
    );
  }, [dispatch, searchKey, pagination]);

  useEffect(() => {
    return () => {
      dispatch(curriculumActions.curriculumReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<HeaderTablePage />}>
      <CurriculumTable />
    </AppTablePageLayout>
  );
};

export default Curriculum;
