import { Button, Grid } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearchDebounce } from "src/components/Common";
import { classesActions } from "src/redux-store/store";

const HeaderPageTable = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { searchKey } = useSelector((state) => state.classesReducer);

  const handleChangeSearchKey = useCallback(
    (value) => {
      dispatch(classesActions.changeSearchKey(value));
    },
    [dispatch]
  );

  const [isOpen, setIsOpen] = React.useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
    </Grid>
  );
};

export default memo(HeaderPageTable);
