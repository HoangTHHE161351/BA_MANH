import { Grid } from "@mui/material";
import React, { memo, useCallback } from "react";
import { AppDatePicker } from "../Common";
import { useDispatch, useSelector } from "react-redux";
import { scheduleActions } from "src/redux-store/store";
import dayjs from "dayjs";

const FilterSchedule = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.scheduleReducer);

  const handleChangeFilterWithKey = useCallback(
    (key) => (value) => {
      const isoDate = value ? dayjs(value).toISOString() : "";
      dispatch(scheduleActions.changeFilterWithKey({ key, value: isoDate }));
    },
    [dispatch]
  );

  const date = dayjs(filter.date); // Ensure the date is a Day.js object

  return (
    <Grid container columnSpacing={2}>
      <Grid item container flexWrap="nowrap" xs={2.4}>
        <AppDatePicker
          label="Date of Schedule"
          value={date}
          onChange={(data) => handleChangeFilterWithKey("date")(data || "")}
        />
      </Grid>
    </Grid>
  );
};

export default memo(FilterSchedule);
