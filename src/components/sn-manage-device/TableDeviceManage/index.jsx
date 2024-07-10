import React, { memo, useState, useEffect, useCallback } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";

const TableDeviceManage = () => {
  // const { devices, pagination, totalData, isFetching } = useSelector(
  //   (state) => state.deviceReducer
  // );

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [cameraList, setCameraList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/camera/camera?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data Camera:", data);
        if (data.code === 200) {
          setCameraList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // Handle the case where data is not as expected
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching Camera:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [page, size, getDataList]);

  return (
    <AppTableLayout
      totalData={totalData}
      header={<HeaderTable />}
      isLoading={isFetching}
    >
      {cameraList.map((device, index) => {
        const order = (page - 1) * size + index + 1;
        return <RowTable key={device.id} row={device} order={order} />;
      })}
    </AppTableLayout>
  );
};

export default memo(TableDeviceManage);
