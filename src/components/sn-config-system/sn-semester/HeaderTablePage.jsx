import { Button, Grid } from "@mui/material";
import React, { memo } from "react";
import AddSemesterModal from "./AddSemesterModal";

const HeaderTablePage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Grid container justifyContent="flex-end">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Create
      </Button>
      <AddSemesterModal open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
};

export default memo(HeaderTablePage);
