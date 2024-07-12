import React, { memo } from "react";
import {
  AppTableCell,
  AppTableRow,
  DeleteCell,
  EditCell,
} from "src/components/Common/TableCommon";

const RowTable = ({ row, order }) => {
  return (
    <AppTableRow>
      <AppTableCell align="center">{order}</AppTableCell>
      <EditCell />
      <DeleteCell />
      <AppTableCell align="left">{row?.port}</AppTableCell>
      <AppTableCell align="left">{row?.ip}</AppTableCell>
      <AppTableCell align="left">{row?.roomName}</AppTableCell>
      <AppTableCell align="left">{row?.position}</AppTableCell>
      <AppTableCell align="left">{row?.type}</AppTableCell>
      <AppTableCell align="center">{row?.status}</AppTableCell>
    </AppTableRow>
  );
};

export default memo(RowTable);
