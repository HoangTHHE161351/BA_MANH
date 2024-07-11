import React, { memo } from "react";
import { AppHeaderCell, AppIndexCell } from "src/components/Common/TableCommon";

const HeaderTable = () => {
  return (
    <>
      <AppIndexCell />
      {HeaderCell.map((column) => {
        return (
          <AppHeaderCell
            key={column.id}
            align={column.align}
            className={column.className}
          >
            {column.label}
          </AppHeaderCell>
        );
      })}
    </>
  );
};

export default memo(HeaderTable);

const HeaderCell = [
  {
    id: "image",
    label: "Image",
    align: "center",
  },
  {
    id: "device",
    label: "Device",
    align: "left",
  },
  {
    id: "room",
    label: "Room",
    align: "left",
  },
  {
    id: "checkIn",
    label: "Check In",
    align: "left",
  },
  {
    id: "checkOut",
    label: "Check Out",
    align: "left",
  },
];
