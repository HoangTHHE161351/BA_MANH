import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AppSearchDebounce } from "src/components/Common";
import { classesActions } from "src/redux-store/store";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Correct import

const HeaderPageTable = () => {
  const dispatch = useDispatch();
  const { searchKey } = useSelector((state) => state.classesReducer);
  const [room, setRoom] = React.useState('');

  const handleChangeSearchKey = useCallback(
    (value) => {
      dispatch(classesActions.changeSearchKey(value));
    },
    [dispatch]
  );

  const handleChange = (event) => {
    setRoom(event.target.value);
  };

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={2} mt={1}>
        <AppSearchDebounce
          onChangeValue={handleChangeSearchKey}
          fullWidth
          valueInput={searchKey}
          inputProps={{
            placeholder: "Search Class",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Choose Date" />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={1} mt={-0.9}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-readonly-label">Room</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={room}
            label="Room"
            onChange={handleChange}
            inputProps={{ readOnly: true }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default HeaderPageTable;
