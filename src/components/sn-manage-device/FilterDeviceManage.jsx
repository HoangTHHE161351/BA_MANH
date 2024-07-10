import { Button, Grid } from "@mui/material";
import React from "react";
import { AppSearchDebounce } from "../Common";
import DeviceAddModal from "./DeviceAddModal";

const FilterDeviceManage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={2.4}>
        <AppSearchDebounce
          // onChangeValue={handleChangeFilterWithKey("searchKey")}
          fullWidth
          label="Search"
          // valueInput={filter.searchKey}
        />
      </Grid>
      <Grid item container justifyContent="flex-end" flex={1}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Create
        </Button>
      </Grid>
      <DeviceAddModal open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
};

export default FilterDeviceManage;
