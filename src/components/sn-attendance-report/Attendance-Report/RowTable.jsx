import React, { memo, useState } from "react";
import { AppTableCell, AppTableRow } from "src/components/Common/TableCommon";
import { Button } from "@mui/material";


const RowTable = ({ data, index }) => {

  return (
    <>
      <AppTableRow>
        <AppTableCell align="center">{index + 1}</AppTableCell>
        {/* <ViewCell /> */}
        <AppTableCell align="left">{data.date}</AppTableCell>
        <AppTableCell align="left">{data.slot}</AppTableCell>
        <AppTableCell align="left">{data.classroom}</AppTableCell>
        <AppTableCell align="left">{data.subject}</AppTableCell>  
        <AppTableCell align="left">{data.lecturer}</AppTableCell>      
        <AppTableCell align="left">{data.attendanceStatus}</AppTableCell>
        <AppTableCell align="left">{data.description}</AppTableCell>       
      </AppTableRow>      
    </>
  );
};

export default memo(RowTable);
