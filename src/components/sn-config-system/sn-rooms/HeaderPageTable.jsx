import { Button, Grid } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearchDebounce } from "src/components/Common";
import { roomActions } from "src/redux-store/store";
import RoomModalEdit from "./RoomModalEdit";

const HeaderPageTable = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { searchKey } = useSelector((state) => state.classesReducer);

  const handleChangeSearchKey = useCallback(
    (value) => {
      dispatch(roomActions.changeSearchKey(value));
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
            placeholder: "Search Class",
          }}
        />
      </Grid>
      <Grid flex={1} container justifyContent="flex-end">
        <Button variant="contained" onClick={() => setOpen(true)}>
          Create
        </Button>
      </Grid>
      <RoomModalEdit open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
};

export default memo(HeaderPageTable);
