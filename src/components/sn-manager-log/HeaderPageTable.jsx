import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearchDebounce } from "src/components/Common";
import { roomActions } from "src/redux-store/store";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const HeaderPageTable = () => {
  const dispatch = useDispatch();
  const { searchKey } = useSelector((state) => state.classesReducer);

  const handleChangeSearchKey = useCallback(
    (value) => {
      dispatch(roomActions.changeSearchKey(value));
    },
    [dispatch]
  );

  const [room, setRoom] = React.useState('');
  const [classroom, setClassroom] = React.useState('');

  const handleChange = (event) => {
    setRoom(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sm={4} md={2}>
        <AppSearchDebounce
          onChangeValue={handleChangeSearchKey}
          fullWidth
          valueInput={searchKey}
          inputProps={{
            placeholder: "Search",
          }}
        />
      </Grid>
      <Grid item xs={10} ml={2} sm={2} mt={-1}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Choose Date" />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} sm={1} md={1}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-readonly-label">Room</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={room}
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
      <Grid item xs={2} sm={3} md={1.3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-readonly-label">Classroom</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={classroom}
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
      {/* <RoomModalEdit open={open} onClose={() => setOpen(false)} /> */}
    </Grid>
  );
};

export default memo(HeaderPageTable);
