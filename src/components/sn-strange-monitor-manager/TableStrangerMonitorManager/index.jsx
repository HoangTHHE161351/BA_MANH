import React, { useState } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";
import { useSelector } from "react-redux";

const TableStrangeMonitorManager = () => {
  const [open, setOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState(null);
  const [isFetching, setIsFetching] = useState(null);
  const [strangeList , setStrangeList ] = useState([]);

  return (
    <>
      <AppTableLayout
        header={<HeaderTable />}
        isLoading={isFetching}
      >
        {/* {strangeList.map((row, index) => {
          const order = (pagination.page - 1) * pagination.size + index + 1;
          return (
            <RowTable
              key={row.id}
              data={row}
              index={order}
              onOpenEdit={() => {
                setRowSelected(row);
                setOpen(true);
              }}
            />
          );
        })} */}
      </AppTableLayout>    
    </>
  );
};

export default TableStrangeMonitorManager;
