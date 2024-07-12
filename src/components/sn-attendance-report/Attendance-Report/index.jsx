import React, { useState } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";

const AttendanceReportTableManager = () => {
  const [open, setOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState(null); 
  const [historyLogs, sethistoryLogs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
 

  //Call API here to input data to historyLogs

  
  return (
    <>
      <AppTableLayout
        header={<HeaderTable />}
        isLoading={isFetching}
      >
        {historyLogs.map((row, index) => {
          return (
            <RowTable
              key={index}
              data={row}
              index={index}
              onOpenEdit={() => {
                setRowSelected(row);
                console.log('Selected row:', row); // Log selected row
                setOpen(true);
              }}
            />
          );
        })}
      </AppTableLayout>
      
    </>
  );
};

export default AttendanceReportTableManager;
