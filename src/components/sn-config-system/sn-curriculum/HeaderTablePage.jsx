import { Button, Grid } from "@mui/material";
import React, { memo, useCallback } from "react";
import AppModalEdit from "./CurriculumModalEdit";
import { AppSearchDebounce } from "src/components/Common";
import { useDispatch, useSelector } from "react-redux";
import { curriculumActions } from "src/redux-store/store";

const HeaderTablePage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const { searchKey } = useSelector((state) => state.curriculumReducer);

  const handleChangeSearchKey = useCallback(
    (value) => {
      dispatch(curriculumActions.changeSearchKey(value));
    },
    [dispatch]
  );

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={2.4}>
        <AppSearchDebounce
          onChangeValue={handleChangeSearchKey}
          fullWidth
          valueInput={searchKey}
          inputProps={{
            placeholder: "Search Curriculum",
          }}
        />
      </Grid>
      <Grid flex={1} container justifyContent="flex-end">
        <Button variant="contained" onClick={() => setOpen(true)}>
          Create
        </Button>
      </Grid>
      <AppModalEdit open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
};

export default memo(HeaderTablePage);
