import React, { memo } from "react";
import {
  AppTableCell,
  AppTableRow,
  DeleteCell,
  EditCell,
} from "src/components/Common/TableCommon";

const RowTable = ({ order, data, onEdit, onDelete }) => {
  return (
    <AppTableRow>
      <AppTableCell align="center">{order}</AppTableCell>
      <EditCell
        buttonProps={{
          onClick: onEdit,
        }}
      />
      <DeleteCell
        buttonProps={{
          onClick: onDelete,
        }}
      />
      <AppTableCell align="left">{data.className}</AppTableCell>
      <AppTableCell align="left">{data.description}</AppTableCell>
      <AppTableCell align="center">{data.status}</AppTableCell>
    </AppTableRow>
  );
};

export default memo(RowTable);
