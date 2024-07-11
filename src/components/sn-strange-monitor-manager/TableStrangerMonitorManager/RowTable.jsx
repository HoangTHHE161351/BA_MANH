import React, { memo } from "react";
import {
  AppTableCell,
  AppTableRow,
  EditCell,
} from "src/components/Common/TableCommon";

const RowTable = ({ data, index, onOpenEdit }) => {
  return (
    <AppTableRow>
      <AppTableCell align="center">{index}</AppTableCell>
      <AppTableCell align="left">{data.image}</AppTableCell>
      <AppTableCell align="left">{data.device}</AppTableCell>
      <AppTableCell align="left">{data.room}</AppTableCell>
      <AppTableCell align="right">{data.checkin}</AppTableCell>
      <AppTableCell align="right">{data.checkout}</AppTableCell>
    </AppTableRow>
  );
};

export default memo(RowTable);
