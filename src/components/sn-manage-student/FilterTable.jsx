import { Button, Grid, Stack } from "@mui/material";
import React, { memo, useCallback } from "react";
import { AppSearchDebounce } from "../Common";
import { useDispatch, useSelector } from "react-redux";
import { studentActions } from "src/redux-store/store";
import useExportStudent from "./hooks/useExportStudent";
import AppAutoCompleteMUI from "../Common/AppAutoCompleteMUI";

const FilterTable = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.studentReducer);
  const { curriculumList } = useSelector((state) => state.curriculumReducer);

  const handleExportExcel = useExportStudent();

  const handleChangeFilterWithKey = useCallback(
    (key) => (value) => {
      dispatch(
        studentActions.changeFilterWithKey({
          key,
          value,
        })
      );
    },
    [dispatch]
  );

  console.log(curriculumList);

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={2.4}>
        <AppSearchDebounce
          onChangeValue={handleChangeFilterWithKey("search")}
          placeholder="Search"
          valueInput={filter.search}
        />
      </Grid>
      <Grid item xs={2.4}>
        <AppAutoCompleteMUI
          label="Curriculum Name"
          options={covertToList(curriculumList)}
          value={filter?.curriculumName}
          onChange={(_, data) =>
            handleChangeFilterWithKey("curriculumName")(data)
          }
        />
      </Grid>
      <Grid item container flex={1} justifyContent={"flex-end"}>
        <Stack direction={"row"} spacing={1}>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => handleExportExcel(filter, "student_export")}
          >
            Export Excel
          </Button>
          <Button
            variant="contained"
            color="success"
            size="small"
            // onClick={() => setOpen(true)}
          >
            Create
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default memo(FilterTable);

const covertToList = (data) => {
  return data?.map((item) => {
    return item.curriculumName;
  });
};
