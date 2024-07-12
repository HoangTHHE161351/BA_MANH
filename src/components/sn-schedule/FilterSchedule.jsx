import { Button, Grid } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { AppDatePicker } from "../Common";
import { useDispatch, useSelector } from "react-redux";
import { scheduleActions } from "src/redux-store/store";
import dayjs from "dayjs";
import ScheduleModalImport from "./ImportScheduleModal";

const FilterSchedule = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.scheduleReducer);
  const [open, setOpen] = useState(false);

  const handleChangeFilterWithKey = useCallback(
    (key) => (value) => {
      const isoDate = value ? dayjs(value).toISOString() : "";
      dispatch(scheduleActions.changeFilterWithKey({ key, value: isoDate }));
    },
    [dispatch]
  );

  const date = dayjs(filter.date); // Ensure the date is a Day.js object

  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Grid container columnSpacing={2}>
      <Grid item container flexWrap="nowrap" xs={2.4}>
        <AppDatePicker
          label="Date of Schedule"
          value={date}
          onChange={(data) => handleChangeFilterWithKey("date")(data || "")}
        />
      </Grid>
      <Grid flex={1} container justifyContent="flex-end">
        <Button variant="contained" sx={{ backgroundColor: '#4caf50', mx: 2 }} onClick={openModal}>
          Import
        </Button>
      </Grid>
      <ScheduleModalImport isOpen={isOpen} onClose={closeModal} />
    </Grid>
  );
};

export default memo(FilterSchedule);
