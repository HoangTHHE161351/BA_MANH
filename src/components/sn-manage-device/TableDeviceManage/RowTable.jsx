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
      <AppTableCell align="left">{row?.ipTcpip}</AppTableCell>
      <AppTableCell align="left">{row?.description}</AppTableCell>
      <AppTableCell align="center">{row?.status}</AppTableCell>
    </AppTableRow>
  );
};

export default memo(RowTable);
