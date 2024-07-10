import { Button, Grid } from "@mui/material";
import React, { memo, useState } from "react";
import TimeSlotsModalEdit from "./TimeSlotsModalEdit";

const HeaderPageTable = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid flex={1} container justifyContent="flex-end">
        <Button variant="contained" onClick={() => setOpen(true)}>
          Create
        </Button>
      </Grid>
      <TimeSlotsModalEdit open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default memo(HeaderPageTable);
