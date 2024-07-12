import { Box, Button, Grid } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearchDebounce } from "src/components/Common";
import { roomActions } from "src/redux-store/store";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

  const [semester, setSemester] = React.useState('');
  const [classroom, setClassroom] = React.useState('');

  const handleChangeSemester = (event) => {
    setSemester(event.target.value);
  };

  const handleChangeClassroom = (event) => {
    setClassroom(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <AppSearchDebounce
          onChangeValue={handleChangeSearchKey}
          fullWidth
          valueInput={searchKey}
          inputProps={{
            placeholder: "Search Class",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControl fullWidth>
          <InputLabel id="semester-label">Semester</InputLabel>
          <Select
            labelId="semester-label"
            value={semester}
            label="Semester"
            onChange={handleChangeSemester}
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
      <Grid item xs={12} sm={3}>
        <FormControl fullWidth>
          <InputLabel id="subject-label">Classroom</InputLabel>
          <Select
            labelId="subject-label"
            value={classroom}
            label="Classroom"
            onChange={handleChangeClassroom}
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
