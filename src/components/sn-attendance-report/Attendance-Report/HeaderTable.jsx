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
    id: "room",
    label: "Room",
    align: "left",
  },
  {
    id: "date",
    label: "Date",
    align: "left",
  },
    {
    id: "slot",
    label: "Slot",
    align: "left",
  },
  {
    id: "classroom",
    label: "Classroom",
    align: "left",
  },
  {
    id: "subject",
    label: "Subject",
    align: "left",
  },
  {
    id: "lecturer",
    label: "Lecturer",
    align: "left",
  }, 
  {
    id: "attendanceStatus",
    label: "Attendance Status",
    align: "left",
  },
  {
    id: "description",
    label: "Description",
    align: "left",
  }
];
